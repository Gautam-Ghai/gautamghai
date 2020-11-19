import React, {useState} from 'react';
import "../css/about.scss"
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { Animate } from "./animate"
import samplePDF from "../utils/GautamGhai_Resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const About = () => {
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
        <div className="division text-light" id="About">
            <h1 style={{fontFamily: "Verdana"}} className="text-center">About</h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6 ">
                      <Animate textColor="#ffffff" overlayColor="#011f41">Hi, I am Gautam Ghai</Animate><br />
                        <p>I am a web developer who likes to work with JavaScript. I am pursuing my Bachelors of Computer Information Systems from University of the Fraser Valley, Abbotsford, BC, Canada.</p>
                        <p>Apart from this, I love to watch football and talk about it all day. I am also a Football Manager addict which means if I start playing once, I won't stop for the next 2-3 hours. Other than that, I also like to read and write.</p>
                    </div>
                    
                    <div className="col-xs-12 col-md-6 text-center">
                    <Document
          file={samplePDF}
          onLoadSuccess={onDocumentLoadSuccess}
          className="document"
        >
          <Page pageNumber={pageNumber} height={550} width={400}/>
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
                        <p></p>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}
 
export default About;