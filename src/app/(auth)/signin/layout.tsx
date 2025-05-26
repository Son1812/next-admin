// app/(auth)/login/layout.tsx
'use client'
import "@/css/satoshi.css";
import "@/css/style.css";
import "@/style/index.scss"
import "@/style/dialog.scss"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";

export default function SigninLayout({ children }: { children: React.ReactNode }) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="grid mx-auto w-full max-w-xl h-[100vh] items-center px-3">
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}

