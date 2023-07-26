

const ShimmerUi = () => {
  return (
    <>
      <div>
          {Array(10).fill("").map((e, index)=><div key={index} className="shimmer-container"></div> )}
      </div>
    </>
  );
};

export default ShimmerUi;
