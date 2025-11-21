import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { useState, Fragment, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { modalState, profileState } from "../../../atom/modalAtom";
// import "react-toastify/dist/ReactToastify.css";
const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [profile, setProfile] = useRecoilState(profileState);
  const [DayName, setDayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [StartTime, setStartTime] = useState(null);
  const [EndTime, setEndTime] = useState(null);
  const DrId = profile.Id;
  const Drp = profile;
  const cn = [];
  function closeModal() {
    setShowModal(false);
  }
  function doNothing() {
    //conosle.log("dp nothing");
  }
  useEffect(() => {
    if (!profile) return;
    async function fetchProfile() {
      //conosle.log(profile);
    }
    fetchProfile();
  }, [profile]);
  const addTime = async () => {
    setLoading(true);
    try {
      const data = await axios
        .post("https://omechospital.com/api/DrPeriod", {
          DayName,
          StartTime,
          // EndTime,
          Id: DrId,
        })
        .then((response) => {
          //conosle.log(response);
          toast.success("Added Successfully");
          setLoading(false);
        });
    } catch (error) {
      //conosle.log(error);
      toast.error("boooooo");
      setLoading(false);
    }
  };
  return (
    <div>
      {" "}
      <ToastContainer />
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
                        className="rounded-lg py-2 px-2 w-full border-2 border-gray-300 max-w-xs focus:outline-none focus:border-purple"
                      />
                      <input
                        type="time"
                        name="StartTime"
                        placeholder="Start Time"
                        onChange={(e) => setStartTime(e.target.value)}
                        className="rounded-lg py-2 w-full px-2 border-2 border-gray-300 max-w-xs focus:outline-none focus:border-purple"
                      />
                      {/* <input
                        type="time"
                        name="EndTime"
                        onChange={(e) => setEndTime(e.target.value)}
                        placeholder="End Time"
                        className="rounded-lg py-2 w-full px-2 border-2 border-gray-300 max-w-xs focus:outline-none focus:border-purple"
                      /> */}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      disabled={loading}
                      className="px-6 py-2 text-white transition-colors duration-200 transform bg-purple rounded-md hover:bg-midnight focus:outline-none focus:bg-midnight disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      onClick={addTime}
                    >
                      {loading && (
                        <ClipLoader size={20} color="white" />
                      )}
                      {loading ? "Adding..." : "Add"}
                    </button>
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
