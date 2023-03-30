import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <h1>Steve's Cave</h1>
        <p>Free Hugs!</p>
        <button>Get a Hug</button>
      </header>
      <main>
        <section className="feature">
          <img src="https://via.placeholder.com/400x300.png?text=Feature+1+Image" alt="Feature 1" />
          <h2>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Learn More</button>
        </section>
        <section className="feature">
          <img src="https://via.placeholder.com/400x300.png?text=Feature+2+Image" alt="Feature 2" />
          <h2>Feature 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Learn More</button>
        </section>
        <section className="feature">
          <img src="https://via.placeholder.com/400x300.png?text=Feature+3+Image" alt="Feature 3" />
          <h2>Feature 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Learn More</button>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Learn More</button>
        </section>
      </main>
      <footer>
        <nav>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </nav>
        <p>&copy; 2023 Steve's Cave</p>
      </footer>
    </div>
  );
}

export default App;
