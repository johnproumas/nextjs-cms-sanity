import HeroSection from "@/components/HeroSection";
import NewProducts from "@/components/NewProducts";
import { client } from "@/lib/sanity";

export const dynamic = "force-dynamic";

export default async function Home() {
  const pets = await client.fetch(`*[_type == "category"]`);
  return (
    <main className="flex flex-col max-w-[1920px] w-full mx-auto p-2 xl:p-4">
      <HeroSection />
      <NewProducts />
    </main>
  );
}
