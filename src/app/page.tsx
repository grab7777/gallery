import exp from "constants";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images].map((image, index) => (
          <div className="flex flex-col text-white" key={image.id}>
            <img className="w-48" src={image.url} key={`${image.id}${index}`} />
            {image.name}
          </div>
        ))}
      </div>
    </main>
  );
}
