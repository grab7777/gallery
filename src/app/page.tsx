import "@uploadthing/react/styles.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const Images = async () => {
    const images = await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });

    return (
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div className="flex flex-col text-white" key={image.id}>
            <img className="w-48" src={image.url} />
            {image.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="">
      <SignedOut>
        <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
          Please sign in ↗️
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
