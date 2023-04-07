import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { clearCart, deleteFromCart, getProducts } from "../rtk/cart-slice";
import { useEffect, useState } from "react";
import { addLocalProduct, getLocalProduct } from "./localStorage";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <h1>Cart Items</h1>
      <Button
        variant="success"
        onClick={() => {
          dispatch(clearCart());
        }}>
        Clear
      </Button>
      <h5>Total Price {totalPrice.toFixed(2)}</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>IMG</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {cart.map((product) => {
          return (
            <tbody key={product.id}>
              <tr>
                <td>{product.id}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}$</td>
                <td>{product.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteFromCart(product))}>
                    Remove
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </>
  );
}
export default Cart;
