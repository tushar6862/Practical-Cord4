import { Row, Col } from 'antd';
import ProductTable from '../components/ProductTable';
import OrderSummary from '../components/OrderSummary';
import SalesChart from '../components/SalesChart';
import UserProfile from '../components/UserProfile';

const Dashboard = () => {
  return (
    <div>
      <Row justify="end" style={{ marginBottom: 16 }}>
        <UserProfile />
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <OrderSummary />
        </Col>
        <Col xs={24} lg={16}>
          <SalesChart />
        </Col>
        <Col xs={24}>
          <ProductTable />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;