export const BrandOverView = () => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold">Music Artist Brand Overview</h2>
      <br />
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-bold text-1xl">Market Value</p>
            <p>$ 2,000,000</p>
          </div>
          <div>
            <p className="font-bold text-1xl">Total Remaining Supply</p>
            <p>70,000,000</p>
          </div>
          <div>
            <p className="font-bold text-1xl">Artist</p>
            <p>70% Ownership</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-bold text-1xl">Available at Current Price</p>
            <p className="float-riht">0</p>
          </div>
          <div>
            <p className="font-bold text-1xl">Circulating Supply</p>
            <p>30,000,000</p>
          </div>
          <div>
            <p className="font-bold text-1xl">Music Fans / Investors</p>
            <p>30% Ownership</p>
          </div>
        </div>
      </div>
    </div>
  );
};
