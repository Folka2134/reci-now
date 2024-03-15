import React from "react";
import { Input } from "../ui/input";

export const Searchbar = () => {
  return (
    <Input
      type="search"
      placeholder="Find recipes..."
      className="mt-3 placeholder-transparent"
    />
  );
};
