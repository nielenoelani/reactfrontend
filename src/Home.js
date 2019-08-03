import React , {useState, useContext, createContext} from 'react';
import Button from './Button';
import Jumbotron from './Jumbotron';
import NavBar from './NavBar';
import JigSaw from './JigSaw';
import { IconContainer, IconRow} from './IconContainer';
import SignUpWindow from './SignUpWindow';
import { InfoGroup, Info} from './InfoGroup';
import Testimonials from './Testimonials';
import {AvatarGroup, Avatar} from './AvatarGroup';
import About from './About';
import logo from './logo.svg';

export const AppContext = createContext();


    const Home = () => {
        const [state, setState] = useState({signUpForm: false});

          return (
            <AppContext.Provider value={[state, setState]}>
                <div className="Home">
                    <NavBar />
                    <Jumbotron img = "img/bg-masthead.jpg"/>
                    <IconContainer>
                        <IconRow 
                            iconClass="icon icon-screen-desktop" 
                            title="Fully" 
                            caption="This theme will look great, no matter the device!"/>
                        <IconRow 
                            iconClass="icon icon-layers" 
                            title="Bootstrap 4 Ready" 
                            caption="Featuring the latest build of the new Bootstrap framework!"/>
                        <IconRow 
                            iconClass="icon icon-check" 
                            title="Easy to Use" 
                            caption="Easy to Use"/>
                    </IconContainer>
                    <InfoGroup />
                    <JigSaw
                        order = {1}
                        img="img/bg-showcase-1.jpg"
                        title="Fully Reponsive Design"
                        caption="When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"/>
                    <JigSaw
                        order = {2}
                        img="img/bg-showcase-2.jpg"
                        title="Updated For Bootstrap 4"
                        caption="Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!"/>
                    <JigSaw
                        order = {1}
                        img="img/bg-showcase-3.jpg"
                        title="Easy to Use & Customize"
                        caption="Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"/>
                    <Testimonials 
                        img = "img/testimonials-1.jpg"
                        name = "Margaret E."
                        caption = '"This is fantastic! Thanks so much guys!"' />
                    <Testimonials 
                        img = "img/testimonials-2.jpg"
                        name = "Fred S."
                        caption = '"Bootstrap is amazing. Ive been using it to create lots of super nice landing pages."' />
                    <Testimonials 
                        img = "img/testimonials-3.jpg"
                        name = "Sarah W."
                        caption = '"Thanks so much for making these free resources available to us!"' />
                   <InfoGroup className = "testimonial" title = "What people are saying..."/>
                   <Avatar 
                        img = "img/testimonials-1.jpg"
                        name = "Margaret E."
                        caption = '"This is fantastic! Thanks so much guys!"' />
                    <Avatar
                        img = "img/testimonials-2.jpg"
                        name = "Fred S."
                        caption = '"Bootstrap is amazing. Ive been using it to create lots of super nice landing pages."' />
                    <Avatar 
                        img = "img/testimonials-3.jpg"
                        name = "Sarah W."
                        caption = '"Thanks so much for making these free resources available to us!"' />
                    <Jumbotron img = "img/bg-masthead.jpg"/>
                    {state.signUpForm && <SignUpWindow />}
//                    
                </div>
        </AppContext.Provider>
  );
}



export default Home;
