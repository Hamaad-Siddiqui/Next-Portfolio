export default function ProjectCard({ title, description, href, icon }) {
  return (
    <a
      className="mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border  border-gray-200 dark:border-gray-800  hover:border-navy rounded p-4 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 shadow-sm">
        {icon == 'buy&sell' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Buy And Sell</span>
            <svg
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        )}
        {icon == 'pakistantv' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Pakistan TV</span>
            <svg
              className="h-16 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              viewBox=".5 -.2 1023 1024.1"
            >
              <g
                fill="currentColor"
                transform="translate(0,406) scale(0.25,-0.25)"
              >
                <path d="M910 3699C910 3661 943 3502 961 3455C994 3366 1030 3326 1112 3286C1257 3216 1387 3203 2050 3190C2893 3175 2917 3173 3049 3108C3196 3035 3301 2909 3363 2733C3402 2619 3412 2445 3386 2327C3344 2137 3209 1960 3045 1879C2923 1819 2775 1808 1925 1789C1634 1783 1392 1775 1388 1772C1385 1768 1379 1432 1375 1025C1368 265 1371 155 1405 103C1426 71 1471 73 1558 109C1838 287 1871 332 1885 910C1888 1039 1893 1178 1896 1218L1902 1290L2098 1290C2464 1291 2911 1308 2993 1325C3189 1365 3434 1510 3590 1677C4025 2143 4010 2892 3556 3346C3363 3539 3110 3659 2829 3691C2774 3697 2360 3704 1823 3707C1060 3711 910 3710 910 3699Z" />
                <path d="M129 2639c36-135 60-188 111-243c136-147 421-172 1679-149l363 6l-7 56c-12 97-44 205-73 246c-54 77-160 121-351 146c-132 16-496 28-1133 35l-617 6l28-103z" />
              </g>
            </svg>
          </div>
        )}
        {icon == 'fastfeedback' && (
          <div className="h-8 w-8 ml-2 mr-4 ">
            <span className="sr-only">Fast Feedback</span>
            <svg
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              viewBox="0 0 46 32"
            >
              <path
                d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}
        <div>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
