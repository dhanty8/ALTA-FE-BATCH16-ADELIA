interface Book {
    id: number;
    title: string;
    cover_image: string;
}

interface User {
    id: number;
    full_name: string;
}

export interface Borrows {
    id: number;
    borrow_date: string;
    due_date: boolean;
    return_date: string;
    book: Book;
    user: User;
}