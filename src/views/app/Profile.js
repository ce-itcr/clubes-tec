import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Auth } from "../../communication/Auth";
import CardProfile from "../../components/Cards/CardProfile";
import CardTable from "../../components/Cards/CardTable";

export default function Profile() {
  const [suggestions, setSuggestions] = useState([]);

  let authClient = new Auth();

  useEffect(() => {
    getMySuggestions();
  }, []);

  const getMySuggestions = async () => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    const clientResponse = await authClient.findSuggestionsUser(
      userData.username
    );
    //console.log("🚀 ~ file: Profile.js ~ line 14 ~ setMySuggestions ~ clientResponse", clientResponse)
    setSuggestions(clientResponse.data);
  };

  const setMySuggestions = () => {
    let userData = JSON.parse(localStorage.getItem("userData"));

    if (userData.userType === "student") {
      return <CardTable name="Cursos que he sugerido" data={suggestions} />;
    } else {
      return <></>;
    }
  };

  return (
    <>
      <div
        className="flex flex-wrap"
        style={{
          paddingTop: "150px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
        <div className="w-full lg:w-8/12 px-4" style={{ paddingTop: 65 }}>
          {setMySuggestions()}
        </div>
      </div>
    </>
  );
}
