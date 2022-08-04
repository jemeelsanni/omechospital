import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useState } from "react/cjs/react.production.min";
import Sidebar from "./Sidebar";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react/cjs/react.production.min";
const AddDoctor = () => {
  const [loading, setLoading] = useState(false);
  const [DRName, setDRName] = useState("");
  const [ImagePath, setImagePath] = useState("");
  const [Image, setImage] = useState("");
  const [DrId, setDrId] = useState();
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [AboutDr, setAboutDr] = useState("");
  const [DayName, setDayName] = useState("");
  const getProfile = async () => {
    try {
      const data = await axios
        .get("https://omechospital.com/api/Doctorprofile")
        .then((response) => {
          setDrId(response.data.Id);
        });
    } catch (error) {}
  };
  const addProfile = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", Image);
      formData.append("upload_preset", "gr0fcwk3");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/daak7spdb/image/upload",
          formData
        )
        .then((response) => {
          setImagePath(response.data.url);
        });
      const data = await axios
        .post("https://omechospital.com/api/Doctorprofile", {
          PhoneNumber,
          DRName,
          Email,
          AboutDr,
          ImagePath,
        })
        .then((response) => {
          console.log(response);
          setLoading(false);
          if (response.status === 200) {
            toast.success("Added successfully");
          }
        });
    } catch (error) {
      toast.error(error.response.data.title);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="">
        <Sidebar />
        <div className="w-full mt-10 h-full flex  items-center justify-center">
          <div class=" w-full px-8">
            <div class="px-10">
              <div class="md:w-full t flex flex-col justify-center items-center ">
                <div class="flex w-40 md:w-40 items-center">
                  <h1 class="lg:text-2xl font-medium pr-2 leading-5 text-gray-800">
                    Add Doctors
                  </h1>
                </div>
                <p class="mt-4 text-sm leading-5 text-gray-600">
                  Information about the Doctor could go here .
                </p>
              </div>
              <div class="lg:flex justify-between flex-col  pb-10">
                <div>
                  <div class="md:flex items-center  w-full justify-center lg:mt-0 mt-4">
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-bg-bubble-gumnone text-gray-800"
                        id="fir5e6092fstName"
                      >
                        Name of Doctor
                      </label>
                      <input
                        type="text"
                        tabindex="0"
                        name="DRName"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="firstName"
                        onChange={(e) => setDRName(e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="lastName"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        tabindex="0"
                        name="PhoneNumber"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="lastName"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="lastName"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        tabindex="0"
                        name="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="lastName"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div class="md:flex space-y-10 justify-between xl:justify-center xl:w-full   items-center  mt-8">
                    <div class="md:w-[20rem] md:ml-12  mt-4 ">
                      <label
                        class="text-sm leading-none w-40 text-gray-800"
                        id="emailAddress"
                      >
                        About Doctor
                      </label>
                      <textarea
                        name="AboutDr"
                        className="border-2 w-full border-gray rounded"
                        id=""
                        cols="30"
                        onChange={(e) => setAboutDr(e.target.value)}
                        rows="5"
                      ></textarea>
                    </div>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="md:ml-6"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                    <div className="">
                      {!loading ? (
                        <>
                          {" "}
                          <button
                            onClick={addProfile}
                            className="mr-20 bg-purple w-40 py-2 text-white font-bold hover:bg-midnight transition ease-in "
                          >
                            Add Profile
                          </button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <button className="mr-20 bg-purple w-40 py-2 text-white font-bold hover:bg-midnight transition ease-in ">
                            <ClipLoader size={20} color="white" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
