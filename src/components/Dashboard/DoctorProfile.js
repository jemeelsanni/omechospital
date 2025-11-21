import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { modalState, profileState } from "../../atom/modalAtom";
import Modal from "./modal/Modal";
import Sidebar from "./Sidebar";
import "react-toastify/dist/ReactToastify.css";
const DoctorProfile = () => {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [profile, setProfile] = useRecoilState(profileState);
  const getProfile = async () => {
    setLoading(true);
    try {
      const data = await axios
        .get("https://omechospital.com/api/Doctorprofile")
        .then((response) => {
          setProfiles(response.data);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <div className="">
        <Sidebar />
        {loading ? (
          <div className="w-full flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple"></div>
          </div>
        ) : (
          <>
            {" "}
            <div className="w-full h-full">
              <div className=" container mx-auto max-w-7xl h-full">
                <h1 className="text-3xl font-bold mt-6 ">Doctor's Profiles</h1>
                <div className="container px-6 py-10 mx-auto">
                  <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    {profiles.map((profile) => {
                      return (
                        <>
                          <div
                            key={profile.Id}
                            className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-purple dark:border-gray-700 dark:hover:border-transparent"
                          >
                            <img
                              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                              src={profile.ImagePath}
                              alt=""
                            />

                            <h1 className="mt-4 md:text-lg 2xl:text-2xl text-xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                              {profile.DRName}
                            </h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                              {profile.Email}
                            </p>

                            <div className="flex mt-3 -mx-2">
                              <button
                                onClick={() => {
                                  setShowModal(true);
                                  setProfile(profile);
                                }}
                                className="px-6 py-2 text-white transition-colors duration-200 transform bg-purple rounded-md hover:bg-midnight focus:outline-none focus:bg-midnight"
                              >
                                Add Time
                              </button>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
