"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Copy } from "lucide-react";
import Image from "next/image";

function QuestionDialog({ onAnswer }: { onAnswer: (isUser: boolean) => void }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative">
          <img
            src="/invite/question-console-bg.png"
            alt="question dialog"
            className="w-[90vw] max-w-[342px]"
          />
          <div className="absolute bottom-6 left-0 right-0 flex flex-col space-y-3 px-4">
            <button
              onClick={() => onAnswer(true)}
              className="px-8 py-2.5 rounded-full bg-[#A07CCF] text-white font-bold"
            >
              Yes
            </button>
            <button
              onClick={() => onAnswer(false)}
              className="px-8 py-2.5 rounded-full bg-[#A07CCF] text-white font-bold"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function RuleDialog({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-[20px] w-[90vw] max-w-[400px] p-5">
          <h2 className="text-[28px] font-bold text-center mb-6 text-black">
            Activity Rules
          </h2>
          <div className="space-y-6 mb-8">
            <p className="text-[16px] text-black">
              1.Each user can only be invited once. Users who have been invited
              before will not be eligible for rewards.
            </p>
            <p className="text-[16px] text-black">
              2.Fraudulent invitation attempts will result in clearing of data
              and rewards.
            </p>
            <p className="text-[16px] text-black">
              3.FaithTime reserves the final right to interpret this activity.
              Contact us for any inquiries.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full py-2 rounded-full bg-[#A07CCF] text-white font-bold text-[18px]"
          >
            I know
          </button>
        </div>
      </div>
    </>
  );
}

function InvitePageContent() {
  const [hasVisited, setHasVisited] = useState(true);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const [showQuestion, setShowQuestion] = useState(true);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    const code = searchParams.get("inviteCode");
    setInviteCode(code);
  }, [searchParams]);

  const handleAnswer = (isUser: boolean) => {
    setShowQuestion(false);
    setHasVisited(isUser);
  };

  const handleStartPraying = () => {
    window.location.href = "faithtime://";
  };

  const handleCopyInviteCode = () => {
    if (inviteCode) {
      navigator.clipboard
        .writeText(inviteCode)
        .then(() => {
          alert("Invitation code copied");
        })
        .catch((err) => {
          console.error("Copy failed:", err);
        });
    }
  };

  return (
    <>
      <div
        className="w-full bg-cover bg-top bg-no-repeat relative"
        style={{ backgroundImage: "url('/invite/old-user-background.png')" }}
      >
        <div
          className="absolute top-[68px] right-0 bg-[#00000050] text-[#ffffffc2] px-4 py-1 rounded-l-full font-medium cursor-pointer"
          onClick={() => setShowRules(true)}
        >
          Rule
        </div>

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
            {inviteCode && !hasVisited && (
              <div
                className="absolute bottom-7 left-[37%] transform text-[#FFB600] flex flex-row font-bold text-[16px] items-center cursor-pointer"
                onClick={handleCopyInviteCode}
              >
                {inviteCode}
                <Copy className="w-5 h-5 ml-1" strokeWidth={2.5} />
              </div>
            )}
          </div>
        </div>

        <img
          src="/invite/how-to-pray-2.png"
          alt="how to pray"
          className="p-4 mt-1"
        />
      </div>
      {showQuestion && <QuestionDialog onAnswer={handleAnswer} />}
      {showRules && <RuleDialog onClose={() => setShowRules(false)} />}
    </>
  );
}

export default function InvitePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvitePageContent />
    </Suspense>
  );
}
