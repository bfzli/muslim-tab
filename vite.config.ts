import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        viteStaticCopy({
            targets: [
                {
                    src: 'public/manifest.json',
                    dest: '.'
                },
                {
                    src: 'public/favicon.ico',
                    dest: '.'
                },
                {
                    src: 'public/muslim-tab.png',
                    dest: '.'
                },
                {
                    src: 'public/backgrounds/*',
                    dest: 'backgrounds'
                }
            ]
        })
    ],
    base: './',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]',
                format: 'iife'
            }
        }
    }
})
