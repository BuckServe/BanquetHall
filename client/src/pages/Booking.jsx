import React, {useState, useEffect} from "react";
import { BsCalendar2Fill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import {  useGetHallsQuery } from "../redux/api/hallApi";
import {  useCreateBookingMutation } from "../redux/api/bookingApi";

const Booking = () => {
  const { data, isLoading } = useGetHallsQuery();
  
  const [eventDetails, setEventDetails] = useState({
    customerName: '',
    customerPhoneNumber: '',
    customerCNIC: '',
    totalAmount: 0,
    advanceAmount:0, 
    hallId: '',
    eventType: '',
    eventDate: '',
    eventTime:'',
    capacity:'',
  })

  const [createBooking, { isLoading: isCreating, error, isSuccess }] = useCreateBookingMutation();

  
  const [halls, setHalls] = useState([]);

  
  useEffect(() => {
    setHalls(data?.halls)
  }, [data]);

  const hadleSubmit = async (event) => {
    event.preventDefault();
    await createBooking(eventDetails)
  };

  
  const onChange = (e) => {
      setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray bg-transparent bg-opacity-50">
        <div className="overflow-y-auto max-h-[38.5rem] w-full">
          <form
            onSubmit={hadleSubmit}
            className="bg-white flex flex-col gap-7 rounded-md p-8 w-full md:w-[34rem] lg:w-[34rem] lg:h-auto"
          >
            <h1 className=" flex w-full justify-center items-center font-bold text-[1.7rem] text-black">
              Fill the booking details
            </h1>
            <div className="text-gray font-medium">
              <label>Customer Details</label>
            </div>
            <div className="lg:w-[31rem] lg:h-[4.25rem] rounded-2xl">
              <input
                type="text"
                placeholder="Customer Name"
                className="w-full h-full border-none outline-none flex p-3 items-center rounded-2xl box-border bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
                name="customerName"
                value={eventDetails?.customerName}
                onChange={onChange}
             
             />
            </div>
            <div className="lg:w-[31rem] lg:h-[4.25rem] rounded-2xl">
              <input
                type="text"
                placeholder="Customer CNIC"
                className="w-full h-full border-none outline-none flex p-3 items-center rounded-2xl box-border bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
                name="customerCNIC"
                value={eventDetails?.customerCNIC}
                onChange={onChange}
              />
            </div>
            <div className="lg:w-[31rem] lg:h-[4.25rem] rounded-2xl">
              <input
                type="text"
                placeholder="Customer Contact Number"
                className="w-full h-full border-none outline-none flex p-3 items-center rounded-2xl box-border bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
                name="customerPhoneNumber"
                value={eventDetails?.customerPhoneNumber}
                onChange={onChange}
              />
            </div>
            <div className="text-gray font-medium">
              <label>Event Details</label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-3 p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-lightgray">
                <BsCalendar2Fill className="text-[1.7rem] text-gray" />
                <input
                  type="date"
                  placeholder="Select a date"
                  className="w-full h-full border-none outline-none bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem] appearance-none"
                  name="eventDate"
                  value={eventDetails?.eventDate}
                  onChange={onChange}
                />
              </div>
              <div className=" flex gap-3 p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-lightgray">
                <MdGroups className="text-[1.7rem] text-gray" />
                <input
                  type="text"
                  placeholder="People"
                  className="w-full h-full border-none outline-none bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
                  name="capacity"
                  value={eventDetails?.capacity}
                  onChange={onChange}
                />
              </div>
              <div className=" flex gap-3 p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-lightgray">
                <input
                  type="input"
                  placeholder="Event Type"
                  name="eventType"
                  value={eventDetails?.eventType}
                  onChange={onChange}
                  className="w-full h-full border-none outline-none bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
                />
                </div>
              <div className=" flex gap-3 p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-lightgray">
                 <select
                    id="event_type"
                    className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={eventDetails?.eventTime}
                    onChange={(e) => setEventDetails({...eventDetails,eventTime: e.target.value})}
                  >
                    <option value="day">Day</option>
                    <option value="night">Night</option>
                  </select>
              </div>
              <div className=" flex gap-3 p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-lightgray">
                 <select
                    id="hall-id"
                    className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={eventDetails?.hallId}
                    onChange={(e) => setEventDetails({...eventDetails, hallId:e.target.value})}
                  >
                    <option value="" disabled>
                      Select hall
                    </option>
                    {!isLoading &&
                      halls?.map((s) => (
                        <option key={s._id} value={s._id}>
                          {s.name} - {s.capacity}
                        </option>
                      ))}
                  </select>
              </div>

            </div>
            <div className="text-gray font-medium">
              <label>Payment Details</label>
              </div>
              <div className="lg:w-[31rem] lg:h-[4.25rem] rounded-2xl">
              <input
                type="number"
                placeholder="Total Amount"
                className="w-full h-full border-none outline-none flex p-3 items-center rounded-2xl box-border bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
                name="totalAmount"
                value={eventDetails?.totalAmount}
                onChange={onChange}
              />
            </div>
            <div className="lg:w-[31rem] lg:h-[4.25rem] rounded-2xl">
              <input
                type="number"
                placeholder="Advance Amount"
                className="w-full h-full border-none outline-none flex p-3 items-center rounded-2xl box-border bg-lightgray focus:bg-lightgray placeholder:text-gray placeholder:font-medium placeholder:text-[1.2rem]"
                name="advanceAmount"
                value={eventDetails?.advanceAmount}
                onChange={onChange}
              />
            </div>
            <div className=" flex m-auto p-3 items-center rounded-2xl box-border lg:w-[15rem] lg:h-[4.25rem] bg-cream">
              <button className="w-full py-3 ">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;