import { Book, getBooks } from "../utils/apis/books"
import { useEffect, useState } from "react"

import BookCard from "../components/book-card"
import Layout from "../components/layout"

const Index = () => {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
      fetchBooks()
    }, [])

    const fetchBooks = async () => {
        try {
            const result = await getBooks()
            setBooks(result.payload.datas)
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Layout>
            <div className="w-full flex flex-row gap-5">
                {books.map((item, index) => (
                    <BookCard key={index} cover_image={item.cover_image} title={item.title} author={item.author}  />
                ))}
            </div>
        </Layout>
    )
}

export default Index 