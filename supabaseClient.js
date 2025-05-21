import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://nntiriosaaaumiaygddl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5udGlyaW9zYWFhdW1pYXlnZGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5OTQ3NjIsImV4cCI6MjA2MjU3MDc2Mn0.H_d1nTWC42Ki9xtTsCUQxMI_zdaigFBYPj5GaCkSZCs'
)