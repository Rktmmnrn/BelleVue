export type MenuCategory = "special menu" | "drinks" | "seafood" | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: MenuCategory;
  description?: string;
}

export const menuCategories: MenuCategory[] = [
  "special menu",
  "drinks",
  "seafood",
  "desserts",
];

// Contenu "lorem ipsum" repris tel quel de l'ancien site — à remplacer par ta vraie carte
// quand on attaquera la page Menu complète (Phase 3).
export const menuItems: MenuItem[] = [
  {
    id: "item-1",
    name: "Lorem Ipsum",
    price: "24$",
    category: "special menu",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "item-2",
    name: "Lorem Ipsum",
    price: "24$",
    category: "special menu",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "item-3",
    name: "Lorem Ipsum",
    price: "24$",
    category: "special menu",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "item-4",
    name: "Lorem Ipsum",
    price: "24$",
    category: "special menu",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "item-5",
    name: "Lorem Ipsum",
    price: "24$",
    category: "special menu",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "item-6",
    name: "Lorem Ipsum",
    price: "24$",
    category: "special menu",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
];
