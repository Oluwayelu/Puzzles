import { render, screen } from "utils/test-utils";
import { SelectLevel } from "components";

test("renders select level component", async () => {
  render(<SelectLevel />);
  expect(screen.getByText(/choose level/i)).toBeInTheDocument();
});
