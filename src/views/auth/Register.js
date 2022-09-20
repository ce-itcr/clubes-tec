import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { sleep } from "../../assets/utils/Sleep";

export default function Register() {
  let history = useHistory();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [section, setSection] = useState("");
  const [userTypeEntry, setUserTypeEntry] = useState("");

  const sections = [
    { name: "7A" },
    { name: "7B" },
    { name: "7C" },
    { name: "8A" },
    { name: "8B" },
    { name: "8C" },
    { name: "9A" },
    { name: "9B" },
    { name: "9C" },
    { name: "10A" },
    { name: "10B" },
    { name: "10C" },
    { name: "11A" },
    { name: "11B" },
    { name: "11C" },
    { name: "11A" },
    { name: "11B" },
    { name: "11C" },
  ];
  const userTypes = [{ name: "Administrador" }, { name: "Estudiante" }];

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordIconShown, setPasswordIconShown] = useState(false);

  const handleInputChangeForUserId = async (e) => {
    var value = e.target.value;
    setUserId(value);
  };

  const handleInputChangeForPassword = async (e) => {
    var value = e.target.value;
    setPassword(value);
  };

  const handleInputChangeForFullName = async (e) => {
    var value = e.target.value;
    setFullName(value);
  };

  const handleInputChangeForUserType = async (e) => {
    var value = e.target.value;
    setUserTypeEntry(value);
  };

  const handleInputChangeForSection = async (e) => {
    var value = e.target.value;
    setSection(value);
  };

  const verifyUser = async () => {
    if (
      userId === "" ||
      password === "" ||
      userTypeEntry === "" ||
      fullName === ""
    ) {
      toast.error("Debe llenar todos los espacios.");
    } else {
      toast.success("Usuario Registrado exitosamente");
      sleep(2500).then(() => {
        history.push("/auth");
      });
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setPasswordIconShown(!passwordIconShown);
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="container mx-auto h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div
                  className="text-blueGray-400 text-center mb-3 font-bold"
                  style={{ paddingTop: "20px" }}
                >
                  <h1
                    className="text-blueGray-600 uppercase"
                    style={{ paddingBottom: "35px" }}
                  >
                    Registro de Usuarios{" "}
                  </h1>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre Completo{" "}
                      <small style={{ paddingLeft: 320, color: "#ff0000" }}>
                        * Requerido
                      </small>
                    </label>
                    <input
                      type="string"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Jhon Doe Doe"
                      onChange={handleInputChangeForFullName}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Sección
                    </label>
                    <select
                      name="section"
                      id="section"
                      onChange={handleInputChangeForSection}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="option">Seleccione una opción</option>
                      {sections.map((data) => (
                        <option value={data.name}>{data.name}</option>
                      ))}
                      ;
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tipo de Usuario{" "}
                      <small style={{ paddingLeft: 330, color: "#ff0000" }}>
                        * Requerido
                      </small>
                    </label>
                    <select
                      name="userType"
                      id="userType"
                      onChange={handleInputChangeForUserType}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="option">Seleccione una opción</option>
                      {userTypes.map((data) => (
                        <option value={data.name}>{data.name}</option>
                      ))}
                      ;
                    </select>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre de Usuario{" "}
                      <small style={{ paddingLeft: 307, color: "#ff0000" }}>
                        * Requerido
                      </small>
                    </label>
                    <input
                      type="string"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="username"
                      onChange={handleInputChangeForUserId}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Contraseña{" "}
                      <small style={{ paddingLeft: 352, color: "#ff0000" }}>
                        * Requerido
                      </small>
                    </label>
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="********"
                      onChange={handleInputChangeForPassword}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <a onClick={togglePassword}>
                        <i
                          className={
                            passwordIconShown
                              ? "fas fa-eye-slash"
                              : "fas fa-eye"
                          }
                        >
                          {" "}
                        </i>
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          Mostrar Contraseña
                        </span>
                      </a>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-darkBlue-001 text-white active:bg-lightBlue-600  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={verifyUser}
                    >
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                ></a>
              </div>
              <div className="w-1/2 text-right text-white">
                <small>¿Posee una cuenta? </small>
                <a
                  className="font-bold underline"
                  onClick={() => history.push("/auth/login")}
                >
                  <small>Inicie Sesión</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
