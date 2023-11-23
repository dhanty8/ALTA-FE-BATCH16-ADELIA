import React, { useState } from "react";

import Avatar from "./avatar";
import { Book } from "../utils/apis/books";
import { getBookSearchResult } from "../utils/apis/books/api";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/utils/hooks/useTheme";
import { useToast } from "./ui/use-toast";
import { useToken } from "@/utils/contexts/token";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleTheme] = useTheme();
  const { toast } = useToast();
  const { token, user, changeToken } = useToken();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Book[]>([]);

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setIsDropdownOpen(false);
  };

  const handleSearch = async (query: string) => {
    try {
      const results = await getBookSearchResult(query);

      setSearchResults(results.payload.datas);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleLogout = () => {
    changeToken();
    toast({
      description: "Logout Successfully",
    });
  };

  return (
    <header className="p-4 flex justify-between items-center">
      <a className="text-2xl font-semibold cursor-pointer" href="/">
        Library App
      </a>

      <div className="flex flex-row gap-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="px-3 py-1 bg-white/90 dark:bg-gray-900 rounded-md mr-4 outline-none border-gray-100 dark:border-gray-800 border-2 border-solid"
          />
          {searchQuery && searchResults.length > 0 && (
            <ul className="absolute z-10 top-10 left-0 right-0 bg-white dark:bg-gray-900 rounded-md mr-4 outline-none border-gray-100 dark:border-gray-800 border-2 border-solid">
              {searchResults.map((book, index) => (
                <li
                  key={index}
                  className="py-1 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {
                    setSearchQuery("");
                    setSearchResults([]);
                    navigate(`/detail/${book.id}`);
                  }}
                >
                  {book.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="group relative">
          <Avatar
            src={user.profile_picture}
            alt={user.full_name}
            onClick={handleAvatarClick}
          />

          {isDropdownOpen && (
            <div className="absolute z-10 bg-white dark:bg-gray-900 right-0 mt-2 w-48 rounded-md shadow-lg border border-gray-100 dark:border-gray-600">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={() => {
                      toggleTheme();
                    }}
                  >
                    Change Theme
                  </button>
                </li>
                {token ? (
                  <>
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <button
                        className="w-full text-left focus:outline-none"
                        onClick={() => {
                          handleMenuItemClick();
                          navigate("/profile");
                        }}
                      >
                        Profile
                      </button>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <button
                        className="w-full text-left focus:outline-none"
                        onClick={() => {
                          handleMenuItemClick();
                          navigate("/history-borrow");
                        }}
                      >
                        History Borrow
                      </button>
                    </li>
                    {user.role === "admin" && (
                      <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <button
                          className="w-full text-left focus:outline-none"
                          onClick={() => {
                            handleMenuItemClick();
                            navigate("/dashboard");
                          }}
                        >
                          Dashboard
                        </button>
                      </li>
                    )}
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <button
                        className="w-full text-left focus:outline-none"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <button
                        className="w-full text-left focus:outline-none"
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </button>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <button
                        className="w-full text-left focus:outline-none"
                        onClick={() => navigate("/register")}
                      >
                        Register
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
