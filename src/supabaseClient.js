import { createClient } from '@supabase/supabase-js';

console.log('Env:', import.meta.env); // Cek apakah VITE_* tersedia
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase configuration missing. Check .env or deployment settings.');
  throw new Error('Supabase URL or Key is missing');
}

export const supabase = createClient(supabaseUrl, supabaseKey);