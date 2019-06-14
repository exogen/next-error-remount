import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [renderError, setRenderError] = useState(false);

  if (renderError) {
    throw new Error("Render error!");
  }

  return (
    <main>
      <button onClick={() => setRenderError(true)}>Render Error</button>
    </main>
  );
}
