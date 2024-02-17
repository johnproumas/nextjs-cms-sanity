export type TProductPage = {
  _id: string;
  name: string;
  image: any;
  description: string;
  price: number;
  slug?: string;
  category: string;
  // price_id: string;
};

export type TImageGallery = {
  image: any;
};
