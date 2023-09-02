import logo from './logo.svg';
import drop from './drops.png';
import drop1 from './drop1.svg';
import hand from './hand.png';
import './Styles12.css';
import React from "react";
import {firsto} from "./first";
import {NavbarDefault} from "./Navbar";
import { Button } from "@material-tailwind/react";
import {NavbarWithMegaMenu} from "./packnav";
import { Card3Presentation } from "./cards";
import {HorizontalCard} from "./one-stop";
import Slider from "./slider";
import TestimonialCard from "./tasticard";
import testimonials from "./testimonials.json";
import { useState } from 'react';
function Application() {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const showImage = (imageId) => {

    setSelectedImage(imageId);
  };
    return (
      <>
      
       
          {/* <div> */}
            <div>
   <span className="qaz">
   
    <h3 className="mb-4 border-b pb-4 text-5xl leading-tight text-[#8AA6AA] df">Blow-Fill-Seal  & Form-Fill-Seal Solutions for Pharmaceuticals</h3>
    
    <button class="bg-[#8AA6AA] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full opl">
  Explore
</button>
<span>
    <h6 className="text-1xl leading-tight text-[#8AA6AA] sd" color="blue">"Unleashing the Power of BFS Technology: Aseptic Filling, Sterile Containers, and Unbreakable Packaging in a Single Step!"</h6> <br></br>
    </span>

<br></br><br></br>
<div>

    <img
      className="h-96 w-full object-cover object-center"
      src={logo}
      alt="nature image"
    />
    </div>
   </span>
   
  
  </div><br></br>
  
  

    
    <br></br>
    <br></br><br></br><br></br><br></br>
    {/* </div> */}
 
  {/* <div> <img
      className="h-96 w-full object-cover object-center"
      src={logo}
      alt="nature image"
    />
    </div> */}
  <div className="navbar">
        <button onClick={() => showImage('image1')} style={{ marginRight: '4%' }}>Eye-Drops</button>
        <button onClick={() => showImage('image2')} style={{ marginRight: '4%' }}>Injection</button>
        <button onClick={() => showImage('image3')} style={{ marginRight: '4%' }}>Inhalents</button>
        <button onClick={() => showImage('image3')} style={{ marginRight: '4%' }}>Infusion</button>
      </div>
      <br></br>

      <div className="image-container" id="image1" style={{ display: selectedImage === 'image1' ? 'block' : 'none' }}>
        <img src={drop} alt="Image 1" />
      </div>
      <div className="image-container" id="image2" style={{ display: selectedImage === 'image2' ? 'block' : 'none' }}>
        <img src={drop} alt="Image 2" />
      </div>
      <div className="image-container" id="image3" style={{ display: selectedImage === 'image3' ? 'block' : 'none' }}>
        <img src={hand} alt="Image 3" />
      </div>
      <div className="image-container" id="image3" style={{ display: selectedImage === 'image3' ? 'block' : 'none' }}>
        <img src={drop} alt="Image 4" />
      </div>
        
        
        <br></br>
       {/* <div> <h6 className="text-1xl leading-tight text-black" color="blue">"Unleashing the Power of BFS Technology: Aseptic Filling, Sterile Containers, and Unbreakable Packaging in a Single Step!"</h6><br></br>
        </div> */}
        {/* <div> <img
      className="h-70 w-full object-cover object-center scale-[.87]"
      src={drop}
      alt="nature image"
    />
    </div> */}
    <div> <img
      className="h-70 w-full object-cover object-center "
      src={hand}
      alt="nature image"
    />
    </div>
    <div>
    <h3 className="mb-4 border-b pb-4 text-2xl leading-tight text-[#8AA6AA]">From the industry leader: Exemplary BFS solutions for the
pharmaceutical industry</h3>
    <h6 className="text-1xl leading-tight text-[#8AA6AA]" color="blue">"Our concepts are as individual as your requirements. See for yourself!"</h6><br></br>
    {/* <Card3Presentation/> */}
    </div>
      {/* className={`flex min-h-screen flex-col items-center justify-between py-24`} */}
   
      {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="w-screen">
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    
    {/* <HorizontalCard/> */}
   
          <div class="h-250 bg-[url('https://s3-alpha-sig.figma.com/img/adef/1933/3c4aec3165561e0e66507d1a5f04c828?Expires=1694390400&Signature=kUA16-811h509lNqndeJGtd88RFyAdXz0N8v8D~vaQLsOn6-mCgp4wgOKRKiWQ2C3taSrmoJJqYhovyrQ-SihL9U3KeUiTaVEDh-VmPN5yCw3XmsHP-C8ohD85dUTVdQBtEj-rU4~IycgnN-W6W2a-wA8CVQd~NkzXp~HEzbhCXdzCP8zL2hAvDd7-x~DEM22czyTYjSb5ndeF-kxuoT7Uci~3NgRx1x4ty7IGj4jFhWTs-ifNhdUmhKwRVtqW9zwb5hu~N7vL8arx1syFJM9dRYF1-m22rr0rJ7u3DVc~pRCgJSV1t~k1DMk9AU80fcUthKdqtXZonVQT8HAMtCEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
          <br></br><br></br><div class="p-1 m-2 bg-[#8AA6AA] kp">
          
            <h1 class="text-3xl font-bold text-white kl">One-stop partners have more to offer</h1><br></br>
            <h5  class="text-xl font-bold text-white kl">No matter what point you are at: With our experience and range of services, we are sure to get you ahead. Maybe so with these offers:</h5>
          
            
        </div>
        <br></br>
        </div>
   
    
    
      </>
    );

}

export default Application;