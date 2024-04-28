import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import PageBookCounter from "../components/PageBookCounter";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import useWindowDimensions from "../utility/useWindowDimensions";
import contoh_buku1 from "../assets/books/buku-ilustrasi-anak_lumba-lumba.pdf";
import contoh_buku2 from "../assets/books/74._Isi_dan_Sampul_Kalah_oleh_Si_Cerdik.pdf";

// Setup react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

function Book() {
  // Get Window Size
  const { width } = useWindowDimensions();

  // Page Navigation Handling
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function nextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }
  function previousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <div className="relative">
      {/* --BOOK FILE VIEWER-- */}
      <div className="w-10/12 h-full mx-auto flex items-center justify-center overflow-hidden rounded-2xl bg-green-300">
        <Document file={contoh_buku2} onLoadSuccess={onDocumentLoadSuccess} className="flex items-center justify-center">
          <Page pageNumber={pageNumber} width={width * 0.8} className="rounded-2xl overflow-hidden" />
        </Document>
      </div>

      {/* --PAGE COUNTER-- */}
      <PageBookCounter numPages={numPages} pageNumber={pageNumber} />

      {/* --PAGE NAVIGATION-- */}
      <IoIosArrowBack
        id="pdf-pagination-prev"
        className="h-10 w-10 text-green-800 absolute top-1/2 -translate-y-[50px] left-1"
        onClick={previousPage}
      />
      <IoIosArrowForward
        id="pdf-pagination-next"
        className="h-10 w-10 text-green-800 absolute top-1/2 -translate-y-[50px] right-1"
        onClick={nextPage}
      />
    </div>
  );
}

export default Book;

// --FIRST METHOD--
// Use iframe to load comics from pendidikan.id
// <iframe
//   className="w-full h-full border-0 "
//   title="Komik Pra Sekolah - Belajar Membaca"
//   src={`https://komik.pendidikan.id/online/komik/belajar_membaca/`}
//   type="text/html"
//   allowFullScreen="true">
// </iframe>;

// --SECOND METHOD--
// Use @cyntler/react-doc-viewer package
// // Doc Viewer
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// const [url, setUrl] = useState(contoh_komik);

// const docs = [
//   { uri: url }, // Local File
// ];

// const docViewerConfig = {
//   header: {
//     disableHeader: true,
//     retainURLParams: false,
//   },
//   pdfZoom: {
//     defaultZoom: 1.4, // 1 as default,
//   },
// };

// const [viewerKey, setViewerKey] = React.useState(0); //Viewer key state

// React.useEffect(() => {
//   setViewerKey((prevKey) => prevKey + 1); // update the viewer key when url changes(re-renders when url changes)
// }, [url]);

{
  /* <DocViewer
  documents={docs}
  key={viewerKey}
  initialActiveDocument={docs[0]}
  pluginRenderers={DocViewerRenderers}
  config={docViewerConfig}
  currentPageNumber={pageNumber}
/>; */
}
