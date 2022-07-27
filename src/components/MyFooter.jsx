import React from 'react'

export default function MyFooter() {
  return (
    <div>
      <footer>
         <div class="container">
            <div class="row footer__row">
               <figure>
                  <a href="#">
                  </a>
               </figure>
               <div class="footer__social--list">
                  <a href="https://github.com/mattchn" target="_blank" class="
                  footer__social--link
                  link__hover--effect
                  link__hover--effect--white
                  "> 
                     GitHub 
                  </a>
                  <a href="https://www.linkedin.com/in/matthew-chan-5a8746163/" target="_blank" class="
                  footer__social--link
                  link__hover--effect
                  link__hover--effect--white
                  "> 
                     LinkedIn 
                  </a>
                  <a href="#" onclick="toggleModal()" class="
                  footer__social--link
                  link__hover--effect
                  link__hover--effect--white
                  "> 
                     Email 
                  </a>
                  <a href="#" target="_blank" class="
                  footer__social--link
                  link__hover--effect
                  link__hover--effect--white
                  "> 
                     Resume 
                  </a>
               </div>
               <div class="footer__copyright">
                  Copyright &copy; 2022 Matthew Chan
               </div>
            </div>
         </div>
      </footer>
   </div>
  )
}
