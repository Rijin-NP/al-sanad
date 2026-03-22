import React from 'react';
import { Award, Users, CheckCircle2, MapPin } from 'lucide-react';
import './StatsBar.css';

const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '10+',
      label: 'Years of Experience',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
    },
    {
      icon: CheckCircle2,
      value: '1500+',
      label: 'Projects Done',
    },
    {
      icon: MapPin,
      value: '7',
      label: 'Emirates Covered',
    },
  ];

  return (
    <div className="stats-bar">
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon-wrapper">
              <stat.icon size={24} className="stat-icon" />
            </div>
            <div className="stat-info">
              <span className="stat-number">{stat.value}</span>
              <span className="stat-desc">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
