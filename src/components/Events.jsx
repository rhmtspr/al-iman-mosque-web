import { BiArrowFromLeft } from "react-icons/bi";

const Events = ({title, content, date}) => {
  return (
    <div className="max-w-[80%] mx-auto mt-7">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-medium">Kegiatan Terkini</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Amet olor mauris suscipit felis pelientesque et, dolor. Tristique ipsum, mathis uf mauris</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img className="" src="event-1.jpg" alt="" />
          <div className="p-3.5">
            <div className="my-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <span  className="text-sm text-gray-400">{date}</span>
            </div>
            <p>{content}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          className="bg-orange-400 text-white font-semibold rounded-lg px-3.5 py-2 inline-flex items-center gap-1 mt-6"
          href="#"
        >
          Lebih Banyak <BiArrowFromLeft />
        </a>
      </div>
    </div>
  );
};

export default Events;