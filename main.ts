// Monday Morning Punchlines — make.fun bounty entry.
// Writes the single Monday-morning joke (200 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the setup — Monday 6 AM, the agent
// easing me into the week by reading 214 unread weekend emails — then the
// reversal, booked by the agent itself: my breakdown, 9:15, after standup.
const SETUP =
  "Monday morning, 6 AM, I asked my agent to ease me gently into the week, so it read all 214 unread weekend emails, ranked them by dread, ";
const PUNCH = "and booked my nervous breakdown for 9:15, right after standup.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 200; // chars — the gate caps the file at 200 (this kit's RULES.txt)

function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();

