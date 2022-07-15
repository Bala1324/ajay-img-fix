import React, { useState, useNavigation } from "react";
import { Breadcrumb } from "antd";
import "./Style.css";

import Property from "./PropertyList";
import Users from "./UserList";

import {
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

import { Link } from "react-router-dom";
const { Sider, Content, Footer } = Layout;

const Admin = () => {
  return (
    <Layout>
      <Sider style={{}}>
        <div className="" />
        <Menu
          className="admin-side-menu"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <TeamOutlined />,
              label: "users",
            },
            {
              key: "2",
              icon: <HomeOutlined />,
              label: "properties",
            },
            {
              key: "3",
              icon: <SettingOutlined />,
              label: "settings",
            },
            {
              key: "4",
              icon: <ToolOutlined />,
              label: "maintanance",
            },
          ]}
        />
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

export default Admin;
