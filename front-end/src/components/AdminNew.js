import React from "react";
import AdminSideMenu from "./components/sandbox";
const { Sider, Content, Footer } = Layout;
import {
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

function AdminNew() {
  return (
    <div>
      <Layout>
        <Sider>
          <AdminSideMenu />
        </Sider>
        <Content>Content</Content>
      </Layout>
    </div>
  );
}

export default AdminNew;
