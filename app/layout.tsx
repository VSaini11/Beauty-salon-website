import React, { JSX } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster'; // ✅ Import Toaster

export const metadata: Metadata = {
  title: 'V0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Toaster /> {/* ✅ Add Toaster here */}
      </body>
    </html>
  );
}
