import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wyjqpnvigpboeqcatnlp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5anFwbnZpZ3Bib2VxY2F0bmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDI3NTMsImV4cCI6MjAyNTk3ODc1M30.lnCM-M-VdtdEWzLWPnRircy8eeiw9gsC8MMWx9kLu60";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;