"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#12121a",
          color: "#f0f0f5",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
        },
        success: {
          iconTheme: {
            primary: "#00d4ff",
            secondary: "#12121a",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#12121a",
          },
        },
      }}
    />
  );
}
