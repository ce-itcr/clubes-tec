import React from "react";
import { createPopper } from "@popperjs/core";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import { sleep } from "../../assets/utils/Sleep";

const customStyles = {
  content: {
    backgroundColor: "#fff",
    color: "#000",
    top: "50%",
    left: "58%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-80%, -50%)",
  },
};

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const [logoutModalOpen, setLogoutModalOpen] = React.useState(false);

  let history = useHistory();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const logout = () => {
    toast.success("Cerrando Sesión ....");
    localStorage.clear();

    sleep(2500).then(() => {
      history.push("/auth");
    });
  };

  return (
    <>
    <Toaster />
      <a
        className="text-blueGray-500 block"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-10 h-10 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require("../../assets/img/user-outline.png").default}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={() => {
            history.push("/app/profile");
            closeDropdownPopover();
          }}
        >
          Perfil
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={() => {
            openLogoutModal();
            closeDropdownPopover();
          }}
        >
          Cerrar Sesión
        </a>
      </div>
      <Modal
        isOpen={logoutModalOpen}
        onRequestClose={closeLogoutModal}
        style={customStyles}
      >
        <h2>
          <b>Preparación de Clubes</b>
        </h2>
        <div>¿Está seguro que desea cerrar sesión?</div>
        <form style={{ marginTop: "20px" }}>
          <button
            onClick={closeLogoutModal}
            style={{
              marginRight: "20px",
              marginLeft: "200px",
              color: "#d4443c",
            }}
          >
            Cancelar
          </button>
          <button type="button" onClick={logout} style={{ color: "#1db954" }}>
            Cerrar Sesión
          </button>
        </form>
      </Modal>
    </>
  );
};

export default UserDropdown;
