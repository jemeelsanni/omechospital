import React from "react";
import { HiCalendar, HiPhone } from "react-icons/hi";
import { IoCalendarNumberOutline } from "react-icons/io5";

const Bookappointment = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-4">
        <div className="md:hidden">
          <h1 className="font-bold text-3xl ">OMEC</h1>
        </div>
        <div className="flex flex-row gap-12 items-center">
          <a
            href="https://omechospital.com/appointment"
            className="flex flex-row gap-1 items-center"
          >
            <div className="border-solid border-2 border-black p-1 hover:fill-purple">
              <IoCalendarNumberOutline className=" h-8 w-8 " />
            </div>
            <div className=" text-base font-medium">Book Appointment</div>
          </a>
          <div className="flex flex-row gap-1 items-center">
            <div className="border-solid border-2 border-black p-1">
              <HiPhone className=" h-8 w-8 " />
            </div>
            <div>
              <div className=" text-base font-medium">08146416676</div>
              <div>omechosp@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookappointment;
