
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  onSale?: boolean;
  discountPrice?: number;
}

export interface Category {
  id: string;
  name: string;
}
