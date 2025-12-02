import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Check if SSL certificates exist
const sslKeyPath = path.resolve(__dirname, 'ssl/key.pem')
const sslCertPath = path.resolve(__dirname, 'ssl/cert.pem')
const hasSSL = fs.existsSync(sslKeyPath) && fs.existsSync(sslCertPath)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild', // esbuild daha hızlı ve varsayılan olarak gelir
  },
  server: {
    port: 5173,
    host: true,
    https: hasSSL ? {
      key: fs.readFileSync(sslKeyPath),
      cert: fs.readFileSync(sslCertPath),
    } : false,
  },
})
