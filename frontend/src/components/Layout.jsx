"use client";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-[#0b1120] text-white min-h-screen">
      {/* You can later add your navbar here */}
      <main className="max-w-7xl mx-auto px-6 py-16">{children}</main>
      {/* And maybe footer here too */}
    </div>
  );
}
