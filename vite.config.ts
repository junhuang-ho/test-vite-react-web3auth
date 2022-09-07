import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-polyfill-node'; // "rollup-plugin-polyfill-node": "^0.10.2"


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // resolve: {
    //     alias: {
    //         "@web3auth/web3auth": '@web3auth/web3auth/dist/web3auth.umd.min.js',
    //     }
    // },
    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            define: {
                global: 'globalThis'
            },
            // Enable esbuild polyfill plugins
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true,
                    process: true,
                }),
                NodeModulesPolyfillPlugin()
            ],
            target: 'esnext',
        }
    },
    build: {
        rollupOptions: {
            plugins: [
                // Enable rollup polyfills plugin
                // used during production bundling
                rollupNodePolyFill()
            ],
        },
        target: 'es2020',
    }
})
