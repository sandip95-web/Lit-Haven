'use client'

import SingleBook from '@/components/SingleBook';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const{id} = useParams();
    const{singleBook,getSingleBook}=useSupabase();


    useEffect(()=>{
    getSingleBook(Number(id));
    },[])

   
    
  return (
    <div>
     <SingleBook singleBook={singleBook}/> 
    </div>
  )
}

export default page
