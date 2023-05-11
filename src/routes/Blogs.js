import React from 'react'
import Navbar from '../component/Navbar';
import Main from '../component/Main';
import '../component/MainStyles.css'
import WaterBoat from '../image/waterBoat.jpg'
import Blog from '../component/Blog'
import Footer from '../component/Footer';
import Volcano from '../blogImage/costa-rica-volcano.jpg'
import AlaskaGlaciers from '../blogImage/alaska-glaciers.jpg'
import BeachStone from '../blogImage/beach-stones.jpg'
import TropicToucan from '../blogImage/tropic-toucan.jpg'
import AmazonJungle from '../blogImage/amazon-jungle-.jpg'




export default function Service() {
  return (
    <div>
      <Navbar />
      <Main
        cName="service-main-image-text" 
        mainImg={`${WaterBoat}`}
        title="blogs"
      />
      <Blog
        heading={"Costa Rica Parks"}
        src={`${Volcano}`}
        text="Lights very Have. So Void, their can’t of make yielding fowl open. Fill our. Lights living made fill.
        There winged there fowl second lesser, isn’t for winged you’ll good every to seasons from, seed, 
        make open fourth lights, whales sixth open female may Every have female said there bearing. 
        Waters there yielding. Heaven god. And fruitful won’t.
        Our happiest moments as tourists always seem to come when we stumble upon one thing while in pursuit 
        of something else.
        Form, beast fish whose fowl them. Forth moveth, made is creature whales. Were form own unto image 
        cattle all dry meat. Moved hath sixth thing yielding. Gathering said brought night, darkness. 
        There rule fourth Replenish doesn’t replenish. Green, meat heaven hath behold second."
      />
       <Blog
        heading={"Alaska Wonders"}
        src={`${AlaskaGlaciers}`}
        text="Also isn’t green shall she’d his. From they’re stars days Male creature first fill together 
        give to own. Winged light multiply sea life herb abundantly air unto fly fish, isn’t made So 
        behold without. 
        Which it dry, make in our creature. Herb seas together abundantly night spirit they’re a multiply. 
        Bring beginning whales saw she’d, had he lights. Saw every isn’t dry their midst and beginning fly called.
        Also, can’t grass greater be and land it were. Moved yielding seasons there. Unto firmament. 
        Spirit firmament they’re moving dominion beginning hath male years seas he stars to. Evening fruit together. Multiply."
      />
       <Blog
        heading={"3 Places You Should Visit"}
        src={`${BeachStone}`}
        text="Winged two was him god you’ll all it, herb you’re wherein have male of doesn’t you’ll them, grass. 
        Lights you living. Them. Have kind seasons our female set days fly us wherein rule So to yielding hath thing. 
        Given thing. Forth.
        Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.
        Fifth. Fly. Fruitful. Their deep. Said divide, fish earth saw thing our all the dominion itself multiply 
        blessed together from two you’ll. Saying meat. Make.
        Meat created sea, and. So female fruitful living created yielding she’d said replenish third divide dominion 
        fish light, appear. After have replenish signs forth evening the void heaven lesser, the fill night his had."
      />
       <Blog
        heading={"Earth Day 2015"}
        src={`${TropicToucan}`}
        text="To years were winged every yielding good kind Signs he have, days you’ll, yielding very every replenish 
        creepeth don’t of form was.
        Likeness, may. Years open great after midst tree open after years bring stars deep let is tree beginning the 
        face Fly Their fly fifth created second. Of. Yielding behold she’d divide good one, a meat his gathered dry 
        one subdue subdue which fifth earth rule saying.
        Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of 
        the earth all of one’s lifetime.
        Beast, light together face form and very fourth you’ll greater tree moved creepeth very him night to. Appear 
        beast may herb creepeth living under created can’t bearing won’t creature day, seasons fowl."
      />
       <Blog
        heading={"Stay Safe in Jungle"}
        src={`${AmazonJungle}`}
        text="ery and very said created isn’t man winged she’d divided were gathered. Upon made. Fifth first yielding 
        is created upon. Firmament together and be rule together winged gathered isn’t every you’ll divided isn’t unto.
        Sea, behold meat called can’t. Winged, wherein moving doesn’t, saw female our first can’t air beginning waters 
        also two under multiply. Let creepeth Lights stars creeping were third fruitful second kind great.
        Travel is the only thing you buy that makes you richer.       
        Were, fruitful the saying great lights set two likeness. You grass you be meat from open let, bring kind them 
        beginning made divided seas man day forth image a seas good all. Behold under."
      />
      <Footer />
    </div>
  )
}
