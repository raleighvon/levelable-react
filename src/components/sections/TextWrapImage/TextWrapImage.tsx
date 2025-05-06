import React from "react"
import { TextWrapImageProps } from "./TextWrapImage.types"
import styles from './TextWrapImage.module.css';

// https://www.youtube.com/watch?v=sifXs4XVK7g&t=160s

export default function TextWrapImage({
  heading,
  imageUrl,
  altText,
  imagePosition = "left",
  children,
}: TextWrapImageProps) {
  const marginDirection = imagePosition === "right" ? "ml-4" : "mr-4";
 const floatDirection = imagePosition === "left" ? "float-left" : "float-right"

  return (
    <section
    className={`${styles.textWrap} flex flex-row`}
    >
      <article>
        <img
          src={imageUrl}
          alt={altText}
          className={`${styles.image} ${floatDirection} ${marginDirection}`}
        />
        {heading && <h2>{heading}</h2>}
        {children}
      </article>
    </section>
  )
}
