import React, { useRef, useEffect, useState } from 'react';

// Click event tracking
// Higher-Order Component
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

    // return the enhanced component
    return EnhancedComponent;
};

export default TrackClick;

// Exposure event tracking
const TrackExposure = ({
        trackName,
        exposureRatioThresh,
        exposureTimeThresh, // ms, second(s)
    }) => {
        const targetRef = useRef(null);
        const [exposed, setExposed] = useState(false);

        let exposureTimer = null;

        const checkExposure = (entry) => {
            return (entry.isIntersecting && entry.intersectionRatio >= exposureRatioThresh);
        }

        const handleExposure = () => {
          console.log("exposure collect: exposure time over "+exposureTimeThresh+" ms!");
        }

        // NOTE: manually REFRESH the localhost page in browser, to make
        // any code modification within the useEffect part to take effect
        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  console.log("observer callback: intersectionRatio = "+entry.intersectionRatio);
                  if (checkExposure(entry)) {
                    console.log("Component entered the viewport!");
                    setExposed(true);

                    exposureTimer = setTimeout(
                      handleExposure,
                      exposureTimeThresh
                    )
                  }
                  else
                  {
                    console.log("Component exited the viewport!");
                    setExposed(false);

                    clearTimeout(exposureTimer); // Clear timer if component is no longer exposed
                  }
                });

                }
                ,
                {
                    root: null, // Use the viewport as the root
                    threshold: [0, 1], // Trigger when any part of the component is visible
                }
            );

            if (targetRef.current) {
                observer.observe(targetRef.current);
            }

            return () => {
                observer.disconnect();
            };
        }, [targetRef.current]);

        return (
            <div ref={targetRef}>
                testComponent
            </div>
        );
};

export { TrackExposure };