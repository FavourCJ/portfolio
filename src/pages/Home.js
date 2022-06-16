import React, { useEffect, useRef, useState } from 'react';
import {MenuOutlined, MailFilled, GithubFilled, LinkedinFilled} from '@ant-design/icons';
import { Progress } from 'antd';
import { Validate } from "../Validate";
import emailjs from '@emailjs/browser';
import "./home.css";

function Home() {
    const [showMenu, setShowMenu] = useState(false)
    const [error, setError] = useState({});
    const [correctData, setCorrectData] = useState(false);
    const [values, setValues] = useState({
      fullname: "",
      email: "",
      message: "",
    });

    const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm('serviceId', 'templateId', form.current, 'userId')
      .then(() => {
          alert("Email Sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  const projects = [{
    image: "./portrait.png",
    header: "E-commerce Application",
    description: "This application has 'Admin' and 'Customer' account. Admin have the previllage to sell his/her clothing items and can also monitor sells. While customer can only view and but items. view project to learn more. ",
    preview: "https://favourcj-ecommerce.firebaseapp.com/",
    frontend: "Reactjs",
    backend: "Firestore",
    code: ""
  },
  {
    image: "./portrait.png",
    header: "E-voting Portal",
    description: "This application consist of 'Admin and 'Voter' account. Voters can vote and contest for election while, Admin can aprrove or delete contestants, set vote timer and view registered users. Preview project to learn more.",
    frontend: "Reactjs",
    backend: "Firestore",
    preview: "https://favourcj-votingportal.firebaseapp.com/",
    code: ""
  },
  {
    image: "./portrait.png",
    header: "Portfolio",
    description: "This application displays the completed projects I have done so far. Feel free to take a tour",
    frontend: "Reactjs",
    backend: "Firestore and Email.js",
    preview: "https://favourcj-portfolio.web.app/",
    code: ""
  },
]
    //handling submit
    const handleSubmit = (e) =>{
      e.preventDefault();
      setError(Validate(values));
      setCorrectData (true);   
    }
     useEffect (() => {
      if (Object.keys(error).length === 0 && correctData)
      {  
       sendEmail ();
        
      }});
    return (
    <div className='landing-container'>
        <div className='menu-container'>
            <div className='logo-container'>
                <p className='logo'> Favour CJ</p>
            </div>
            <div className='menu-cv'>
            <div className = "menu" id ={showMenu ? "hidden": ""}>
                <a href='' className='menu-link' rel="noopener noreferrer"> Home </a>
                 <a href='#skills' className='menu-link' rel="noopener noreferrer"> Skills </a>
                 <a href='#projects' className='menu-link' rel="noopener noreferrer"> Project </a>
                 <a href='#about' className='menu-link' rel="noopener noreferrer"> About </a>
                 <a href='#contact' className='menu-link' rel="noopener noreferrer"> Contact </a>

            </div> 
            <div className='cv-container' id ={showMenu ? "hidden": ""}>
                 <a className='cv' href="./Favour_Chapp-Jumbo'sCV.pdf" download rel="noopener noreferrer"> Download CV</a> 
                 </div>                 
            </div>   

            <div className='mobile-menu-icon-container'>
                <button 
                  className='mobile-menu-icon'
                  onClick={() =>{
                    setShowMenu(!showMenu)
                  }}>
                <MenuOutlined />
                </button>
            </div> 
    </div>

    <div className="image-container" id='home'>
          <p> Testing</p>      
    </div>

       <div className= "intro-container">
          <p className="intro-p"> <span className="num">2+</span> &nbsp;<span className="experience"> Years Experience</span></p>
          <p className="intro-p"> <span className="num">3</span> &nbsp;<span className="experience"> Completed Projects</span></p>
          <p className="intro-p"> <span className="num">2</span> &nbsp;<span className="experience"> Soft Skills</span></p>
        </div>

        <div className="skills-container">
        <h1 className="skills-h1" id='skills'> Technical Skills</h1>
        <div className="skills">
  
          <a href="#web" className="skills-link">
          <div className="sub-skills"> 
          <h1 className="web-h1"> Web Development</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Delectus esse commodi deserunt vitae, 
            vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
          </div>
        </a>
  
        <a href="#language" className="skills-link">
          <div className="sub-skills"> 
          <h1 className="web-h1"> Programming Languages</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Delectus esse commodi deserunt vitae, 
            vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
          </div>
        </a>    
       </div>
          
        </div> 
     
        <div className="skills-container" id='projects'>
        <h1 className="skills-h1" id='web'> Web Development</h1>
        <div className="skills">
          {projects.map((val, key) =>( 
            <div className="sub-skills-list-web" key={key}>
              <h1 className="web-h1"> {val.header}</h1>
              <img className='skill-img' src={val.image} alt=''/>
              <p className='description-p'>{val.description}</p>
              <p className='description-language-frontend'>Frontend: {val.frontend}</p>
              <p className='description-language-backend'>Backend: {val.backend}</p>
              <a 
              className='view'
             href= {val.preview}
             target= "_blank"
             rel="noopener noreferrer"> Preview</a>
            <a className='code'>  Code</a> 
            </div>
          ))}
       </div>       
        </div>

        <div className="web-container" id='language'>         
        <h1 className="progress-h1"> Programming Languages</h1>
        <div className="skills">
  
          <div className="progress-container"> 

          <div>
          <div className='percentage'>
          <p className='lan-info'> C++</p>
          <p className='percent'>85%</p> 
          </div> 
          <p className='progress'>
            <Progress percent={85} strokeColor={{
          '0%': '#FFC107',
          '100%': "#FFC107",      
            }}
          />
          </p>
          </div>
          
          <div>
          <div className='percentage'>
          <p className='lan-info'> Js</p>
          <p className='percent'>80%</p> 
          </div>
          <p className='progress'>
            <Progress percent={80} strokeColor={{
          '0%': '#FFC107',
          '100%': "#FFC107",      
            }}
          />
          </p>
          </div>

          <div>
          <div className='percentage'>
          <p className='lan-info'> ReactJs</p>
          <p className='percent'>80%</p> 
          </div>
          <p className='progress-js'>
            <Progress percent={80} strokeColor={{
          '0%': '#FFC107',
          '100%': "#FFC107",      
            }}
          />
          </p>

          </div>

          <div>
          <div className='percentage'>
          <p className='lan-info'> Nodejs</p>
          <p className='percent'>75%</p> 
          </div>
          <p className='progress-js'>
            <Progress percent={75} strokeColor={{
          '0%': '#FFC107',
          '100%': "#FFC107",      
            }}
          />
          </p>

          </div>

          <div>
          <div className='percentage'>
          <p className='lan-info'> PHP</p>
          <p className='percent'>65%</p> 
          </div>
          <p className='progress'>
            <Progress percent={65} strokeColor={{
          '0%': '#FFC107',
          '100%': "#FFC107",      
            }}
          />
          </p>
              
              </div>       

        <div>
              <div className='percentage'>
          <p className='lan-info'> Java</p>
          <p className='percent'>60%</p> 
          </div>
          <p className='progress'>
            <Progress percent={60} strokeColor={{
          '0%': '#FFC107',
          '100%': "#FFC107",      
            }}
          />
          </p>
       </div>
          
          <div>
          <div className='percentage'>
          <p className='lan-info'> MySQL</p>
          <p className='percent'>60%</p> 
          </div>
          <p className='progress-js'>
            <Progress percent={60} strokeColor={{
          '0%': '#FFC107',
          '100%': "#FFC107",      
            }}
          />
          </p>

          </div>      
          </div>     
       </div>       
        </div>

        <div id='about' className='all-about'>
        <h1 className="about-h1"> About Me</h1>
        <div className="about-container" >

        <div className='profile-container'>
        <img src='edited-photo.png' alt='profile' className='profile'/>     
            </div>

            <div> 
                <p className='myname'> Favour Chapp-Jumbo</p>
                <p className='career'> Full-stack Web Developer</p>
                </div>

                <div className='location-container'>
                    <p className='location'> Residence: <span className='location-p'>Cyprus</span></p>
                    <p className='location'> State: <span className='location-pi'>Nicosia</span></p>
                    <p className='location'> City: <span className='location-pii'>Famagusta</span></p>
                </div>

                <p className='speak'> Official Language: English</p>
       
            <div className="icon-container">

             <div className='icon-text-container'> 
              <p><MailFilled className='icon'/></p>
              <p className='icon-p'> favourcjdev@gmail.com</p>
              </div>

              <a href='https://github.com/FavourCJ' target= "_blank" className='contact-link' rel="noopener noreferrer">    
              <div className='icon-text-container'> 
              <p><GithubFilled className='icon'/></p>
              <p className='icon-p'> https://github.com/FavourCJ</p>
              </div>
              </a>

              <a href='https://www.linkedin.com/in/favourchapp-jumbo/' className='contact-link' target= "_blank" rel="noopener noreferrer">    
              <div className='icon-text-container'> 
              <p><LinkedinFilled className='icon'/></p>
              <p className='icon-p'> https://www.linkedin.com/in/favourchapp-jumbo/</p>
             </div>
             </a>
             
            </div>   
            </div>
        </div>
      
        <div className='get-in-touch'>
        <h1 className="about-h1" id='contact'> Get In Touch</h1>
        <div className='form-container'>
        <div className='form'>
          <form onSubmit = {handleSubmit} ref={form}>
        <input 
          className='input'
          name='fullname'
          type= "text"
          placeholder='Full Name'
          value={values.fullname}
          onChange = { e=> {
            setValues ({...values, fullname: e.target.value})
          }}
          />
           {error.fullname && <p className='error'> {error.fullname}</p>}

        <input 
          className='input'
          name='email'
          type= "text"
          placeholder='Email'
          value={values.email}
          onChange = { e=> {
            setValues ({...values, email: e.target.value})
          }}
          />
          {error.email && <p className='error'> {error.email}</p>}

                  
        <textarea 
           className='input-message' 
           placeholder='Type Message'
           name='message'
           value={values.message}
           onChange = { e=> {
            setValues ({...values, message: e.target.value})
          }}/>
          {error.message && <p className='error'> {error.message}</p>}

        <button className='btn'> Submit</button>               
          </form>
          </div>
          </div>
       
        </div>

        <div className='footer'>
            <p className='footer-p'> &copy; Deigned and created by Favour Chapp-Jumbo</p>

        </div>
    </div>
  )
}

export default Home