const startTime = Date.now();

function printWatermark() {
  const uptimeInSeconds = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log("[1m[36m╔════════════════════════════════════════════╗");
  console.log("[1m[36m║                                            ║");
  console.log("[1m[36m            👑 ALL IN ONE BOT     ");
  console.log("[1m[36m            👑 Authorization : SERVER BASED    ");
  console.log("[1m[36m            💡 Version: Latest@ v1.0");
  console.log("[1m[36m            📅 Uptime: " + uptimeInSeconds + 's');
  console.log("[1m[36m            🚀 Powered by NitrixEXE & kronixx.");
  console.log("[1m[36m║                                            ║");
  console.log("[1m[36m╚════════════════════════════════════════════╝[0m");
}

module.exports = {
  printWatermark: printWatermark
};
