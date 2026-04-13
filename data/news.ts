export interface Participant {
  name: string;
  affiliation: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  tags: string[];
  images?: string[];
  links?: { label: string; url: string }[];
  participants?: {
    organizers?: Participant[];
    speakers?: Participant[];
  };
}

export const newsItems: NewsItem[] = [
  {
    id: "yeosu-workshop-2025",
    date: "2025-12-22",
    title: "Lab Workshop in Yeosu",
    summary:
      "Our lab members gathered in Yeosu for a two-day workshop (Dec 22–23) filled with research discussions, team activities, and collaborative planning for the year ahead.",
    tags: ["Workshop", "Lab Activity"],
    images: ["/MINTLAB/images/NewsWorkshop.jpg"],
  },
  {
    id: "scholarships-2025",
    date: "2025-11-15",
    title: "Lab Members Receive 2025 Scholarships and Research Grants",
    summary:
      "Sunin Baek was awarded the Junior Fellowship Research Grant and Korea University Changemakers. Seokyong Sheem received the Graduate Student In-Lab Mentor-Mentee Program, Korea University Changemakers, and Ilun Science & Technology Foundation awards. Yujin Cho was selected for the Graduate Student In-Lab Mentor-Mentee Program.",
    tags: ["Award", "Scholarship"],
  },
  {
    id: "iroc-2025",
    date: "2025-11-01",
    title: "Students Win at International Robot Olympiad AI Autonomous Racing Competition",
    summary:
      "Our students Minseok Kim, Yujin Cho, Jimin Yun, and Jungho Shin participated in the International Robot Olympiad Committee Artificial Intelligence Autonomous Racing Competition and won third runner-up prizes.",
    tags: ["Award", "Competition"],
    images: ["/MINTLAB/images/NewsIROC.jpg", "/MINTLAB/images/NewsIROC2.jpg"],
  },
  {
    id: "gabriel-guest-2025",
    date: "2025-09-26",
    title: "Guest Lecture by Gabriel Fernandez, CEO of VEQdrive",
    summary:
      "We hosted Gabriel Fernandez, CEO and co-founder of VEQdrive, as a guest lecturer at Korea University.",
    tags: ["Guest Lecture"],
    images: ["/MINTLAB/images/NewsGab.jpg"],
  },
  {
    id: "mayor-visit-2025",
    date: "2025-09-25",
    title: "Mayor of Seoul Visits Lab and Observes Research",
    summary:
      "We hosted Se-hoon Oh, Mayor of Seoul Special Metropolitan City, as a visitor. We demonstrated our research to the Mayor and his delegation.",
    tags: ["Lab Visit"],
    images: ["/MINTLAB/images/NewsOhsehoon.jpg"],
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=_9lV_978O_k" },
      { label: "Article", url: "https://n.news.naver.com/article/003/0013505818?sid=100" },
      { label: "Seoul City", url: "https://www.seoul.go.kr/news/news_report.do#view/443730" },
    ],
  },
  {
    id: "weber-guest-2025",
    date: "2025-07-02",
    title: "Guest Lecture by Prof. Douglas Weber, Carnegie Mellon University",
    summary:
      "We hosted Douglas Weber, Akhtar and Bhutta Professor of Carnegie Mellon University, as a guest lecturer at Korea University.",
    tags: ["Guest Lecture"],
    images: ["/MINTLAB/images/NewsWeber.jpg"],
  },
  {
    id: "k-humanoid-2025",
    date: "2025-04-11",
    title: "MINT Lab Joins the Federation of K-Humanoid",
    summary: "We are proud members of the Federation of K-Humanoid.",
    tags: ["Consortium"],
    images: ["/MINTLAB/images/K-Humanoid.jpg"],
    links: [{ label: "News Article", url: "https://n.news.naver.com/mnews/article/092/0002370149" }],
  },
  {
    id: "icra25-workshop",
    date: "2025-05-23",
    title: "Workshop at ICRA 2025, Atlanta",
    summary:
      "We hosted a workshop titled \"Enhancing Human Mobility: From computer vision-based motion tracking to wearable assistive robot control\" at the 2025 IEEE International Conference on Robotics and Automation (ICRA) in Atlanta, GA, USA.",
    tags: ["Workshop", "Conference"],
    images: ["/MINTLAB/images/NewsICRA25.png"],
    links: [{ label: "Workshop Website", url: "https://sites.google.com/andrew.cmu.edu/icra2025-vision-wearable-robot/home" }],
    participants: {
      organizers: [
        { name: "Inseung Kang", affiliation: "Carnegie Mellon University" },
        { name: "Daekyum Kim", affiliation: "Korea University" },
        { name: "Soyong Shin", affiliation: "Carnegie Mellon University" },
        { name: "Letizia Gionfrida", affiliation: "Kings College London" },
        { name: "Enrica Tricomi", affiliation: "Heidelberg University" },
      ],
      speakers: [
        { name: "Lorenzo Masia", affiliation: "Technical University of Munich" },
        { name: "Maurice Fallon", affiliation: "University of Oxford" },
        { name: "Kyu-Jin Cho", affiliation: "Seoul National University" },
        { name: "Hanbyul Joo", affiliation: "Seoul National University" },
        { name: "Yuting Ye", affiliation: "Meta" },
        { name: "Muhammed Kocabas", affiliation: "Meshcapade" },
        { name: "Antonino Furnari", affiliation: "University of Catania" },
        { name: "István Sárándi", affiliation: "University of Tübingen" },
      ],
    },
  },
  {
    id: "biorob-2024-workshop",
    date: "2024-09-01",
    title: "Workshop at BIOROB 2024, Heidelberg",
    summary:
      "We hosted a workshop titled \"AI-based Estimation and Control of Wearable Robotic Systems for Enhancing Human Mobility\" at the 2024 IEEE RAS/EMBS International Conference on Biomedical Robotics and Biomechatronics (BIOROB) in Heidelberg, Germany.",
    tags: ["Workshop", "Conference"],
    images: ["/MINTLAB/images/NewsBiorob24.jpg"],
    links: [{ label: "Workshop Website", url: "https://sites.google.com/view/biorob-wearable-robotics/home" }],
    participants: {
      organizers: [
        { name: "Inseung Kang", affiliation: "Carnegie Mellon University" },
        { name: "Maegan Tucker", affiliation: "Georgia Tech" },
        { name: "Daekyum Kim", affiliation: "Korea University" },
        { name: "Letizia Gionfrida", affiliation: "King's College London" },
        { name: "Patrick Slade", affiliation: "Harvard University" },
      ],
      speakers: [
        { name: "Aaron Young", affiliation: "Georgia Tech" },
        { name: "Helen Huang", affiliation: "NCSU/UNC" },
        { name: "Nick Frey", affiliation: "University of Texas Austin" },
        { name: "Robert Howe", affiliation: "Harvard University" },
      ],
    },
  },
  {
    id: "icra24-workshop",
    date: "2024-05-17",
    title: "Workshop at ICRA 2024, Yokohama",
    summary:
      "We hosted a workshop titled \"Supervised Autonomy: How to share human-robot interaction from the body to the brain\" at the 2024 IEEE International Conference on Robotics and Automation (ICRA) in Yokohama, Japan.",
    tags: ["Workshop", "Conference"],
    images: ["/MINTLAB/images/NewsICRA24.jpg"],
    participants: {
      organizers: [
        { name: "Antonio Bicchi", affiliation: "IIT" },
        { name: "Fanny Ficuciello", affiliation: "University of Naples Federico II" },
        { name: "Pietro Falco", affiliation: "University of Padova" },
        { name: "Letizia Gionfrida", affiliation: "King's College London" },
        { name: "Daekyum Kim", affiliation: "Korea University" },
        { name: "Massimiliano Simi", affiliation: "Medical MicroInstruments Inc." },
      ],
      speakers: [
        { name: "Antonio Bicchi", affiliation: "IIT" },
        { name: "Jamie Paik", affiliation: "EPFL" },
        { name: "Sebastian Ourselin", affiliation: "King's College London" },
        { name: "Dorsa Sadigh", affiliation: "Stanford University" },
        { name: "Dario Farina", affiliation: "Imperial College London" },
      ],
    },
  },
  {
    id: "icra23-workshop",
    date: "2023-06-02",
    title: "Workshop at ICRA 2023, London",
    summary:
      "We hosted a workshop titled \"Computer Vision for Wearable Robotics\" at the 2023 IEEE International Conference on Robotics and Automation (ICRA) in London.",
    tags: ["Workshop", "Conference"],
    images: ["/MINTLAB/images/NewsICRA23.jpg"],
    links: [{ label: "Workshop Website", url: "https://projects.iq.harvard.edu/visionwearablerobotics/home" }],
    participants: {
      organizers: [
        { name: "Robert Howe", affiliation: "Harvard University" },
        { name: "Letizia Gionfrida", affiliation: "King's College London" },
        { name: "Daekyum Kim", affiliation: "Korea University" },
        { name: "Brokoslaw Laschowski", affiliation: "University of Toronto" },
        { name: "Michele Xiloyannis", affiliation: "Akina AG" },
      ],
      speakers: [
        { name: "Kyu-jin Cho", affiliation: "Seoul National University" },
        { name: "Levi Hargrove", affiliation: "Northwestern University" },
        { name: "Robert Howe", affiliation: "Harvard University" },
        { name: "Helen Huang", affiliation: "North Carolina State University" },
        { name: "Lorenzo Masia", affiliation: "Heidelberg University" },
      ],
    },
  },
];
