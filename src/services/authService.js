import { supabase } from "./supabaseClient";

export const signInWithMagicLink = async (email) => {
  return await supabase.auth.signInWithOtp({
    email,
  });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};

export const getUser = async () => {
  return await supabase.auth.getUser();
};