"use client";

import Home from "@/app/page";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function SharePageContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const postID = searchParams.get("postID");
    window.location.href = `faithtime://prayer-request-share/${postID}`;
  }, [searchParams]);

  return <Home />;
}

export default function SharePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SharePageContent />
    </Suspense>
  );
}
