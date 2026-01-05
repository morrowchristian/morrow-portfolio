// src/Main.tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
