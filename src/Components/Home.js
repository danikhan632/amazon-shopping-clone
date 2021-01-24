import React, { Component } from "react";
import "./css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>
        <div className="home_row">
          <Product
            id='981'
            title="SAMSUNG 85-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV with Alexa Built-in (QN85Q80TAFXZA, 2020 Model) "
            price={(2, 997.99)}
            image="https://images-na.ssl-images-amazon.com/images/I/61aMSAaIGSL._AC_SL1001_.jpg"
            rating={5}
          />
          <Product
            id='982'
            title="Nikon Z50 Compact Mirrorless Digital Camera with Flip Under Selfie/Vlogger LCD | 2 Zoom Lens Kit Includes: NIKKOR Z DX 16-50mm f/3.5-6.3 VR & NIKKOR Z DX 50-250mm F/4.5-6.3 VR "
            price={1096.95}
            image="https://images-na.ssl-images-amazon.com/images/I/81%2BDPdnOvBL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id='983'
            title="VASAGLE ALINRU Computer Desk, Office Desk with 8 Hooks, for Study, Home Office, Easy Assembly, Steel Frame, Industrial, 39.4 x 19.7 x 29.5 Inches, Greige and Black ULWD045B02 "
            price={56.09}
            image="https://images-na.ssl-images-amazon.com/images/I/61XgUYsp8cL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id='984'
            title="Lacoste Crocodile 18x18 Throw Pillow"
            price={44.07}
            image="https://images-na.ssl-images-amazon.com/images/I/91VT-ukW2HL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id='985'
            title="AMD Ryzen 5 3600XT 6-core, 12-threads unlocked desktop processor with Wraith Spire cooler "
            price={233.33}
            image="https://images-na.ssl-images-amazon.com/images/I/71u%2BmYxe%2BUL._AC_SL1384_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id='985'
            title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019) "
            price={549.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
