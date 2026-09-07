"use client";

import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { ChatWidget } from "@/components/ChatWidget";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const standalone = pathname === "/finstage-delete-account";

  if (standalone) {
    return <main className="relative z-0 w-full min-w-0 max-w-full overflow-x-clip">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="relative z-0 w-full min-w-0 max-w-full overflow-x-clip">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
