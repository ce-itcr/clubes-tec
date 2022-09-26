import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { sleep } from "../../assets/utils/Sleep";
import { Suggestions } from "../../communication/Suggestions";
import CardTable from "../../components/Cards/CardTable";

export default function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");

  let suggestionsClient = new Suggestions();

  const handleInputChangeForFilter = async (e) => {
    var value = e.target.value;
    setFilter(value);
  };

  const handleInputChangeForCategory = async (e) => {
    var value = e.target.value;
    setCategory(value);
  };

  /*useEffect(() => {
    getSuggestions();
  }, []);

  const getSuggestions = async () => {
    const clientResponse = await suggestionsClient.getAllSuggestions();
    setSuggestions(clientResponse.data);
  };*/

  const searchSuggestions = async () => {
    if (category === "option" || category === "") {
      toast.error("Debe seleccionar alguna opción");
    } else {
      toast.success("Mostrando resultados...");
    }
  };

  return (
    <>
      <Toaster />
      <div
        className="flex flex-wrap"
        style={{
          paddingTop: "150px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <div className="flex flex-wrap" style={{ paddingBottom: "20px" }}>
          <div
            className="w-full"
            style={{ paddingRight: "20px", paddingLeft: "16px" , width: '300px'}}
          >
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Filtro
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                onChange={handleInputChangeForFilter}
              />
            </div>
          </div>
          <div className="w-full  " style={{ paddingRight: "20px", width: '300px'}}>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Categoría
              </label>
              <select
                name="category"
                id="category"
                onChange={handleInputChangeForCategory}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
          <div className="w-full " style={{ paddingRight: "20px", width: '300px' }}>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-100 text-xs font-bold mb-2">
                .
              </label>
              <button
                className="border-0 px-3 py-3 text-white bg-darkBlue-001 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                type="button"
                onClick={searchSuggestions}
              >
                <i class="fas fa-search"></i> Buscar Sugerencias
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable
            name="Cursos Sugeridos"
            data={[
              { name: "ArtesDramaticas", category: "Arte", qty: 10, suggesters: ["jonex", "jsolis"] },
              { name: "ArtesLiterarias", category: "Arte", qty: 5, suggesters: ["jonex", "jsolis"]},
              { name: "Español", category: "Idiomas", qty: 5, suggesters: ["aortiz"] },
            ]}
          />
        </div>
      </div>
    </>
  );
}
