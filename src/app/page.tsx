import "@uploadthing/react/styles.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const Images = async () => {
    const images = await getMyImages();

    return (
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div
            className="flex h-48 w-48 flex-col justify-center overflow-hidden text-white"
            key={image.id}
          >
            <Image
              src={image.url}
              style={{ objectFit: "cover" }}
              width={192}
              objectFit="cover"
              height={192}
              alt={image.name}
            ></Image>
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
