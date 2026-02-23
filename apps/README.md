# Bun Workspace Apps

This workspace contains two applications:

## 📁 Structure

```
apps/
├── api/          # Backend API server
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
│
└── webapp/       # React frontend
    ├── src/
    │   ├── App.tsx
    │   └── server.tsx
    ├── package.json
    └── tsconfig.json
```

## 🚀 Getting Started

1. Install all dependencies:
   ```bash
   bun install
   ```

2. Run the API server (port 3001):
   ```bash
   bun run dev:api
   ```

3. In another terminal, run the webapp (port 3000):
   ```bash
   bun run dev:webapp
   ```

4. Open http://localhost:3000 in your browser

## 📦 Apps

### API (`apps/api`)
- REST API built with Bun's native HTTP server
- Returns hardcoded usage statistics
- Endpoints:
  - `GET /api/stats` - Returns usage statistics
  - `GET /health` - Health check endpoint
- Port: 3001

### Webapp (`apps/webapp`)
- React application with server-side rendering
- Fetches and displays usage stats in a table
- Styled with inline CSS
- Port: 3000

## 🎯 Features Demonstrated

- Bun workspaces
- Multiple package.json files with dependencies
- React SSR with Bun
- Native Bun HTTP server
- CORS handling
- TypeScript configuration
