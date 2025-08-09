"use client";
import Home from "@/app/page";
import { usePathname } from "next/navigation";
import { useEffect, Suspense } from "react";

function SharePageContent() {
  const pathname = usePathname();
  const pathSegments = pathname?.split("/") || [];
  const type = pathSegments[2];
  const params = pathSegments[3];
  useEffect(() => {
    window.location.href = `faithtime://${type}/${params}`;
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const ua = navigator.userAgent || navigator.vendor;
        if (/iPad|iPhone|iPod/.test(ua)) {
          window.location.href = 'https://apps.apple.com/app/faithtime/id6503560893';
        } else if (/android/i.test(ua)) {
          window.location.href = 'https://play.google.com/store/apps/details?id=com.metavibe.faithtime&gl=SG';
        }
      }
    }, 500);
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
