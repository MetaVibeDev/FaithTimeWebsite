"use client";

import Home from "@/app/page";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

export default function Share() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const postID = searchParams.get("postID");
    window.location.href = `faithtime://prayer-request-share/${postID}`;
  }, [searchParams]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
