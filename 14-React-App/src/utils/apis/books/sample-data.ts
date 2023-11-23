import { Book } from ".";

export const bookSampleData: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    featured: true,
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    category: "Classic",
    description: "A story of wealth, power, and the American Dream.",
    cover_image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    featured: false,
    author: "Harper Lee",
    isbn: "978-0061120084",
    category: "Novel",
    description:
      "A powerful exploration of racial injustice in the American South.",
    cover_image: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    featured: true,
    author: "J.D. Salinger",
    isbn: "978-0316769174",
    category: "Coming of Age",
    description: "A story of teenage alienation and rebellion.",
    cover_image: "https://m.media-amazon.com/images/I/91ycNzZu1mL._AC_UF1000,1000_QL80_.jpg",
  },
];
