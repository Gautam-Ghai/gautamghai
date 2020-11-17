import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpressSimple} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faDesktop } from '@fortawesome/free-solid-svg-icons'

class WorkHistory extends Component {
    render() { 
        return (
          <div style={{backgroundColor: "#e3e3e3"}} id="WorkExp">
            <h1 style={{fontFamily: "Verdana"}} className="text-center">Experience</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(31, 40, 51)', color: '#848484' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(31, 40, 51)' }}
    date="November, 2020 - December, 2020"
    iconStyle={{ background: 'rgb(31, 40, 51)', color: '#848484' }}
    icon={<FontAwesomeIcon icon={faWordpressSimple} size="2x"/>}
  >
    <h3 className="vertical-timeline-element-title">WordPress Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">University of the Fraser Valley</h4>
    <p>
      WordPress Developer at SASI. Website: <a href="http://canadiansikhheritage.ca">canadiansikhheritage.ca</a>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(234, 231, 220)', color: '#e85a4f  ' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(234, 231, 220)' }}
    date="September, 2020 - December, 2020"
    iconStyle={{ background: 'rgb(234, 231, 220)', color: '#e85a4f  ' }}
    icon={<FontAwesomeIcon icon={faWordpressSimple} size="2x"/>}
  >
    <h3 className="vertical-timeline-element-title">Social Media & Website Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">University of the Fraser Valley</h4>
    <p>
      WordPress & TeminalFour Developer at UFV College of Arts. Websites: <a href="http://ufv.ca/arts">ufv.ca/arts</a> | <a href="http://blogs.ufv.ca/arts">http://blogs.ufv.ca/arts</a>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(255, 101, 47)', color: '#272727' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 101, 47)' }}
    date="January, 2019 - May, 2019"
    iconStyle={{ background: 'rgb(255, 101, 47)', color: '#272727' }}
    icon={<FontAwesomeIcon icon={faDatabase} size="2x"/>}
  >
    <h3 className="vertical-timeline-element-title">Research Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">UFV India</h4>
    <p>
      Web-based Software Developer. Developed Student Database Management System using HTML, CSS, Bootstrap & JavaScript for Front-End and NodeJS & MySQL for Back-End.
    </p>
  </VerticalTimelineElement>    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(92, 219, 149)', color: '#05386b ' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(92, 219, 149)' }}
    date="April, 2018 - July, 2018"
    iconStyle={{ background: 'rgb(92, 219, 149)', color: '#05386b ' }}
    icon={<FontAwesomeIcon icon={faDesktop} size="2x"/>}
  >
    <h3 className="vertical-timeline-element-title">IT Trainee</h3>
    <h4 className="vertical-timeline-element-subtitle">DS Solutions Pvt. Ltd.</h4>
    <p>
      System Administrator at DS Solutions Private Limited, Chandigarh, India
    </p>
  </VerticalTimelineElement>    
</VerticalTimeline>
</div>
        );
    }
}
 
export default WorkHistory;