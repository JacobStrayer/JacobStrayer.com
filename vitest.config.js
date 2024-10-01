import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue' // Add the Vue plugin if it's missing
import viteConfig from './vite.config'

// Define base path for GitHub Pages
const basePath = '/JacobStrayer.github.io/'

export default mergeConfig(
    viteConfig,
    defineConfig({
        base: basePath,
        plugins: [vue()],
        build: {
            outDir: 'dist',
            assetsDir: 'assets'
        },
        test: {
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/**'],
            root: fileURLToPath(new URL('./', import.meta.url))
        }
    })
)
