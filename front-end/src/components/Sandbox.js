import { Breadcrumb } from "antd";
import "./Style.css";
import Property from "./PropertyList";
import Users from "./UserList";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
const { Sider, Content, Footer } = Layout;

const AdminSideMenu = () => {
  return (
    <Layout className="admin-layout">
      <Sider style={{}}>
        <Menu className="admin-side-menu" theme="dark" mode="inline">
          <Menu.Item key="/userlist">
            <TeamOutlined />,<span>Users</span>
            <Link to="/userlist" />
          </Menu.Item>
        </Menu>

        <Breadcrumb.Item href="/userlist" className="breadcrumb-menu">
          <HomeOutlined />
          <span>User List</span>
        </Breadcrumb.Item>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            padding: 20,
            minHeight: 680,
          }}
        >
          <div>
            {/* <Users /> */}
            {/* <Property /> */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          ©2022 RealProperties.com
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminSideMenu;
