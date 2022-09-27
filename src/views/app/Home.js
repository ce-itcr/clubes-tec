import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { sleep } from "../../assets/utils/Sleep";
import { Suggestions } from "../../communication/Suggestions";
import CardTable from "../../components/Cards/CardTable";

export default function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [currentSuggestions, setCurrentSuggestions] = useState([]);
  const [category, setCategory] = useState("");

  let suggestionsClient = new Suggestions();

  const handleInputChangeForCategory = async (e) => {
    var value = e.target.value;
    setCategory(value);
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  const getSuggestions = async () => {
    const clientResponse = await suggestionsClient.getAllSuggestions();
    //console.log(clientResponse)
    setSuggestions(clientResponse.data);
    setCurrentSuggestions(clientResponse.data);
  };

  const searchSuggestions = async () => {
    if (category === "option" || category === "") {
      getSuggestions();
    } else {
      let filteredData = suggestions.filter(function (value) {
        return value.category === category;
      });
      console.log(filteredData, category, suggestions )
      if (filteredData === [] || filteredData.length === 0) {
        toast.error(
          "No se encontraron resultados en la categoria seleccionada"
        );
        getSuggestions();
      } else {
        setCurrentSuggestions(filteredData);
        toast.success("Mostrando " + filteredData.length + " resultado (s)");
      }
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
            className="w-full  "
            style={{ paddingRight: "20px", width: "300px" }}
          >
            <div className="relative w-full mb-3" style={{paddingLeft:15}}>
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
                <option value="Idiomas">Idiomas</option>
                <option value="Artes">Artes</option>
                <option value="Deportes">Deportes</option>
                <option value="Musica">Musica</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
          </div>
          <div
            className="w-full "
            style={{ paddingRight: "20px", width: "300px" }}
          >
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
            /*data={[
              { name: "Artes Dramaticas", category: "Artes", qty: 10, suggesters: ["jonex", "jsolis"] },
              { name: "Artes Literarias", category: "Artes", qty: 5, suggesters: ["jonex", "jsolis"]},
              { name: "Español", category: "Idiomas", qty: 5, suggesters: ["aortiz"] },
            ]}*/
            data={currentSuggestions}
          />
        </div>
      </div>
    </>
  );
}
