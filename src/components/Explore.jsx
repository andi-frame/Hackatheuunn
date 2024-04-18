import Category from "./Category";
import Card from "./Card";

function Explore() {
  return (
    <div className="my-5 ml-5">
      <h2 className="text-3xl">Explore</h2>
      <div className="flex">
        <Category name="All"></Category>
        <Category name="Fairy Tail"></Category>
        <Category name="Science"></Category>
      </div>
      <h3>Fairy Tail</h3>
      <div className="flex gap-6 overflow-auto">
        <Card title="Book Title" likes="100" genre="Fairy" img="src\assets\card_img.png" />
        <Card title="Book Title" likes="100" genre="Fairy" img="src\assets\card_img.png" />
        <Card title="Book Title" likes="100" genre="Fairy" img="src\assets\card_img.png" />
      </div>
    </div>
  );
}

export default Explore;
