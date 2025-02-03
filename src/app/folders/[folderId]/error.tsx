"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <p className="text-secondary-100 text-xl">Something went wrong...</p>

      <a href="/" className="text-primary-100">
        Go back to safety
      </a>
    </div>
  );
}
