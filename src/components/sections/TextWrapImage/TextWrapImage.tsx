import React from "react"
import { TextWrapImageProps } from "./TextWrapImage.types"

export default function TextWrapImage({
  imageUrl,
  altText,
  imagePosition = "left",
  children,
}: TextWrapImageProps) {
  const isReversed = imagePosition === "right"

  return (
    <section
      className={`flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 text-gray-800 text-lg">{children}</div>
    </section>
  )
}
