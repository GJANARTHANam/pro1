import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function LandingPage() {
  return (
    <div>
      <Navbar />
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
          <Carousel showThumbs={false} infiniteLoop autoPlay centerMode centerSlidePercentage={80}>
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
            <div>
              <img src="/ss4.jpg" alt="Memory 4" />
              <p className="legend">Youth Empowerment Event</p>
            </div>
            <div>
              <img src="/ss5.jpg" alt="Memory 5" />
              <p className="legend">Environmental Initiative</p>
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
            <div className="achievement">
              <img src="/ach4.jpg" alt="Achievement 4" />
              <p>Planted 10,000 Trees</p>
            </div>
            <div className="achievement">
              <img src="/ach5.jpg" alt="Achievement 5" />
              <p>Organized 50+ Community Events</p>
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
            <div className="partner">
              <img src="/par4.jpg" alt="Partner 4" />
              <p>Google</p>
            </div>
            <div className="partner">
              <img src="/par5.jpg" alt="Partner 5" />
              <p>Microsoft</p>
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

export default LandingPage;
