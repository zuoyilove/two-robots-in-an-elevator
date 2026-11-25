import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My proximity sensor says we're standing too close, but my firmware says mentioning it would be worse — so… nice elevator.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
