export type Role =
  | "Professor"
  | "Research Professor"
  | "Postdoc"
  | "PhD Student"
  | "Integrated MS/PhD"
  | "MS Student"
  | "Undergraduate"
  | "Alumni";

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: number;
}

export interface Experience {
  title: string;
  institution: string;
  period: string;
}

export interface Person {
  id: string;
  name: string;
  role: Role;
  keywords: string[];
  email?: string;
  website?: string;
  bio?: string;
  photo?: string;
  alumniNote?: string;
  title?: string;
  affiliations?: string[];
  education?: Education[];
  experience?: Experience[];
  hasProfile?: boolean;
}

export const people: Person[] = [
  // ── Professors ──────────────────────────────────────────────────────────────
  {
    id: "daekyum-kim",
    name: "Daekyum Kim",
    role: "Professor",
    keywords: ["Machine Learning", "Computer Vision", "Robotics", "Digital Healthcare"],
    email: "daekyum@korea.ac.kr",
    photo: "/MINTLAB/images/ProfessorDaekyumKim.jpg",

    hasProfile: true,
    title: "Assistant Professor",
    affiliations: [
      "School of Mechanical Engineering, Korea University",
      "School of Smart Mobility, Korea University",
      "Director, Movement Intelligence Laboratory",
    ],
    bio: "Daekyum Kim develops intelligent algorithms capable of understanding various aspects of human states — such as body kinematics, kinetics, activities, and intentions. His research encompasses machine learning, computer vision, robotics, and digital healthcare, with applications toward beneficial robotic and healthcare systems.",
    education: [
      { degree: "Ph.D.", field: "Computer Science", institution: "KAIST", year: 2021 },
      { degree: "B.S.", field: "Mechanical Engineering", institution: "UCLA", year: 2015 },
    ],
    experience: [
      { title: "Assistant Professor", institution: "Korea University", period: "2023–Present" },
      { title: "Research Affiliate", institution: "Harvard University", period: "2023–2025" },
      { title: "Postdoctoral Research Fellow", institution: "Harvard SEAS & Wyss Institute", period: "2021–2023" },
    ],
  },
  {
    id: "jesse-cha",
    name: 'Eunsang "Jesse" Cha',
    role: "Research Professor",
    keywords: ["Machine Learning", "Computer Vision", "Robotics", "Autonomous Racing"],
    photo: "/MINTLAB/images/ResearchProfessorJesseCha.png",
    hasProfile: true,
    title: "Research Professor",
    affiliations: [
      "Institute of Advanced Machinery, Design & Technology, Korea University",
    ],
    bio: "Jesse Cha's research focuses on machine learning and computer vision for autonomous racing and robotics. He brings extensive experience in mechanical engineering and autonomous systems.",
    education: [
      { degree: "Ph.D.", field: "Mechanical Engineering", institution: "UCLA", year: 2020 },
      { degree: "B.S.", field: "Mechanical Engineering", institution: "UCLA", year: 2015 },
    ],
    experience: [
      { title: "Research Professor", institution: "Korea University", period: "2023–Present" },
      { title: "Keck Endowed Postdoctoral Scholar", institution: "Pepperdine University", period: "2021–2023" },
    ],
  },
  // ── Postdoc ─────────────────────────────────────────────────────────────────
  {
    id: "hochang-lee",
    name: "Hochang Lee",
    role: "Postdoc",
    keywords: ["Soft Robotics", "Wearable AI", "Computer Vision", "Machine Learning"],
    photo: "/MINTLAB/images/PostdocHochangLee.jpg",

    hasProfile: true,
    title: "Postdoctoral Research Fellow",
    affiliations: [
      "Institute of Advanced Machinery, Design & Technology, Korea University",
    ],
    bio: "Hochang Lee's research focuses on soft robotics, wearable AI, and computer vision. He brings industry experience from Samsung Electronics and a strong academic background in computer science.",
    education: [
      { degree: "Ph.D.", field: "Computer Science", institution: "KAIST", year: 2026 },
      { degree: "M.S.", field: "Computer Science", institution: "KAIST", year: 2022 },
      { degree: "B.S.", field: "Mechanical Engineering", institution: "UCLA", year: 2015 },
    ],
    experience: [
      { title: "Postdoctoral Research Fellow", institution: "Korea University", period: "2026–Present" },
      { title: "Research Engineer", institution: "Samsung Electronics Device Solutions", period: "2016–2020" },
    ],
  },
  // ── PhD Student ─────────────────────────────────────────────────────────────
  {
    id: "joonyoung-lee",
    name: "Joonyoung Lee",
    role: "PhD Student",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/PhdJoonyoungLee.jpg",

  },
  // ── Integrated MS/PhD ───────────────────────────────────────────────────────
  {
    id: "seokyong-sheem",
    name: "Seokyong Sheem",
    role: "Integrated MS/PhD",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/IntegratedSeokyongSheem.jpg",
  },
  {
    id: "suyeong-lee",
    name: "Suyeong Lee",
    role: "Integrated MS/PhD",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/IntegratedSuyeongLee.png",
  },
  {
    id: "younghoon-bae",
    name: "Younghoon Bae",
    role: "Integrated MS/PhD",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/IntegratedYounghoonBae.jpg",
  },
  {
    id: "keunho-song",
    name: "Keunho Song",
    role: "Integrated MS/PhD",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/IntegratedKeunhoSong.jpg",
  },
  {
    id: "yuhyeon-lee",
    name: "Yuhyeon Lee",
    role: "Integrated MS/PhD",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/IntegratedYuhyunLee.jpg",
  },
  {
    id: "youngseok-kwon",
    name: "Youngseok Kwon",
    role: "Integrated MS/PhD",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternYoungseokKwon.jpg",

  },
  {
    id: "dongwoo-kim",
    name: "Dongwoo Kim",
    role: "Integrated MS/PhD",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/IntegratedDongwooKim.jpg",
  },
  {
    id: "seongyoon-kim",
    name: "Seongyoon Kim",
    role: "Integrated MS/PhD",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/InternSeongyoonKim.jpg",
  },
  {
    id: "jungho-shin",
    name: "Jungho Shin",
    role: "Integrated MS/PhD",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/IntegratedJunghoShin.jpg",
  },
  {
    id: "suhyeong-park",
    name: "Suhyeong Park",
    role: "Integrated MS/PhD",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/IntegratedSuhyeongPark.jpg",
  },
  // ── MS Students ─────────────────────────────────────────────────────────────
  {
    id: "sunin-baek",
    name: "Sunin Baek",
    role: "MS Student",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/MasterSuninBaek.jpg",
  },
  {
    id: "byeonggwan-kang",
    name: "Byeonggwan Kang",
    role: "MS Student",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/MasterByeonggwanKang.jpg",
  },
  {
    id: "jinho-choi",
    name: "Jinho Choi",
    role: "MS Student",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/MasterJinhoChoi.jpg",

  },
  {
    id: "woojin-kwon",
    name: "Woojin Kwon",
    role: "MS Student",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/MasterWoojinKwon.jpg",
  },
  {
    id: "jinhyun-kim",
    name: "Jinhyun Kim",
    role: "MS Student",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/MasterJinhyunKim.jpg",
  },
  {
    id: "hyeonjin-choi",
    name: "Hyeonjin Choi",
    role: "MS Student",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/MasterHyeonjinChoi.png",
  },
  {
    id: "junpil-choi",
    name: "Junpil Choi",
    role: "MS Student",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternJunpilChoi.png",
  },
  {
    id: "jaesung-lee",
    name: "Jaesung Lee",
    role: "MS Student",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/MasterJaesungLee.jpg",
  },
  {
    id: "hongjun-park",
    name: "Hongjun Park",
    role: "MS Student",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/MasterHongjunPark.jpg",
  },
  {
    id: "seongjin-bang",
    name: "Seongjin Bang",
    role: "MS Student",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/MasterSeongjinBang.jpg",
  },
  // ── Undergraduate Interns ───────────────────────────────────────────────────
  {
    id: "yujin-cho",
    name: "Yujin Cho",
    role: "Undergraduate",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternYujinCho.jpg",

  },
  {
    id: "jimin-yun",
    name: "Jimin Yun",
    role: "Undergraduate",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternJiminYun.jpg",
  },
  {
    id: "minseok-kim",
    name: "Minseok Kim",
    role: "Undergraduate",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternMinseokKim.jpg",
  },
  {
    id: "yelin-heo",
    name: "Yelin Heo",
    role: "Undergraduate",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternYelinHeo.jpg",
  },
  {
    id: "minji-kim",
    name: "Minji Kim",
    role: "Undergraduate",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/InternMinjiKim.jpg",
  },
  {
    id: "seungmin-yoo",
    name: "Seungmin Yoo",
    role: "Undergraduate",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternSeungminYoo.jpg",
  },
  {
    id: "dongnyeom-je",
    name: "Dongnyeom Je",
    role: "Undergraduate",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/InternDongnyeomJe.png",

  },
  {
    id: "seungmin-lee",
    name: "Seungmin Lee",
    role: "Undergraduate",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternSeungminLee.jpg",
  },
  {
    id: "junhyeok-seo",
    name: "Junhyeok Seo",
    role: "Undergraduate",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/InternJunhyeokSeo.jpg",
  },
  {
    id: "hwanhee-ju",
    name: "Hwanhee Ju",
    role: "Undergraduate",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternHwanheeJu.jpg",

  },
  {
    id: "dongmin-jo",
    name: "Dongmin Jo",
    role: "Undergraduate",
    keywords: ["Robot Intelligence"],
    photo: "/MINTLAB/images/InternDongminJo.jpg",
  },
  {
    id: "yushin-cho",
    name: "Yushin Cho",
    role: "Undergraduate",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/InternYushinCho.jpg",
  },
  {
    id: "chanhyeok-lee",
    name: "Chanhyeok Lee",
    role: "Undergraduate",
    keywords: ["Healthcare Intelligence"],
    photo: "/MINTLAB/images/InternChanHyeokLee.jpg",

  },
  // ── Alumni ──────────────────────────────────────────────────────────────────
  {
    id: "sunyoung-hur",
    name: "Sunyoung Hur",
    role: "Alumni",
    keywords: ["Healthcare Intelligence"],
    alumniNote: "Graduate Intern",
  },
];
