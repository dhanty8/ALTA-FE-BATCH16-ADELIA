import { Book, bookSampleData } from ".";
import { PayloadPagination, Response } from "../../types/api";

export const getBooks = async () => {
    return new Promise<Response<PayloadPagination<Book[]>>>((resolve) => {
        setTimeout(() => {
            const response: Response<PayloadPagination<Book[]>> = {
                message: "",
                payload: {
                    totalItems: 3,
                    datas: bookSampleData,
                    totalPages: 1,
                    currentPage: 1,
                }
            }
            resolve(response)
        }, 1000);
    })
}