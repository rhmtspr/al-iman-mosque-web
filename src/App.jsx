import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FridaySchedule from "./components/FridaySchedule";
import Events from "./components/Events";
import "./App.css";
import { useEffect, useState } from "react";

function truncateContent(text, maxSentences = 3) {
  if (!text) return "";
  const sentences = text.split(/(?<=[.!?])\s+/); // split by ., !, ?
  return (
    sentences.slice(0, maxSentences).join(" ") +
    (sentences.length > maxSentences ? " ..." : "")
  );
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const spreadsheetId = "1LerbBiT3_WqMWEp3Kfl8YcWZfRkg_ZF6EJuG35DAwbo";
      const apiKey = "AIzaSyAkPiV9Fz9CnYIh-8MU_5vZF5IhdIjTSbA";
      const range = "Sheet1!A2:C10";

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

      const response = await fetch(url);
      const result = await response.json();

      const rows = result.values.map((row) => ({
        title: row[0],
        date: row[1],
        content: row[2],
        image: row[3],
      }));

      setData(rows);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="p-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
            <h1 className="text-3xl ms:text-4xl lg:text-5xl font-bold leading-normal">
              A reliable Islamic Center to Follow the
              <br />
              Qur'an & Sunnah
            </h1>
            <p className="mt-3">
              The Salat is the time when the meeting with Allah and the
              <br /> ascension (Mi'raj) of the believer takes place.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 lg:pl-4">
            <img
              className="w-full"
              src="/mosque.png"
              alt="Mosque illustration"
            />
          </div>
        </div>

        {/* Schedule Section */}
        <div className="max-w-4/5 mt-7 mx-auto flex flex-col lg:flex-row gap-6">
          {/* Daily Prayer Schedule */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Jadwal Sholat Harian di Masjid Al-Iman
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-300 rounded-lg">
                <thead className="bg-orange-500 text-white">
                  <tr>
                    <th className="p-3 text-left">Sholat</th>
                    <th className="p-3 text-left">Adzan</th>
                    <th className="p-3 text-left">Iqomah</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-gray-800  border-b">
                  {[
                    ["Subuh", "04.50", "05.00"],
                    ["Dzuhur", "12.30", "12.40"],
                    ["Ashar", "15.40", "15.50"],
                    ["Magrib", "18.30", "18.40"],
                    ["Isya", "19.25", "19.35"],
                  ].map(([sholat, adzan, iqomah]) => (
                    <tr key={sholat} className="border-t">
                      <td className="p-3">{sholat}</td>
                      <td className="p-3">{adzan}</td>
                      <td className="p-3">{iqomah}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Friday Schedule */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold">Jadwal Sholat Jumat</h4>
            <FridaySchedule />
          </div>
        </div>
        {/* Events */}
        <div className="max-w-[80%] mx-auto mt-7">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-medium">Acara Terkini</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.map((row, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md bg-white"
              >
                <img
                  src={row.image || "event-1.jpg"}
                  alt={row.title}
                  className=""
                />
                <div className="p-3 5">
                  <div className="my-2">
                    <h3 className="text-xl font-semibold">{row.title}</h3>
                    <span className="text-sm text-gray-400">{row.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {truncateContent(row.content, 3)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
