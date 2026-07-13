import Footer from "@/components/Footer";

export const metadata = {
  title: "Samueljs_ | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
