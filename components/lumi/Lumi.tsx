import { useEffect, useRef, useState } from "react";
import { animationConfigs, footAnimations, handAnimations, LumiAnimationType, LumiColorType, moodAnimations } from "./config";
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

  const [lumiAnimationData, setLumiAnimationData] = useState(null);
  const [moodAnimationData, setMoodAnimationData] = useState(null);
  const [handAnimationData, setHandAnimationData] = useState(null);
  const [footAnimationData, setFootAnimationData] = useState(null);
  
  const lumiRef = useRef<LottieRefCurrentProps>(null);
  const moodRef = useRef<LottieRefCurrentProps>(null);
  const handRef = useRef<LottieRefCurrentProps>(null);
  const footRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // 加载 Lumi 动画
    const animationSource = () => {
      const notNullColor = color || "white";
      const colorConfigs = animationConfigs[notNullColor];
      const levelConfig = colorConfigs[animation];
      return levelConfig[1];
    };

    fetch(animationSource().uri)
      .then((res) => res.json())
      .then(setLumiAnimationData)
      .catch(console.error);

    // 加载 Mood 动画
    if (animation in moodAnimations) {
      fetch(moodAnimations[animation as keyof typeof moodAnimations])
        .then((res) => res.json())
        .then(setMoodAnimationData)
        .catch(console.error);
    } else {
      setMoodAnimationData(null);
    }

    // 加载 Hand 动画
    if (animation in handAnimations) {
      fetch(handAnimations[animation as keyof typeof handAnimations])
        .then((res) => res.json())
        .then(setHandAnimationData)
        .catch(console.error);
    } else {
      setHandAnimationData(null);
    }

    // 加载 Foot 动画
    if (animation in footAnimations) {
      fetch(footAnimations[animation as keyof typeof footAnimations])
        .then((res) => res.json())
        .then(setFootAnimationData)
        .catch(console.error);
    } else {
      setFootAnimationData(null);
    }
  }, [animation, color]);

  // 控制所有动画的播放状态
  useEffect(() => {
    const refs = [lumiRef, moodRef, handRef, footRef];
    const animationDatas = [lumiAnimationData, moodAnimationData, handAnimationData, footAnimationData];
    
    refs.forEach((ref, index) => {
      if (animationDatas[index] && ref.current) {
        if (isPlaying) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      }
    });
  }, [isPlaying, lumiAnimationData, moodAnimationData, handAnimationData, footAnimationData]);

  return (
    <div style={{position:"relative",zIndex:1}}>
      {/* Lumi 动画 */}
      {lumiAnimationData && (
        <Lottie
          lottieRef={lumiRef}
          animationData={lumiAnimationData}
          style={{ width: size, height: size ,position:"relative",zIndex:1}}
          loop={true}
          autoplay={isPlaying}
        />
      )}
      
      {/* Mood 动画 */}
      {moodAnimationData && (
        <Lottie
          lottieRef={moodRef}
          animationData={moodAnimationData}
          style={{position:"absolute", width: size, height: size ,zIndex:3,top:0}}
          loop={true}
          autoplay={true}
        />
      )}
      
      {/* Hand 动画 */}
      {handAnimationData && (
        <Lottie
          lottieRef={handRef}
          animationData={handAnimationData}
          style={{position:"absolute", width: size, height: size,zIndex:2,top:0 }}
          loop={true}
          autoplay={isPlaying}
        />
      )}
      
      {/* Foot 动画 */}
      {footAnimationData && (
        <Lottie
          lottieRef={footRef}
          animationData={footAnimationData}
          style={{position:"absolute", width: size, height: size,zIndex:-1,top:0 }}
          loop={true}
          autoplay={isPlaying}
        />
      )}
    </div>
  );
}
