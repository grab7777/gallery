import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/950pa5iOjbXhrY4rmehHHTyw1tJpV6UAckXaPmWRSKxbuOZC",
    "https://utfs.io/f/950pa5iOjbXhZ9igpzdMrGAUyvNhcL4jZdKJPi5ITYnDE8H3",
    "https://utfs.io/f/950pa5iOjbXh0arEzEmhHerFKwYpLa2hTDudZnsV7oMW1GiS",
    "https://utfs.io/f/950pa5iOjbXhOoTLKAf056sq8XpAxHMeP2R4FVBZdhnauczo",
  ];

  const posts = await db.query.posts.findMany();
  console.log(posts);

  const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div className="text-red-50" key={post.id}>
            {post.name}
          </div>
        ))}
        {[
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
        ].map((image, index) => (
          <img className="w-48" src={image.url} key={`${image.id}${index}`} />
        ))}
      </div>
    </main>
  );
}
