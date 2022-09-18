import React from "react";
import { useHistory } from "react-router-dom";

// components

export default function CardProfile() {
  let history = useHistory();

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("../../assets/img/user.png").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20"></div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              Los Angeles, California
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div
              className="mb-2 text-blueGray-600"
              style={{ paddingBottom: 30 }}
            >
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              University of Computer Science
            </div>
          </div>
          <div
            className=" py-4 border-t border-blueGray-200 text-center"
            style={{ paddingBottom: 30 }}
          >
            <div className="  text-center">
              <div className="flex flex-wrap justify-center">
                <div className="mt-6">
                  <button
                    className="bg-darkBlue-001 active:bg-lightBlue-600 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => history.push("/auth")}
                  >
                    <i class="fas fa-sign-in-alt"></i> Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
