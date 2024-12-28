import {notFound} from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function categoryPage({ params }: Props) {
  const { id } = await params; // Usa `await` aquí para evitar el error


  if (id === 'kid'){
    notFound();
  }
  return (
    <div>
      <h1>Category page {id}</h1>
    </div>
  );
}
