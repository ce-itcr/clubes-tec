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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                felis neque, interdum et ornare feugiat, aliquet vestibulum
                metus. Donec aliquet, elit quis venenatis viverra, neque mi
                efficitur ligula, et dictum tortor lorem at enim. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Aliquam vel lorem enim. Cras ullamcorper leo
                nec porttitor maximus. Ut maximus interdum leo non sagittis.
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
              </div>
              
            </div>
       
          </div>
          
        </div>
      </section>
      <p className=" text-lg leading-relaxed text-white bg-white" style={{paddingTop:100}}> 
              </p>
    </>
  );
}
