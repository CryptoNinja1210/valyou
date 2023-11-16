export const BrandOverView = () => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold">Valyou X Overview / Token Exchange </h2>
      <br />
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-bold text-1xl">Market Value</p>
            <p>$ 103,910,000</p>
          </div>
          <div>
            <p className="font-bold text-1xl">Total Remaining Supply</p>
            <p>850,000,000,000</p>
          </div>
          <div>
            <p className="font-bold text-1xl">Company / Team</p>
            <p>85% Ownership</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-bold text-1xl">Circulating Supply</p>
            <p>150,000,000,000</p>
          </div>
          <div>
            <p className="font-bold text-1xl">Maximum Token Supply</p>
            <p>1,000,000,000,000</p>
          </div>
          <div>
            <p className="font-bold text-1xl">Investors</p>
            <p>15% Ownership</p>
          </div>
        </div>
      </div>
    </div>
  );
};
