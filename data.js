

const DATA = {
  // ---------- INFO UTAMA ----------
  name: "Bintang Akmal Pradana",
  role: "Mahasiswa Teknik Informatika · UNESA",
  tagline: "Tertarik pada pemrograman, teknologi informasi, dan pengembangan solusi digital.",
  photo: "foto.jpg", 

  // ---------- MENU NAVIGASI ----------
  nav: [
    { label: "Work", target: "#work" },
    { label: "What I Can Do", target: "#skills" },
    { label: "About", target: "#about" },
  ],
  hireMeText: "Hire Me", 

  // ---------- ABOUT ME ----------
  about: {
    label: "ABOUT ME",
    title: "Problem Solver. Future Developer.",
    
    paragraphs: [
      "Halo, saya <strong>Bintang Akmal Pradana</strong>, mahasiswa <strong>Teknik Informatika di Universitas Negeri Surabaya (UNESA)</strong> dengan NIM <strong>26051204073</strong>. Saya memiliki ketertarikan pada bidang pemrograman, teknologi informasi, dan pengembangan solusi digital.",
      "Saya merupakan lulusan <strong>MAN 2 Blitar jurusan IPA (2023–2026)</strong> dan saat ini sedang menempuh pendidikan S1 Teknik Informatika di UNESA. Dalam perkuliahan, saya sedang mengembangkan kemampuan dalam pemrograman, sistem komputer, dan problem-solving. Saya juga memiliki pengalaman sebagai <strong>Admin Online Shop</strong> dan terus berusaha mengembangkan kemampuan teknis maupun nonteknis melalui perkuliahan, project, dan pembelajaran mandiri.",
    ],
    
    stats: [
      { value: "S1", label: "Teknik Informatika" },
      { value: "UNESA", label: "Universitas" },
      { value: "2026", label: "Mulai Kuliah" },
    ],
   
    highlights: [
      { title: "Learning", text: "Programming & Problem Solving" },
      { title: "Experience", text: "Online Shop Admin" },
      { title: "Studying", text: "C++ & Computer Systems" },
    ],
  },

  // ---------- WHAT I CAN DO ----------
  skills: {
    label: "MY CAPABILITIES",
    title: "What I Can Do",
    description: "Kemampuan teknis dan nonteknis yang saya kembangkan.",
    
    groups: [
      {
        title: "Programming",
        items: ["C++ — Basic", "Basic Programming", "Problem Solving"],
      },
      {
        title: "Computer & Administration",
        items: ["Basic Computer Skills", "Microsoft Word", "Microsoft Excel", "Google Docs & Google Sheets"],
      },
      {
        title: "Online Shop Administration",
        items: ["Data Entry & Data Management", "Order Management", "Stock Management", "Customer Service", "Marketplace Management"],
      },
      {
        title: "Soft Skills",
        items: ["Communication", "Teamwork", "Time Management", "Adaptability"],
      },
    ],
  },

  // ---------- WORK GALLERY ----------
  
  work: {
    label: "SELECTED WORK",
    title: "Work Gallery",
    description: "Kumpulan proyek dan karya yang pernah saya buat.",
    projects: [],
  },

  // ---------- CONTACT ----------
  contact: {
    label: "GET IN TOUCH",
    title: "LET'S WORK TOGETHER",
    text: "Terbuka untuk peluang belajar, kolaborasi project, dan pengalaman di bidang teknologi.",
  
    items: [
      { icon: "📧", label: "Email", value: "apbintang52@gmail.com", link: "mailto:apbintang52@gmail.com" },
      { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/bintang-ap", link: "https://www.linkedin.com/in/bintang-ap-8553b5441/" },
      { icon: "💻", label: "GitHub", value: "github.com/username", link: "https://github.com/username" },
      { icon: "📄", label: "CV", value: "Download CV", link: "https://drive.google.com/file/d/1mu_jK5X_8AD1qIfd4mimPwSDV7dsuo7W/view?usp=drivesdk" }, // ganti "#" dengan link CV kamu
    ],
    buttonText: "Kirim Pesan",
    buttonLink: "mailto:apbintang52@gmail.com",
  },
};
