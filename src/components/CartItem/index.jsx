import { CartContext } from "@/contexts/cart";
import { memo, useCallback, useContext } from "react";

function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);

  const onDelete = useCallback(() => {
    removeItem(product);
  }, [product, removeItem]);

	return (
		<tr>
			<th scope='row'>{product.id}</th>
			<td>
				{product.title}
			</td>
			<td>
				{product.price}$
			</td>
			<td>
				{product.quantity}
			</td>
			<td>
				{product.price * product.quantity}$
			</td>
			<td>
				<button className='btn btn-danger' onClick={onDelete}>Delete</button>
			</td>
		</tr>
	);
}

export default memo(CartItem);
