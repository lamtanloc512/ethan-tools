import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import enConfig from 'tdesign-react/es/locale/en_US';
import 'tdesign-react/es/style/index.css';
import './styles/index.css';
import { ConfigProvider, type GlobalConfigProvider } from 'tdesign-react';

const globalConfig: GlobalConfigProvider = {
  ...enConfig,
};

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ConfigProvider globalConfig={globalConfig}>
        <App />
      </ConfigProvider>
    </React.StrictMode>,
  );
}
