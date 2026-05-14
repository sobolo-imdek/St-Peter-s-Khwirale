export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border border-school-primary/20" />
          <div className="absolute inset-2 rounded-full bg-school-primary/10" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-school-primary animate-pulse" />
        </div>
        <p className="text-sm font-medium tracking-wide text-gray-500">
          One moment
        </p>
      </div>
    </div>
  );
}
