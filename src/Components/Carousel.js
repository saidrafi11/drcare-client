import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/doctor-reading-coronavirus-patient-medical-chart_53876-139569.jpg?w=1380&t=st=1667889743~exp=1667890343~hmac=7f7e749e4d8c8d42fa27b5666e3881a64aa58e4912d5d09a6adc0fc7f80ab222" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-vector/physician-general-healthcare-doctor-typographic-header-idea-doctor-caring-about-patient-health-flu-treatment-recovery-vector-illustration-cartoon-style_613284-2443.jpg?w=1380&t=st=1667889795~exp=1667890395~hmac=71e47274b6b93cd231ffa89bf339a27dac53fe7b608cea102dc55042c982896c" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-vector/telemedicine-cartoon-header-title-horizontal-composition-with-heartbeat-stethoscope-online-medical-advice-tablet-smartphone-illustration_1284-65729.jpg?w=1380&t=st=1667889916~exp=1667890516~hmac=bc9cbff2464991d9f22571183d182eb59abb699fc8c8a2125047c257c2e26b61" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/coronavirus-medical-staff-banner-template-mockup_53876-137539.jpg?w=900&t=st=1667889984~exp=1667890584~hmac=32c0c29a9acc4faaf95edbf118beaab5bc801473cc1dba85e3046cde86ee3541" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Carousel;