"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function InvitePage() {
  const [hasVisited, setHasVisited] = useState(false);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("inviteCode");
    setInviteCode(code);

    const visited = localStorage.getItem("hasVisitedInvitePage") === "true";
    setHasVisited(visited);
    if (!visited) {
      localStorage.setItem("hasVisitedInvitePage", "true");
    }
  }, [searchParams]);

  const handleStartPraying = () => {
    // if (inviteCode) {
    //   window.location.href = `https://www.google.com?code=${inviteCode}`;
    // } else {
    //   window.location.href = "faithtime://";
    // }
    window.location.href = "faithtime://";
  };

  return (
    <div
      className="w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/invite/old-user-background.png')" }}
    >
      <div className="flex flex-col space-y-5 pt-[500px] w-full px-4">
        <div className="relative w-full">
          <img
            src="/invite/your-rewards.png"
            alt="your rewards"
            className="w-full"
          />
          <img
            src="/invite/start-praying-button.png"
            alt="how to pray"
            className="w-full absolute bottom-0 animate-pulse-scale"
            onClick={handleStartPraying}
          />
        </div>
        <div className="relative w-full">
          <img
            src={
              hasVisited
                ? "/invite/claim-rewards-old.png"
                : "/invite/claim-rewards.png"
            }
            alt="claim rewards"
            className="w-full"
          />
          {inviteCode && (
            <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 text-[#FFB600] font-bold text-[18px]">
              {inviteCode}
            </div>
          )}
        </div>
        <img
          src="/invite/how-to-pray.png"
          alt="how to pray"
          className="w-full"
        />
      </div>
    </div>
  );
}
