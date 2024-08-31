import { Link } from 'react-router-dom'

function HomePrspItem(props) {
  const { prspInfo } = props;
  const { hours, minutes, prspName, amount, dosage, taken, total, unit, form } =
    prspInfo;
  const lengthOfTaken = (taken / total) * 100;
  return (
    <div className='py-4 px-2'>
      <Link to={`/prescriptions/Metformin`}>
      <div className='flex justify-between items-center pr-12'>
      <div className="text-6xl font-bold mb-2">
        {prspName}
        <div className="text-lg font-semibold mt-2">
          {amount}{unit}, {dosage} {form}
        </div>
      </div>
      <div className="text-3xl text-[#666666] font-bold mb-2">
        In {hours} hours, {minutes} minutes
      </div>
      </div>
        <div className="p-2 w-full bg-indigo-400 rounded-2xl my-2.5">
          <div
            style={{ width: `${lengthOfTaken}%` }}
            className="h-2 bg-white/90 rounded-2xl"
          ></div>
        </div>
        <div className="text-gray-400 font-semibold text-xl">
          {taken}/{total} doses taken
        </div>
      </Link>
    </div>
  );
}

export default HomePrspItem;
