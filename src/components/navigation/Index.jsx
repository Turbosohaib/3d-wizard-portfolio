"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "@/components/hooks/useScreenSize";

const Navigation = () => {
  const angleincrement = 360 / BtnList.length;
  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="fixed w-full h-screen flex items-center justify-center">
      <div className="flex items-center justify-center relative hover:pause animate-spin-slow group">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleincrement * Math.PI) / 180;
          const radius = isLarge
            ? "calc(20vw - 1rem)"
            : isMedium
              ? "calc(30vw - 1rem)"
              : "calc(40vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
