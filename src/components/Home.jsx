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
// import { Link } from 'react-router-dom';
import './Home.css';
import Navbar2 from './Navbar2';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
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
              <img src="data:image/jpeg;base64,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" alt="Achievement 1" />
              <p>Built 100 Homes for the Homeless</p>
            </div>
            <div className="achievement">
              <img src="https://image1.masterfile.com/getImage/NzAwLTAzNjk4MzIzZW4uMDAwMDAwMDA=AGicvx/700-03698323en_Masterfile.jpg" alt="Achievement 2" />
              <p>Educated Over 500 Children</p>
            </div>
            <div className="achievement">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-tTuDmtItQ6XbG5YUZdPSbji4iOhjGWkFw&s" alt="Achievement 3" />
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
          <br/>
          <Link to = "/ContactUs1"><button>Contact Us</button></Link>
        </section>
      </div>


    </div> 
   
  );
}

export default Home;