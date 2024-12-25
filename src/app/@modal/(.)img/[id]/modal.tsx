"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { CrossIcon } from "public/cross";
import { Button } from "~/app/_components/button";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-0 flex h-screen w-screen flex-row-reverse bg-black/80"
      onClose={onDismiss}
    >
      <Button
        size="icon"
        className="z-20 m-6 border border-slate-700 shrink-0"
        onClick={onDismiss}
        variant={"secondary"}
      >
        <CrossIcon />
      </Button>
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
