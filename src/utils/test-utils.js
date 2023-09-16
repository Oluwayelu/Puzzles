// /* eslint-disable react/prop-types */
// import { Suspense } from "react";
// import { Loader } from "components";
// import { GameProvider } from "context";
// import { render } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";

// const renderWrapper = (ui, { ...renderOptions } = {}) => {
//   const Wrapper = ({ children }) => (
//     <GameProvider>
//       <BrowserRouter>{children}</BrowserRouter>
//     </GameProvider>
//   );

//   return render(ui, { wrapper: Wrapper, ...renderOptions });
// };

// export default renderWrapper;

import { GameProvider } from "context";
import { BrowserRouter } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";

const render = (ui, { ...options } = {}) => {
  const Wrapper = ({ children }) => (
    <GameProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </GameProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { render };
