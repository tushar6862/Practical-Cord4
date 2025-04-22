import { Dropdown, Avatar, Menu } from 'antd';
import { UserOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';

const UserProfile = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        View Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<LockOutlined />}>
        Change Password
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
    </Dropdown>
  );
};

export default UserProfile;