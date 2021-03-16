import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyOrder } from "../api/orders";
import { Table, Button } from "react-bootstrap";
import _ from "lodash";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(async () => {
    const orders = await getMyOrder();
    setMyOrders(orders);
  }, []);
  return (
    <div className="ml-5 mr-5">
      <h1>My orders</h1>
      {myOrders &&
        myOrders.map((item, index) => {
          return (
            <>
              <Table striped bordered hover key={index} className="mb-5">
                <tbody>
                  <tr>
                    <td>Order Id</td>
                    <td>
                      {item.orderId}
                      </td>   
                      <td>
                      <Link to={`/myOrders/${item.id}`} className="btn">
                        <Button variant="success">Get Order Details</Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Product Name</td>
                    <td>{_.get(item, "items[0].name")}</td>
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td>{_.get(item, "items[0].quantity")}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td className={`first-letter ${item.status}`}>
                      {item.status}
                    </td>
                  </tr>
                  <tr>
                    <td>Completed</td>
                    <td>{item.complete ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td>Shipment Tracking url</td>
                    <td>{_.get(item, "shipments[0].trackingUrl")}</td>
                  </tr>
                </tbody>
              </Table>
            </>
          );
        })}
    </div>
  );
};

export default MyOrders;
