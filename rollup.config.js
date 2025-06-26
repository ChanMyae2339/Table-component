import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser'; 

export default {
  input: 'src/index.js', 
  output: [
    {
      file: 'dist/index.js', 
      format: 'cjs', // CommonJS format
      sourcemap: true, 
    },
    {
      file: 'dist/index.esm.js', 
      format: 'esm', // ES Module format
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), 
    commonjs(), 
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react', '@babel/preset-env'], 
      exclude: 'node_modules/**', 
    }),
    terser(), 
  ],
  
  external: ['react', 'react-dom', '@tanstack/react-table', 'framer-motion', 'react-icons'],
};