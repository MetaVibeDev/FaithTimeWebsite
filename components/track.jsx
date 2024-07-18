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
        exposureRatioThresh,
        exposureTimeThresh, // ms, second(s)
    }) => {
        const targetRef = useRef(null);
        // const [exposed, setExposed] = useState(false);

        // const checkExposure = (entry) => {
        //     return (entry.intesectionRatio >= exposureRatioThresh);
        // }

        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    console.log("Component entered the viewport!");
                  }
                });
                // (entry) => {
                //     if (entry.isIntersecting) {
                //         console.log("element exposed!");
                //         // const exposureStartTime = Date.now();

                //         // const timer = setInterval(() => {
                //         //     if (exposed) {
                //         //         console.log("component exposed!");
                //         //     }
                //         // }, exposureTimeThresh);
                //     }
                }
                // ,
                // {
                //     root: null, // Use the viewport as the root
                //     threshold: [0, 1], // Trigger when any part of the component is visible
                // }
            );

            if (targetRef.current) {
                observer.observe(targetRef.current);
            }

            return () => {
                observer.disconnect();
            };
        }, [targetRef]);

        return (
            <div ref={targetRef}>
                testComponent ABC
            </div>
        );
};

export { TrackExposure };