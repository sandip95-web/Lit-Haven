"use client";

import SearchResult from "@/components/SearchResult";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const SearchPage = () => {
  const { query } = useParams();
  const { filteredBooks, getFilterBooks } = useSupabase();
  useEffect(() => {
    getFilterBooks(query.toString());
  }, [filteredBooks,query,getFilterBooks]);


  return (
    <div>
      <SearchResult filteredBooks={filteredBooks} />
    </div>
  );
};

export default SearchPage;
