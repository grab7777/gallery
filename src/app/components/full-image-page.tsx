import { getImage } from "~/server/queries";
import { Button } from "../_components/button";
import { InfoIcon } from "public/icons/info";
import { ImageInfo } from "../_components/image-info";
import { clerkClient } from "@clerk/nextjs/server";

export const dynamicParams = false;

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const clerkInfo = await (await clerkClient()).users.getUser(image.uploadedBy);
  const uploaderInfo = {
    fullName: clerkInfo.fullName,
    userName: clerkInfo.username, 
  };
  console.log(uploaderInfo);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex-shrink">
        <img
          src={image.url}
          alt={image.name}
          className="max-h-[calc(100vh-3rem)] w-full flex-shrink bg-blue-950 object-contain"
        />
      </div>
      <div className="flex min-h-12 w-full items-center justify-center gap-4 bg-black/90 text-white">
        <div>{image.name}</div>
        <Button size="icon" variant="ghost">
          <InfoIcon />
        </Button>
        <ImageInfo image={image} uploaderInfo={uploaderInfo} />
      </div>
    </div>
  );
}
