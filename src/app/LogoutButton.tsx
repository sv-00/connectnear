"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleLogout} className="text-zinc-500">
      <LogOut className="w-4 h-4 mr-2" />
      Sign out
    </Button>
  );
}
