
import './App.css';
import './style.css';
import image2 from './image2.jpg';
import video from './VID-20211205-WA0003.mp4';

function app(){
  return (

<div style = {{borderSolidBlack:1, maxWidth:'100vw'}}>
  <h1 className ='title red'>your name here</h1>
  <br/>
    <img src={image2} alt ='myimage2'/>
  <br/>  
    <img src="/cat.jpg" alt ='myimage'/>
    <br/>
  <video width={750} height={500} controls>
  <source src={video} typeof='video/mp4'/>
   </video>
</div>



  );
}
export default app
    



