import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://kwagvokhgbgszlbcamhn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3YWd2b2toZ2Jnc3psYmNhbWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NjQ5MjIsImV4cCI6MjA2MzI0MDkyMn0.rgP6nisP-ape24pST5XFWReI-qpa6DYVDeBzcrc4uJM'
)