import React from "react";
import Nav from "./nav";

const Contact = () => {
  return (
    <div className="font-body">
      <div>
        {/* <!-- nav content --> */}
        <div>
          <Nav />
        </div>

        <div className="flex lg:mx-20 md:mx44 my-10 gap-2 md:gap-6   ">
          <div className="card text-white flex justify-start gap-2   align-middle bg-gradient-to-r from-bg2 to-bg1  md:flex-row flex-col">
            <div className=" md:pt-24">
              <ul>
                <li className="text-gray-700 flex">
                  <span>
                    <svg
                      className="h-4 mt-1.5 mr-2"
                      fill="blue"
                      stroke="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                  <a href="maristyna@yahoo.com" className="flex justify-end">
                    maristyna@yahoo.com
                  </a>
                </li>
                <li className="text-gray-700 flex mt-2">
                  <span>
                    <svg
                      className="h-4 mt-1.5 mr-2"
                      fill="blue"
                      stroke="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </span>
                  <p className="flex justify-end font-crimson">
                    +234 808 881 8994
                  </p>
                </li>
              </ul>
            </div>

            <div className="card2 w-200">
              <form action="" className="text-black form">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input"
                />
                <textarea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="6"
                  className="input"
                  placeholder="Enter Your Message"
                ></textarea>
                <input
                  type="submit"
                  value="SEND"
                  id="send"
                  className="text-white rounded shadow-2xl p-2 bg-gradient-to-r from-bg1 to-bg2"
                />
              </form>
            </div>
          </div>

          <div className="mt-2 w-32 ">
            <p className="uppercase text-black font-bold">Follow me</p>
            <a href="https://twitter.com/MIZZT78399977">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 mt-4 mb-4"
                >
                  <path
                    fill="skyblue"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                  />
                </svg>{" "}
              </span>
            </a>
            <a href="https://web.facebook.com/Maristyna">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 mb-4"
                >
                  <path
                    fill="blue"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  />
                </svg>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/chiamaka-okafor-1413487a/">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 mb-4"
                >
                  <path
                    fill="darkblue"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                  />
                </svg>
              </span>
            </a>
            <a href="https://maristyna@yahoo.com/">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 mb-4"
                >
                  <path
                    fill="black"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>{" "}
              </span>
            </a>
            <a href="https://maristyna@yahoo.com/">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                >
                  <path
                    fill="blue"
                    d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7l8-5V6l-8 5l-8-5v2Z"
                  />
                </svg>{" "}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;