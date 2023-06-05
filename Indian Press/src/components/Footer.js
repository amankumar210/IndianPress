import React from "react";

export default function (props) {
  return (
    <>
      <footer
        className={`bg-{props.mode} text-center text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div className="container p-4">
          <section className="mb-4">
            <a
              className={`btn btn-${
                props.mode === "light" ? "light" : "dark"
              } btn-outline-${
                props.mode === "light" ? "dark" : "light"
              } btn-floating m-1`}
              href="https://facebook.com/"
              target="_blank"
              role="button"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                style={{ width: "1rem" }}
                alt="Footer icon"
              />
            </a>

            <a
              className={`btn btn-${
                props.mode === "light" ? "light" : "dark"
              } btn-outline-${
                props.mode === "light" ? "dark" : "light"
              } btn-floating m-1`}
              href="https://twitter.com"
              target="_blank"
              role="button"
            >
              <img
                src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale"
                style={{ width: "1rem" }}
                alt="Footer icon"
              />
            </a>

            <a
              className={`btn btn-${
                props.mode === "light" ? "light" : "dark"
              } btn-outline-${
                props.mode === "light" ? "dark" : "light"
              } btn-floating m-1`}
              href="https://google.com/"
              target="_blank"
              role="button"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTog4QK9bh69Dl8wI0gtWQYi--6LrcdxFjzAojcSuJExQ&usqp=CAU&ec=48665699"
                style={{ width: "1rem" }}
                alt="Footer icon"
              />
            </a>

            <a
              className={`btn btn-${
                props.mode === "light" ? "light" : "dark"
              } btn-outline-${
                props.mode == "light" ? "dark" : "light"
              } btn-floating m-1`}
              href="https://instagram.com/aman_sinha2"
              target="_blank"
              role="button"
            >
              <img
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
                style={{ width: "1rem" }}
                alt="Footer icon"
              />
            </a>

            <a
              className={`btn btn-${
                props.mode === "light" ? "light" : "dark"
              } btn-outline-${
                props.mode == "light" ? "dark" : "light"
              } btn-floating m-1`}
              href="https://linkedin.com/in/aman-kumar2"
              target="_blank"
              role="button"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9jj04dFabVKTe6svl1f7pxCJmsbXseGJUgMcaJgbwQ&usqp=CAU&ec=48665699"
                style={{ width: "1rem" }}
                alt="Footer icon"
              />
            </a>

            <a
              className={`btn btn-${
                props.mode === "light" ? "light" : "dark"
              } btn-outline-${
                props.mode === "light" ? "dark" : "light"
              } btn-floating m-1`}
              href="https://github.com/amankumar210"
              target="_blank"
              role="button"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHMx4lbUJexAA6qC89p2B_EVX2n3Zq52gtgIDbmk_7A&usqp=CAU&ec=48665699"
                style={{ width: "1rem" }}
                alt="Footer icon"
              />
            </a>
          </section>

          <section
            className={`text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto ">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className={`btn btn-${
                      props.mode === "light" ? "light" : "dark"
                    } btn-outline-${
                      props.mode == "light" ? "dark" : "light"
                    }  mb-4`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section
            className={`mb-4 text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <p>
              This is a news app - Indian Press hosted at localhost and provides
              live news using APIs. This application is created in React by{" "}
              <a href="https://linkedin.com/in/aman-kumar2/" target="_blank">
                me
              </a>{" "}
              as a part of the React project.
            </p>
          </section>
        </div>

        <div
          className="text-center p-3 myCustomCss"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a
            className={`text-${props.mode === "light" ? "dark" : "light"}`}
            href="https://linkedin.com/in/aman-kumar2/"
            target="_blank"
          >
            {" "}
            aman@indianpress.com
          </a>
        </div>
      </footer>
    </>
  );
}
