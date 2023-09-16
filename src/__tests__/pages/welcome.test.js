import Welcome from "pages/Welcome";
import { render, screen } from "utils/test-utils";

test("renders welcome page header", async () => {
  render(<Welcome />);

  expect(screen.getByText(/welcome page/i)).toBeVisible();
});
