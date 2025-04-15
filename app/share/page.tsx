"use client";

import Home from "@/app/page";
import {usePathname} from "next/navigation";
import { useEffect, Suspense } from "react";

function SharePageContent() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  useEffect(() => {
    const type = pathSegments[2]; // 获取 prayer-request-share
    const params = pathSegments[3]; // 获取 252
    console.log(type,params)
    window.location.href = `faithtime://${type}/${params}`;
  }, []);

  return <Home />;
}

export default function SharePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SharePageContent />
    </Suspense>
  );
}
