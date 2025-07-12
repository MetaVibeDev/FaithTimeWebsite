"use client";
import Home from "@/app/page";
import { usePathname } from "next/navigation";
import { useEffect, Suspense } from "react";

function SharePageContent() {
  const pathname = usePathname();
  const pathSegments = pathname?.split("/") || [];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const type = pathSegments[2];
      const params = pathSegments[3];
      console.log(type, params);
      window.location.href = `faithtime://${type}/${params}`;
    }
  }, [pathSegments]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          FaithTime App-The Most Real Faith App for Gen Z
        </h1>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            At FaithTime, every prayer, every devotion, every quiet moment helps
            your inner lamb grow stronger. This lamb isn't just a companion—it's
            a reflection of you on your journey with God.
          </p>
          <p>
            As you stay faithful in your spiritual habits, your lamb matures—and
            so do you.
          </p>
          <p>
            Join the community to share your faith journey, connect with others,
            and walk together in grace. Wherever you are in your walk with God,
            you're never alone here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SharePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SharePageContent />
    </Suspense>
  );
}
