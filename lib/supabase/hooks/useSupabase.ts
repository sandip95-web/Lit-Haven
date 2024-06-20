import { useState } from "react";
import { supabase } from "../books";

export const useSupabase = () => {
  const [books, setBooks] = useState<any>([]);
  const [filteredBooks, setFilteredBooks] = useState<any>([]);
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

  const getFilterBooks = async (query: string) => {
    let { data, error } = await supabase
      .from("books")
      .select("*")
      .ilike("title", `%${query}%`);
    if (data) {
      setFilteredBooks(data);
      console.log(data);    
    }
    if (error) {
      console.log(error);
    }
  };
  return { books, getDataFromSupabase, filteredBooks, getFilterBooks };
};
