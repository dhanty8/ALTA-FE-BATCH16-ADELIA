import React, { useState } from "react";

import Avatar from "./avatar";
import { Book } from "../utils/apis/books";
import axios from "axios";
import person from "../assets/person.jpg";
import { useNavigate } from "react-router-dom";

interface Props {
  user: {
    name: string;
    avatar: string;
  };
}

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Book[]>([]);

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setIsDropdownOpen(false);
  };

  const handleSearch = async (query: string) => {
    try {
      const results = await axios.get(`https://hells-kitchen.onrender.com/api/v1/books?query=${query}`)
    
      setSearchResults(results.data.payload.datas);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <header className="text-white p-4 flex justify-between items-center">
      <a className="text-2xl font-semibold cursor-pointer" href="/">Library App</a>

      <div className="flex flex-row gap-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="px-3 py-1 bg-gray-900 rounded-md mr-4 outline-none border-gray-800 border-2 border-solid"
          />
          {searchQuery && searchResults.length > 0 && (
            <ul className="absolute z-10 top-10 left-0 right-0 bg-gray-900 rounded-md mr-4 outline-none border-gray-800 border-2 border-solid">
              {searchResults.map((book, index) => (
                <li
                  key={index}
                  className="py-1 px-2 cursor-pointer hover:bg-gray-700"
                  onClick={() => {
                    console.log("test");
                    
                    navigate(`/detail`, {
                      state: {
                        id: book.id,
                      },
                    });
                  }}
                >
                  {book.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="group relative">
          <Avatar src={person} alt="User Avatar" onClick={handleAvatarClick} />

          {isDropdownOpen && (
            <div className="absolute bg-gray-900 right-0 mt-2 w-48 rounded-md shadow-lg border border-gray-600">
              <ul className="py-2">
                <li className="px-4 py-2 text-white hover:bg-gray-700">
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={handleMenuItemClick}
                  >
                    Edit Profile
                  </button>
                </li>
                <li className="px-4 py-2 text-white hover:bg-gray-700">
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </button>
                </li>
                <li className="px-4 py-2 text-white hover:bg-gray-700">
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={handleMenuItemClick}
                  >
                    History Borrow
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
