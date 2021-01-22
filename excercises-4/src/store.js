import { store } from "@risingstack/react-easy-state";

const state = store({
  filters: {
    isAllChecked: true,
    isFruitChecked: true,
    isVegetablesChecked: true,
    isCannedfoodChecked: true
  },
  products: [
    { id: 1, name: "Апельсины", price: 1235, amount: 30, category: "fruit" },
    { id: 2, name: "Бананы", price: 2351, amount: 23, category: "fruit" },
    { id: 3, name: "Помидоры", price: 2654, amount: 13, category: "vegetable" },
    { id: 4, name: "Огурцы", price: 1946, amount: 21, category: "vegetable" },
    { id: 5, name: "Перец", price: 2043, amount: 18, category: "vegetable" },
    { id: 6, name: "Горошек зелёный", price: 1583, amount: 26, category: "cannedfood" },
    { id: 7, name: "Кабачковая икра", price: 2048, amount: 24, category: "cannedfood" }
  ]
});

export default state;
