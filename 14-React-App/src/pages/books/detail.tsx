import { useEffect, useState } from "react";

import { Book } from "../../utils/apis/books";
import Layout from "../../components/layout";
import { getBook } from "../../utils/apis/books/api";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { bookId } = useParams()  

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    fetchDetailBook();
  }, [bookId]);

  const fetchDetailBook = async () => {
    try {
      const result = await getBook(bookId as string)

      setBook(result.payload);
    } catch (error) {}
  };

  return (
    <Layout>
      <div className="w-full flex flex-row items-center">
        <img
          src={book?.cover_image}
          className="h-96 rounded-sm"
          alt="Book Photos"
        />
        <div className="ml-8">
        <h2 className="text-4xl font-bold mb-4">{book?.title}</h2>
        <p className="text-xl text-gray-600 mb-2">{book?.author}</p>
        <p className="text-lg leading-relaxed">{book?.description}</p>
      </div>
      </div>
    </Layout>
  );
};

export default Detail;
