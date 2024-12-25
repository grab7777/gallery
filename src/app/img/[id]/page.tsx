import Image from "next/image";
import { getImage } from "~/server/queries";
import FullPageImageView from "~/app/components/full-image-page";

export const dynamicParams = false;

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const idAsNumber = parseInt(id);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid ID");
  }

  const image = await getImage(idAsNumber);
  return <FullPageImageView id={idAsNumber} />;
}
