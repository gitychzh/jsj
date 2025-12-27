import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  // root: path.join(__dirname, 'docs'),//推荐
  root: 'docs',
  // outDir: path.join(__dirname, 'jsj'),//推荐
  outDir: 'jsj',
  base: '/jsj/',
  title: '红薯课堂_计算机',
  icon: '/logo_红薯课堂.png',
  logo: {
    light: '/logo_红薯课堂.png',
    dark: '/烤红薯.png',
  },
  
});
