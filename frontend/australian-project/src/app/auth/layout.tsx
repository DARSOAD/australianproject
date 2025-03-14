import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import { Sidebar, TopMenu } from "@/components";

export default async function shopLayout({
 children
}: {
 children: React.ReactNode;
}) {

  const session = await auth();
  if(session?.user){
    redirect('/')
  }
  
  return (
    <main className="min-h-screen">
      <TopMenu/>
      <Sidebar />
      <div className='w-full sm:w-[350px]'>
        {children}
      </div>
    </main>
  );
}