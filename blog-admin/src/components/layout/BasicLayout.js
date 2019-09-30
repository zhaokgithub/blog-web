import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (<div>
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>


                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>)
    }
}
export default BasicLayout