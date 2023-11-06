import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
const Manifest = {
  name: 'SondhCV',
  short_name: 'SondhCV',
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
    },
  ],
  start_url:'./index.html',
  display:'standalone' as any,
  orientation: 'fullscreen' as any,
  theme_color:'#ffffff',
  background_color:'#fff',
  description: 'This is my portfolio web app build in vue3 + vite + typescript + PWA technologies',
  lang:'en-US'
}
export default defineConfig({
  plugins: [
      vue(),
      VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      strategies: 'injectManifest',
      srcDir: 'src', //khai báo đường dẫn thư mục ta tạo file serice worker
      filename: 'service-worker.js', //khai báo tên file service woker thực hiện viết code pwa
      manifest: Manifest,
      workbox: {
        cleanupOutdatedCaches: false,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
})
