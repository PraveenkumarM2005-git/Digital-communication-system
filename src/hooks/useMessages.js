import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

export const useMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel('messages')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'messages' },
        () => fetchMessages()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchMessages = async () => {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    setMessages(data || []);
  };

  return { messages };
};