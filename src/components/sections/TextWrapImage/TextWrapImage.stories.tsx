import React from "react"
import TextWrapImage from "./TextWrapImage"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof TextWrapImage> = {
  title: "Components/TextWrapImage",
  component: TextWrapImage,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://via.placeholder.com/400x300",
    altText: "A placeholder image of a scenic landscape",
    children: (
      <p>
        This is a sample paragraph of text that wraps around the image.
        Customize this to show any content you want.
      </p>
    ),
  },
  argTypes: {
    imagePosition: {
      control: "radio",
      options: ["left", "right"],
    },
  },
}

export default meta
type Story = StoryObj<typeof TextWrapImage>

export const LeftImage: Story = {
  args: {
    imagePosition: "left",
  },
}

export const RightImage: Story = {
  args: {
    imagePosition: "right",
  },
}
