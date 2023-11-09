import BookCard from "../components/book-card"
import Layout from "../components/layout"

const Index = () => {
    return (
        <Layout>
            <div className="w-full flex flex-row">
                <BookCard/>
            </div>
        </Layout>
    )
}

export default Index 