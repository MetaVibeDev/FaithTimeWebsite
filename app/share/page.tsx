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
    const start = Date.now();
    setTimeout(() => {
      if (Date.now() - start < 2000) {
        if (typeof window !== 'undefined') {
          const ua = navigator.userAgent || navigator.vendor;
          const params = new URLSearchParams(window.location.search);
          if (params.get('download') === '1') {
            if (/iPad|iPhone|iPod/.test(ua)) {
              window.location.href = 'https://apps.apple.com/app/faithtime/id6503560893';
            } else if (/android/i.test(ua)) {
              window.location.href = 'https://play.google.com/store/apps/details?id=com.metavibe.faithtime&gl=SG';
            }
          }
        }
      }
    }, 1500);
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
