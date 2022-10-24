import React from 'react';
import './CardSlider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const CardSlider = (props) => {
  const slides = [{image:'/Imgs/sihR.jpg', title:"Recommended by SIH for Incubation under Forge", description: "Arc Sjec competed in SIH 2022, which was held in Coimbatore, Tamil Nadu, from the 25th to the 29th of August 2022. 24 Teams, 141 members with 35 mentors from 7 states across India provided innovations that can be game changers for disabled people at Forge Coimbatore Nodal Center", git:"https://www.instagram.com/p/CiAcKK_vy4B/"},
                    {image:'/Imgs/curioR.jpg', title:"Curio the Robo", description: "Curio is an agile mobile robot that navigates inside the administration section in SJEC with unprecedented mobility, allowing you to automate routine tasks such as guiding the people to reach the required destination and carry the files and information to the principal chamber. It's ROS enabled robot.",git:"https://github.com/arc-sjec/curio-the-robot"},
                    {image:'/Imgs/libR.jpg', title:"IoT-Enabled Library Management", description: "The Project titled “Iot enabled model for smart library management” is aimed at automating the traditional processes used in libraries to improve efficiency and user experience using IoT and thus reducing the human efforts involved in library management.Developed by Pavan and Team at ARC.",git:"https://github.com/arc-sjec/IoT-Library-Management"},
                    {image:'/Imgs/faceRecR.jpg', title:"Face Recognition", description: "Face recognition software having the capacity to add new users, as well as the ability to learn a face from only one image. Main libraries used for face detection are dlib face-recognition library and open-cv. Here the GUI is designed using PyQt5 and it's other dependencies which are popular python libraries.",git:"https://github.com/shan4488/Login2Explore_WebWithJPDB"},
                    {image:'/Imgs/uae-ft-spitfireR.jpg', title:"UAV-FT SPITFIRE", description: "This UAV-FT SPITFIRE can be used for the Aerial Surveillance / Geographical Survey and Remote Sensing.It is a light weight Unmanned Aerial Vehicle which weighs only 766gm excluding the battery. It is developed by our charming seniors : Vion Martis, Karthik, Deekshith, Yogesh & Adarsh",git:"https://www.sjec.ac.in/associations-sjec-arc.php#completedProjects"},
                    {image:'/Imgs/cnc-machineR.jpg', title:"MULTI-PURPOSE CNC MACHINE", description: "The main objective of the Multi-Purpose CNC-Machine was to integrate some of the features such as NI MyRIO controller, Workspace - 470x470x470mm, 3D Printing, Laser engrooving, Soldering and 3D Routing. This CNC Machine is developed by two of the students: Vion Martis & Joylon Cornelio.",git:"https://www.sjec.ac.in/associations-sjec-arc.php#completedProjects"},

                    
                    // {image:'/Imgs/img2.jpg', title:"Curio the Robo", description: "The description is simple as that you think"},
                    // {image:'/Imgs/img3.jpg', title:"Curio the Robo", description: "The description is simple as that you think"},
                    // {image:'/Imgs/img4.jpg', title:"Curio the Robo", description: "The description is simple as that you think"},
                    // {image:'/Imgs/img5.jpg', title:"Curio the Robo", description: "The description is simple as that you think"},
                    // {image:'/Imgs/img111.jpg', title:"Curio the Robo", description: "The description is simple as that you think"},
                    // {image:'/Imgs/img2.jpg', title:"Curio the Robo", description: "The description is simple as that you think"},
                    // {image:'/Imgs/img3.jpg', title:"Curio the Robo", description: "The description is simple as that you think"},
    ];

  const slideLeft = () =>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 470;

  }

  const slideRight = () =>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 470;
    
  }
  return (
    <div id="acheivement">
    <h1 id="cardh1">Projects</h1>
    <div id="seperator"></div>
    <div id="main-slider-container">

        <MdChevronLeft className="slider-icon-left" onClick={slideLeft}/>
        <div id="slider">
            {
                slides.map((slide, index)=>{
                    return(
                        <div className='slider-card'>
                            <div className='slider-card-image' style={{backgroundImage:`url(${slide.image})`}}></div>
                            <p className='slider-card-title'>{slide.title}</p>
                            <p className='slider-card-description'>{slide.description}</p>
                            <button className='slider-card-button'><a href={slide.git} target='.blank'>Learn More</a></button>
                        </div>
                    )
                })
            }
        </div>
        <MdChevronRight className="slider-icon-right" onClick={slideRight}/>
        </div>
    </div>
  )
}

export default CardSlider