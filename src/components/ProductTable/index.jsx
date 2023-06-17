"use client";

import { CartContext } from "@/contexts/cart";
import { memo, useContext } from "react";
import CartItem from "../CartItem";

function ProductTable() {
  const { items, totalPrice } = useContext(CartContext);

  return (
    <table className="table table-striped flex-grow-1 mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}

        <tr>
          <th scope="row" colSpan={4}>
            Total
          </th>
          <td>{totalPrice}$</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default memo(ProductTable);
