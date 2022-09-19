import React from "react";
import {Toaster} from 'react-hot-toast';
import CardProfile from "../../components/Cards/CardProfile";
import CardTable from "../../components/Cards/CardTable";

export default function Profile() {
  return (
    <>
    <Toaster />
      <div className="flex flex-wrap" style={{paddingTop:'150px', paddingLeft:'50px', paddingRight:'50px'}}>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
        <div className="w-full lg:w-8/12 px-4" style={{paddingTop:65}}>
          <CardTable name="Cursos que he sugerido"
          data={[{courseName:'ArtesDramaticas', category:'Arte'},{courseName:'ArtesLiterarias', category:'Arte'}]}/>
        </div>
      </div>
    </>
  );
}
