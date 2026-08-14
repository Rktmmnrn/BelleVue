export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  categories: string[];
  date: { day: string; month: string };
  image: string;
}

// Les 3 articles mis en avant sur l'accueil. La page Blog (Phase 5) en aura 6 —
// on complètera cette liste à ce moment-là.
export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-design-a-small-restaurant",
    title: "How to design a small restaurant",
    excerpt:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "John Doe",
    categories: ["Casual Dinning", "Coffees"],
    date: { day: "05", month: "OCT 24" },
    image: "/images/home/blog-1.jpeg",
  },
  {
    slug: "how-real-restaurants-approach-benefits",
    title: "How real restaurants approach benefits",
    excerpt:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "John Doe",
    categories: ["Food", "Industry Expertise"],
    date: { day: "05", month: "OCT 24" },
    image: "/images/home/blog-2.jpeg",
  },
  {
    slug: "food-is-the-foundation-of-true",
    title: "Food is the foundation of true",
    excerpt:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "John Doe",
    categories: ["Food", "Restaurants"],
    date: { day: "05", month: "OCT 24" },
    image: "/images/home/blog-3.jpeg",
  },
];
