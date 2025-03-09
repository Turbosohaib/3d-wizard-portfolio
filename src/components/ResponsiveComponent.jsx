"use client";

import React from "react";
import UseScreenSize from "@/components/hooks/UseScreenSize";

const ResponsiveComponent = ({ children }) => {
  const size = UseScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
