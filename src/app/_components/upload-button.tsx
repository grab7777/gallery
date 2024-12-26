import { useRouter } from "next/navigation";
import { UploadIcon } from "public/icons/upload";
import { useUploadThing } from "~/utils/uploadthing";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

export default function UploadButton() {
  const router = useRouter();
  const { inputProps, isUploading } = useUploadThingInputProps(
    "imageUploader",
    {
      onClientUploadComplete() {
        router.refresh();
      },
    },
  );
  return (
    <div>
      <label htmlFor="upload-button" className="flex cursor-pointer gap-2 px-6">
        Upload
        <UploadIcon />
      </label>
      <input
        id="upload-button"
        className="sr-only"
        type="file"
        disabled={isUploading}
        {...inputProps}
      />
    </div>
  );
}
