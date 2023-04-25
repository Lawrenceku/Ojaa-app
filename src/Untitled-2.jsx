<div className="h-screen flex overflow-hidden bg-gray-100">
      <div
        className={`fixed inset-0 flex z-40 lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-600 opacity-75"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
          <div className="absolute top-0 right-0 -mr-14 p-1">
            <button
              className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-shrink-0 flex items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2">
              <div className="space-y-1">
                <a
                  href="#"
                  className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  <svg
                    className="text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12H21M3 6H21M3 18H21"
                    />
                  </svg>
                  DASHBOARD
                </a>

                <div className="space-y-1">
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    item1
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      >
                      <path
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                           strokeWidth="2"
                                           d="M4 6h16M4 12h16M4 18h16"
                                         />
                      </svg>
                      item2
                      </a>
                      <a
                href="#"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                item3
              </a>
            </div>

            <a
              href="#"
              className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
            >
              <svg
                className="text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12H21M3 6H21M3 18H21"
                />
              </svg>
              OTHERS1
            </a>

            <div className="space-y-1">
              <a
                href="#"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                item4
              </a>

              <a
                href="#"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                item5
              </a>
            </div>

            <a
              href="#"
              className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
            >
              <svg
                className="text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12H21M3 6H21M3 18H21"
                  />
                  </svg>
                  OTHERS2
                  </a>
                  <div className="space-y-1">
              <a
                href="#"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                item6
              </a>

              <a
                href="#"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                item7
              </a>
            </div>
          </nav>
        </div>
        <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
      </div>
    </div>
  </div>
  </nav>