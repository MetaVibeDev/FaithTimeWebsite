import React, { useRef, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UUIDContext } from "./userinfo";

const apiUrl = "https://qbf04j2xsl.execute-api.ap-southeast-1.amazonaws.com/default/EventTracking";
const platformId_FaithTime = 5;

// Simulate enum-like behavior by object in javascript
const trackedEventType = Object.freeze({
  Click: 'click',
  Exposure: 'exposure',
});

const sendTrackingData = async (trackingData) => {
  try {
    const response = await axios.post(apiUrl, trackingData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Handle the response as needed
    // console.log("Data sent successfully: ", response.data);
  } catch (error) {
    // Handle error
    console.error(
      "Error sending data:",
      error.response ? error.response.data : error.message
    );
  }
};

const getTimeString = () => {
  return new Date().toISOString();
};

export const reportTrackingData = ({ uuid, trackName, trackType }) => {
  const name = trackName;
  const trackingData = {
    app_name: "metavibe",
    unique_id: uuid,
    params: {
      button_name: name,
      page: name,
      type: trackType,
    },
  };

  sendTrackingData(trackingData);

  return;
};

const TrackClick = (BaseComponent) => {
  const EnhancedComponent = ({ trackName, ...props }) => {
    const { uuid } = useContext(UUIDContext);

    const handleClick = (event) => {

      reportTrackingData({
        uuid: uuid,
        trackName: trackName,
        trackType: trackedEventType.Click,
      });

      if (props.onClick) {
        props.onClick(event);
      }
    };

    return <BaseComponent onClick={handleClick} {...props} />;
  };

  return EnhancedComponent;
};

// Exposure event tracking
const TrackExposure = (BaseComponent) => {
  const EnhancedComponent = ({
    trackName,
    trackOnlyOnce = false,
    exposureRatioThresh = 0.01,
    exposureTimeThresh = 1, // ms
    ...props
  }) => {
    const { uuid } = useContext(UUIDContext);

    const trackTargetRef = useRef(null);
    const exposureCount = useRef(0);

    let exposureTimer = null;

    const checkExposure = (entry) => {
      return (
        entry.isIntersecting && entry.intersectionRatio >= exposureRatioThresh
      );
    };

    const handleExposure = () => {
      console.log(
        trackName +
        ": exposureCount = " +
        (exposureCount.current + 1) +
        ", exposureTimer id = " +
        exposureTimer
      );

      reportTrackingData({
        uuid: uuid,
        trackName: trackName,
        trackType: trackedEventType.Exposure,
      });

      exposureCount.current++;
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        console.log(
          trackName +
          ": intersectionRatio = " +
          entry.intersectionRatio +
          ", time = " +
          getTimeString()
        );

        const needCheck = !(trackOnlyOnce && exposureCount.current > 0);

        if (needCheck) {
          if (checkExposure(entry)) {
            exposureTimer = setTimeout(handleExposure, exposureTimeThresh);
          } else {
            clearTimeout(exposureTimer);
          }
        }
      });
    };

    // NOTE: manually REFRESH the localhost page in browser, to make
    // any code modification within the useEffect part to take effect
    useEffect(() => {
      const observer = new IntersectionObserver(observerCallback, {
        // root: null, // Use the viewport as the root
        // rootMargin: "0px 0px 0px 0px",
        threshold: [0, exposureRatioThresh], // Trigger when any part of the component is visible
      });

      if (trackTargetRef.current) {
        observer.observe(trackTargetRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [trackTargetRef]);

    return <BaseComponent ref={trackTargetRef} {...props} />;
  };

  return EnhancedComponent;
};

export { TrackExposure, TrackClick };
