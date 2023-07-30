import React, { useEffect, useState } from "react";
import { Button } from "shared/ui/Button";

type BugButtonProps = {
  className?: string;
};

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const throwErr = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={throwErr}>Throw Error</Button>;
};
