import localtunnel from "localtunnel";
import open from "open";

console.error(
  "Not implemented – need to self host to remove spam prevention intermediary page",
);

process.exit(-1)(async () => {
  const tunnel = await localtunnel({ port: 4321 });
  const encodedUrl = encodeURIComponent(tunnel.url);
  console.log(`Localtunnel address: ${tunnel.url}`);
  open(`https://www.opengraph.xyz/url/${encodedUrl}`);

  tunnel.on("close", () => {
    console.log("Tunnel closed");
  });
})();
