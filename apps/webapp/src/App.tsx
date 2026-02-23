import React from "react";

interface Stat {
  id: number;
  service: string;
  requests: number;
  avgResponseTime: number;
  successRate: number;
}

interface AppProps {
  stats: Stat[];
  error?: string;
}

export default function App({ stats, error }: AppProps) {
  return (
    <html>
      <head>
        <title>Usage Stats Dashboard</title>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 2rem;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          h1 {
            color: white;
            font-size: 2.5rem;
            margin-bottom: 2rem;
            text-align: center;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          }

          .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            overflow: hidden;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          thead {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }

          th {
            padding: 1rem;
            text-align: left;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.875rem;
            letter-spacing: 0.05em;
          }

          td {
            padding: 1rem;
            border-bottom: 1px solid #e5e7eb;
          }

          tbody tr:hover {
            background-color: #f9fafb;
          }

          tbody tr:last-child td {
            border-bottom: none;
          }

          .error {
            text-align: center;
            padding: 3rem;
            color: white;
            font-size: 1.25rem;
            background: #ef4444;
            border-radius: 12px;
            margin: 2rem 0;
          }

          .badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 600;
          }

          .badge-success {
            background-color: #d1fae5;
            color: #065f46;
          }

          .badge-warning {
            background-color: #fef3c7;
            color: #92400e;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>Usage Stats Dashboard</h1>

          {error && <div className="error">Error loading stats: {error}</div>}

          {!error && stats.length > 0 && (
            <div className="card">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Total Requests</th>
                    <th>Avg Response Time (ms)</th>
                    <th>Success Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map((stat) => (
                    <tr key={stat.id}>
                      <td style={{ fontWeight: 600, color: "#374151" }}>
                        {stat.service}
                      </td>
                      <td style={{ color: "#6b7280" }}>
                        {stat.requests.toLocaleString()}
                      </td>
                      <td style={{ color: "#6b7280" }}>
                        {stat.avgResponseTime}ms
                      </td>
                      <td>
                        <span className={stat.successRate >= 99.5 ? "badge badge-success" : "badge badge-warning"}>
                          {stat.successRate}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
