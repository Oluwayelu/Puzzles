/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { Loader } from "components";
import { GameProvider } from "context";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWrapper = (ui, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <GameProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </BrowserRouter>
    </GameProvider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWrapper;
