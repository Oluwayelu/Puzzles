import { render, screen } from "utils/test-utils";
import { SelectImage } from "components";

test("renders select image component", async () => {
  render(<SelectImage />);
  expect(screen.getByText("1")).toBeInTheDocument();
  // expect(
  //   screen.getAllByRole("img", { src: "/assets/example.jpg" })
  // ).toBeInTheDocument();
});
