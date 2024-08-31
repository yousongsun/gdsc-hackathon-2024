function HomePrspItem(props) {
  const { prspInfo } = props;
  const { hours, minutes, prspName, weight, capsules, taken, total } =
    prspInfo;
  const lengthOfTaken = (taken / total) * 100;
  return (
    <>
      <div className="text-xl text-[#666666] font-bold mb-2">
        In {hours} hours, {minutes} minutes
      </div>
      <div className="text-5xl font-bold mb-2">{prspName}</div>
      <div className="text-lg font-semibold">
        {weight}mg, {capsules} capsules
      </div>
      <div className="p-2 w-full bg-indigo-400 rounded-2xl my-2.5">
        <div
          style={{ width: `${lengthOfTaken}%` }}
          className="h-2 bg-white/90 rounded-2xl"
        ></div>
      </div>
      <div className="text-gray-400 font-semibold text-xl">
        {taken}/{total} taken
      </div>
    </>
  );
}

export default HomePrspItem;
