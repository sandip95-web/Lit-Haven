"use client";
import { supabase } from "@/lib/supabase/books";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const SignInPage = () => {
  return (
    <div className=" absolute top-0  w-full flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-indigo-600">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h1>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    </div>
  );
};

export default SignInPage;
