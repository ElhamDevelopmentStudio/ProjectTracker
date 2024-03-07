import Image from "next/image";
import AddToCart from "./components/AddToCart";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && session.user!.name}</h1>
      <AddToCart />
    </main>
  );
}
