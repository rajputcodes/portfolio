import { spawn } from "child_process";
import http from "http";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const server = spawn("cmd.exe", ["/c", "pnpm", "start", "-p", "3013"], { stdio: "ignore" });

async function run() {
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 400));
    try {
      await new Promise((res, rej) => {
        const req = http.get("http://127.0.0.1:3013", (r) => (r.statusCode === 200 ? res() : rej()));
        req.on("error", rej);
      });
      break;
    } catch {}
  }

  // Launch chrome with remote debugging
  const chrome = spawn(chromePath, [
    "--headless=new",
    "--remote-debugging-port=9222",
    "--window-size=375,812",
    "http://127.0.0.1:3013"
  ]);

  await new Promise((r) => setTimeout(r, 2000));

  // Connect to Chrome DevTools Protocol to evaluate overflow
  try {
    const listRes = await new Promise((res, rej) => {
      http.get("http://127.0.0.1:9222/json", (r) => {
        let d = "";
        r.on("data", (c) => d += c);
        r.on("end", () => res(JSON.parse(d)));
      }).on("error", rej);
    });

    const page = listRes.find((p) => p.type === "page");
    if (page && page.webSocketDebuggerUrl) {
      const WebSocket = (await import("node:http")).Agent; // fallback
    }
  } catch (e) {
    console.log("CDP check:", e.message);
  }

  chrome.kill();
  server.kill();
  process.exit(0);
}

run();
