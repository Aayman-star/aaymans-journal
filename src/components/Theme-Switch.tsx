"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, SunMoon } from "lucide-react";
const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <SunIcon className="" /> : <SunMoon className="" />}
      </Button>
    </>
  );
};

export default ThemeSwitch;
