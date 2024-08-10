// // src/components/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import LandingPage from './LandingPage';

// function Home() {
//   return (
//     <div className="home-page">
//       <nav className="navbar1">
//         <div className="logo">BEACON</div>
//         <ul className="nav-links">
//           <li><Link to="/home">Home</Link></li>
//           <li><Link to="/category">Services</Link></li>
//           <li><Link to="/aboutus">About Us</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//         </ul>
//       </nav>
//       <div className="landing-content">
//         <LandingPage/>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar2 from './Navbar2';
import { Carousel } from 'react-responsive-carousel';
function Home() {
  return (
     <div>
      <Navbar2 />
    {/* <div className="home-page">
      <div className="landing-content">
        <h1>Welcome to BEACON</h1>
        <div className="content-left">
          <p>Discover our range of services designed to help you succeed.</p>
          <button>Learn More</button>
        </div>
        <div className="content-right">
          <p>Get to know more about us and what we do.</p>
          <button><Link to="/aboutus" >About us</Link></button>
        </div>
      </div>
    </div> */}

    <div className="landing-page">
        <section className="hero">
          <h1>Welcome to Our Social Service</h1>
          <p>Empowering Communities, Transforming Lives</p>
        </section>

        <section className="intro section">
          <h2>About Us</h2>
          <p>
            We are dedicated to making the world a better place by providing
            support and services to those in need. Our mission is to empower
            individuals and communities to overcome challenges and achieve their
            fullest potential.
          </p>
        </section>

        <section className="aim section">
          <h2>Our Aim</h2>
          <p>
            Our aim is to provide comprehensive support services that foster
            sustainable development, promote social justice, and enhance the
            quality of life for all individuals, particularly the most
            vulnerable.
          </p>
        </section>

        <section className="photo-slideshow section">
          <h2>Photo Memories</h2>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            <div>
              <img src="/ss3.jpg" alt="Memory 1" />
              <p className="legend">Community Outreach Program</p>
            </div>
            <div>
              <img src="/ss2.jpg" alt="Memory 2" />
              <p className="legend">Health Awareness Campaign</p>
            </div>
            <div>
              <img src="/ss1.jpg" alt="Memory 3" />
              <p className="legend">Educational Workshop</p>
            </div>
          </Carousel>
        </section>

        <section className="achievements section">
          <h2>Our Achievements</h2>
          <div className="achievement-grid">
            <div className="achievement">
              <img src="ach1.jpg" alt="Achievement 1" />
              <p>Built 100 Homes for the Homeless</p>
            </div>
            <div className="achievement">
              <img src="/ach2.jpg" alt="Achievement 2" />
              <p>Educated Over 500 Children</p>
            </div>
            <div className="achievement">
              <img src="/ach3.jpg" alt="Achievement 3" />
              <p>Provided Medical Care to 1,000+ Patients</p>
            </div>
          </div>
        </section>

        <section className="partners section">
          <h2>Our Partners</h2>
          <div className="partner-grid">
            <div className="partner">
              <img src="/par1.jpg" alt="Partner 1" />
              <p>Amway</p>
            </div>
            <div className="partner">
              <img src="/par2.jpg" alt="Partner 2" />
              <p>Citi Bank</p>
            </div>
            <div className="partner">
              <img src="/par3.jpg" alt="Partner 3" />
              <p>Meta</p>
            </div>
          </div>
        </section>

        <section className="testimonials section">
          <h2>Testimonials</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <img src="jurica-koletic-7YVZYZeITc8-unsplash.jpg" alt="Testimonial 1" />
              <p>"This organization changed my life. I am forever grateful!"</p>
              <p>- John Doe</p>
            </div>
            <div className="testimonial">
              <img src="christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="Testimonial 2" />
              <p>"Amazing work by amazing people. Highly recommend!"</p>
              <p>- Jane Smith</p>
            </div>
            <div className="testimonial">
              <img src="almos-bechtold-3402kvtHhOo-unsplash.jpg" alt="Testimonial 3" />
              <p>"They truly care about the community and making a difference."</p>
              <p>- Robert Brown</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Get Involved</h2>
          <p>Join us in making a difference. Become a volunteer or donate today!</p>
          <button>Contact Us</button>
        </section>
      </div>


    </div> 
   
  );
}

export default Home;