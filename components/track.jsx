import React, { useRef, useEffect, useState } from 'react';

// Click event tracking
// use Higher-Order Component to enhance the wrapped component
const TrackClick = (BaseComponent) => {
  const EnhancedComponent = ({
    trackName,
    ...props
  }) => {

  const handleClick = (event) => {
      console.log("click collect:"+trackName)

      if (props.onClick)
      {
          props.onClick(event);
      }
    }

    return (
      <BaseComponent
          onClick={handleClick}
          {...props}
      />
    );
  }

  return EnhancedComponent;
};

export default TrackClick;

// Exposure event tracking
const TrackExposure = (BaseComponent) => {
  const EnhancedComponent = ({
      trackName,
      exposureRatioThresh,
      exposureTimeThresh, // ms, second(s)
      ...props
    }) => {
      const trackTargetRef = useRef(null);
      const [exposed, setExposed] = useState(false);

      let exposureTimer = null;

      const checkExposure = (entry) => {
        return (entry.isIntersecting && entry.intersectionRatio >= exposureRatioThresh);
      }

      const handleExposure = () => {
        console.log("exposure collect: exposure time over "+exposureTimeThresh+" ms!");
      }

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          console.log("observer callback: intersectionRatio = "+entry.intersectionRatio);

          if (checkExposure(entry)) {
            setExposed(true);
            exposureTimer = setTimeout(handleExposure, exposureTimeThresh);
          }
          else
          {
            setExposed(false);
            clearTimeout(exposureTimer);
          }
        });
      }

      // NOTE: manually REFRESH the localhost page in browser, to make
      // any code modification within the useEffect part to take effect
      useEffect(() => {
        const observer = new IntersectionObserver(
          observerCallback,
          {
              // root: null, // Use the viewport as the root
              // rootMargin: "0px 0px 0px 0px",
              threshold: [0, 1], // Trigger when any part of the component is visible
          }
        );

        if (trackTargetRef.current) {
          observer.observe(trackTargetRef.current);
        }

        return () => {
          observer.disconnect();
        };
      }, [trackTargetRef]);

      return (
        <BaseComponent
          ref={trackTargetRef}
          {...props}
        />
      );
  }

  return EnhancedComponent;
}

export { TrackExposure };