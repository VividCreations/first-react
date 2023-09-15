import Favorite from "./favorites"
import Tools from "./tools"
import Todo from "./todo"

export default function Home() {
  return(
    <div>
       <h1>Wow!! My first React project</h1>
       <h2>Why I love React</h2>
       <ul>
        <li>It is reuseable</li>
        <li>It is easy to use</li>
        <li>It is easy to learn and the community is wide</li>
       </ul>
       
       <Favorite name='Erioluwa'/>
       <Tools myName='Debbie' skill1='Html' skill2='CSS' skill3='Bootstrap' skill4='CCNA' skill5='Graphic Design'/>
       
       <h1>My ToDo</h1>
       <Todo todo='learn usestate'/>
       <Todo todo='conditional rendering'/>
       <Todo todo='learn list'/>

       {/* Create a component called tools, the tools should return my name is yourname, my skillsets involve 
       .Html
       .CSS
       .Bootstrap
       .any other you have
       
       All data(name and skillset must be passed as props)*/}
    </div>
   
  )
}