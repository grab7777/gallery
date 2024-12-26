"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UploadButton from "./upload-button";

export default function TopNav() {
  return (
    <nav className="flex min-h-24 items-center justify-between p-4 text-xl font-bold text-white">
      <div>Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
