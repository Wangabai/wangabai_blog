/*
 * @Author: 王鑫
 * @Description: vite配置
 * @Date: 2021-12-07 17:14:44
 */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteCompression from 'vite-plugin-compression';
// import styleImport from 'vite-plugin-style-import';
import { viteMockServe } from 'vite-plugin-mock';
import viteSvgIcons from 'vite-plugin-svg-icons';

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir);
};

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    // 插件配置
    plugins: [
      vue(),
      vueJsx(),
      // brotli压缩
      viteCompression({
        algorithm: 'brotliCompress',
      }),
      // Gzip压缩
      // viteCompression(),
      // styleImport({
      //   libs: [
      //     // 按需加载element-plus
      //     {
      //       libraryName: 'element-plus',
      //       esModule: true,
      //       ensureStyleFile: true,
      //       resolveStyle: name => {
      //         return `element-plus/lib/theme-chalk/${name}.css`;
      //       },
      //       resolveComponent: name => {
      //         return `element-plus/lib/${name}`;
      //       },
      //     },
      //   ],
      // }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: mode === 'mock',
        prodEnabled: false,
        logger: true,
      }),
      viteSvgIcons({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/svg-icons')],
        // 指定symbolId格式
        symbolId: 'icon-[name]',
      }),
    ],

    // css配置
    css: {
      preprocessorOptions: {
        scss: {
          // 导入全局变量
          additionalData: `@import "@/style/variables.scss";\n`,
        },
      },
    },

    resolve: {
      // 别名配置
      alias: {
        '@': pathResolve('src'),
      },
    },

    build: {
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: true,
        },
      },
    },

    // server: {
    //   open: true,
    //   // 代理配置 http://erp-test.worken.cn
    //   // 王健 192.168.30.218:8087
    //   proxy: {
    //     '/api': {
    //       target: 'http://erp-test.worken.cn',
    //       changeOrigin: true,
    //       // rewrite: (path) => path.replace(/^\/api/, '')
    //     },
    //   },
    // },
  });
