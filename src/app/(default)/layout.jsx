import React from "react";

export default function PublicLayout({ children }) {
  return (
    <main>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </main>
  );
}
