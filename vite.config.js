import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'docs',
    // 代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'three'],
          'swiper': ['swiper']
        }
      }
    },
    // 图片压缩
    assetsInlineLimit: 4096,
    // 减小警告阈值
    chunkSizeWarningLimit: 1000
  }
})