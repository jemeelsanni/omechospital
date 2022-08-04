import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../../atom/modalAtom";
import Modal from "./modal/Modal";
// import { useState } from "react/cjs/react.production.min";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const showModal = useRecoilValue(modalState);
  return (
    <div>
      <div className="md:w-[300px] hidden lg:flex flex-col items-center h-full bg-purple ">
        <h1 className="text-3xl font-extrabold text-white mt-10">Omec</h1>
        <ul className="space-y-10 mt-10 flex flex-col items-center">
          <li className="text-white hover:bg-gray group px-10 py-2 rounded-xl font-bold text-xl">
            <a className="group-hover:text-black" href="/add">
              Add Doctor
            </a>
          </li>
          <li className="text-white hover:bg-gray group px-10 py-2 rounded-xl font-bold text-xl">
            <a className="group-hover:text-black" href="/add">
              Email Config
            </a>
          </li>
          <li className="text-white hover:bg-gray group px-10 py-2 rounded-xl font-bold text-xl">
            <a className="group-hover:text-black" href="/profiles">
              All Doctors
            </a>
          </li>
        </ul>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default Sidebar;
