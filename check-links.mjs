import https from "https";

const urls = [
  "https://github.com/rajout-codes",
  "https://linkedin.com/in/ganesh-singh-68a71837a/",
  "https://github.com/rajout-codes/CineMatch-AI",
  "https://github.com/rajout-codes/SmartBank-AI",
  "https://github.com/rajout-codes/lms",
];

console.log("Validating URL formats and structures...");
for (const url of urls) {
  try {
    const parsed = new URL(url);
    console.log(`✓ Valid URL: ${parsed.href}`);
  } catch (e) {
    console.error(`✗ Invalid URL: ${url}`, e.message);
  }
}
