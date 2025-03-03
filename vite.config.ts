import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 为了解决找不到类型声明文件的问题，使用 @types/* 类型定义包或者添加类型声明
// 如果没有 @types/vite-plugin-eslint ，可以添加类型声明来绕过类型检查
// @ts-ignore
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), eslint()]
});
