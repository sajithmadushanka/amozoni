import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/header";

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col min-h-screen" >
        <Header />
        <main className = "flex-1 flex flex-col">{children}</main>
        <Footer />
        </div>
    );
  }
  