import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import CreateSuggestion from "./Modals/CreateSuggestion";

// components

const customStyles = {
  content: {
    outline: "none",
    top: "50%",
    left: "55%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function CardTable({ color, name, data }) {
  /**
   * Cursos sugeridos : nombreCurso, categoria, cantidad de sugerencias
   *                    [{courseName:ArtesDramaticas, category:Arte, qty:10},{courseName:ArtesLiterarias, category:Arte, qty:5}]
   * Cursos que yo he sugerido : nombreCurso, categoria
   *                    [{courseName:ArtesDramaticas, category:Arte},{courseName:ArtesLiterarias, category:Arte}]
   * Total de sugerencias: categoria, cantidad de sugerencias
   *                    [{category:Arte, qty:5},{category:Deportes, qty:2}]
   * Estadisticas estudiantes: nombreEstudiante, cantidad de sugerencias
   *                    [{studentName:juan perez, qty:5},{studentName:fernando lopez, qty:5}]
   * Estadisticas sugerencias I: nombreCurso, categoria, cantidad de sugerencias
   *                    [{courseName:ArtesDramaticas, category:Arte, qty:10},{courseName:ArtesLiterarias, category:Arte, qty:5}]
   * Estadisticas sugerencias II: nombreCurso, categoria, cantidad de sugerencias
   *                    [{courseName:ArtesDramaticas, category:Arte, qty:10},{courseName:ArtesLiterarias, category:Arte, qty:5}]
   */

   const [createSuggestionOpen, setCreateSuggestionOpen] = useState(false);

   const openCreateSuggestionModal = () => {
    setCreateSuggestionOpen(true);
  };

  const closeSuggestionModal = () => {
    setCreateSuggestionOpen(false);
  };

  const setTitles = (currentTable) => {
    if (
      currentTable === "Cursos Sugeridos" ||
      currentTable === "Top 5 clubes más sugeridos" ||
      currentTable === "Top 3 clubes menos sugeridos"
    ) {
      return (
        <>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            }
          >
            Nombre
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            }
          >
            Categoria
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            }
          >
            Cantidad de Sugerencias
          </th>
        </>
      );
    }
    if (currentTable === "Total Sugerencias") {
      return (
        <>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            }
          >
            Categoria
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            }
          >
            Cantidad de Sugerencias
          </th>
        </>
      );
    }

    if (currentTable === "Estudiantes con más sugerencias") {
      return (
        <>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            }
          >
            Nombre de Estudiante
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            }
          >
            Cantidad de Sugerencias
          </th>
        </>
      );
    }
    if (currentTable === "Cursos que he sugerido") {
      return (
        <>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            }
          >
            Nombre
          </th>
          <th
            className={
              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            }
          >
            Categoria
          </th>
        </>
      );
    }
  };

  const setData = (currentTable) => {
    if (
      currentTable === "Cursos Sugeridos" ||
      currentTable === "Top 5 clubes más sugeridos" ||
      currentTable === "Top 3 clubes menos sugeridos"
    ) {
      return (
        <>
          {data.map((data, index) => (
            <tr key={index}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.name}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.category}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.qty}
              </td>
            </tr>
          ))}
        </>
      );
    }
    if (currentTable === "Total Sugerencias") {
      return (
        <>
          {data.map((data, index) => (
            <tr key={index}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.category}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.qty}
              </td>
            </tr>
          ))}
        </>
      );
    }
    if (currentTable === "Estudiantes con más sugerencias") {
      return (
        <>
          {data.map((data, index) => (
            <tr key={index}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.studentName}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.qty}
              </td>
            </tr>
          ))}
        </>
      );
    }
    if (currentTable === "Cursos que he sugerido") {
      return (
        <>
          {data.map((data, index) => (
            <tr key={index}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.courseName}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {data.category}
              </td>
            </tr>
          ))}
        </>
      );
    }
  };

  const setCreateSuggestion = (currentTable) => {
    if (currentTable === "Cursos Sugeridos") {
      return (
        <button
          className="bg-darkBlue-001 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={openCreateSuggestionModal}
        >
          <i className="fas fa-plus"></i> Crear Sugerencia
        </button>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {name}
              </h3>
            </div>
            {setCreateSuggestion(name)}
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>{setTitles(name)}</tr>
            </thead>
            <tbody>{setData(name)}</tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={createSuggestionOpen}
        onRequestClose={closeSuggestionModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={customStyles}
      >
        <CreateSuggestion onPress={closeSuggestionModal}/>
      </Modal>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
