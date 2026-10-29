import { spawn } from "child_process";
import http from "http";

console.log("Starting server probe test...");

const server = spawn("cmd.exe", ["/c", "pnpm", "start", "-p", "3005"], {
  cwd: process.cwd(),
  stdio: "pipe",
});

let serverReady = false;

server.stdout.on("data", (data) => {
  const msg = data.toString();
  // console.log("[server stdout]", msg);
  if (msg.includes("Ready") || msg.includes("http://") || msg.includes("3005")) {
    serverReady = true;
  }
});

server.stderr.on("data", (data) => {
  console.error("[server stderr]", data.toString());
});

async function runCheck() {
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 500));
    try {
      const res = await new Promise((resolve, reject) => {
        const req = http.get("http://127.0.0.1:3005", (response) => {
          let body = "";
          response.on("data", (chunk) => (body += chunk));
          response.on("end", () => resolve({ status: response.statusCode, body }));
        });
        req.on("error", reject);
      });

      console.log(`HTTP Status: ${res.status}`);
      console.log(`Contains Ganesh Singh: ${res.body.includes("Ganesh Singh")}`);
      console.log(`Contains CineMatch AI: ${res.body.includes("CineMatch AI")}`);
      console.log(`Contains SmartBank AI: ${res.body.includes("SmartBank AI")}`);
      console.log(`Contains Parul University: ${res.body.includes("Parul University")}`);
      console.log(`Contains AWS Machine Learning: ${res.body.includes("AWS Machine Learning")}`);
      console.log(`Page length: ${res.body.length} bytes`);

      server.kill();
      process.exit(0);
    } catch {
      // wait and retry
    }
  }

  console.error("Timeout waiting for server");
  server.kill();
  process.exit(1);
}

runCheck();

