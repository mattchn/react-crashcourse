import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav>
         <ul class="nav__link--list">
            <li class="nav__link" onclick="toggleModal()">
               <a href="#" class="
               nav__link--anchor
               link__hover--effect
               link__hover--effect--black
               ">About</a>
            </li>
            <li class="nav__link">
               <a href="" class="
               nav__link--anchor
               link__hover--effect
               link__hover--effect--black
               ">Education</a>
            </li>
            <li class="nav__link">
               <a href="#" class="
               nav__link--anchor
               link__hover--effect
               link__hover--effect--black
               "  onclick="toggleModal()">Contact</a>
            </li>
            <li class="nav__link click">
               <a href="#" class="
               nav__link--anchor
               link__hover--effect
               link__hover--effect--black
               click
               "><i class="fas fa-adjust" onclick="toggleContrast()" ></i></a>
            </li>
         </ul>
      </nav>
    </div>
  )
}
