

const ShimmerUi = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
          {Array(15).fill("").map((e, index)=><div key={index} className="w-52 h-72 bg-slate-300 p-4 m-4"></div> )}
      </div>
    </>
  );
};

export default ShimmerUi;
