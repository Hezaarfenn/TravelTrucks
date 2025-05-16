import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CamperContactForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="mb-20 border border-[#DADDE1] rounded-[10px] p-11 flex flex-col gap-6 min-h-[600px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Book your campervan now</h2>
        <p className="text-gray-600">
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name*"
          className="w-[527px] p-4.5 border border-[#F7F7F7] rounded-xl placeholder:text-[#6C717B]"
        />
        <input type="email" placeholder="Email*" className="p-4.5" />

        {/* React Datepicker */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Booking date*"
          dateFormat="dd/MM/yyyy"
          popperPlacement="bottom-start"
          showPopperArrow={false}
          calendarClassName="shadow-md border rounded-xl"
          className="p-4.5"
        />

        <textarea type="text" placeholder="Comment*" className="p-4.5" />
        <div className="flex justify-center gap-2.5">
          <button className="bg-[#E44848] cursor-pointer rounded-full text-white py-4 px-[60px]">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CamperContactForm;
