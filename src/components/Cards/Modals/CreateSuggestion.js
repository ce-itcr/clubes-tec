import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import { sleep } from "../../../assets/utils/Sleep";

// components

const customStyles = {
  content: {
    outline: "none",
    top: "50%",
    left: "58%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function CreateSuggestion({onPress}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [courseName, setCourseName] = useState("");
  const [courseCategory, setCourseCategory] = useState("");

  const handleInputForSuggestion = async (e) => {
    var value = e.target.value;
    setCourseName(value);
  };

  const handleInputForCategory = async (e) => {
    var value = e.target.value;
    setCourseCategory(value);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const verifyInputData = () => {
    if (courseName === "" || courseCategory === "") {
      toast.error("Debe llenar todos los espacios");
    } else {
      openModal();
    }
  };

  const createSuggestion = () => {
    toast.success("Sugerencia creada exitosamente");
    sleep(2000).then(() => {
      closeModal();
      window.location.reload();
    });
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white ">
          <button type="button" onClick={onPress}>
            <img
              alt="..."
              src={require("../../../assets/img/close.png").default}
              className=" h-auto align-middle border-none absolute "
              style={{width: '8%', marginLeft: '85%'}}
            />
          </button>
        </div>
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Crear Sugerencia
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
            <div className="flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Nombre
                  </label>
                  <input
                    type="string"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Nombre Sugerencia"
                    onChange={handleInputForSuggestion}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Categoria
                  </label>
                  <select
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={handleInputForCategory}
                  >
                    <option value="option">Seleccione una opción</option>
                    <option value="laboratory">Idiomas</option>
                    <option value="scheduleSection">Artes</option>
                    <option value="week">Deportes</option>
                    <option value="week">Musica</option>
                    <option value="week">Otros</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div
                className="w-full lg:w-12/12 px-4 "
                style={{
                  justifyContent: "center",
                  display: "flex",
                  paddingTop: "25px",
                }}
              >
                <div className="relative w-full mb-3">
                  <button
                    type="button"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-darkBlue-001 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all w-full duration-150"
                    onClick={verifyInputData}
                  >
                    <i class="fas fa-plus"></i> Crear Sugerencia
                  </button>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </form>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>
            <b>Preparación de Clubes</b>
          </h2>
          <div>¿Está seguro que desea crear la sugerencia?</div>
          <form style={{ marginTop: "20px" }}>
            <input />
            <button
              onClick={closeModal}
              style={{ marginRight: "20px", color: "red" }}
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={createSuggestion}
              style={{ color: "green" }}
            >
              Crear Sugerencia
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
}
