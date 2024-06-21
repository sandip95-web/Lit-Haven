"use client";

import SearchResult from "@/components/SearchResult";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const { query } = useParams();
  const { filteredBooks, getFilterBooks } = useSupabase();
  useEffect(() => {
    getFilterBooks(query.toString());
  }, []);


  return (
    <div>
      <SearchResult filteredBooks={filteredBooks} />
    </div>
  );
};

export default page;
