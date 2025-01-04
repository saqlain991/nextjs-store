"use client";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground">Failed to load product details.</p>
    </div>
  );
}
