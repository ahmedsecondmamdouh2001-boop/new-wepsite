
export interface Hall {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  capacity: number;
  image: string;
  tags: string[];
  description: string;
}

export interface Artist {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  reviews: number;
}
