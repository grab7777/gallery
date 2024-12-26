import { images } from "~/server/db/schema";

type ImageInfoProps = {
  image: typeof images.$inferSelect;
  uploaderInfo: UserInfoProps;
};

type UserInfoProps = {
  fullName: string | null;
  userName: string | null;
};

const InfoRow = ({ label, value }: { label: string; value: string | null }) => {
  if (!value) {
    return null;
  }
  return (
    <div className="flex gap-1">
      <div className="font-bold text-slate-400">{label}</div>
      <div className="font-normal text-slate-600">{value}</div>
    </div>
  );
};

export const ImageInfo = ({ image, uploaderInfo }: ImageInfoProps) => {
  return (
    <div className="flex flex-col text-xs">
      <InfoRow label="Created" value={new Date(image.createdAt).toLocaleString()} />
      <InfoRow
        label="Uploaded by"
        value={uploaderInfo.fullName ?? uploaderInfo.userName}
      />
    </div>
  );
};
