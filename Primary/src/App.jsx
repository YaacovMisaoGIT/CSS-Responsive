import React from 'react'

function App() { 
  return (
    <div>
       <header>
        <div class="container">
            <h1>CSS is a lot of fun</h1>
        </div>
    </header>

    <section class="section-one">
        <div class="container">
            <h2>Section One</h2>
            <img src="src/assets/css.png" alt="Bath in the river"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            <strong>tempor incididunt ut labore et dolore magna aliqua.</strong></p>
        </div>
    </section>

    <section class="section-two">
        <div class="container">
            <h2>Section Two</h2>
            <p>tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim <a href=""> ad minim veniam quis nostrud</a> exercitation ullamco laboris nisi ut 
               <strong>aliquip ex ea commodo consequat.</strong>
            </p>
        </div>
        <div class="button-container">
            <a href="#" class="btn btn-accent">contact us</a>
            <a href="#" class="btn btn-white">more info</a>
        </div>
    </section>
    </div>
  )
}

export default App
