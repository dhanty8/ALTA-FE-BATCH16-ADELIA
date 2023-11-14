import React, { useEffect, useState } from "react";

import { Book } from "../../utils/apis/books";
import Layout from "../../components/layout";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { state } = location;
  

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    fetchDetailBook();
  }, [state?.id]);

  const fetchDetailBook = async () => {
    try {
      const result = await axios(
        `https://hells-kitchen.onrender.com/api/v1/books/${state?.id}`
      );

      setBook(result.data.payload);
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
