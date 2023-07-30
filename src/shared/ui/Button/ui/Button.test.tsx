import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("classNames", () => {
  test("test", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
