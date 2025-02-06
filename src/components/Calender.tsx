import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calender() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className=''>
      <Calendar className='bg-black' onChange={onChange} value={value} />
    </div>
  );
}

export default Calender;