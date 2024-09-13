import T2 from "./Task2"
import { useEffect, useState } from "react";
import arrietty from "../assets/App 8 (props Usestate)/Arrietty.jpg"
import kiki from "../assets/App 8 (props Usestate)/kiki.jpg"
import ponyo from "../assets/App 8 (props Usestate)/ponyo.jpg"
import poppy from "../assets/App 8 (props Usestate)/poppy hill.jpg"
import totoro from "../assets/App 8 (props Usestate)/totoro.jpg"
import whisper from "../assets/App 8 (props Usestate)/whisper.jpg"
import princss from "../assets/App 8 (props Usestate)/princss.jpg"
import spirit from "../assets/App 8 (props Usestate)/spirited away.jpg"
const App8 = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000); // Duration of the animation (2 seconds)

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <h1 style={{margin:"0 auto",textAlign:"center"}}>Studio Ghibli</h1>
    <p style={{borderBottom:"5% solid blue",width:"10%",margin:"0 auto"}}></p> <br />
   
    
     <div className="card-container">
    <T2 url={arrietty} name="Arrietty" para="Arrietty the Borrower The Secret World of Arrietty in North America, is a 2010 Japanese animated fantasy film" {...<br/>} btnn=""/>
    <T2 url={kiki} name="Kiki's Delivery Service" para="Kiki, a young witch, decides to go out on her own, which all young witches must do, taking her talking black cat, Jiji, with her." btnn=""/>
 
    <T2 url={ponyo} name="Ponyo" para=" A goldfish who escapes from the ocean and is helped by a five-year-old human boy, Sōsuke,
    As they bond with each other, Ponyo desires to become a human girl" btnn=""/>
    <T2 url={poppy} name="From Up on Poppy Hill" para="Umi Matsuzaki is a 16-year-old high school student living in Coquelicot Manor, a boarding house overlooking the Port of Yokohama in Japan. " btnn=""/>
    <T2 url={totoro} name="My Neighbor Totoro" para="Focuses on two young sisters and their interactions with friendly wood spirits in postwar rural Japan." btnn=""/>
    <T2 url={whisper} name="Whisper of the Heart" para="Shizuku Tsukishima is a 14-year-old student at Mukaihara Junior High School, where she is best friends with Yūko Harada." btnn=""/>
    <T2 url={princss} name="Princess Mononoke" para="The film centers on the adventure of Ashitaka as he journeys to the west to undo a fatal curse inflicted upon him by Nago, a boar turned into a demon by Eboshi." btnn=""/>
    <T2 url={spirit} name="Spirited Away" para="A ten-year-old girl who, while moving to a new neighborhood, inadvertently enters the world of kami (spirits of Japanese Shinto folklore)" btnn=""/>
    </div>
    
    </>
  )
}

export default App8
