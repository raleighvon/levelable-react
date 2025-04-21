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
      className={`flex flex-row`}
    >
      {!isReversed ? (
        <>
        <div className="basis-1/3 bg-red-100">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="basis-2/3 bg-blue-100">{children}</div>
        </>
      ) : (
        <>
        <div  className="basis-2/3 bg-red-100">{children}</div>
        <div className="basis-1/3 bg-blue-100">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
        </>
      )}
    </section>
  )
}
