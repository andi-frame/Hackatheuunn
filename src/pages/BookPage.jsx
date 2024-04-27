import { HiSpeakerWave } from "react-icons/hi2";
import { FaPen } from "react-icons/fa6";
import HeaderBook from "../components/HeaderBook";
import Book from "../components/Book";
import PageBookCounter from "../components/PageBookCounter";

function BookPage() {
  return (
    <div>
      <HeaderBook />
      <div className="relative h-[462px]">
        <Book />
      </div>
      <PageBookCounter />
      <div className="flex gap-3 justify-evenly items-center mt-3">
        <div className="rounded-xl bg-green-300 w-[120px] h-[48px] flex justify-center items-center">
          <HiSpeakerWave className="text-[35px]" />
        </div>
        <div className="rounded-xl bg-green-300 w-[120px] h-[48px] flex justify-center items-center">
          <FaPen className="text-[28px]" />
        </div>
      </div>
    </div>
  );
}

export default BookPage;
