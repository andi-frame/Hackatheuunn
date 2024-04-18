function Header() {
  return (
    <div className="flex justify-between content-center bg-green-500">
      <div className="flex my-2 mx-5 py-1 px-2 rounded-full bg-white">
        <img className="w-10 h-10" src="src\assets\life_token_logo.png" alt="life_token_logo" />
        <img className="w-10 h-10" src="src\assets\life_token_logo.png" alt="life_token_logo" />
        <img className="w-10 h-10" src="src\assets\life_token_logo.png" alt="life_token_logo" />
      </div>
      <div className="flex my-2 mx-5 items-center">
        <img className="w-10 h-10" src="src\assets\maca_logo.png" alt="maca_logo" />
      </div>
    </div>
  );
}

export default Header;
