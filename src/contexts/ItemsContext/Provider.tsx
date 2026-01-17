import { useState } from "react";
import type { Item } from "../../types/Item";
import { ItemsContext } from "./data"

const defaultItems = [
  {
    name: "Escolha o produto",
    price: 0,
  },
  {
    name: "Kit com 3 tampa fralda",
    price: 18.00,
  },
  {
    name: "Kit com 2 toalhas fraldas",
    price: 24.00,
  },
  {
    name: "Colcha de berço",
    price: 38.00,
  },
  {
    name: "Toalhão de fralda com capuz",
    price: 45.00,
  },
]

export const ItemsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addNewItem = (item: Item) => {
    setItems([item, ...items]);
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <ItemsContext.Provider 
      value={
        { 
          products: defaultItems, 
          items: items,
          addItem: addNewItem,
          removeItem
        }}
    >
      {children}
    </ItemsContext.Provider>
  )
}