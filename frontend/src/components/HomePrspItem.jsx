function HomePrspItem(props) {
  const { prspInfo } = props;
  const { hours, minutes, prspName, weight, capsules, taken, total, details } =
    prspInfo;
  const lengthOfTaken = (taken / total) * 100;
  return (
    <>
      <div className="text-gray-400 text-xl">
        In {hours} hours, {minutes} minutes
      </div>
      <div className="text-4xl">{prspName}</div>
      <div>
        {weight}mg, {capsules} capsules
      </div>
      <div className="p-2 w-full bg-gray-400 rounded-2xl">
        <div
          style={{ width: `${lengthOfTaken}%` }}
          className="h-1 bg-purple-600 rounded-2xl"
        ></div>
      </div>
      <div className="text-gray-400 text-xl">
        {taken}/{total} taken
      </div>
      <div>{details}</div>
    </>
  );
}

export default HomePrspItem;
