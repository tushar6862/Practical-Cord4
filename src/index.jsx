import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#1890ff',
        borderRadius: 4,
      },
    }}
  >
    <App />
  </ConfigProvider>
);