export default function ProjectCard({
  title,
  description,
  href,
  icon,
  made,
  git
}) {
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
        {icon == 'chatapp' && (
          <div className="h-8 w-8 ml-2 mr-4 mb-8">
            <span className="sr-only">Chat App</span>
            <svg
              className="h-16 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              viewBox=".5 -.2 1023 1024.1"
            >
              <g>
                <path
                  d="M990,460.5c0,228.2-219.5,413.8-490.4,413.8c-75,0-145.3-14.2-209.3-39.5L104.8,953.3L134,736.9C57.4,663.5,10,566.3,10,460.5C10,232.3,229.5,46.7,500.4,46.7C770.5,46.7,990,232.3,990,460.5z M162.4,863.3l105-66.3l40.3-3.9c60,23.7,124.8,36.3,192.7,36.3c245.6,0,445.4-165.8,445.4-368.8S746,91.7,500.4,91.7C254.8,91.7,55,256.8,55,460.5c0,89.2,39.5,176.1,110.6,243.2l13.4,38.7L162.4,863.3z"
                  fill="currentColor"
                />
                <path
                  d="M228,441.6c0,31.8,25.8,57.6,57.6,57.6c31.8,0,57.6-25.8,57.6-57.6s-25.8-57.6-57.6-57.6C253.8,383.9,228,409.7,228,441.6L228,441.6z"
                  fill="currentColor"
                />
                <path
                  d="M456.2,441.6c0,31.8,25.8,57.6,57.6,57.6c31.8,0,57.6-25.8,57.6-57.6s-25.8-57.6-57.6-57.6C482,383.9,456.2,409.7,456.2,441.6L456.2,441.6z"
                  fill="currentColor"
                />
                <path
                  d="M684.4,441.6c0,31.8,25.8,57.6,57.6,57.6c31.8,0,57.6-25.8,57.6-57.6s-25.8-57.6-57.6-57.6C710.2,383.9,684.4,409.7,684.4,441.6L684.4,441.6z"
                  fill="currentColor"
                />
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
          <div className="flex justify-between">
            <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <a
              href={git}
              aria-label={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-16 w-8 -mb-8 text-gray-900 dark:text-gray-100">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </g>
              </svg>
            </a>
          </div>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
          <div className="flex-row-reverse mt-1.5 -mb-1 hidden sm:flex ">
            {made.reverse().map((made) => (
              <p
                className="ml-3 leading-5 text-sm text-gray-800 dark:text-gray-200"
                key={made}
              >
                {made}
              </p>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
