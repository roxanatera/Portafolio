import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // Ajusta según tus necesidades
  },
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.jsx']
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    })
  ]
};
