import Image from "next/image";
import { getImage } from "~/server/queries";

export const dynamicParams = false;

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return <Image src={image.url} alt={image.name} width={500} height={500} />;
}
