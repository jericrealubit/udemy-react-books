import { useContext } from "react";
import BooksContext from "../contexts/Books";

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;