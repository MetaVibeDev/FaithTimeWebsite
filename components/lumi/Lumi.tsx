import { useEffect, useRef, useState } from "react";
import { animationConfigs, LumiAnimationType, LumiColorType } from "./config";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

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
  isPlaying?: boolean;
}

export default function Lumi(props: LumiAnimationProps) {
  const {
    animation,
    color,
    size = 100,
    progress,
    showBible,
    showStar,
    isPlaying = false,
    ...restProps
  } = props;

  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const animationSource = () => {
      const notNullColor = color || "white";
      const colorConfigs = animationConfigs[notNullColor];
      const levelConfig = colorConfigs[animation];
      return levelConfig[1];
    };

    fetch(animationSource().uri)
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.pause();
    }
  }, [isPlaying]);

  if (!animationData) return null;

  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        style={{ width: size, height: size }}
        loop={true}
        autoplay={false}
      />
    </div>
  );
}
