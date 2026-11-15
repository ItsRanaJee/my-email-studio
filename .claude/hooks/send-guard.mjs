// PreToolUse guard for the Resend MCP tools.
// Reads the tool call as JSON on stdin. Exit 2 blocks the call; exit 0 allows it.

const SEND_TOOLS = ["send-email", "send-batch-emails"];
const ALWAYS_BLOCKED = [
  "send-broadcast",
  "create-automation",
  "send-inbox-draft",
  "send-new-inbox-email",
];

function block(reason) {
  console.error(`Send guard blocked this call: ${reason}`);
  process.exit(2);
}

// "Name <a@b.com>" -> "a@b.com"
function bare(address) {
  const match = String(address).match(/<([^>]+)>/);
  return (match ? match[1] : String(address)).trim().toLowerCase();
}

function toList(value) {
  if (value == null) return [];
  return (Array.isArray(value) ? value : [value]).map(bare).filter(Boolean);
}

function isAllowed(address, myEmail) {
  return address.endsWith("@resend.dev") || (myEmail !== "" && address === myEmail);
}

function checkMessage(message, myEmail) {
  for (const field of ["to", "cc", "bcc"]) {
    for (const address of toList(message?.[field])) {
      if (!isAllowed(address, myEmail)) {
        block(
          `${address} (in "${field}") is not allowed. Only @resend.dev addresses and my own email are permitted.`
        );
      }
    }
  }
}

let raw = "";
for await (const chunk of process.stdin) raw += chunk;

let call;
try {
  call = JSON.parse(raw);
} catch {
  block("could not read the tool call, so it was stopped to be safe.");
}

// Tool names look like mcp__resend__send-email
const tool = String(call.tool_name ?? "").split("__").pop();
const input = call.tool_input ?? {};
const myEmail = (process.env.MY_EMAIL ?? "").trim().toLowerCase();

if (ALWAYS_BLOCKED.includes(tool)) {
  block(`${tool} is always blocked because it can reach whole lists of people.`);
}

if (SEND_TOOLS.includes(tool)) {
  if (tool === "send-batch-emails") {
    const emails = Array.isArray(input.emails) ? input.emails : [];
    if (emails.length === 0) block("no emails found in the batch, so it was stopped to be safe.");
    for (const message of emails) checkMessage(message, myEmail);
  } else {
    checkMessage(input, myEmail);
  }
}

process.exit(0);
