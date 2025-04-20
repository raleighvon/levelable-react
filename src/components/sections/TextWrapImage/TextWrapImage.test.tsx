import { render, screen } from "@testing-library/react"
import TextWrapImage from "./TextWrapImage"

describe("TextWrapImage", () => {
  it("renders image and text", () => {
    render(
      <TextWrapImage
        imageUrl="/cat.jpg"
        altText="Maceo the cat"
        imagePosition="left"
      >
        <p>Hello from Cypress’s dad</p>
      </TextWrapImage>
    )

    expect(screen.getByAltText("Maceo the cat")).toBeInTheDocument()
    expect(screen.getByText(/Cypress’s dad/i)).toBeInTheDocument()
  })
})
