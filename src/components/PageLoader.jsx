export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-school-background px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-12 w-12 rounded-full border-4 border-school-primary border-t-transparent animate-spin" />
        <p className="text-sm font-semibold uppercase tracking-widest text-school-primary">
          Loading latest content
        </p>
      </div>
    </div>
  );
}
