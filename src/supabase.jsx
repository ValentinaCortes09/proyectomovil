import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gsjfoolpbqhampcoohzi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzamZvb2xwYnFoYW1wY29vaHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNjI3OTcsImV4cCI6MjA2MzkzODc5N30.OjsooG5FxtwRxJXVQjOMnNDpwCQgqdn1b1vnRISmoV0';
export const supabase = createClient(supabaseUrl, supabaseKey);