import { cors } from "cors";

// Hardcoded usage stats data
const usageStats = [
  { id: 1, service: "Authentication", requests: 15234, avgResponseTime: 45, successRate: 99.8 },
  { id: 2, service: "Database", requests: 28901, avgResponseTime: 120, successRate: 99.5 },
  { id: 3, service: "File Storage", requests: 8765, avgResponseTime: 230, successRate: 98.9 },
  { id: 4, service: "API Gateway", requests: 42156, avgResponseTime: 35, successRate: 99.9 },
  { id: 5, service: "Cache", requests: 67890, avgResponseTime: 12, successRate: 99.99 }
];

const server = Bun.serve({
  port: 3001,
  fetch(req) {
    const url = new URL(req.url);

    // CORS headers
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
    };

    // Handle CORS preflight
    if (req.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    // Health check endpoint
    if (url.pathname === "/health") {
      return new Response(
        JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }),
        { headers }
      );
    }

    // Usage stats endpoint
    if (url.pathname === "/api/stats") {
      return new Response(
        JSON.stringify({ data: usageStats }),
        { headers }
      );
    }

    // 404 for unknown routes
    return new Response(
      JSON.stringify({ error: "Not found", message: url.pathname }),
      { status: 404, headers }
    );
  }
});

console.log(`🚀 API Server running at http://localhost:${server.port}`);
console.log(`📊 Stats endpoint: http://localhost:${server.port}/api/stats`);
