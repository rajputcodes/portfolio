import { spawn } from "child_process";
import http from "http";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const server = spawn("cmd.exe", ["/c", "pnpm", "start", "-p", "3012"], { stdio: "ignore" });

async function run() {
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 400));
    try {
      await new Promise((res, rej) => {
        const req = http.get("http://127.0.0.1:3012", (r) => (r.statusCode === 200 ? res() : rej()));
        req.on("error", rej);
      });
      break;
    } catch {}
  }

  // Probe using chrome remote debugging or curl
  // Actually, we can fetch HTML and check or run headless Chrome with console logging!
  server.kill();
  process.exit(0);
}

run();
