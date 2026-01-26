export default function Footer() {
  return (
    <>
      <div className="pt-14">
        <section className="flex flex-col justify-start items-center pt-5 pb-10 bg-slate-900 w-full">
          <div className="flex flex-col justify-start items-center gap-2.5">
            <div className="flex flex-col justify-start items-center">
              <p className="text-sm font-light text-white">
                Moises Oña © 2026 Todos los derechos reservados
              </p>
            </div>

            <div className="flex flex-row justify-start items-center gap-10 m-0 mt-4">
              {/* LINKEDIN */}
              <a
                href="http://linkedin.com/in/moises-oña-79967a348"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[30px] h-[30px] stroke-[1.5] text-gray-300 fill-none group-hover:text-[#0077b5] group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.5)]"
                >
                  <path
                    stroke="currentColor"
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect
                    stroke="currentColor"
                    width="4"
                    height="12"
                    x="2"
                    y="9"
                  />
                  <circle stroke="currentColor" cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/moises93_10?igsh=MXY4YnNseXBuMjI5cg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[30px] h-[30px] stroke-[1.5] text-gray-300 fill-none group-hover:text-[#E1306C] group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.5)]"
                >
                  <rect
                    stroke="currentColor"
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  />

                  <path
                    stroke="currentColor"
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  />

                  <line
                    stroke="currentColor"
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                    strokeWidth="2"
                  />
                </svg>
              </a>

              {/* MAIL */}

              <a
                href="mailto:edwinmoises.9319@gmail.com"
                className="group relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[30px] h-[30px] stroke-[1.5] text-gray-300 fill-none group-hover:text-[#FBBF24] group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                >
                  <path
                    stroke="currentColor"
                    d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
                  />
                  <rect
                    stroke="currentColor"
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
