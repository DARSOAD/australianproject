import { Sidebar, TopMenu } from "@/components";
import { Footer } from "@/components/ui/footer/Footer";

export default function shopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-black"> 
      <TopMenu />
      <Sidebar />
      <div className="px-0">
        {children}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
