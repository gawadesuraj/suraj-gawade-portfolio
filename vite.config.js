import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { form } from 'framer-motion/client'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base:"/suraj-gawade-portfolio",
})
