import React, { useRef, useEffect, useState } from 'react';

// icon artık FontAwesomeIcon gibi React bileşeni de olabilir.
interface TimelineItemProps {
  icon: React.ReactNode;
  year: string;
  title: string;
  subtitle: string;
  desc: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, year, title, subtitle, desc }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`timeline-item${visible ? ' visible' : ''}`} ref={ref}>
      <div className="timeline-icon">{icon}</div>
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h3 className="timeline-item-title">{title}</h3>
        <span className="timeline-subtitle">{subtitle}</span>
        <p className="timeline-desc">{desc}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
