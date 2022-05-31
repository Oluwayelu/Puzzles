import { Welcome } from "pages";
import { screen } from "@testing-library/react";

import renderWrapper from "utils/test-utils";

test("renders welcome page header", async () => {
  renderWrapper(<Welcome />);
  const linkElement = screen.getByText(/welcome page/i);
  expect(linkElement).toBeVisible();
});
