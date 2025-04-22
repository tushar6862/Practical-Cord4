import { Layout, theme } from 'antd';
import Dashboard from './pages/Dashboard';
import './styles/App.css';

const { Content } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Content>
        <div style={{ padding: 24, background: colorBgContainer }}>
          <Dashboard />
        </div>
      </Content>
    </Layout>
  );
}

export default App;