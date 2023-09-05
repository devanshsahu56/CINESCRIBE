"use client";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from '@/Components/Nav'
import { Provider } from "react-redux";
import { store } from "@/store/store";
export const metadata = {
  title: "CINESCRIBE",
  description: "A MOVIES DATABASE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Nav />
        <Provider store={store}>
          {children}
          <ToastContainer/>
        </Provider>
      </body>
    </html>
  );
}
