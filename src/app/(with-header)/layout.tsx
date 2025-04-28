import { Footer } from "@/slices/components/Footer";
import { Header } from "@/slices/components/Header";

type Props = {
  children: React.ReactNode;
  // Add any other props you need
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
