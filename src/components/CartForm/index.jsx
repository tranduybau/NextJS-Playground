"use client";

import { CartContext } from "@/contexts/cart";
import products from "@/faker/products";
import { memo, useCallback, useContext, useEffect } from "react";

function CartForm() {
  const { items, addItem } = useContext(CartContext);

  const onSubmit = useCallback((event) => {
    event.preventDefault();

    const { product, quantity } = event.target.elements

    addItem({
      ...products.find((p) => p.id === product.value),
      quantity: Number(quantity.value),
    })
  }, [addItem]);

  return (
    <form onSubmit={onSubmit} className="">
      <fieldset>
        <legend>Select product</legend>

        <div className="mb-3">
          <label className="form-label">Select your option</label>

          <select className="form-select" defaultValue="default" name="product">
            <option disabled value="default">
              Select your option
            </option>

            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.title} - {product.id}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>

          <input
            name="quantity"
            type="text"
            className="form-control"
            placeholder="Quantity"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default memo(CartForm);
