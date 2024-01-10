import React, { useState } from "react";

export const useGlobalHooks = () => {
  const [toggle, setToggle] = useState(false);

  const btnTaps = () => {
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
    }, 300);
  };

  const handleToggle = (id) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  return {
    handleToggle,
    toggle,
    setToggle,
    btnTaps,
  };
};
