import { supabase } from "./supabaseClient";

export const sendMessage = async (message, user) => {
  return await supabase.from("messages").insert([
    { content: message, user_name: user }
  ]);
};

export const getMessages = async () => {
  return await supabase.from("messages").select("*").order("created_at", { ascending: true });
};