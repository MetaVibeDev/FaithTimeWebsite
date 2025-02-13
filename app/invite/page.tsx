"use client";

import { Button, Progress } from "@nextui-org/react";
import { useState } from "react";

export default function InvitePage() {
  const [inviteCount, setInviteCount] = useState(0);
  const maxInvites = 2;

  const rewards = [
    { amount: "1元", status: "已完成" },
    { amount: "2元", status: "进行中" },
    { amount: "5元", status: "待开始" },
    { amount: "10元", status: "待开始" },
  ];

  const handleInvite = () => {
    // 记录当前时间
    const startTime = Date.now();

    // 尝试打开应用
    window.location.href = "faithtime://";

    // 设置一个定时器，如果应用没有打开（通常是未安装），则跳转到应用商店
    setTimeout(() => {
      // 如果页面仍然可见（说明应用没有被打开）
      if (document.hidden || Date.now() - startTime > 2000) return;

      // 根据平台跳转到相应的应用商店
      if (/android/i.test(navigator.userAgent)) {
        window.location.href =
          "https://play.google.com/store/apps/details?id=你的应用包名";
      } else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
        window.location.href = "https://apps.apple.com/app/你的应用ID";
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-green-200 p-4">
      {/* 顶部标题 */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white">邀好友助力得打车费</h1>
        <p className="text-white/80 mt-2">最高可得18元</p>
      </div>

      {/* 进度条区域 */}
      <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm mb-6">
        <Progress
          value={(inviteCount / maxInvites) * 100}
          className="mb-4"
          color="warning"
        />
        <div className="flex justify-between">
          {rewards.map((reward, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 
                ${
                  reward.status === "已完成"
                    ? "bg-orange-500"
                    : reward.status === "进行中"
                      ? "bg-orange-300"
                      : "bg-gray-300"
                }`}
              >
                <span className="text-white font-bold">{reward.amount}</span>
              </div>
              <span className="text-xs text-white/80">{reward.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 邀请区域 */}
      <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm mb-6">
        <p className="text-center text-white mb-4">
          还需邀请{maxInvites - inviteCount}人即可获得
        </p>
        <div className="flex justify-center gap-4">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center"
            >
              <span className="text-4xl text-white/50">+</span>
            </div>
          ))}
        </div>
      </div>

      {/* 邀请按钮 */}
      <Button
        className="w-full bg-orange-500 text-white font-bold py-4 rounded-full"
        onClick={handleInvite}
      >
        立即邀请
      </Button>

      {/* 活动规则 */}
      <div className="mt-6 text-center">
        <p className="text-xs text-white/80">本轮活动规则 23:59:59</p>
        <p className="text-xs text-white/80 mt-2">100福利会 = 1元打车费</p>
      </div>
    </div>
  );
}
