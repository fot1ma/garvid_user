'use clint'
import React, { useState,useEffect } from 'react'
import '../css/Navbar.css'

function sa(){
    var o=document.querySelector(".media-ul").style.display
    if(o=="flex"){
        document.querySelector(".media-ul").style.display="none";
        }else{
           document.querySelector(".media-ul").style.display="flex";
        }
    // document.querySelector(".media-ul").style.display="flex";
    document.querySelector(".bar-menu").classList.toggle("la")
    document.querySelector(".wone").classList.toggle("laa")
    document.querySelector(".wone1").classList.toggle("laa")
    document.querySelector(".wone2").classList.toggle("laa")
   }

    function about2() {
        document.querySelector(".ichi span").style="transform: rotate(180deg);";

        }
    
        function aboutClose2() {
      
            document.querySelector(".ichi span").style="transform: rotate(0deg);"
            }
            function ffd() {
  
    }    
    // meded
    function ochil1() {
        
        var t=document.querySelector(".lll ul").style.display
        var p=document.querySelector(".lll ul").style.opacity
        if(t=="none"){
            document.querySelector(".lll ul").style.display="block";
            document.querySelector(".lll ul").style.opacity="1";
            }else{
               document.querySelector(".lll ul").style.display="none";
               document.querySelector(".lll ul").style.opacity="0";
            }
        }
        function meded() {
        
            var t=document.querySelector(".ffdul ").style.display
            var p=document.querySelector(".ffdul").style.opacity
            if(t=="none"){
                document.querySelector(".ffdul").style.display="block";
                document.querySelector(".ffdul").style.opacity="1";
                }else{
                   document.querySelector(".ffdul").style.display="none";
                   document.querySelector(".ffdul").style.opacity="0";
                }
            }
        function menuul() {
            document.querySelector(".div1").style="display:block"
            document.querySelector(".menu ul").style="display:block"
            document.querySelector(".menuu  span").style="transform: rotate(180deg);"
        }
        function menuufolse(){
            document.querySelector(".menuu  span").style="transform: rotate(0deg);"
        }
        function menuul1() {
            document.querySelector(".menu ul").style="display:none"
            document.querySelector(".div1").style="display:none important"
            
        }
        function menu2ul() {
            document.querySelector(".blog1").style="display:block"
        }
        function menu2ul12() {
            document.querySelector(".menu ul").style="display:block"
            document.querySelector(".blog1").style="display:block"
        }
        function menu2leave() {
            document.querySelector(".blog1").style="display:none "
      
        }
        function menu2leave1() {
            document.querySelector(".blog1").style="display:none"
            document.querySelector(".menu ul").style="display:none"
      
        }
export default function Navbar() {
    

    const [state1, setState1] = React.useState();
    const [state,State] = React.useState(1)

 useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
    );
    if(localStorage.getItem("lang")!=="ru"){
    document.querySelector("#checkbox").checked=true
    }else{
      document.querySelector("#checkbox").checked=false
    }
  }, []);
  
    


return (
    <div>

{state1==="eng" ?(
      <div>

<section  onMouseLeave={() => menuul1()} className='navbar'>
    <div className="navbar-ul">
<ul>
     <li className='moto-menu-item'><a href="/">Home</a></li>

  <div className="menu" onMouseLeave={()=>menuufolse()} >
    <div className="menuu" onMouseEnter={() => menuul()} >
    <p ><a href="/about">About Us</a><span><box-icon name='chevron-down' color='#44bef1' ></box-icon></span></p> 
    <ul onMouseLeave={() => menuul1()} >
        <li ><a href="#" >FAQs</a></li>
    <div className="navbbar-line-hr"></div>

     <div className="menu2" >
     <p id='menu2pp'  onMouseEnter={() => menu2ul()} onMouseLeave={()=> menu2leave()}> <a href="#" className='zaib' >News <span id='menu2spanid'><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a> </p>
     <div className="navbbar-line-hr"></div>

     <ul onMouseEnter={() => menu2ul()} onMouseLeave={()=> menu2leave1()} className='blog1'>
  
        <div className="navbbar-line-hr1"></div>
  
        <li id='ded'><a href="/contacts">Connection </a></li>
      
     </ul>
     
     </div>
   
    </ul>
</div>
   
</div>

    <li className='moto-menu-item'> <a href="/servis">Services</a> </li>
    <li className='moto-menu-item'><a href="/blog">Blog</a></li>
    <li className='moto-menu-item'><a href="/ourteam">our team</a></li>
    <li className='moto-menu-item'><a href="/contact">Contacts</a></li>
    <li className='moto-menu-item'><a href="/login">Registration</a></li>
</ul>
<div class="checkbox-con">
  <input id="checkbox" onClick={()=>{!document.querySelector("#checkbox").checked?(localStorage.setItem("lang", "ru")):(localStorage.setItem("lang", "eng"));window.location.reload()}} type="checkbox"/>
</div>
    </div>
    <div className="media-navbar">
      
  

            <div className="navbar-menu">
<div className="navbar-mediao-barr" onClick={() => sa()}>
    
<div  className="bar-menu"   id='sa'  >
      <div className="wone" ></div>
      <div className="wone1"  ></div>
      <div className="wone2"  ></div>


      </div>
</div>

{/* onMouseLeave={()=>aboutClose2()}  */}
<div className="media-ul">
<div className="dfdf">
<ul>
   <li><a href="/" className='tt'>Main</a></li>
   <div className="media-kategory" onMouseLeave={()=>aboutClose2()}  >
<div className="ichi" onMouseEnter={()=>about2()}  onClick={(() => meded())}>
<li ><a href="/about" className='tt'>About Us</a></li> <span id='sdfdsfsd'><box-icon name='chevron-down' color='#ffffff' ></box-icon></span>


</div>

</div>
<div className="ffd" >
<ul className='ffdul' >
   <li className='ds'><a href="#">Archives</a></li>

  <div className="ichi2" onClick={()=>ochil1()
}>
  <li className='ds'><a href="#">News</a></li><span><box-icon name='chevron-down' color='#989da2' ></box-icon></span>
  </div>
<div className="lll">
   <ul>
       <li className='lll1'><a href="/blog">Blog</a></li>
       <li className='lll2'><a href="/contact">Contacts</a></li>
   </ul>
</div>

   <li className='ds'><a href="#">FAQs</a></li>
</ul>
</div>
   <li><a href="/servis" className='tt'>Services</a></li>
  
   <li><a href="/blog" className='tt'>Blog</a></li>
   <li><a href="/ourteam" className='tt'>our team</a></li>
   <li><a href="/contact" className='tt'>Contacts</a></li>
   <li><a href="/login" className='tt'>Registration</a></li>
</ul>

</div>

</div>


      </div>

   </div>

</section>






      </div>):(





      <div>



























<section  onMouseLeave={() => menuul1()} className='navbar'>
    <div className="navbar-ul">
<ul>
     <li className='moto-menu-item'><a href="/">Главный</a></li>

  <div className="menu" onMouseLeave={()=>menuufolse()} >
    <div className="menuu" onMouseEnter={() => menuul()} >
    <p ><a href="/about">О нас</a><span><box-icon name='chevron-down' color='#44bef1' ></box-icon></span></p> 
    <ul onMouseLeave={() => menuul1()} >
        <li ><a href="#" >FAQs</a></li>
    <div className="navbbar-line-hr"></div>

     <div className="menu2" >
     <p onMouseEnter={() => menu2ul()} onMouseLeave={()=> menu2leave()}> <a href="#" className='zaib' >Новости  <span><box-icon name='chevron-right' color='#44bef1' ></box-icon></span></a> </p>
     <div className="navbbar-line-hr"></div>

     <ul onMouseEnter={() => menu2ul()} onMouseLeave={()=> menu2leave1()} className='blog1'>
  
        <div className="navbbar-line-hr1"></div>
  
        <li id='ded'><a href="/contacts">{state1 === "eng" ? "Connection" : "Связь"} </a></li>
      
     </ul>
     
     </div>
   
    </ul>
</div>
   
</div>

    <li className='moto-menu-item'> <a href="/servis">Услуги</a> </li>
    <li className='moto-menu-item'><a href="/blog">Блог</a></li>
    <li className='moto-menu-item'><a href="/ourteam">Наша команда</a></li>
    <li className='moto-menu-item'><a href="/contact">Контакты</a></li>
    <li className='moto-menu-item'><a href="/login">Регистрация</a></li>
</ul>
<div class="checkbox-con">
  <input id="checkbox" onClick={()=>{!document.querySelector("#checkbox").checked?(localStorage.setItem("lang", "ru")):(localStorage.setItem("lang", "eng"));window.location.reload()}} type="checkbox"/>
</div>
    </div>
    <div className="media-navbar">
      
  

            <div className="navbar-menu">
<div className="navbar-mediao-barr" onClick={() => sa()}>
    
<div  className="bar-menu"   id='sa'  >
      <div className="wone" ></div>
      <div className="wone1"  ></div>
      <div className="wone2"  ></div>


      </div>
</div>

{/* onMouseLeave={()=>aboutClose2()}  */}
<div className="media-ul">
<div className="dfdf">
<ul>
   <li><a href="/" className='tt'>Главный</a></li>
   <div className="media-kategory" onMouseLeave={()=>aboutClose2()}  >
<div className="ichi" onMouseEnter={()=>about2()}  onClick={(() => meded())}>
<li ><a href="/about" className='tt'>О нас</a></li> <span id='sdfdsfsd'><box-icon name='chevron-down' color='#ffffff' ></box-icon></span>


</div>

</div>
<div className="ffd" >
<ul className='ffdul' >
   <li className='ds'><a href="#">Архивы</a></li>

  <div className="ichi2" onClick={()=>ochil1()
}>
  <li className='ds'><a href="#">Новости</a></li><span><box-icon name='chevron-down' color='#989da2' ></box-icon></span>
  </div>
<div className="lll">
   <ul>
       <li className='lll1'><a href="/blog">Блог</a></li>
       <li className='lll2'><a href="/contact">Контакты</a></li>
   </ul>
</div>

   <li className='ds'><a href="#">FAQs</a></li>
</ul>
</div>
   <li><a href="/servis" className='tt'>Услуги</a></li>
  
   <li><a href="/blog" className='tt'>Блог</a></li>
   <li><a href="/ourteam" className='tt'>Наша команда</a></li>
   <li><a href="/contact" className='tt'>Контакты</a></li>
   <li><a href="/login" className='tt'>Регистрация</a></li>
</ul>

</div>

</div>


      </div>

   </div>

</section>




      </div>)}










<div className="div1" onMouseEnter={() => menu2ul12()} onMouseLeave={()=> menu2leave1()}></div>
<div className="navbar-futer-tepaga">
    <a href="#">
        <div className="navbar-tepaga-krug"></div>
    </a>
</div>
    </div>
  )
}

