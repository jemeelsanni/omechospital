import React,{useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import axios from "axios"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Appointment = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("")
  const [hn, setHn] = useState("")
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [message, setMessage] = useState("")


    const location = useLocation();
    const search = location.search;
    const id = new URLSearchParams(search).get("id");
    const dname = new URLSearchParams(search).get("name");
  
    useEffect(() => {
    const get = async () => {
      const {data} = await axios.get(
        `https://omechospital.com/api/WeekDay/${id}`
      );
      setData(data);
        console.log(data)
    };
    get();
  }, [setData]);

  const submitHandler = async(e) =>{
    e.preventDefault()
    setLoading(true)
    try{
    const response = await axios.post(
      `https://omechospital.com/api/Appointment`,
      {
        Name: name,
        HospitalNo: hn,
        AppointDate: date,
        DRName: dname,
        AppointmentTime: time,
        message: message,
        Status: ""
      }
    );
    setData(response);
      console.log(response)
      setLoading(false)
      toast.success("Appointment added")
    }catch(error){
      toast.error("Something went wrong")
    setLoading(false)
      console.log(error)
    }
  };


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
      <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100 rounded-lg shadow-md mx-20 my-6">
	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-40 h-40 border  md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
		<div className="flex flex-col justify-center">
			<h4 className="text-lg font-semibold  md:text-left">Leroy Jenkins</h4>
			<p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
		</div>
	</div>
</div>

      <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">

        <form
        onSubmit={(e)=>submitHandler(e)}
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
            class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Submit
            </button>
          </div>
          {loading ? (
          <div className="py-4 flex">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
          </div>
        ):
          <button
            style={{ color: "white", background: "blue" }}
            type="submit"
            className="text-red-600 px-3 py-2 font-semibold rounded "
          >
            Submit
          </button>
          }
        </form>
      </section>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Appointment;
