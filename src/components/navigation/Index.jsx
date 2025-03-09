"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import UseScreenSize from "@/components/hooks/UseScreenSize";
import ResponsiveComponent from "@/components/ResponsiveComponent";

const Navigation = () => {
  const angleincrement = 360 / BtnList.length;
  const size = UseScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="fixed w-full h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
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
          ) : (
            <>
              <div className="flex items-center justify-center relative hover:pause animate-spin-slow group">
                {BtnList.slice(0, BtnList / 2).map((btn, index) => {
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
              <div className="flex items-center justify-center relative hover:pause animate-spin-slow group">
                {BtnList.slice(BtnList / 2, BtnList.length).map(
                  (btn, index) => {
                    const angleRad = (index * angleincrement * Math.PI) / 180;
                    const radius = isLarge
                      ? "calc(20vw - 1rem)"
                      : isMedium
                        ? "calc(30vw - 1rem)"
                        : "calc(40vw - 1rem)";
                    const x = `calc(${radius}*${Math.cos(angleRad)})`;
                    const y = `calc(${radius}*${Math.sin(angleRad)})`;

                    return <NavButton key={btn.label} x={x} y={y} {...btn} />;
                  },
                )}
              </div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
