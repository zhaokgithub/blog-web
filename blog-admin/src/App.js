import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './views/home/Home'
import routes from './router/router'
import { Layout, Menu, Icon, Button } from 'antd';
import HeaderLayout from './components/layout/HeaderLayout'
const { SubMenu } = Menu;


const { Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Sider>
            <div style={{ height: 64 }}></div>
            <Menu theme="dark" defaultSelectedKeys={['home']} mode="inline" style={{ width: 200, textAlign: 'left' }}
            >
              {routes.map((route, i) => (
                <Menu.Item key={route.key}>
                  <Link to={route.path}>
                    <Icon type={route.icon} />
                    <span>{route.name}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <HeaderLayout></HeaderLayout>
            <Content style={{marginTop:64,padding:15}}>
              {routes.map((route, i) => (
                <Route exact key={i} path={route.path} component={route.component} />
              ))}
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>

      </Router>
    </div>
  );
}

export default App;
