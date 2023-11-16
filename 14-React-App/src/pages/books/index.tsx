import { Book, getBooks } from "../../utils/apis/books";
import { useEffect, useState } from "react";

import BookCard from "../../components/book-card";
import Layout from "../../components/layout";
import { getNewBooks } from "../../utils/apis/books/api";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);
  const [newBooks, setNewBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
    fetchNewBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const result = await getBooks()
      setBooks(result.payload.datas);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewBooks = async () => {
    try {
      const result = await getNewBooks()

      setNewBooks(result.payload.datas);
    } catch (error) {
      console.log(error);
    }
  };

  const goDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const action = {
    goDetail: goDetail,
  };

  return (
    <Layout>
      <div className="w-full flex flex-col">
        <div className="flex flex-col">
          <label className="font-bold my-4 text-2xl">New Arrival</label>
          <div className="flex-auto flex flex-row flex-wrap gap-5">
            {newBooks.map((item, index) => (
              <BookCard
                key={index}
                cover_image={item.cover_image}
                title={item.title}
                author={item.author}
                id={item.id}
                action={action}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-bold my-4 text-2xl">All Books</label>
          <div className="flex-auto flex flex-row flex-wrap gap-5">
            {books.map((item, index) => (
              <BookCard
                key={index}
                cover_image={item.cover_image}
                title={item.title}
                author={item.author}
                id={item.id}
                action={action}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
