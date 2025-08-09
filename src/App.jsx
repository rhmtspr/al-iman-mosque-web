import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FridaySchedule from './components/FridaySchedule';
import Events from './components/Events';
import './App.css';


function App() {

  return (
    <div>
      <Navbar />
      <main className='p-4'>
        {/* Hero Section */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* Text Section */}
          <div className='w-full lg:w-1/2 lg:pr-4 mb-6 lg:mb-0'>
            <h1 className='text-3xl ms:text-4xl lg:text-5xl font-bold leading-normal'>
              A reliable Islamic Center to Follow the<br />
              Qur'an & Sunnah
            </h1>
            <p className='mt-3'>The Salat is the time when the meeting with Allah and the<br /> ascension (Mi'raj) of the believer takes place.</p>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 lg:pl-4">
            <img className="w-full" src="/mosque.png" alt="Mosque illustration" />
          </div>
        </div>

        {/* Schedule Section */}
        <div className='max-w-4/5 mt-7 mx-auto flex flex-col lg:flex-row gap-6'>
          {/* Daily Prayer Schedule */}
          <div className='lg:w-1/2'>  
            <h3 className="text-xl font-semibold mb-4">Jadwal Sholat Harian di Masjid Al-Iman</h3>
            <div className='overflow-x-auto'>
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
                    ['Subuh', '04.50', '05.00'],
                    ['Dzuhur', '12.30', '12.40'],
                    ['Ashar', '15.40', '15.50'],
                    ['Magrib', '18.30', '18.40'],
                    ['Isya', '19.25', '19.35'],
                  ].map(([sholat, adzan, iqomah]) => (
                    <tr key={sholat} className='border-t'>
                      <td className='p-3'>{sholat}</td>
                      <td className='p-3'>{adzan}</td>
                      <td className='p-3'>{iqomah}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Friday Schedule */}
          <div className='lg:w-1/2 flex flex-col items-center lg:items-start'>
            <h4 className='text-lg font-semibold'>Jadwal Sholat Jumat</h4>
            <FridaySchedule />
          </div>

        </div>
        {/* Events */}
        <Events />
      </main>
      <Footer />
    </div>
  )
}

export default App
