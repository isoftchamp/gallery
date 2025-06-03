export interface Image {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  count: number;
}
