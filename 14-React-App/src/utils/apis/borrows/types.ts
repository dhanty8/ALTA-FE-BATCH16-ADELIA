export interface BookBorrow {
    id: number;
    title: string;
    cover_image: string;
}

export interface UserBorrow {
    id: number;
    full_name: string;
}

export interface Borrows {
    id: number;
    borrow_date: string;
    due_date: boolean;
    return_date: string;
    book: BookBorrow;
    user: UserBorrow;
}