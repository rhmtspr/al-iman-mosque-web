import React, { useEffect, useState } from 'react';

const FridaySchedule = () => {
  const [nextFriday, setNextFriday] = useState('');

  useEffect(() => {
    const today = new Date();
    const day = today.getDay();
    const daysUntilFriday = (5 - day + 7) % 7 || 0;

    const friday = new Date();
    friday.setDate(today.getDate() + daysUntilFriday);

    const formattedDate = friday.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    setNextFriday(formattedDate);
  }, []);

  return (
    <div className="rounded-2xl bg-orange-50 p-4 mt-5 w-80">
      <p>Khatib & Imam sholat Jum'at pada tanggal {nextFriday}</p>
      <img className='my-4 rounded-2xl w-full' src="/profile_placeholder.png" alt="foto-profil" />
      <p className="bg-orange-300 p-1 rounded-2xl">Ustad Abdur Razzak Bin Yusuf S.Pdi</p>
    </div>
  )
};

export default FridaySchedule;