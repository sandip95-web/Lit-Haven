

import { useState } from "react";
import { supabase } from "../books";

export const useSupabase = () => {
  const [books, setBooks] = useState<any>([]);
  const [filteredBooks, setFilteredBooks] = useState<any>([]);
  const [singleBook, setSingledBook] = useState<any>([]);
  const getDataFromSupabase = async () => {
    let { data, error } = await supabase.from("allbooks").select("*");
    if (data) {
      setBooks(data);

    }
    if (error) {
      console.log(error);
    }
  };

  const getSingleBook = async(id:any)=>{
    let { data, error } = await supabase.from("allbooks").select("*").eq('bookIsbn',id);
    if(data){
      setSingledBook(data);
    }
    if(error){
      console.log(error);
      
    }
  }

  const getFilterBooks = async (query: string) => {
    let { data, error } = await supabase
      .from("allbooks")
      .select("*")
      .or(
        `bookTitle.ilike.%${query}%,bookDescription.ilike.%${query}%,genre.ilike.%${query}%`
      );
    if (data) {
      setFilteredBooks(data);
    
    }
    if (error) {
      console.log(error);
    }
  };
  return { books, getDataFromSupabase, filteredBooks, getFilterBooks,singleBook,getSingleBook };
};
