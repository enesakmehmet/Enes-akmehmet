import { useEffect, useState } from 'react';
import axios from 'axios';
import type { AboutData } from '../types';
import './About.css';

export default function About() {
  const [data, setData] = useState<AboutData>({
    name: '',
    bio: '',
    skills: []
  });

  useEffect(() => {
    axios.get("https://portfolio-backendd-production.up.railway.app/about")
      .then(res => setData(res.data));
  }, []);

  return (
    <section id="about" className="d-flex align-items-center text-center vh-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Enes" 
              className="rounded-circle mb-4" 
              width="150" 
              height="150"
            />
            <h1 className="display-4 fw-bold mb-3">{data.name || 'Merhaba, Ben Enes'}</h1>
            <p className="lead mb-4">{data.bio || 'Front-end teknolojileriyle modern ve kullanıcı dostu arayüzler geliştiriyorum.'}</p>

            <div>
              <a href="#" className="btn btn-primary btn-lg me-2">Projelerim</a>
              <a href="#" className="btn btn-outline-secondary btn-lg">İletişim</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
