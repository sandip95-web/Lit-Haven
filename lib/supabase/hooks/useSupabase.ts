import { useState } from "react";
import { supabase } from "../books";

export const useSupabase = () => {
  const [books, setBooks] = useState<any>([]);
  const [filteredBooks, setFilteredBooks] = useState<any>([]);
  const [singleBook, setSingledBook] = useState<any>([]);
  const getDataFromSupabase = async () => {
    let { data, error } = await supabase.from("books").select("*");
    if (data) {
      setBooks(data);
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const getSingleBook = async(id:any)=>{
    let { data, error } = await supabase.from("books").select("*").eq('id',id);
    if(data){
      setSingledBook(data);
    }
    if(error){
      console.log(error);
      
    }
  }

  const getFilterBooks = async (query: string) => {
    let { data, error } = await supabase
      .from("books")
      .select("*")
      .or(
        `title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`
      );
    if (data) {
      setFilteredBooks(data);
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };
  return { books, getDataFromSupabase, filteredBooks, getFilterBooks,singleBook,getSingleBook };
};
