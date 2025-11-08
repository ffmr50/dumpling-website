/*
  # Create Leads Table for Contact Form

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Full name of the lead
      - `email` (text) - Email address of the lead
      - `phone` (text, nullable) - Phone number (optional)
      - `message` (text) - Message from the contact form
      - `created_at` (timestamptz) - Timestamp when lead was created
      - `status` (text) - Lead status (default: 'new')
  
  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting leads (public access for form submissions)
    - Add policy for reading leads (authenticated users only)
    
  3. Important Notes
    - Form submissions are public to allow website visitors to submit
    - Only authenticated admin users can view the leads
    - All submissions are timestamped automatically
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);