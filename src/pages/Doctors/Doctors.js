import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

const Doctor = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const get = async () => {
      const { data } = await axios.get(
        "https://omechospital.com/api/Doctorprofile"
      );
      setData(data);
      //conosle.log(data)
      setLoading(false);
    };
    get();
  }, [setData]);

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "90vh" }} className="bg-gray-900 px-5">
        <h1 className="text-2xl font-semibold mt-12 lg:text-3xl">
          Choose a doctor
        </h1>{" "}
        {loading && (
          <div className="py-4 flex justify-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
          </div>
        )}
        <div className="grid grid-cols-1 px-3 py-4 gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* card */}

          {data &&
            data.map((d) => (
              <a
                href={`/submit?id=${d.Id}&name=${d.DRName}&image=${d.ImagePath}`}
                key={d}
                //   onClick={() => router.push(`/class/${d._id}`)}
                className="max-w-sm overflow-hidden cursor-pointer hover:shadow-2xl  rounded-lg shadow-md  bg-gray-800"
              >
                <img
                  className="object-cover w-full h-40"
                  src={d.ImagePath}
                  alt="image"
                />

                <div className="p-6">
                  <div>
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="mx-2 font-semibold text-gray-700  text-gray-200"
                      >
                        {d.DRName}
                      </a>
                    </div>
                    <a className="block  text-2xl font-semibold  transition-colors duration-200 transform  text-white ">
                      {d.Email}
                    </a>
                    <p className=" text-sm mx-2 text-gray-400">{d.AboutDr}</p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default Doctor;
