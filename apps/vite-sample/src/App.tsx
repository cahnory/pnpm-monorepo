import { Button } from "@pnpm-monorepo/react-sample-lib/build/components/custom/Button/Button";
import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        <img alt="" aria-hidden height="32" src="/vite.svg" width="32" /> Vite
        {" + "}
        <img alt="" aria-hidden height="32" src="/react.svg" width="32" /> React
      </h1>

      <div>
        <Button
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};
