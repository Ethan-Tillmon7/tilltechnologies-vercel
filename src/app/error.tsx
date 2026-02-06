"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-pixel text-4xl text-primary">Oops</h1>
      <p className="mt-4 text-lg text-text/60">Something went wrong.</p>
      <button
        onClick={reset}
        className="mt-8 rounded-lg bg-primary px-6 py-3 font-semibold text-background transition-colors hover:bg-accent"
      >
        Try Again
      </button>
    </div>
  );
}
