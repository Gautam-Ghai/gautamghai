import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import "../css/pdf.scss"
import samplePDF from "../utils/GautamGhai_Resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Test() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }
  
    return (
      <div className="text-center" id="Resume" style={{backgroundColor: "#f3f3f3"}}>
        <h1 style={{fontFamily: "Verdana"}} className="text-center">Resume</h1>
        <br/>
        <Document
          file={samplePDF}
          onLoadSuccess={onDocumentLoadSuccess}
          className="document"
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="btn btn-dark"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="lg"/>
          </button>&nbsp;
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className="btn btn-dark"
          >
            <FontAwesomeIcon icon={faArrowRight} size="lg"/>
          </button>&nbsp;
          <a href={samplePDF} className="btn btn-dark"><FontAwesomeIcon icon={faFileDownload} size="lg"/></a>
        </div>
      </div>
    );
  }