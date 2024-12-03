import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sbkcivwgiopyljqhyxrb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNia2NpdndnaW9weWxqcWh5eHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMzkyOTEsImV4cCI6MjA0ODcxNTI5MX0.S3vEx9_V74nAyAQBQmIjkRhGw8rvPpw-mFiptOk2y-U'

export const supabase = createClient(supabaseUrl, supabaseKey)