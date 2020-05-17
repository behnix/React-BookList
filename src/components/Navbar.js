import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
      <div className="navbar">
          <h1>Book Store...</h1>
          <p>Currently is { books.length } books  my book store</p>
      </div>
  )
};

export default Navbar;
