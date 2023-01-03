export interface Item {
  id: number | string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string; 
}

export interface ItemState {
  itemSelected: number | null;
  items: Item[]
}