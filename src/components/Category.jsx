import React, { useState } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import PublicTaskForm from './PublicTaskForm';
import Navbar2 from './Navbar2';

const categories = [
  { name: 'Volunteers', img: '/volunteers.jpg', path: '/category/volunteers' },
  { name: 'Public', img: 'pexels-camcasey-1687093.jpg', path: '#' },
  { name: 'Organizations', img: 'pexels-sora-shimazaki-5668831.jpg', path: '#' },
  { name: 'Orphanages', img: 'pexels-freestockpro-7545725.jpg', path: '#' },
  { name: 'Senior Citizens', img: 'pexels-matthiaszomer-339620.jpg', path: '#' },
];

function Category() {
  const [showPublicTaskForm, setShowPublicTaskForm] = useState(false);

  const handlePublicCardClick = () => {
    setShowPublicTaskForm(true);
  };

  const handleCloseForm = () => {
    setShowPublicTaskForm(false);
  };

  return (
    <div> 
  <Navbar2 />
    <div className="category-page">
      {categories.map((category, index) => (
        category.name === 'Public' ? (
          <div key={index} className="category-card" onClick={handlePublicCardClick}>
            <div className="card-image" style={{ backgroundImage: `url(${category.img})` }}>
              <div className="card-overlay">
                <h3>{category.name}</h3>
              </div>
            </div>
          </div>
        ) : (
          <Link to={category.path} key={index} className="category-card">
            <div className="card-image" style={{ backgroundImage: `url(${category.img})` }}>
              <div className="card-overlay">
                <h3>{category.name}</h3>
              </div>
            </div>
          </Link>
        )
      ))}
      {showPublicTaskForm && (
        <PublicTaskForm onClose={handleCloseForm} />
      )}
    </div>
    </div>
  );
}

export default Category;


  