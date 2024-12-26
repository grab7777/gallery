import Image from "next/image";
import { getImage } from "~/server/queries";

export const dynamicParams = false;

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex-shrink">
        <img
          src={image.url}
          alt={image.name}
          className="max-h-[calc(100vh-3rem)] w-full flex-shrink resize bg-blue-950 object-contain"
          //   width={0}
          //   height={0}
          //   layout="fill"
          //   objectFit="contain"
          //   style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <div className="flex min-h-12 w-full items-center justify-center bg-black/90 text-white">
        <div>{image.name}</div>
      </div>
    </div>
  );
}
