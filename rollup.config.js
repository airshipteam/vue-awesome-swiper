import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const isProd = process.env.NODE_ENV === 'production';
const distFolder = 'dist';

// Convert abc.config.js format to rollup config format
const configs = [
    {
        input: 'src/exporter.ts',
        output: [
            {
                file: `${distFolder}/exporter.js`,
                format: 'umd',
                name: 'VueAwesomeSwiper',
                globals: {
                    vue: 'Vue'
                }
            },
            {
                file: `${distFolder}/exporter.esm.js`,
                format: 'esm'
            }
        ],
        external: ['vue'],
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: false
                    }
                }
            }),
            isProd && terser()
        ]
    },
    {
        input: 'src/index.ts',
        output: [
            {
                file: `${distFolder}/vue-awesome-swiper.js`,
                format: 'umd',
                name: 'VueAwesomeSwiper',
                globals: {
                    swiper: 'Swiper',
                    vue: 'Vue'
                }
            },
            {
                file: `${distFolder}/vue-awesome-swiper.esm.js`,
                format: 'esm'
            }
        ],
        external: ['swiper', 'vue'],
        plugins: [
            typescript(),
            isProd && terser()
        ]
    }
];

export default configs;
