

const ShimmerUi = () => {
  return (
    <>
      <div className="restro">
          {Array(10).fill("").map((e, index)=><div key={index} className="shimmer-container"></div> )}
      </div>
    </>
  );
};

export default ShimmerUi;
