import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function CSS() {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-3 bg-primary text-white overflow-scroll" style={{ height: "90vh" }}>
          <ol>
            <li className="pt-4">
              Day-1
              <ul>
                <li>
                  Assignments
                  <ol>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Resume
                      </Link>
                    </li>
                  </ol>
                </li>
                <li>
                  Practicals
                  <ol>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Report Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        CSS Borders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        City List
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Universal Selector
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Grouping Selector
                      </Link>
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <br />
            <li>
              Day-2
              <ul>
                <li>
                  Assignments
                  <ol>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Basic Layout
                      </Link>
                    </li>
                  </ol>
                </li>
                <li>
                  Practicals
                  <ol>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Div Display
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Position Property
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Overflow Property
                      </Link>
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <br />
            <li>
              Day-3
              <ul>
                <li>
                  Assignments
                  <ol>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Menu List
                      </Link>
                    </li>
                  </ol>
                </li>
                <li>
                  Practicals
                  <ol>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Flex-1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Flex-2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Flexbox Image Gallery
                      </Link>
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <br />
            <li>
              Day-4
              <ul>
                <li>
                  Assignments
                  <ol>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Responsive Image Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Responsive Layout
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Responsive Resume
                      </Link>
                    </li>
                  </ol>
                </li>
                <li>
                  Practicals
                  <ol>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Media Queries-1
                      </Link>
                    </li>
                    <li>
                    <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Media Queries-2
                      </Link>
                    </li>
                    <li>
                    <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Media Queries-3
                      </Link>
                    </li>
                    <li>
                    <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Media Queries-4
                      </Link>
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <br />
            <li>
              Day-5
              <ul>
                <li>
                  Assignments
                  <ol>
                    <li>
                      <Link
                        to="/css/csstasks"
                        className="text-white text-decoration-none"
                      >
                        Lyle Apparel
                      </Link>
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div
          className="col-9 p-4 px-5 overflow-scroll text-center"
          style={{ height: "90vh" }}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
