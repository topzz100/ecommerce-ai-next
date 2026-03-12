import { CartSheet } from "@/components/app/CartSheet";
import { Header } from "@/components/app/Header";
import React from "react";
import { Toaster } from "sonner";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <CartSheet />
      <Toaster position="bottom-center" />
    </>
  );
}

export default Layout;
