export interface City {
  location: Location;
  name: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface OfferHost {
  avatar_url: string;
  id: number;
  is_pro: boolean;
  name: string;
}

export interface Offer {
  id: number;
  preview_image: string;
  price: number;
  title: string;
  type: string;
  rating: number;
  is_premium: boolean;
  is_favorite: boolean;
  images: string[];
  bedrooms: number;
  max_adults: number;
  goods: string[];
  host: OfferHost;
  description: string;
  location: Location;
}

export interface Review {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: OfferHost;
}

export interface User {
  avatar_url: string;
  email: string;
  id: number;
  is_pro: boolean;
  name: string;
}
