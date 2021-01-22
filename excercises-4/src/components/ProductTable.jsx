import React from "react";
import { view } from "@risingstack/react-easy-state";
import state from "../store";

class ProductTable extends React.Component {
  render() {
    return (
      <table border="1" width="500px">
        <tr>
          <td>Название</td>
          <td>Категория</td>
          <td>Цена (шт.)</td>
          <td>
            Кол-во <button
              onClick={() => (state.products.sort((a, b) => a.amount > b.amount ? 1 : -1))}
            >сортировка</button>
          </td>
        </tr>
        {state.products.map(product => (
          <tr>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.amount}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default view(ProductTable);
