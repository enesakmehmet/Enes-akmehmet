

export default function CheckSuccess({ show }: { show: boolean }) {
  return (
    <div className={`check-success-anim${show ? ' show' : ''}`} aria-live="polite" aria-atomic="true">
      <svg width="64" height="64" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="30" fill="#e0f7fa" stroke="#00b894" strokeWidth="4" />
        <polyline points="18,34 28,44 46,22" fill="none" stroke="#00b894" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="points" values="18,34 28,44 46,22;18,34 28,44 46,22" dur="0.5s" fill="freeze" />
        </polyline>
      </svg>
      <span className="check-success-text">Mesajınız başarıyla gönderildi!</span>
    </div>
  );
}
