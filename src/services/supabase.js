import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yfwuozmpqynafptsskcq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmd3Vvem1wcXluYWZwdHNza2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1ODk5NDEsImV4cCI6MjAxNDE2NTk0MX0.5kRWi9tlJIz0oE6BekpAuSKy8ZK_bRlDKiENmZp9ib4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
