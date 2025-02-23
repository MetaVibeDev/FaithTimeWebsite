"use client";

import Home from "@/app/page";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Share() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const postID = searchParams.get("postID");
    window.location.href = `faithtime://prayer-request-share/${postID}`;
  }, [searchParams]);

  return <Home />;
}
