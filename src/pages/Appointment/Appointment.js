import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [hn, setHn] = useState("");
  const [period, setPeriod] = useState({});
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const location = useLocation();
  const search = location.search;
  const id = new URLSearchParams(search).get("id");
  const dname = new URLSearchParams(search).get("name");
  const image = new URLSearchParams(search).get("image");

  useEffect(() => {
    const get = async () => {
      const { data } = await axios.get(
        `https://omechospital.com/api/DrPeriod/${id}`
      );
      setData(data);

      if(data[0]){
        console.log(data[0])
        setPeriod(data[0])
      }
      console.log(data);
    };
    get();
  }, [setData]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `https://omechospital.com/api/Appointment`,
        {
          Name: name,
          HospitalNo: hn,
          AppointDate: date,
          DRName: dname,
          AppointmentTime: time,
          message: message,
          Status: "",
        }
      );
      setData(response);
      console.log(response);
      setLoading(false);
      toast.success("Appointment added");
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
      console.log(error);
    }
  };

  const changeHandler = (e) =>{

      const per = data.find(d=> d.DayName == e)
      setPeriod(per)
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
      />
      <Navbar />

      <h1 className="text-2xl mx-20 font-semibold mt-12 lg:text-3xl">
        Fill and submit
      </h1>
      <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100 rounded-lg shadow-md lg:mx-20 mx-1 my-6">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src={image}
            alt=""
            className="self-center flex-shrink-0 w-40 h-40 border  md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="flex flex-col justify-center">
            {/* <h4 className="text-lg font-semibold  md:text-left">{dname}</h4> */}
            <div className="mx-2 flex space-x-5">
              <p>Time</p>
              <p>{period.StartTime}</p>
            </div>
            <div className="container grid  grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            
            <select
                  required
                  className="block  w-full px-4 mb-4 pt-2 mt-2 text-gray-700 bg-white border rounded-md :bg-gray-800 :text-gray-300 :border-gray-600 focus:border-blue-400 :focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={period.DayName}
                  onChange={(e) => {
                    changeHandler(e.target.value);
                    console.log(e.target.value);
                  }}
                  style={{ paddingRight: "300px", paddingBottom: "5px" }}
                >
                  {data.map((b) => (
                    <option key={b.ID} 
                    className="bg-white">
                      {b.DayName}
                    </option>
                  ))}
                </select>
            
              {/* <div
                onClick={() => setShow(!show)}
                className="flex mt-4 bg-gray cursor-pointer p-2 rounded-md space-x-3"
              >
                <p>{period.DayName}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {show &&
                  data &&
                  data.map((d) => (
                    <div className="absolute left-{-23%} z-18 w-48 py-2 mt-12 bg-white rounded-md shadow-xl  :bg-gray-800">
                      <a
                        href="#"
                        onClick={() => {
                          setPeriod(d)
                          setShow(false);
                        }}
                        className="block px-4 py-3 text-sm text-gray-600  transition-colors duration-200 transform  :text-gray-300 hover:bg-gray-100  :hover:bg-gray-700  :hover:text-white"
                      >
                      {console.log(d)}
                        {" "}
                        {d.DayName}{" "}
                      </a>
                    </div>
                  ))}
              </div> */}

              {/* <div className=" mt-2 my-auto">
                <p className="p-2 font-meduim text-xl text-center">{d.DayName}</p>
                <div className="space-y-4">
                <p className=" bg-gray p-2 text-center rounded-md">Start Date <span>{d.StartTime}</span></p>
                <p className=" bg-gray p-2 text-center rounded-md">End Date <span>{d.EndTime}</span></p>
                </div>
           </div> */}
            </div>
          </div>
        </div>
      </div>

      <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <form
          onSubmit={(e) => submitHandler(e)}
          class="mt-6 "
          target="_top"
          action="mailto:adetifaboluwatife@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div class="items-center -mx-2 md:flex">
            <div class="w-full mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>

              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
              />
            </div>

            <div class="w-full mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Hospital Number
              </label>

              <input
                required
                value={hn}
                onChange={(e) => setHn(e.target.value)}
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
              />
            </div>
          </div>

          <div class="items-center -mx-2 md:flex">
            <div class="w-full mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Appointment Date
              </label>

              <input
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="date"
              />
            </div>

            <div class="w-full mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Appointment Time
              </label>

              <input
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="time"
              />
            </div>
          </div>

          <div class="w-full mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Message
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            ></textarea>
          </div>

          <div class="flex justify-center mt-6">
            <button
              type="submit"
              class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
          {loading ? (
            <div className="py-4 flex">
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
            </div>
          ) : (
            <button
              style={{ color: "white", background: "blue" }}
              type="submit"
              className="text-red-600 px-3 py-2 font-semibold rounded "
            >
              Submit
            </button>
          )}
        </form>
      </section>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Appointment;
