import { ReactNode } from "react"

export interface TextWrapImageProps {
  imageUrl: string
  altText: string
  imagePosition?: "left" | "right"
  children: ReactNode
}
