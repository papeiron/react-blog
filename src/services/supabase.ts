import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

export const supabaseUrl = import.meta.env.VITE_API_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
