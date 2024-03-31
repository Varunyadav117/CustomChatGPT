"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// import { Button } from "@/component/ui/button"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  button,
} from "@nextui-org/react";

export function ColorTheme() {
  const { setTheme } = useTheme();

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu align="end">
        <DropdownItem onClick={() => setTheme("light")}>Light</DropdownItem>
        <DropdownItem onClick={() => setTheme("dark")}>Dark</DropdownItem>
        <DropdownItem onClick={() => setTheme("system")}>System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
