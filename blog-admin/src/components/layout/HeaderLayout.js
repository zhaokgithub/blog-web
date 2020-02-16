import React, { Component } from 'react'

import { Layout } from 'antd';
const { Header } = Layout;

class HeaderLayout extends Component {

    render() {
        return (
            <div style={{height:64,position:'fixed',width:'100%'}}>
                <Header></Header>
            </div>
        )
    }
}

export default HeaderLayout