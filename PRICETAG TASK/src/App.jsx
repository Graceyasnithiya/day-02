import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div class="wrapper">
        <div class="table basic">
            <div class="price-section">
                <div class="price-area">
                    <div class="inner-area">
                        <span class="text">
                          &#8377;
                        </span>
                        <span class="price">$0</span>
                    </div>
                </div>
            </div>
            <div class="package-name">
     
            </div>
            <div class="features">
                <li>
                    <span class="list-name">✔single user</span>
                    <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔50GB Storage</span>
                    <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Unlimited public projects</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Community access</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✘Unlimited private projects</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✘Dedicated phone support</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✘Free sub domain</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✘Monthly status report</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <div class="btn"><button>Button</button></div>
            </div>
        </div>
        <div class="table Premium">
            <div class="price-section">
                <div class="price-area">
                    <div class="inner-area">
                        <span class="text">
                          &#8377;
                        </span>
                        <span class="price">$9</span>
                    </div>
                </div>
            </div>
            <div class="package-name">
             
            </div>
            <div class="features">
            <li>
                    <span class="list-name">✔Multiple user</span>
                    <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔50GB Storage</span>
                    <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Unlimited public projects</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Community access</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Unlimited private projects</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Dedicated phone support</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Free sub domain</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✘Monthly status report</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <div class="btn"><button>Button</button></div>
            </div>
        </div>
        <div class="table Ultimate">
            <div class="price-section">
                <div class="price-area">
                    <div class="inner-area">
                        <span class="text">
                           &#8377;
                        </span>
                        <span class="price">$49</span>
                    </div>
                </div>
            </div>
            <div class="package-name">
                
            </div>
            <div class="features">
            <li>
                    <span class="list-name">✔Multiple user</span>
                    <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔50GB Storage</span>
                    <span class="icon check"><i class="fas fa-check-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Unlimited public projects</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Community access</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Unlimited private projects</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Dedicated phone support</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Free sub domain</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <li>
                    <span class="list-name">✔Monthly status report</span>
                    <span class="icon cross"><i class="far fa-times-circle"></i></span>
                </li>
                <div class="btn"><button>Button</button></div>
            </div>
        </div>
    </div>

     
    </>
  )
}

export default App
