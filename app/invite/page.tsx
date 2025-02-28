"use client";

import { useEffect, useState, Suspense, useContext } from "react";
import { useSearchParams } from "next/navigation";
import { Copy } from "lucide-react";
import { fontSans } from "@/config/fonts";
import { TrackExposure, reportTrackingData } from "@/components/track";
import { UUIDContext } from "@/components/userinfo";

const TrackedDiv = TrackExposure("div");

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
  const [name, setName] = useState<string | null>(null);
  const [showBrowserTip, setShowBrowserTip] = useState(false);
  const { uuid } = useContext(UUIDContext);

  useEffect(() => {
    const code = searchParams.get("inviteCode");
    setInviteCode(code);
    const name = searchParams.get("name");
    setName(name);
  }, [searchParams]);

  useEffect(() => {
    if (showQuestion) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showQuestion]);

  const handleAnswer = (isUser: boolean) => {
    setShowQuestion(false);
    setHasVisited(isUser);
  };

  const isInAppBrowser = () => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    return (
      /FBAN|FBAV|Instagram|Twitter|LinkedInApp/i.test(ua) || // Facebook, Instagram, Twitter, LinkedIn
      /Line/i.test(ua) || // Line
      /WhatsApp/i.test(ua) || // WhatsApp
      /Messenger/i.test(ua) // Messenger
    );
  };

  const handleStartPraying = () => {
    reportTrackingData({
      uuid: uuid,
      trackName: "invite_H5_startPraying",
      trackType: "click",
    });

    if (isInAppBrowser()) {
      setShowBrowserTip(true);
    } else {
      // 创建隐藏的iframe来尝试唤醒App
      const appScheme = `faithtime://prayer-request-invite/${inviteCode}`;
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = appScheme;
      document.body.appendChild(iframe);

      // 记录开始时间
      const startTime = Date.now();

      // 检测唤醒是否成功
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;

        // 页面隐藏或超时3秒视为成功唤醒
        if (document.hidden) {
          clearInterval(timer);
          document.body.removeChild(iframe);
          // 成功唤醒，不需要额外操作
        } else if (elapsed > 2000) {
          // 2秒后未隐藏视为失败，跳转到应用商店
          clearInterval(timer);
          document.body.removeChild(iframe);

          // 根据设备类型跳转到相应的应用商店
          const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
          if (isIOS) {
            window.location.href = "https://apps.apple.com/app/6503560893";
          } else {
            window.location.href =
              "https://play.google.com/store/apps/details?id=com.metavibe.faithtime";
          }
        }
      }, 200);

      // 直接尝试通过location唤醒（作为备用方案）
      window.location.href = appScheme;
    }
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
      <TrackedDiv
        trackName="invite_H5"
        className={`w-full bg-cover bg-top bg-no-repeat relative ${fontSans.className}`}
        style={{ backgroundImage: "url('/invite/old-user-background.png')" }}
      >
        {name && (
          <div
            className="absolute top-[100px] left-[20px] text-white text-[31px] font-bold"
            style={{
              textShadow: `
                -2.5px -2.5px 0 #4400C8,
                -2.5px 0 0 #4400C8,
                -2.5px 2.5px 0 #4400C8,
                0 -2.5px 0 #4400C8,
                0 2.5px 0 #4400C8,
                2.5px -2.5px 0 #4400C8,
                2.5px 0 0 #4400C8,
                2.5px 2.5px 0 #4400C8
              `,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            {name}
          </div>
        )}

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
          src="/invite/how-to-pray.png"
          alt="how to pray"
          className="ml-2 mt-3 p-2"
        />
      </TrackedDiv>
      {showQuestion && <QuestionDialog onAnswer={handleAnswer} />}
      {showRules && <RuleDialog onClose={() => setShowRules(false)} />}

      {showBrowserTip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setShowBrowserTip(false)}
          />
          <div className="bg-white rounded-[20px] w-[90vw] max-w-[400px] p-5 z-50">
            <h2 className="text-[20px] font-bold text-center mb-4 text-black">
              Open in Browser
            </h2>
            <p className="text-[16px] text-gray-600 mb-6 text-center">
              Please tap the menu icon and select <br />
              "Open in Browser" or "Open in Safari/Chrome"
            </p>
            <button
              onClick={() => setShowBrowserTip(false)}
              className="w-full py-2 rounded-full bg-[#A07CCF] text-white font-bold"
            >
              Got it
            </button>
          </div>
        </div>
      )}
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
