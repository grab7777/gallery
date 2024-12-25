import Image from "next/image";
import { getImage } from "~/server/queries";

export const dynamicParams = false;

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full content-center items-center">
      <Image
        src={image.url}
        alt={image.name}
        width={0}
        height={0}
        layout="fill"
        objectFit="contain"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}
