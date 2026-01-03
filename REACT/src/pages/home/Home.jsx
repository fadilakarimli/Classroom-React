import React from 'react';
import ClassCard from '../../components/classcard/ClassCard';
import './Home.css';


const Home = () => {
  const classes = [
    {
      title: 'PTP101',
      subtitle: '',
      bgColor: '#546e7a'
    },
    {
      title: 'PB103',
      subtitle: 'class room',
      bgColor: '#3f7e6e'
    },
    {
      title: 'EL225',
      subtitle: 'class room',
      bgColor: '#d4915d'
    }
  ];

  return (
    <div className="home">
      <div className="cards-grid">
        {classes.map((classItem, index) => (
          <ClassCard
            key={index}
            title={classItem.title}
            subtitle={classItem.subtitle}
            bgColor={classItem.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;