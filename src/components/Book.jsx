import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import contoh_komik from "../assets/comics/buku-ilustrasi-anak_lumba-lumba.pdf";

function Book() {
  const [pageNumber, setPageNumber] = useState(1);

  function nextPage() {
    setPageNumber(pageNumber + 1);
    console.log(pageNumber);
  }
  function previousPage() {
    setPageNumber(pageNumber - 1);
    console.log(pageNumber);
  }

  return (
    <>
      <div className="rounded-xl h-[462px] w-[318.5px] bg-green-500 mx-auto overflow-hidden">
        <iframe src={contoh_komik}></iframe>
      </div>
      <IoIosArrowBack className="h-10 w-10 text-green-800 absolute top-1/2 -translate-y-[25.5px] left-1" onClick={previousPage} />
      <IoIosArrowForward className="h-10 w-10 text-green-800 absolute top-1/2 -translate-y-[25.5px] right-1" onClick={nextPage} />
    </>
  );
}

export default Book;

// Use iframe to load comics from pendidikan.id

// <iframe
//   className="w-full h-full border-0 "
//   title="Komik Pra Sekolah - Belajar Membaca"
//   src={`https://komik.pendidikan.id/online/komik/belajar_membaca/`}
//   type="text/html"
//   allowFullScreen="true">
// </iframe>;
