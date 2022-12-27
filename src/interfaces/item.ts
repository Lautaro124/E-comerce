export interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
}

export interface ItemState {
  itemSelected: number | null;
  items: Item[]
}