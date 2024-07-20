"use client"

import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

// Ref: https://icyybee.hashnode.dev/implementing-uuids-in-react-enhancing-performance-and-security

// Create a context for the UUID
export const UUIDContext = createContext();

// Create a UUID provider component
export const UUIDProvider = ({ children }) => {
  // Generate a new UUID using the uuid function from uuid package
  // if there is no UUID in local storage
  const uniqueId = localStorage.getItem('uuid') || uuidv4();

  // store the UUID in component state
  const [uuid, setUuid] = useState(uniqueId);

  // Update the stored UUID in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('uuid', uuid);
  }, [uuid]);

  // Retrieve the stored UUID from local storage when the component mounts
  useEffect(() => {
    localStorage.getItem('uuid');
  }, []);

  // Provide the UUID value to the components wrapped in the UUIDProvider
  return (
    <UUIDContext.Provider value={{ uuid }}>
      {children}
    </UUIDContext.Provider>
  );
}