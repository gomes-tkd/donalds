import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1>Nossa Lista de restaurantes:</h1>
        <div className={"flex flex-col justify-center items-center gap-4"}>
            <Link href={"/fsw-donalds"}>Donalds</Link>
        </div>
    </main>
  );
}
