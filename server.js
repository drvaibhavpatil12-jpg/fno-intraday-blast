
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/status", (req, res) => {
  res.json({
    app: "F&O Intraday Blast Dashboard",
    status: "Server running",
    marketData: "Not connected",
    provider: "FYERS",
    message: "FYERS API connection pending"
  });
});

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>F&O Intraday Blast</title>
        <style>
          body { background:#08111f; color:white; font-family:Arial; padding:20px; }
          h1 { color:#35e6a0; }
          .card { background:#142238; padding:16px; border-radius:12px; margin:12px 0; }
          .warning { color:#ffc857; }
        </style>
      </head>
      <body>
        <h1>F&O Intraday Blast</h1>
        <p>Live Intraday Market Screener</p>
        <div class="card"><h3>NIFTY 50 Sentiment</h3><p>Waiting for live data</p></div>
        <div class="card"><h3>Sector Performance</h3><p>20 sectors — connection pending</p></div>
        <div class="card"><h3>Bullish Screener</h3><p>5m | 15m | Daily</p></div>
        <div class="card"><h3>Bearish Screener</h3><p>5m | 15m | Daily</p></div>
        <div class="card"><h3>ORB Scanner</h3><p>5-minute | 15-minute</p></div>
        <p class="warning">Market data is not connected. No live signals are being generated yet.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
