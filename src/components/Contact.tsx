import { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');
    try {
      const res = await axios.post('https://portfolio-backendd-production.up.railway.app/contact', form);
      if (res.data.success) {
        setStatus('Mesajınız başarıyla gönderildi!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch {
      setStatus('Sunucuya bağlanırken bir hata oluştu.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">İletişime Geçin</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Bilgilerim</h3>
            <p>Sorularınız veya işbirliği teklifleriniz için bana aşağıdaki kanallardan ulaşabilirsiniz.</p>
            <ul className="info-list">
              <li><FaEnvelope className="icon" /> enesakmehmet7@gmail.com</li>
              <li><FaPhone className="icon" /> +90 507 003 24 84</li>
              <li><FaMapMarkerAlt className="icon" /> Rize, Türkiye</li>
            </ul>
            <div className="social-links">
              <a href="https://github.com/enesakmehmet" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/enes-akmehmet-a061bb206/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Adınız" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Adresiniz" required />
              </div>
              <div className="form-group">
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Mesajınız" rows={6} required></textarea>
              </div>
              <button type="submit" className="btn-submit">Mesajı Gönder</button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
