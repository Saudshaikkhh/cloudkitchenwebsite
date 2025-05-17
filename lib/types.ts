export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "veg" | "non-veg";
}

export interface CartItem extends MenuItem {
  quantity: number;
}