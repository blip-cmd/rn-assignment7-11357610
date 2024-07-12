// src/GalleryContext.js
import React, { createContext } from 'react';

export const GalleryContext = createContext();

export const GalleryProvider = ({ children, value }) => (
  <GalleryContext.Provider value={value}>
    {children}
  </GalleryContext.Provider>
);
