"use client";

import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const { query } = useParams();
  const { filteredBooks, getFilterBooks } = useSupabase();
  useEffect(() => {
    getFilterBooks(query.toString());
  }, []);

  console.log(filteredBooks);

  return <div>Page</div>;
};

export default page;
