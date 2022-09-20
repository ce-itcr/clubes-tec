import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { sleep } from "../../assets/utils/Sleep";
import { Auth } from "../../communication/Auth";

export default function Login() {
  let history = useHistory();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordIconShown, setPasswordIconShown] = useState(false);

  let authClient = new Auth();

  const handleInputChangeForUserId = async (e) => {
    var value = e.target.value;
    setUserId(value);
  };

  const handleInputChangeForPassword = async (e) => {
    var value = e.target.value;
    setPassword(value);
  };

  const verifyUser = async () => {
    if (userId === "" || password === "") {
      toast.error("Debe llenar todos los espacios.");
    } else {
      const clientResponse = await authClient.verifyUser(userId, password);
      if (clientResponse.data.length !== 0) {
        console.log(clientResponse.data[0]);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            fullName: clientResponse.data[0].fullName,
            username: clientResponse.data[0].username,
            userType: clientResponse.data[0].userType,
            section: clientResponse.data[0].section,
          })
        );
        localStorage.setItem('activeSession', true);
        toast.success("Bienvenido a clubes-tec");

        sleep(2500).then(() => {
          history.push("/app/home");
        });
      } else {
        toast.error(
          "Usuario o contraseña incorrectos. \n Porfavor intente de nuevo."
        );
      }
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
                    Inicio de Sesión{" "}
                  </h1>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre de Usuario
                    </label>
                    <input
                      type="string"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="username"
                      onChange={handleInputChangeForUserId}
                    />
                  </div>

                  <div
                    className="relative w-full mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Contraseña
                    </label>
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="********"
                      onChange={handleInputChangeForPassword}
                    />
                  </div>
                  <div style={{ paddingBottom: "35px" }}>
                    <label className="inline-flex items-center cursor-pointer">
                      <a onClick={togglePassword}>
                        <i
                          className={
                            passwordIconShown
                              ? "fas fa-eye-slash"
                              : "fas fa-eye"
                          }
                        ></i>
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          Mostrar Contraseña
                        </span>
                      </a>
                    </label>
                  </div>
                  <div
                    className="text-center mt-6"
                    style={{ paddingBottom: "35px" }}
                  >
                    <button
                      className="bg-darkBlue-001 text-white  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={verifyUser}
                    >
                      Ingresar
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
                <small>¿No tiene una cuenta? </small>
                <a
                  className="font-bold underline"
                  onClick={() => history.push("/auth/register")}
                >
                  <small>Registrese aquí</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
