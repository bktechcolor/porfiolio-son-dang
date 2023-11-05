import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
const manifest = {
  name: 'PWAGram Talk',
  short_name: 'PWAGram',
  description: 'This is web application for dating',
  theme_color: '#ffffff',
  icons: [
    {
      src: 'pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: 'pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    }
  ]
}
export default defineConfig({
  plugins: [
      vue(),
      VitePWA({
      injectRegister: 'auto',
      devOptions: {
        enabled: false
        /* other options */
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
})
