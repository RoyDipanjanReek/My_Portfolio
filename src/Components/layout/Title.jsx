
function Title({ title, des }) {
  return (
    <div className="flex flex-col gap-4 font-titleFont">
      <h3 className="text-sm uppercase font-light  md-14 text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        {des}
      </h1>
    </div>
  );
}

export default Title;
