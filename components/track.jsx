import React, { useRef, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UUIDContext } from './userinfo';

const apiUrl = 'https://backend-data-test.metavibe-api.com/action/collect';
const platformId_FaithTime = 5;

const sendTrackingData = async (trackingData) => {
  try {
    const response = await axios.post(
      apiUrl,
      trackingData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    // Handle the response as needed
    console.log('Data sent successfully: ', response.data);
  }
  catch (error) {
    // Handle error
    console.error('Error sending data:', error.response ? error.response.data : error.message);
  }
};

const getTimeString = () => {
  return new Date().toISOString();
}

const reportTrackingData = ({
    uuid,
    trackName
  }) => {

  const trackingData = {
    actionName: trackName,
    dateTime: getTimeString(),
    platform: platformId_FaithTime,
    uid: uuid,
  };

  console.log('Tracked event: ', trackingData);

  sendTrackingData(trackingData);

  return;
}

// Click event tracking
// use Higher-Order Component to enhance the wrapped component
const TrackClick = (BaseComponent) => {
  const EnhancedComponent = ({
    trackName,
    ...props
  }) => {
    const { uuid } = useContext(UUIDContext);

    const handleClick = (event) => {
      reportTrackingData({
        uuid: uuid,
        trackName: trackName+" ClickEvent",
      });

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
      exposureRatioThresh = 0.01,
      exposureTimeThresh = 1, // ms
      ...props
    }) => {
      const { uuid } = useContext(UUIDContext);

      const trackTargetRef = useRef(null);
      const [exposed, setExposed] = useState(false);

      let exposureTimer = null;

      const checkExposure = (entry) => {
        return (entry.isIntersecting && entry.intersectionRatio >= exposureRatioThresh);
      }

      const handleExposure = () => {
        reportTrackingData({
          uuid: uuid,
          trackName: trackName+" ExposureEvent",
        });

        setExposed(true);
      }

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          // console.log(trackName+": intersectionRatio = "+entry.intersectionRatio+", time = "+getTimeString());

          if (!exposed)
          {
            if (checkExposure(entry)) {
              exposureTimer = setTimeout(handleExposure, exposureTimeThresh);
            }
            else
            {
              clearTimeout(exposureTimer);
            }
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
              threshold: [0, exposureRatioThresh], // Trigger when any part of the component is visible
          }
        );

        if (trackTargetRef.current) {
          observer.observe(trackTargetRef.current);
        }

        return () => {
          observer.disconnect();
        };
      }, [trackTargetRef, exposed]);

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