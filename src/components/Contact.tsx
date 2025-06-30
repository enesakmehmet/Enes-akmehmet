import { useState } from 'react';
import axios from 'axios';
import './Contact.css';

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
    try {
      const res = await axios.post('https://portfolio-backendd-production.up.railway.app/contact', form);
      if (res.data.success) {
        setStatus('Mesajınız gönderildi!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Gönderim hatası.');
      }
    } catch {
      setStatus('Bağlantı hatası.');
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="mb-4">İletişim</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Adınız"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Mesajınız"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-lg">Gönder</button>
                </div>
              </div>
            </form>
            {status && <div className="alert alert-info mt-4">{status}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
