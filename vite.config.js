import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",//打包路径
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 4000,//启动端口
    open: true,
    proxy: {
      // 选项写法
      '/api': 'https://www.fastmock.site/mock/6d41e4a585f6e3529e633c2d4e78cbba'//代理网址
    },
    cors: true
  }

})
