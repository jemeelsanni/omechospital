import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { useState, Fragment, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { modalState, profileState } from "../../../atom/modalAtom";
import "react-toastify/dist/ReactToastify.css";
const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [profile, setProfile] = useRecoilState(profileState);
  const [DayName, setDayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const DrId = profile.Id;
  const Drp = profile;
  const cn = "";
  function closeModal() {
    setShowModal(false);
  }
  function doNothing() {
    console.log("dp nothing");
  }
  useEffect(() => {
    if (!profile) return;
    async function fetchProfile() {
      console.log(profile);
    }
    fetchProfile();
  }, [profile]);
  const addTime = async () => {
    setLoading(true);
    try {
      const data = await axios
        .post("https://omechospital.com/api/WeekDay", {
          DayName,
          StartTime,
          EndTime,
          DrId,
          Drp,
          cn,
        })
        .then((response) => {
          console.log(response);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      toast.error(error.response);
      setLoading(false);
    }
  };
  return (
    <div>
      {" "}
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add the time of the doctor
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex flex-col space-y-4  justify-between">
                      <input
                        type="text"
                        name="DayName"
                        onChange={(e) => setDayName(e.target.value)}
                        placeholder="Day of the week"
                        class=" rounded-lg py-2 px-2 w-full border-2 border-gray max-w-xs"
                      />
                      <input
                        type="text"
                        name="StartTime"
                        placeholder="Start Time"
                        onChange={(e) => setStartTime(e.target.value)}
                        class=" rounded-lg py-2 w-full px-2 border-2 border-gray max-w-xs"
                      />
                      <input
                        type="text"
                        name="EndTime"
                        onChange={(e) => setEndTime(e.target.value)}
                        placeholder="End Time"
                        class=" rounded-lg py-2 w-full px-2 border-2 border-gray max-w-xs"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    {loading ? (
                      <>
                        {" "}
                        <button
                          type="button"
                          className="px-4 py-2 bg-purple text-white rounded-xl"
                        >
                          <ClipLoader size={20} color="white" />
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <button
                          type="button"
                          className="px-4 py-2 bg-purple text-white rounded-xl"
                          onClick={addTime}
                        >
                          Add
                        </button>
                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer />
    </div>
  );
};

export default Modal;
