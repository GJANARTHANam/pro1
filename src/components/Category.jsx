import React, { useState } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import PublicTaskForm from './PublicTaskForm';
import Navbar2 from './Navbar2';
import VolunteerRequestForm from './VolunteerRequestForm'; // Import the VolunteerRequestForm component

const categories = [
  { name: 'Volunteers', img: 'https://media.istockphoto.com/id/674720692/photo/multi-generation-family-hands.jpg?s=612x612&w=0&k=20&c=0UZ5SFT1_WFiwNvv6uUs1qOsEp97WSOozpWzrmAMIxA=', path: '/category/volunteers' },
  { name: 'Public', img: 'https://djsglowinthedark.com/wp-content/uploads/2020/10/Music.jpg', path: '#' },
  { name: 'Organizations', img: 'https://media.istockphoto.com/id/1215759505/photo/partnering-up-to-get-the-job-done-faster.webp?b=1&s=170667a&w=0&k=20&c=WHox_NVFcJF-63eXYwKChh_CD-NJiZF86qlNbJEtPok=', path: '#' },
  { name: 'Orphanages', img: 'pexels-freestockpro-7545725.jpg', path: '#' },
  { name: 'Senior Citizens', img: 'https://www.gettingwiser.org/sites/default/files/styles/primary_image__600_wide_/public/assets/news/DHAD_ElderAbuse.jpg?itok=lDpUTL8d', path: '#' },
];

function Category() {
  const [showPublicTaskForm, setShowPublicTaskForm] = useState(false);
  const [showVolunteerRequestForm, setShowVolunteerRequestForm] = useState(false);

  const handlePublicCardClick = () => {
    setShowPublicTaskForm(true);
  };

  const handleOrganizationCardClick = () => {
    setShowVolunteerRequestForm(true);
  };

  const handleClosePublicForm = () => {
    setShowPublicTaskForm(false);
  };

  const handleCloseVolunteerForm = () => {
    setShowVolunteerRequestForm(false);
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
          ) : category.name === 'Organizations' ? (
            <div key={index} className="category-card" onClick={handleOrganizationCardClick}>
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
          <PublicTaskForm onTaskSubmit={() => {}} onClose={handleClosePublicForm} />
        )}
        {showVolunteerRequestForm && (
          <VolunteerRequestForm onSubmit={() => {}} onClose={handleCloseVolunteerForm} />
        )}
      </div>
    </div>
  );
}

export default Category;
