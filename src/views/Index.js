/*eslint-disable*/
import React from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-white ">
        <div className="container mx-auto items-center flex flex-wrap ">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                PREPARACIÓN DE CLUBES.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Este sitio web es propiedad de{" "}
                <a
                  className="text-darkBlue-001"
                  href="https://github.com/ce-itcr"
                  target="_blank"
                >
                  ce-itcr{" "}
                </a>
                corresponde al Proyecto I del curso de Bases de Datos Avanzadas,
                el mismo pretende desarrollar un sistema donde los alumnos
                pueden sugerir clubes que se van ofrecer el próximo año como
                clases extracurriculares, las categorías son: Idiomas, Artes,
                Deportes, Música, Otros.
              </p>
              <div className="mt-12" to="/auth">
                <button
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-darkBlue-001 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  type="button"
                >
                  <a href="/auth">
                    <i class="fas fa-sign-in-alt"></i> Ingresar
                  </a>
                </button>
                <a
                  href="https://github.com/ce-itcr/clubes-tec"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-defaultGray uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  <i class="fas fa-info"></i> Info
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("../assets/img/landing-pattern.png").default}
          alt="..."
        />
      </section>
      <p
        className=" text-lg leading-relaxed text-white bg-white"
        style={{ paddingTop: 100 }}
      ></p>
    </>
  );
}
