# bun-test

A Bun workspace project demonstrating a React webapp and REST API.

## 📁 Project Structure

```
bun-test/
├── apps/
│   ├── api/          # Backend API server (port 3001)
│   └── webapp/       # React frontend (port 3000)
└── package.json      # Workspace configuration
```

## 🚀 Getting Started

1. **Install all dependencies**:
   ```bash
   bun install
   ```

2. **Run the API server** (in one terminal):
   ```bash
   bun run dev:api
   ```
   API will be available at http://localhost:3001

3. **Run the webapp** (in another terminal):
   ```bash
   bun run dev:webapp
   ```
   Webapp will be available at http://localhost:3000

4. **Visit** http://localhost:3000 to see the usage stats dashboard

## 📦 Apps

### API (`apps/api`)
- REST API built with Bun's native HTTP server
- Returns hardcoded usage statistics
- Endpoints:
  - `GET /api/stats` - Returns usage statistics
  - `GET /health` - Health check endpoint

### Webapp (`apps/webapp`)
- React application with server-side rendering
- Fetches and displays usage stats in a styled table
- Built with Bun's native HTTP server

## 🎯 Features

- Bun workspaces with multiple packages
- React SSR with Bun
- Native Bun HTTP server
- CORS handling
- TypeScript throughout