// 引入 React 和 AppProps 类型
import React from 'react';
import { AppProps } from 'next/app';

// 引入全局样式
import '../styles/globals.css';

// 可选：如果你有全局组件，比如 Layout，也可以在这里引入
// import Layout from '../components/Layout';

// 创建 App 组件，引入所有页面
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 可以在这里添加 Layout 组件来包裹所有页面
    // <Layout>
      <Component {...pageProps} />
    // </Layout>
  );
}

// 默认导出 MyApp 组件
export default MyApp;
