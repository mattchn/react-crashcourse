import React from 'react'

export default function MainContent() {
  return (
    <div>
      <header class="header">
         <div class="header_content">
            <h1 class="title"> Hey</h1>
            <h1 class="title text--color"> I'm Matt </h1>
            <p class="header__para">
               I'm a recent <a href="#projects" class="text--color click"> <b>  University Graduate </b> </a>  with a strong passion for building web applications with great user experience.
               Here's a bit more <b class="text--color click" onclick="toggleModal()"> about me </b>.
            </p>
            <div class="social__list">
               <a href="https://www.linkedin.com/in/matthew-chan-5a8746163/" class="social__link click" target="blank">
                  <i class="fab fa-linkedin-in"></i>
               </a>
               <a href="https://github.com/mattchn" class="social__link click" target="blank">
                  <i class="fab fa-github"></i>
               </a>
               <a href="" class="social__link click" target="blank">
                  <i class="fas fa-file-pdf"></i>
               </a>
            </div>
         </div>
      </header>
    </div>
  )
}
