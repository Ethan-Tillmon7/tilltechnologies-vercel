export default function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex gap-2">
        <div className="h-3 w-3 animate-bounce rounded-sm bg-primary [animation-delay:-0.3s]" />
        <div className="h-3 w-3 animate-bounce rounded-sm bg-primary [animation-delay:-0.15s]" />
        <div className="h-3 w-3 animate-bounce rounded-sm bg-primary" />
      </div>
    </div>
  );
}
