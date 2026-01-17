import { createContext } from "react";
import type { Product } from "../../types/Product";
import type { Item } from "../../types/Item";

type ItemsContext = {
  products: Product[];
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
}

const initialItemsContext: ItemsContext = {
  products: [],
  items: [],
  addItem: () => 0,
  removeItem: () => 0
}

export const ItemsContext = createContext(initialItemsContext);
