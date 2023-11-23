import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { sendContact } from "../../config/api";
import { ClipLoader, MoonLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
const Contact = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [MessageBody, setMessageBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const FrmEmailId = "omechosp@gmail.com";
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await axios
        .post("https://omechospital.com/api/Contact", {
          PhoneNumber,
          Name,
          Email,
          MessageBody,
        })
        .then((response) => {
          setLoading(false);
          //conosle.log(response);
          if (response.status === 200) {
            toast.success(
              "Your Message has been sent, we will reach you as soon as possible"
            );
          }
        });
      axios
        .post("https://omechospital.com/api/EmailCon", { FrmEmailId })
        .then((response) => {});
    } catch (error) {
      //conosle.log(error);
      setLoading(false);
      toast.error(error.response.data.title);
    }
  };
  return (
    <div>
      {" "}
      {/* <div
        className="w-full bg-center bg-cover h-[32rem]"
        style="background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);"
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
              Build Your new{" "}
              <span className="text-blue-400 underline">Saas</span>
            </h1>
            <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button>
          </div>
        </div>
      </div> */}
      <Navbar />
      <ToastContainer />
      <div
        className="w-full bg-center bg-cover h-[12rem]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/pzLn3ht/pawel-czerwinski-0x-CCPIbl3-M-unsplash.jpg)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white  lg:text-5xl">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-16">
        <div className="lg:flex">
          <div className="xl:w-2/5 lg:w-2/5 bg-black py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
              <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                Get in touch
              </h1>
              <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                Got a question about us? Have some suggestions or just want to
                say Hi? Just contact us. We are here to asset you.
              </p>
              <div className="flex pb-4 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </div>
                <p className="pl-4 text-white text-base">+2348146416676</p>
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                <p className="pl-4 text-white text-base">omechosp@gmail.com</p>
              </div>
              <p className="text-lg text-white pt-10 tracking-wide">
                No 4B, Sabo Line Isal <br />
                Opposite Temitope Hospital <br />
                Amilegbe
                <br />
                Ilorin, Kwara State
                <br />
                Nigeria.
              </p>
            </div>
          </div>
          <div className="xl:w-3/5 lg:w-3/5 bg-gray h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
            <div
              id="contact"
              className="bg-white py-4 px-8 rounded-tr rounded-br"
            >
              <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                Enter Details
              </h1>
              <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                  <div className="flex flex-col">
                    <label
                      htmlFor="full_name"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      id="full_name"
                      name="Name"
                      // value={Name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder
                    />
                  </div>
                </div>
                <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="Email"
                      // value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <div className="w-2/4 max-w-xs">
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Phone
                    </label>
                    <input
                      required
                      id="phone"
                      name="PhoneNumber"
                      // value={PhoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      type="tel"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold text-gray-800 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder
                    name="MessageBody"
                    // value={MessageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                    rows={8}
                    id="message"
                    defaultValue={""}
                  />
                </div>
                <div className="flex items-center">
                  {loading ? (
                    <>
                      <div
                        type="submit"
                        disabled
                        className=" bg-black rounded flex justify-center items-center w-24 py-2 text-white px-8 "
                      >
                        <ClipLoader size={20} color="white" />
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="focus:outline-none bg-black transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white font-bold px-8 py-2 text-sm leading-6"
                      >
                        Submit
                      </button>
                    </>
                  )}
                  <div>
                    <h1 className="font-bold pl-4">{message}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
