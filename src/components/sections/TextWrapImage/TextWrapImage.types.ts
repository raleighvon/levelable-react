import { ReactNode } from "react"

export type TextWrapImageProps = {
  heading?: string;
  imageUrl: string;
  altText: string;
  imagePosition?: "left" | "right";
  children: ReactNode;
};