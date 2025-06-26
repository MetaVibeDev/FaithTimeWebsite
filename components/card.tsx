import React, { useState } from "react";
import "../styles/card.css";

// 定义图片对象的类型
type CardImage = {
  default: string;
  hover: string;
};

export default function Card() {
  // 定义每张卡片的图片集合（使用 CardImage 类型）
  const cardImages: CardImage[] = [
    {
      default: "/star/icon-1.png",
      hover: "/star/icon.png",
    },
    {
      default: "/star/love-1.png",
      hover: "/star/love.png",
    },
    {
      default: "/star/Frame-1.png",
      hover: "/star/Frame.png",
    },
  ];

  // 明确指定 hoverStates 的类型为 boolean[]
  const [hoverStates, setHoverStates] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  // 为 index 参数添加类型注解
  const handleMouseEnter = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  // 为 index 参数添加类型注解
  const handleMouseLeave = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div className="faith-app">
      <div className="white-background">
        <img src="/star/BG.png" className="w-full h-full" alt="Background" />
      </div>
      <div className="background-container">
        <div className="background-image"></div>
      </div>
      <header className="header">
        <h1 className="main-title">What Sets Us Apart</h1>
        <p className="subtitle">
          YOUR FAITH DESERVES A SPACE. START JOURNALING TODAY.
        </p>
      </header>

      <div className="features-container">
        {/* 卡片 1 - Light Devotion */}
        <div
          className="feature-card"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          <div className="card-icon-container">
            <div className="card-icon">
              <img
                src={
                  hoverStates[0] ? cardImages[0].hover : cardImages[0].default
                }
                alt="Devotion Icon"
                className="icon-image"
              />
            </div>
          </div>

          <h2 className="card-title">Light Devotion, Everyday Growth</h2>
          <p className="card-text ">
            With Light Devotion, you set simple daily goals—like a short prayer
            or a Bible verse. As you stay consistent, you grow together with
            your Little Lamb, receiving gentle encouragement that makes devotion
            a light yet lasting habit.
          </p>
        </div>

        {/* 卡片 2 - Faith Community */}
        <div
          className="feature-card"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <div className="card-icon-container">
            <div className="card-icon">
              <img
                src={
                  hoverStates[1] ? cardImages[1].hover : cardImages[1].default
                }
                alt="Community Icon"
                className="icon-image"
              />
            </div>
          </div>

          <h2 className="card-title">A Warm and Supportive Faith Community</h2>
          <p className="card-text">
            Ask Bible Chat offers you professional and easy-to-understand
            answers about doctrine and Scripture anytime, helping to clear
            doubts and deepen your spiritual understanding.
          </p>
        </div>

        {/* 卡片 3 - Faith Guidance */}
        <div
          className="feature-card"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <div className="card-icon-container">
            <div className="card-icon">
              <img
                src={
                  hoverStates[2] ? cardImages[2].hover : cardImages[2].default
                }
                alt="Guidance Icon"
                className="icon-image"
              />
            </div>
          </div>

          <h2 className="card-title">
            Authoritative and Intelligent Faith Guidance
          </h2>
          <p className="card-text">
            Ask Bible Chat offers users professional and easy-to-understand
            answers about doctrine and Scripture anytime, helping to clear
            doubts and deepen spiritual understanding.
          </p>
        </div>
      </div>
    </div>
  );
}
