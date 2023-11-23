import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Book, getBooks } from "@/utils/apis/books";
import { BookBorrow, Borrows, UserBorrow, getBorrows } from "@/utils/apis/borrows";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-transparent hover:text-gray-300"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "author",
    header: () => <div>Author</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("author")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            // onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const columnsBorrows: ColumnDef<Borrows>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "book",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-transparent hover:text-gray-300"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const book: BookBorrow = row.getValue("book");
      const title = book ? book.title : "";
      return <div className="lowercase">{title}</div>;
    },
  },
  {
    accessorKey: "user",
    header: () => <div>User</div>,
    cell: ({ row }) => {
      const user: UserBorrow = row.getValue("user");
      const fullName = user ? user.full_name : "";
      return <div className="lowercase">{fullName}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            // onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const index = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [borrows, setBorrows] = useState<Borrows[]>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: books,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const tableBorrows = useReactTable({
    data: borrows,
    columns: columnsBorrows,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resultBook = await getBooks();
      const resultBorrow = await getBorrows();
      setBooks(resultBook.payload.datas);
      setBorrows(resultBorrow.payload.datas)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Tabs defaultValue="books" className="flex flex-col w-full items-center">
        <TabsList className="grid w-[400px] grid-cols-2 place-items-center dark:bg-gray-900 dark:border-gray-800 dark:border-2 dark:border-solid">
          <TabsTrigger
            value="books"
            className="data-[state=active]:dark:bg-gray-900 data-[state=active]:dark:text-gray-300"
          >
            Books
          </TabsTrigger>
          <TabsTrigger
            value="borrows"
            className="data-[state=active]:dark:bg-gray-900 data-[state=active]:dark:text-gray-300"
          >
            Borrows
          </TabsTrigger>
        </TabsList>
        <TabsContent value="books" className="w-full">
          <div className="flex items-center py-4 justify-between">
            <Input
              placeholder="Filter title..."
              value={
                (table.getColumn("title")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
              }
              className="max-w-sm px-3 py-2 bg-white/90 dark:bg-gray-900 rounded-md mr-4 outline-none border-gray-100 dark:border-gray-800 border-2 border-solid"
            />
            <div className="flex flex-row gap-3">
              <Button
                variant="outline"
                className="ml-auto bg-white dark:bg-gray-900 dark:hover:border-gray-600 border-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
              >
                Create Book
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="ml-auto bg-white dark:bg-gray-900 dark:hover:border-gray-600 border-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
                  >
                    Columns <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="rounded-md border dark:border-gray-700">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="dark:hover:bg-gray-800 dark:border dark:border-gray-700"
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          key={header.id}
                          className="dark:text-gray-300"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="dark:hover:bg-gray-800 dark:border dark:border-gray-700"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="dark:text-gray-300">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="bg-transparent hover:bg-transparent dark:hover:border-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="bg-transparent hover:bg-transparent dark:hover:border-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Next
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="borrows" className="w-full">
          <div className="flex items-center py-4 justify-between">
            <Input
              placeholder="Filter title..."
              value={
                (tableBorrows.getColumn("title")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                tableBorrows.getColumn("title")?.setFilterValue(event.target.value)
              }
              className="max-w-sm px-3 py-2 bg-white/90 dark:bg-gray-900 rounded-md mr-4 outline-none border-gray-100 dark:border-gray-800 border-2 border-solid"
            />
            <div className="flex flex-row gap-3">
              <Button
                variant="outline"
                className="ml-auto bg-white dark:bg-gray-900 dark:hover:border-gray-600 border-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
              >
                Create Book
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="ml-auto bg-white dark:bg-gray-900 dark:hover:border-gray-600 border-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
                  >
                    Columns <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-white dark:bg-gray-900 dark:border-gray-700"
                >
                  {tableBorrows
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="rounded-md border dark:border-gray-700">
            <Table>
              <TableHeader>
                {tableBorrows.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="dark:hover:bg-gray-800 dark:border dark:border-gray-700"
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          key={header.id}
                          className="dark:text-gray-300"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {tableBorrows.getRowModel().rows?.length ? (
                  tableBorrows.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="dark:hover:bg-gray-800 dark:border dark:border-gray-700"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="dark:text-gray-300">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => tableBorrows.previousPage()}
                disabled={!tableBorrows.getCanPreviousPage()}
                className="bg-transparent hover:bg-transparent dark:hover:border-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => tableBorrows.nextPage()}
                disabled={!tableBorrows.getCanNextPage()}
                className="bg-transparent hover:bg-transparent dark:hover:border-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Next
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default index;
