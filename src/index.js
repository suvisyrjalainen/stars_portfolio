import React from 'react';
import ReactDOM from 'react-dom/client';
import Element from './Element.js';
import ElementParametrisoitu from './Element_parametrisoitu.js';
import Header from './Header.js';
import "./style.css";
import FluidGrid from 'react-fluid-grid'
import ankkapomppu from './ankkapomppu.png';
import selviytymispeli from './selviytymispeli.png';

const myPage = <div>
<Header />
<div class="fluid_container">
<FluidGrid>
<Element />

<ElementParametrisoitu projekti="Unity 2D"
 image="https://kodarit.com/wp-content/uploads/2020/06/unity_tasoloikka_kevat2020-750x350.png"
 text = "Tässä Kodarit-tunneilla tehty 2D-tasoloikka"
 link="https://github.com/suvisyrjalainen/Kodarit-2D-Unity-kaksintaistelu"/>
 <ElementParametrisoitu projekti="Unity 3D Multiplayer"
  image="https://kodarit.com/wp-content/uploads/2021/12/jalkapallopeli-750x350.png"
  text = "Kodarit-tunneilla tehty 3D multipalyer jalkapallopeli"
  link="https://github.com/suvisyrjalainen/Kodarit-3D-Unity-multipalyer-robottijalis"/>
  <ElementParametrisoitu projekti="P5.JS Paint"
   image="https://kodarit.com/wp-content/uploads/2020/07/oma_paint-1024x423-1-1024x423.png"
   text = "Tässä Kodarit-tunneilla tehty Oma paint-ohjema"
   link="https://github.com/suvisyrjalainen/Oma-Paint"/>
  <ElementParametrisoitu projekti="Suvi Maps - Full stack"
    image="https://kodarit.com/wp-content/uploads/2020/07/blackbelt_kartta-1536x693-1-1024x462.png"
    text = "Tässä Kodarit-tunneilla tehty mini full stack -karttaohjelma"
    link="https://github.com/suvisyrjalainen/torstain_fullstack_karttaprojekti"/>
  <ElementParametrisoitu projekti="P5.JS pompottelupeli"
    image={ankkapomppu}
    text = "Tässä Kodarit-tunneilla tehty retro pompottelupeli"
    link="https://replit.com/@syrjalainensuvi/Aikuisten-ankkapomppu-syksy-2022#index.html"/>
  <ElementParametrisoitu projekti="Pygame selviytymispeli"
    image={selviytymispeli}
    text = "Tässä Kodarit-tunneilla tehty Pygame selviytymispeli"
    link="https://replit.com/@syrjalainensuvi/Pygame-opekoulutus-kevat-2023"/>
 </FluidGrid>
</div>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
