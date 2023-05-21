import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yimxmipeetmkgljwkctn.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbXhtaXBlZXRta2dsandrY3RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ2MjU1NTIsImV4cCI6MjAwMDIwMTU1Mn0.baCjvMIosSPuZ1scuH8Foi2iVgS5SYFM1n96AmNAiw8'
export const supabase = createClient(supabaseUrl, supabaseKey);
