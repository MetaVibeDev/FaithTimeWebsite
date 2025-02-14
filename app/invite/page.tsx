"use client";

import { useEffect, useState } from "react";

export default function InvitePage() {
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("hasVisitedInvitePage") === "true";
    setHasVisited(visited);
    if (!visited) {
      localStorage.setItem("hasVisitedInvitePage", "true");
    }
  }, []);

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
          />
        </div>
        <img
          src={
            hasVisited
              ? "/invite/claim-rewards-old.png"
              : "/invite/claim-rewards.png"
          }
          alt="claim rewards"
          className="w-full"
        />
        <img
          src="/invite/how-to-pray.png"
          alt="how to pray"
          className="w-full"
        />
      </div>
    </div>
  );
}
