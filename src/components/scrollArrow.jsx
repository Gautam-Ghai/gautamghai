import React, {useState} from 'react';
import '../css/scrollArrow.scss';
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FontAwesomeIcon icon={faArrowCircleUp} size="6x" className="scrollTop" onClick={() => scroll.scrollToTop()} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;