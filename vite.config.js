import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/RPG/',  // Zmień na nazwę swojego repo GitHub
  server: {
    port: 3000
  }
})
