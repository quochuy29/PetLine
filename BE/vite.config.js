import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            // ⬇️ Rất quan trọng để dùng Vue Devtools
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => false,
                },
            },
        }),
        tailwindcss(),
    ],
    server: {
        host: true, // nếu dùng WSL hoặc Docker
        port: 5173, // mặc định của Vite
        hmr: {
            host: 'localhost', // hoặc IP máy host
        }
    },
});

