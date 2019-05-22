import React from 'react'
import Header from './Header'
import History from './History'
import News from './News'
import Info from './Info'
import Slider from './Slider'
import School from './School'
import Priority from './Priority'
     import SliderBoxBar from './SliderBoxBar'
import Aliances from './Aliances'
import Footer from './Footer'
import Contact from './Contact'

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
       return (
           <div>    
               <Header style={{position:"fixed"}} />
               <section className="p-0" id="slider">
                    <Slider/>
               </section>
               <section id="historia">
                    <History/>
               </section>
               <section className="gray-gradient" id="prioridades">
                    <Priority/>
               </section>
               <section id="noticias">
                    <News/>
               </section>
               <SliderBoxBar/>
               <section id="informacion">
                    <Info/>
               </section>
               <section id="escuela">
                    <School/>
               </section>
               <SliderBoxBar/>
               <section id="alianzas">
                    <Aliances/>
               </section>
               <section className="p-0" id="contacto">
                    <Contact/>
               </section>
               <section id="footer">
                    <Footer/>
               </section>
               

           </div>
       );
    }
}

export default Home;