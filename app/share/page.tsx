"use client";
import Home from "@/app/page";
import { usePathname } from "next/navigation";
import { useEffect, Suspense } from "react";

function SharePageContent() {
  const pathname = usePathname();
  const pathSegments = pathname?.split('/') || [];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const type = pathSegments[2];
      const params = pathSegments[3];
      console.log(type, params);
      window.location.href = `faithtime://${type}/${params}`;
    }
  }, [pathSegments]);

  return <Home />;
}

export default function SharePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SharePageContent />
    </Suspense>
  );
}
