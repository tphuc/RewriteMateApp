import React from "react";

type StyledImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function StyledImage({
  className = "",
  style,
  ...imgProps
}: StyledImageProps) {
  return (
    <div className="relative h-full w-full">
      {/* Inset border overlay */}
      <div
        className="absolute inset-0 z-10 rounded-lg pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
        }}
      />

      <img
        {...imgProps}
        className={`rounded-lg shrink-0 h-auto ${className}`}
        style={{
          ...style, // allow full override
        }}
      />
    </div>
  );
}