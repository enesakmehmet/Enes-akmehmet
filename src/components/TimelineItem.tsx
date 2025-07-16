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
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  // Tooltip handlers
  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  // Modal handlers
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div
      className={`timeline-item${visible ? ' visible' : ''}`}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOpenModal}
      style={{ position: 'relative', cursor: 'pointer' }}
    >
      <div className="timeline-icon">{icon}</div>
      <div className="timeline-content">
        <span className="timeline-year">{year}</span>
        <h3 className="timeline-item-title">{title}</h3>
        <span className="timeline-subtitle">{subtitle}</span>
        <p className="timeline-desc">{desc}</p>
      </div>
      {/* Tooltip */}
      {showTooltip && (
        <div className="timeline-tooltip">
          {desc}
        </div>
      )}
      {/* Modal */}
      {showModal && (
        <div className="timeline-modal-overlay" onClick={handleCloseModal}>
          <div className="timeline-modal" onClick={e => e.stopPropagation()}>
            <button className="timeline-modal-close" onClick={handleCloseModal}>&times;</button>
            <div className="timeline-modal-icon">{icon}</div>
            <div className="timeline-modal-content">
              <span className="timeline-modal-year">{year}</span>
              <h3 className="timeline-modal-title">{title}</h3>
              <span className="timeline-modal-subtitle">{subtitle}</span>
              <p className="timeline-modal-desc">{desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
