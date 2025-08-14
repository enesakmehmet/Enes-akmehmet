import "./Timeline.css";
import TimelineItem from "./TimelineItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faClipboardList,
  faHeadset,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const timelineData = [
  {
    year: "2024-2025",
    title: "Fullstack Developer",
    subtitle: "Onlyjs Akedemi",
    desc: "Modern web uygulamaları geliştirdim, React ve TypeScript ile projeler yönettim.",
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
  },
  {
    year: "2020-2024",
    title: "Mhrs Randevu Sistemi",
    subtitle: "Sağlık Bakanlığı",
    desc: "182 Sağlık Bakanlığı.",
    icon: <FontAwesomeIcon icon={faClipboardList} />,
  },
  {
    year: "2019",
    title: "Akbank Çağrı Merkezi",
    subtitle: "Akbank",
    desc: "Çağrı Merkezi .",
    icon: <FontAwesomeIcon icon={faHeadset} />,
  },
  {
    year: "2018",
    title: "Üniversite Mezunu",
    subtitle: "Recep tayyip erdoğan üniversitesi",
    desc: "İşletme Yönetimi (lisans)..",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
  },
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Kariyer Zaman Tüneli</h2>
      <div className="timeline-container">
        {timelineData.map((item, idx) => (
          <TimelineItem
            key={idx}
            icon={item.icon}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
}
