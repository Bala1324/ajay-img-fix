import { Space, Table } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  EditOutlined,
  DeleteOutlined,
  PrinterTwoTone,
  PlusSquareOutlined,
} from "@ant-design/icons";

function Property() {
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    getPropertyDetails();
  }, []);

  // DATA FROM DB USING AXIOS
  const getPropertyDetails = () => {
    axios
      .get("http://localhost:4000/api/property/getall-property")
      .then((res) => {
        setPropertyList(res.data.result);
        console.log(propertyList);
      });
  };

  //  DATA FROM DB USING FETCH
  // const getUserDetails = () => {
  //   fetch("http://localhost:4000/api/property/getall-property").then((res) => {
  //     res.json().then((res) => {
  //       console.log(res);
  //       setPropertyList(res.result);
  //       console.log(propertyList);
  //     });
  //   });
  // };

  const deleteProperty = () => {
    axios
      .delete(
        "http://localhost:4000/api/property/delete-property?uuid=PROP-4EB4DC5093"
      )
      .then((res) => {});
  };

  const columns = [
    {
      title: "Type",
      dataIndex: "Type",
    },
    {
      title: "Price",
      dataIndex: "Price",
    },
    {
      title: "Details",
      dataIndex: "Details",
    },

    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <div>
            <PlusSquareOutlined
              style={{ color: "Lime", marginRight: "25px" }}
            />
            <EditOutlined
              style={{ color: "DeepSkyBlue", marginRight: "25px" }}
            />
            <DeleteOutlined
              style={{ color: "red", marginRight: "25px" }}
              onClick={deleteProperty}
            />
            <PrinterTwoTone style={{ color: "", marginRight: "45px" }} />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={propertyList} />;
    </div>
  );
}
export default Property;
