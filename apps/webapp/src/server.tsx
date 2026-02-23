import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    try {
      // Fetch data from API
      const response = await fetch("http://localhost:3001/api/stats");
      const data = await response.json();

      // Render with data
      const html = renderToString(<App stats={data.data} />);

      return new Response(html, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    } catch (error) {
      // Render with error
      const html = renderToString(
        <App stats={[]} error={error instanceof Error ? error.message : "Failed to fetch stats"} />
      );

      return new Response(html, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }
  },
});

console.log(`🌐 Webapp running at http://localhost:${server.port}`);
