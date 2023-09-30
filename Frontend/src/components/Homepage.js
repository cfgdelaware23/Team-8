import React from 'react'; 
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="home">
            <div className="logo">
            <img src='https://static.wixstatic.com/media/be7cda_0740848baea54c8e8af2e1a6ad34b9ad~mv2.png/v1/fill/w_202,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20-%20Primary.png' alt="wellfare logo" />
            </div>
                <div class="center-container">
                    <button class= "log-in-button">Login</button>
                    <button class="new-user-button">New user!</button>
                </div>
                <h1><span class="red-text">Wel</span><span class ="grey-text">come</span></h1>
                <button className="language-button">Language</button>
                <img src='https://static.wixstatic.com/media/be7cda_8160f8831d2e43428c08e41b18e362c2f000.jpg/v1/fill/w_980,h_360,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/be7cda_8160f8831d2e43428c08e41b18e362c2f000.jpg' alt="gif" />
        </div>
    );
};

export default Homepage();