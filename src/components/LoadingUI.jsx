export default function LoadingUI() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-transparent">
      <div
        className="flex items-center rounded-md
bg-conic-180 from-indigo-950 via-indigo-800 to-indigo-950

      px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity opacity-80 cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-spin mr-3 lucide lucide-loader-pinwheel"
        >
          <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
          <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
          <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        Processing...
      </div>
    </div>
  );
}
