import { useEffect, useMemo, useState } from "react";
import { animationConfigs, LumiAnimationType, LumiColorType } from "./config";
import Lottie from "lottie-react";
interface LottieProps {
  source?: string;
}

export interface LumiAnimationProps {
  standby?: boolean;
  animation: LumiAnimationType;
  color?: LumiColorType;
  lottieProps?: LottieProps;
  size?: number;
  progress?: number;
  showBible?: boolean;
  showStar?: boolean;
}

export default function Lumi(props: LumiAnimationProps) {
  const {
    animation,
    color,
    size = 100,
    progress,
    showBible,
    showStar,
    ...restProps
  } = props;

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const animationSource = () => {
      const notNullColor = color || "white";
      const colorConfigs = animationConfigs[notNullColor];
      const levelConfig = colorConfigs[animation];
      return levelConfig[1];
    };

    fetch(animationSource().uri) // 可是本地 public 文件，也可以是远程 URL
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);
  if (!animationData) return null;
  return (
    <Lottie
      animationData={animationData}
      style={{ width: size, height: size }}
      loop={true}
    />
  );
}
