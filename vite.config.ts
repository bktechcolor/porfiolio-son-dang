import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
const manifest = {
  name: 'SondhCV',
  short_name: 'SondhCV',
  description: 'This is my portfolio web app build in vue3 + vite + typescript + PWA technologies',
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
