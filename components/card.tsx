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
      <header className="header">
        <h1 className="main-title">What Sets Us Apart</h1>
        <p className="subtitle">
          YOUR FAITH DESERVES A SPACE. START JOURNALING TODAY.
        </p>
      </header>

      <div className="divider"></div>

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
          <p className="card-text">
            With Light Devotion, you set simple duty together to a strong target
            on a blue movie. As you plan comforting your own longtime with your
            LIBELIants, creating greater accomplishments makes devotion a light
            you belong back.
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
            Just folks! One of the key professional people in the community is
            getting good dreams and 50 other ways to help you clear details and
            develop your standard understanding.
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
            Just folks! One of the latest approaches that are very complementary
            to those about how much work you can do for future leaders, helping
            you clear details and discuss what will be done accordingly.
          </p>
        </div>
      </div>
    </div>
  );
}
