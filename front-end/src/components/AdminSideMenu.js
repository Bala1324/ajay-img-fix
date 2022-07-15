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
import React, { useState } from "react";
import { Link } from "react-router-dom";
const { Sider, Content, Footer } = Layout;

const AdminSideMenu = () => {
  return (
    <Layout>
      <Sider>
        <Menu>
          className="admin-side-menu" theme="dark" mode="inline"
          <Breadcrumb.Item href="/userlist" className="breadcrumb-menu">
            <HomeOutlined />
            <span>User List</span>
          </Breadcrumb.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default AdminSideMenu;
