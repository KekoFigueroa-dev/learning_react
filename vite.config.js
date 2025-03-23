import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: "https://kekofigueroa-dev.github.io/learning_react/",
  plugins: [react()],
})
