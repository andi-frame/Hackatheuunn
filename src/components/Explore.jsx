import Category from "./Category";

function Explore() {
  return (
    <div className="my-5 ml-5">
      <h2 className="text-3xl">Explore</h2>
      <div className="flex">
        <Category name="All"></Category>
        <Category name="Fairy Tail"></Category>
        <Category name="Science"></Category>
      </div>
    </div>
  );
}

export default Explore;
