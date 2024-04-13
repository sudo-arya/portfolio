import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
// import "./App.css";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function MyPDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState("90%");
  const [fontSize, setFontSize] = useState("16px");

  useEffect(() => {
    function updateWidth() {
      if (window.innerWidth >= 1280) {
        // Macbook screen width
        setWidth("43%");
        setFontSize("16px");
      } else {
        setWidth("90%");
        setFontSize("9px");
      }
    }

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Call the function initially

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  const handleLinkClick = (url, e) => {
    // Handle the link click event here
    // For mobile devices, open link in same tab
    // For big screens, open link in new tab
    if (window.innerWidth >= 1280) {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
    e.preventDefault(); // Prevent default behavior of anchor tag
  };

  const openLinkInNewTab = (e) => {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() === "a") {
      handleLinkClick(e.target.href, e);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "public/resumes/Deepanshu_Arya_9210760003.pdf"; // Replace with the actual path to your PDF
    link.download = "Deepanshu_Arya_9210760003.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center bg-blue-800 hover:bg-purple-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-blue active:bg-gray-600 transition duration-150 ease-in-out w-full py-2 text-white font-bold rounded text-sm"
        >
          Download Resume
        </button>
        <Document
          file="public/resumes/Deepanshu_Arya_9210760003.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              width={parseInt(window.innerWidth >= 768 ? "860" : "375")}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={true}
              onClick={(e) => openLinkInNewTab(e)}
            />
          ))}
        </Document>
        <p style={{ fontSize: fontSize, marginTop: 10 }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page {pageNumber} of{" "}
          {numPages}
        </p>

        {pageNumber > 1 && (
          <button onClick={changePageBack}>Previous Page</button>
        )}

        {pageNumber < numPages && (
          <button onClick={changePageNext}>Next Page</button>
        )}
      </header>
    </div>
  );
}

export default MyPDFViewer;
