import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  // lang: 'zh',
  lang: 'en',
  // root: path.join(__dirname, 'docs'),//推荐,但是改了之后docs/_meta.json失效了
  root: 'docs',
  // outDir: path.join(__dirname, 'jsj'),//推荐，但是改了之后docs/_meta.json失效了
  outDir: 'jsj',
  base: '/jsj/',
  title: '红薯课堂_计算机',
  icon: '/img/logo_红薯课堂.png',
  logo: {
    light: '/img/logo_红薯课堂.png',
    dark: '/img/烤红薯.png',
  },
  
});
