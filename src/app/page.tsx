import "@uploadthing/react/styles.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const Images = async () => {
    const images = await getMyImages();

    return (
      <div className="flex w-full flex-wrap gap-4">
        {images.map((image) => (
          <div
            className="flex h-56 w-48 flex-col justify-center gap-2 overflow-hidden text-white"
            key={image.id}
          >
            <Image
              src={image.url}
              width={192}
              height={192}
              alt={image.name}
              style={{ overflow: "hidden", objectFit: "cover" }}
            />
            <div>{image.name}</div>
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
