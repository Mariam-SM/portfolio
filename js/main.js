// ===========================
//   DATA — كل الداتا هنا
// ===========================
const DATA = {
  en: {
    nav: {
      home: "Home", about: "About", skills: "Skills",
      projects: "Projects", experience: "Experience", contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Mariam Sayed",
      role: ".NET Developer",
      tagline: "Building scalable backends & clean architectures.",
      cta_projects: "View Projects",
      cta_contact: "Contact Me",
      cta_cv: "Download CV",
      stats: [
        { value: "1100+",   label: "Training Hours" },
        { value: "500+",    label: "Concurrent Users" },
        { value: "200/200", label: "Graduation Score" }
      ]
    },
    about: {
      title: "About Me", subtitle: "Who I am",
      bio: "I'm a .NET Developer passionate about building dependable and scalable software. I graduated 1st in my department from Fayoum University with a GPA of 3.77/4.0 and a full mark on my graduation project. I enjoy solving complex problems, designing clean architectures, and continuously learning new technologies.",
      info: [
        { icon: "📍", text: "Cairo, Egypt" },
        { icon: "🎓", text: "B.Sc. Computer Science — Fayoum University" },
        { icon: "⭐", text: "GPA: 3.77 / 4.0 (94.6%) — Ranked 1st in Department" },
        { icon: "🏆", text: "Graduation Project: 200 / 200 (Full Mark)" }
      ],
      stats: [
        { value: "1st",     label: "in Department",   gradient: "linear-gradient(135deg,#7C3AED,#A78BFA)" },
        { value: "3.77",    label: "GPA / 4.0",       gradient: "linear-gradient(135deg,#F59E0B,#f97316)" },
        { value: "200/200", label: "Graduation Score", gradient: "linear-gradient(135deg,#10b981,#14b8a6)" },
        { value: "1100+",   label: "Training Hours",   gradient: "linear-gradient(135deg,#3b82f6,#06b6d4)" }
      ],
      languages: [
        { lang: "Arabic",  level: "Native" },
        { lang: "English", level: "Fluent" }
      ]
    },
    skills: {
      title: "Skills", subtitle: "Technologies I work with",
      categories: [
        { icon: "🖥️", name: "Back-End",            items: ["C#","ASP.NET Core",".NET MVC","Web API","JWT","Identity Framework","AutoMapper","SignalR","Hangfire"] },
        { icon: "🗄️", name: "Database & ORM",      items: ["SQL Server","LINQ","Entity Framework Core","EF Core","Dapper","Redis"] },
        { icon: "🏗️", name: "Architecture",        items: ["Clean Architecture","Onion Architecture","Layered Architecture","CQRS","SOLID Principles","Design Patterns"] },
        { icon: "🎨", name: "Front-End",            items: ["HTML5","CSS3","JavaScript","Bootstrap"] },
        { icon: "🔧", name: "DevOps & Tools",       items: ["Git","GitHub","GitHub Actions","CI/CD","Postman","Swagger","Serilog"] },
        { icon: "💻", name: "Programming Languages", items: ["C#","C++","Python","JavaScript"] }
      ]
    },
    projects: {
      title: "Projects", subtitle: "Things I've built",
      items: [
        {
          id: 1, featured: true,
          name: "Order Management System",
          highlight: "25+ REST endpoints",
          desc: "Full-featured REST API built using Onion Architecture. Includes basket management, order processing, invoices, JWT-based RBAC, and Stripe payment gateway integration.",
          tech: ["ASP.NET Core","EF Core","JWT","Stripe","Onion Architecture"],
          github: "https://github.com/Mariam-SM/Order_Management_System",
          demo: null
        },
        {
          id: 2, featured: true,
          name: "E-Commerce Backend API",
          highlight: "60% faster with Redis",
          desc: "RESTful backend using Generic Repository & Unit of Work patterns. JWT auth for 500+ accounts, Stripe integration, Redis caching (60% faster response), and centralized exception handling.",
          tech: ["ASP.NET Core","EF Core","JWT","Stripe","Redis"],
          github: "https://github.com/Mariam-SM/E-Commerce",
          demo: null
        },
        {
          id: 3, featured: true,
          name: "Company Management System",
          highlight: "Multi-auth + SMS",
          desc: "Web app with multi-auth (Google, Facebook, Email), KitMail/Twilio SMS recovery, and dynamic search. Built with 3-Tier Architecture and AJAX for 50% better interactivity.",
          tech: ["MVC","EF Core","OAuth","SMTP","Twilio"],
          github: "https://github.com/Mariam-SM/CompanyManagement",
          demo: "https://companymvcproject02.runasp.net/"
        },
        {
          id: 4, featured: false,
          name: "EduVerse – AI E-Learning",
          highlight: "500+ concurrent users",
          desc: "Graduation project — 200/200. ASP.NET Core backend serving 500+ concurrent users, GPT-4.1 integration, 85% accuracy code similarity detection, and automated attendance tracking.",
          tech: ["ASP.NET Core","Flutter","GPT-4.1","SQL Server"],
          github: "https://github.com/Mariam-SM/EduVerse",
          demo: null
        },    
        {
          id: 5, featured: false,
          name: "Learnify – Course Portal",
          highlight: "Lecture streaming",
          desc: "Online course portal for instructors and students with lecture streaming and enrollment features. Built using ASP.NET MVC, EF Core, and LINQ.",
          tech: ["ASP.NET MVC","EF Core","SQL","LINQ"],
          github: "https://github.com/Mariam-SM/Learnify",
          demo: null
        },
        {
          id: 6, featured: false,
          name: "Examination Management System",
          highlight: "OOP design",
          desc: "Desktop system for managing exams and grading. Applies modular OOP and efficient data structures for result generation.",
          tech: ["C#","OOP","Data Structures"],
          github: "https://github.com/Mariam-SM/Examination-Management-System",
          demo: null
        },
        {
          id: 7, featured: false,
          name: "Tourism in Fayoum",
          highlight: "100% cross-browser",
          desc: "Static informational website promoting Fayoum's tourist attractions with interactive navigation and fully responsive design.",
          tech: ["HTML5","CSS3","JavaScript"],
          github: "https://github.com/Mariam-SM/Tourism-in-Fayoum",
          demo: null
        }
      ]
    },
    experience: {
      title: "Experience & Training", subtitle: "My journey",
      items: [
        {
          role: "CS50 Instructor", company: "ReCode Academy",
          period: "Oct 2025 – Feb 2026", type: "work",
          points: [
            "Delivered instruction on CS fundamentals, Python, SQL, C++, OOP, and Data Structures.",
            "Taught web development (HTML/CSS), Git/GitHub, unit testing, and problem-solving."
          ]
        },
        {
          role: "Front-end Developer Intern", company: "Elevvo Pathway",
          period: "Aug 2025 – Sep 2025", type: "training",
          points: [
            "Developed responsive front-end interfaces using HTML5, CSS3, Bootstrap, and JavaScript.",
            "Ensured cross-browser compatibility and responsive design implementation."
          ]
        },
        {
          role: ".NET Developer Intern", company: "Route Academy",
          period: "Oct 2024 – May 2025", type: "training",
          points: [
            "600+ hours covering C#, OOP, SOLID, Design Patterns, LINQ, EF Core, ASP.NET Core MVC & APIs.",
            "Built scalable .NET APIs and managed SQL Server databases with 30% performance optimization."
          ]
        },
        {
          role: "ASP.NET Developer Intern", company: "ITI – Information Technology Institute",
          period: "Jan 2025 – Feb 2025", type: "training",
          points: [
            "Developed web applications using ASP.NET Core MVC, Entity Framework Core, and LINQ.",
            "Reduced data retrieval time by 25% by implementing efficient CRUD operations with LINQ."
          ]
        },
        {
          role: "Full Stack .NET Developer Trainee", company: "DEPI – Digital Egypt Professional Initiative",
          period: "Apr 2024 – Oct 2024", type: "training",
          points: [
            "500+ hours of intensive .NET training — C#, Web APIs, MVC, HTML5, JS, SQL, Git, Unit Testing.",
            "Built full-stack apps for 500+ concurrent users using ASP.NET Core backend.",
            "Completed Business English Track Certification Program."
          ]
        }
      ]
    },
    contact: {
      title: "Contact", subtitle: "Let's work together",
      description: "I'm currently open to new opportunities. Feel free to reach out via any of the channels below!",
      info: [
        { icon: "✉️", label: "Email",    value: "mariam.sayed.dev@gmail.com", href: "mailto:mariam.sayed.dev@gmail.com" },
        { icon: "📞", label: "Phone",    value: "+20 155 102 6115",            href: "tel:+201551026115" },
        { icon: "📍", label: "Location", value: "Cairo, Egypt",                href: null }
      ],
      socials: [
        { label: "GitHub",    href: "https://github.com/Mariam-SM",           icon: "github" },
        { label: "LinkedIn",  href: "https://linkedin.com/in/mariam-sayedd",  icon: "linkedin" },
        { label: "Portfolio", href: "https://mariam-sm.github.io/portfolio",  icon: "globe" }
      ]
    },
    footer: { made: "Made with ❤️ by Mariam Sayed", rights: "All rights reserved." }
  },

  // ==============================
  //   ARABIC DATA
  // ==============================
  ar: {
    nav: {
      home: "الرئيسية", about: "عني", skills: "المهارات",
      projects: "المشاريع", experience: "الخبرة", contact: "تواصل"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "مريم سيد",
      role: "مطورة .NET",
      tagline: "أبني باك-إند قابل للتوسع ومعماريات نظيفة.",
      cta_projects: "عرض المشاريع",
      cta_contact: "تواصل معي",
      cta_cv: "تحميل السيرة الذاتية",
      stats: [
        { value: "+1100",   label: "ساعة تدريب" },
        { value: "+500",    label: "مستخدم متزامن" },
        { value: "200/200", label: "درجة التخرج" }
      ]
    },
    about: {
      title: "عني", subtitle: "من أنا",
      bio: "أنا مطورة .NET شغوفة ببناء برمجيات موثوقة وقابلة للتوسع. تخرجت الأولى على دفعتي من جامعة الفيوم بمعدل 3.77/4.0 وحصلت على درجة كاملة في مشروع التخرج. أستمتع بحل المشكلات المعقدة وتصميم معماريات نظيفة والتعلم المستمر.",
      info: [
        { icon: "📍", text: "القاهرة، مصر" },
        { icon: "🎓", text: "بكالوريوس علوم الحاسب — جامعة الفيوم" },
        { icon: "⭐", text: "المعدل: 3.77 / 4.0 (94.6%) — الأولى على الدفعة" },
        { icon: "🏆", text: "مشروع التخرج: 200 / 200 (درجة كاملة)" }
      ],
      stats: [
        { value: "الأولى",  label: "على الدفعة",   gradient: "linear-gradient(135deg,#7C3AED,#A78BFA)" },
        { value: "3.77",   label: "المعدل / 4.0",  gradient: "linear-gradient(135deg,#F59E0B,#f97316)" },
        { value: "200/200",label: "درجة التخرج",   gradient: "linear-gradient(135deg,#10b981,#14b8a6)" },
        { value: "+1100",  label: "ساعة تدريب",    gradient: "linear-gradient(135deg,#3b82f6,#06b6d4)" }
      ],
      languages: [
        { lang: "العربية",    level: "لغة أم" },
        { lang: "الإنجليزية", level: "طلاقة" }
      ]
    },
    skills: {
      title: "المهارات", subtitle: "التقنيات التي أعمل بها",
      categories: [
        { icon: "🖥️", name: "الباك-إند",         items: ["C#","ASP.NET Core",".NET MVC","Web API","JWT","Identity Framework","AutoMapper","SignalR","Hangfire"] },
        { icon: "🗄️", name: "قواعد البيانات",    items: ["SQL Server","LINQ","Entity Framework Core","EF Core","Dapper","Redis"] },
        { icon: "🏗️", name: "المعمارية",         items: ["Clean Architecture","Onion Architecture","Layered Architecture","CQRS","SOLID Principles","Design Patterns"] },
        { icon: "🎨", name: "الفرونت-إند",        items: ["HTML5","CSS3","JavaScript","Bootstrap"] },
        { icon: "🔧", name: "الأدوات",            items: ["Git","GitHub","GitHub Actions","CI/CD","Postman","Swagger","Serilog"] },
        { icon: "💻", name: "لغات البرمجة",       items: ["C#","C++","Python","JavaScript"] }
      ]
    },
    projects: {
      title: "المشاريع", subtitle: "ما قمت ببنائه",
      items: [
        {
          id: 1, featured: true,
          name: "نظام إدارة الطلبات",
          highlight: "25+ REST endpoint",
          desc: "API متكامل بـ Onion Architecture. يشمل إدارة السلة، معالجة الطلبات، الفواتير، صلاحيات JWT، ودفع Stripe.",
          tech: ["ASP.NET Core","EF Core","JWT","Stripe","Onion Architecture"],
          github: "https://github.com/Mariam-SM/Order_Management_System",
          demo: null
        },
        {
          id: 2, featured: true,
          name: "منصة API للتجارة الإلكترونية",
          highlight: "أسرع 60% مع Redis",
          desc: "باك-إند RESTful بـ Generic Repository و Unit of Work. JWT لحماية 500+ حساب، Stripe، Redis caching (أسرع 60%)، ومعالجة مركزية للأخطاء.",
          tech: ["ASP.NET Core","EF Core","JWT","Stripe","Redis"],
          github: "https://github.com/Mariam-SM/E-Commerce",
          demo: null
        },
         {
          id: 3, featured: true,
          name: "نظام إدارة الشركات",
          highlight: "Multi-auth + SMS",
          desc: "تطبيق ويب بتسجيل دخول متعدد (جوجل، فيسبوك، إيميل)، استعادة بالـ SMS، وبحث ديناميكي. 3-Tier Architecture مع AJAX.",
          tech: ["MVC","EF Core","OAuth","SMTP","Twilio"],
          github: "https://github.com/Mariam-SM/CompanyManagement",
          demo: "https://companymvcproject02.runasp.net/"
        },
        {
          id: 4, featured: false,
          name: "EduVerse – منصة تعلم ذكية",
          highlight: "+500 مستخدم متزامن",
          desc: "مشروع تخرج بدرجة 200/200. باك-إند يخدم 500+ مستخدم متزامن، تكامل GPT-4.1، كشف تشابه الكود بدقة 85%، وتتبع حضور آلي.",
          tech: ["ASP.NET Core","Flutter","GPT-4.1","SQL Server"],
          github: "https://github.com/Mariam-SM/EduVerse",
          demo: null
        },
        {
          id: 5, featured: false,
          name: "Learnify – بوابة الدورات",
          highlight: "بث المحاضرات",
          desc: "بوابة دورات للمدرسين والطلاب مع بث المحاضرات والتسجيل. ASP.NET MVC وـ EF Core.",
          tech: ["ASP.NET MVC","EF Core","SQL","LINQ"],
          github: "https://github.com/Mariam-SM/Learnify",
          demo: null
        },
        {
          id: 6, featured: false,
          name: "نظام إدارة الامتحانات",
          highlight: "تصميم OOP",
          desc: "نظام سطح مكتب لإدارة الامتحانات والتصحيح بتطبيق OOP معياري وهياكل بيانات فعالة.",
          tech: ["C#","OOP","Data Structures"],
          github: "https://github.com/Mariam-SM/Examination-Management-System",
          demo: null
        },
        {
          id: 7, featured: false,
          name: "السياحة في الفيوم",
          highlight: "100% متوافق",
          desc: "موقع معلوماتي يروج لمعالم الفيوم بتصميم متجاوب 100% مع جميع المتصفحات.",
          tech: ["HTML5","CSS3","JavaScript"],
          github: "https://github.com/Mariam-SM/Tourism-in-Fayoum",
          demo: null
        }
      ]
    },
    experience: {
      title: "الخبرة والتدريب", subtitle: "مسيرتي",
      items: [
        {
          role: "مدرّسة CS50", company: "ReCode Academy",
          period: "أكتوبر 2025 – فبراير 2026", type: "work",
          points: [
            "تدريس أساسيات علوم الحاسب، Python، SQL، C++، OOP، وهياكل البيانات.",
            "تعليم تطوير الويب، Git/GitHub، اختبار الوحدات، وحل المشكلات."
          ]
        },
        {
          role: "متدربة فرونت-إند", company: "Elevvo Pathway",
          period: "أغسطس 2025 – سبتمبر 2025", type: "training",
          points: [
            "تطوير واجهات ويب متجاوبة بـ HTML5، CSS3، Bootstrap، JavaScript.",
            "ضمان التوافق عبر المتصفحات والتصميم المتجاوب."
          ]
        },
        {
          role: "متدربة .NET Developer", company: "Route Academy",
          period: "أكتوبر 2024 – مايو 2025", type: "training",
          points: [
            "600+ ساعة تغطي C#، OOP، SOLID، Design Patterns، LINQ، EF Core، ASP.NET Core.",
            "بناء APIs وإدارة قواعد SQL Server بتحسين أداء 30%."
          ]
        },
        {
          role: "متدربة ASP.NET Developer", company: "معهد تكنولوجيا المعلومات (ITI)",
          period: "يناير 2025 – فبراير 2025", type: "training",
          points: [
            "تطوير تطبيقات ويب بـ ASP.NET Core MVC، Entity Framework Core، LINQ.",
            "تقليل وقت استرجاع البيانات 25% بتطبيق CRUD مع LINQ."
          ]
        },
        {
          role: "متدربة Full Stack .NET Developer", company: "DEPI – مبادرة مصر الرقمية",
          period: "أبريل 2024 – أكتوبر 2024", type: "training",
          points: [
            "500+ ساعة تدريب مكثف في .NET، C#، Web APIs، MVC، HTML5، JS، SQL، Git.",
            "بناء تطبيقات لـ 500+ مستخدم متزامن بـ ASP.NET Core.",
            "اجتياز برنامج شهادة Business English Track."
          ]
        }
      ]
    },
    contact: {
      title: "تواصل معي", subtitle: "لنعمل معاً",
      description: "أنا متاحة حالياً لفرص عمل جديدة. تواصل معي عبر أي من القنوات أدناه!",
      info: [
        { icon: "✉️", label: "البريد الإلكتروني", value: "mariam.sayed.dev@gmail.com", href: "mailto:mariam.sayed.dev@gmail.com" },
        { icon: "📞", label: "الهاتف",             value: "+20 155 102 6115",            href: "tel:+201551026115" },
        { icon: "📍", label: "الموقع",             value: "القاهرة، مصر",                href: null }
      ],
      socials: [
        { label: "GitHub",    href: "https://github.com/Mariam-SM",           icon: "github" },
        { label: "LinkedIn",  href: "https://linkedin.com/in/mariam-sayedd",  icon: "linkedin" },
        { label: "Portfolio", href: "https://mariam-sm.github.io/portfolio",  icon: "globe" }
      ]
    },
    footer: { made: "صُنع بـ ❤️ بواسطة مريم سيد", rights: "جميع الحقوق محفوظة." }
  }
};

// ===========================
//   STATE
// ===========================
let currentLang  = localStorage.getItem("ms_lang")  || "en";
let currentTheme = localStorage.getItem("ms_theme") || "dark";

function t(path) {
  const keys = path.split(".");
  let val = DATA[currentLang];
  for (const k of keys) { val = val?.[k]; }
  return val;
}

// ===========================
//   THEME
// ===========================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-btn");
  if (!btn) return;
  // Sun icon = currently dark → click to go light
  // Moon icon = currently light → click to go dark
  btn.innerHTML = theme === "dark"
    ? `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"/><path stroke-linecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>`
    : `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
      </svg>`;
  btn.title = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
}

function initTheme() {
  applyTheme(currentTheme);
  document.getElementById("theme-btn").addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("ms_theme", currentTheme);
    applyTheme(currentTheme);
  });
}

// ===========================
//   RENDER FUNCTIONS
// ===========================
function renderNav() {
  const nav = t("nav");
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.textContent = nav[el.dataset.nav];
  });
  document.getElementById("lang-btn").textContent = currentLang === "en" ? "عربي" : "EN";
}

function renderHero() {
  const h = t("hero");
  document.getElementById("hero-greeting").textContent     = h.greeting;
  document.getElementById("hero-name").textContent         = h.name;
  document.getElementById("hero-role").textContent         = h.role;
  document.getElementById("hero-tagline").textContent      = h.tagline;
  document.getElementById("hero-cta-projects").textContent = h.cta_projects;
  document.getElementById("hero-cta-contact").textContent  = h.cta_contact;
  document.getElementById("hero-cta-cv").textContent       = h.cta_cv;

  document.getElementById("hero-stats").innerHTML = h.stats.map(s => `
    <div>
      <div class="hero-stat-num">${s.value}</div>
      <div class="hero-stat-label">${s.label}</div>
    </div>
  `).join("");
}

function renderAbout() {
  const a = t("about");
  document.getElementById("about-subtitle").textContent = a.subtitle;
  document.getElementById("about-title").textContent    = a.title;
  document.getElementById("about-bio").textContent      = a.bio;

  document.getElementById("about-info").innerHTML = a.info.map(i => `
    <div class="about-info-item">
      <span class="about-info-icon">${i.icon}</span>
      <span class="about-info-text">${i.text}</span>
    </div>
  `).join("");

  document.getElementById("about-langs").innerHTML = a.languages.map(l => `
    <div class="lang-chip">
      <span class="lang-chip-name">${l.lang}</span>
      <span class="lang-chip-sep">·</span>
      <span class="lang-chip-level">${l.level}</span>
    </div>
  `).join("");

  document.getElementById("about-stats").innerHTML = a.stats.map(s => `
    <div class="col-6">
      <div class="stat-card">
        <div class="stat-card-num" style="background:${s.gradient};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">
          ${s.value}
        </div>
        <div class="stat-card-label">${s.label}</div>
      </div>
    </div>
  `).join("");
}

function renderSkills() {
  const s = t("skills");
  document.getElementById("skills-subtitle").textContent = s.subtitle;
  document.getElementById("skills-title").textContent    = s.title;

  document.getElementById("skills-grid").innerHTML = s.categories.map(cat => `
    <div class="col-md-6 col-lg-4">
      <div class="skill-card reveal">
        <div class="skill-icon">${cat.icon}</div>
        <div class="skill-name">${cat.name}</div>
        <div class="tags-wrap">
          ${cat.items.map(item => `<span class="tag">${item}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const p = t("projects");
  document.getElementById("projects-subtitle").textContent = p.subtitle;
  document.getElementById("projects-title").textContent    = p.title;

  const featured = p.items.filter(x => x.featured);
  const rest     = p.items.filter(x => !x.featured);

  const githubSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>`;

  const demoSVG = `<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>`;

  // ✅ FIX: each card is a col inside the parent .row g-4
  const makeCard = (proj) => `
    <div class="col-md-6 col-lg-4">
      <div class="project-card reveal">
        <div class="project-card-top">
          <div class="project-icon">📁</div>
          <div class="d-flex gap-2">
            ${proj.demo   ? `<a href="${proj.demo}"   target="_blank" class="proj-icon-btn demo-icon-btn" title="Live Demo">${demoSVG}</a>` : ""}
            ${proj.github ? `<a href="${proj.github}" target="_blank" class="proj-icon-btn"               title="GitHub">${githubSVG}</a>`   : ""}
          </div>
        </div>
        ${proj.highlight ? `<div class="project-highlight">✦ ${proj.highlight}</div>` : ""}
        <div class="project-name">${proj.name}</div>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-tags">
          ${proj.tech.map(tech => `<span class="tag">${tech}</span>`).join("")}
        </div>
        ${proj.demo ? `
          <div class="project-demo-strip">
            <a href="${proj.demo}" target="_blank" class="demo-strip-link">${demoSVG} Live Demo</a>
          </div>` : ""}
      </div>
    </div>
  `;

  // Featured: goes directly into the .row g-4
  document.getElementById("projects-featured").innerHTML = featured.map(makeCard).join("");

  // ✅ FIX: rest goes into its OWN .row g-4 inside the hidden wrapper div
  const restWrap = document.getElementById("projects-rest");
  restWrap.innerHTML = `<div class="row g-4">${rest.map(makeCard).join("")}</div>`;
  restWrap.style.display = "none";

  const btn       = document.getElementById("show-more-btn");
  const moreLabel = currentLang === "ar"
    ? `عرض ${rest.length} مشاريع أخرى`
    : `Show ${rest.length} more projects`;
  btn.textContent = moreLabel;
  btn.onclick = () => {
    restWrap.style.display = "block";
    btn.style.display      = "none";
    observeReveal();
  };
}

function renderExperience() {
  const e = t("experience");
  document.getElementById("exp-subtitle").textContent = e.subtitle;
  document.getElementById("exp-title").textContent    = e.title;

  document.getElementById("timeline").innerHTML = e.items.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-dot ${item.type}">${item.type === "work" ? "💼" : "📚"}</div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <div class="timeline-role">${item.role}</div>
            <div class="timeline-company">${item.company}</div>
          </div>
          <div class="timeline-meta">
            <span class="timeline-period">${item.period}</span>
            <span class="timeline-type ${item.type}">
              ${item.type === "work"
                ? (currentLang === "ar" ? "عمل" : "Work")
                : (currentLang === "ar" ? "تدريب" : "Training")}
            </span>
          </div>
        </div>
        <ul class="timeline-points">
          ${item.points.map(point => `<li>${point}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

function renderContact() {
  const c = t("contact");
  document.getElementById("contact-subtitle").textContent    = c.subtitle;
  document.getElementById("contact-title").textContent       = c.title;
  document.getElementById("contact-description").textContent = c.description;

  document.getElementById("contact-info").innerHTML = c.info.map(i => `
    <div class="contact-info-item">
      <div class="contact-icon">${i.icon}</div>
      <div>
        <div class="contact-info-label">${i.label}</div>
        ${i.href
          ? `<a href="${i.href}" class="contact-info-value">${i.value}</a>`
          : `<span class="contact-info-value">${i.value}</span>`}
      </div>
    </div>
  `).join("");

  const iconSVG = {
    github:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    linkedin: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    globe:    `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
  };

  document.getElementById("contact-socials").innerHTML = c.socials.map(s => `
    <a href="${s.href}" target="_blank" class="social-card-btn" aria-label="${s.label}">
      <span class="social-card-icon">${iconSVG[s.icon] || ""}</span>
      <span class="social-card-label">${s.label}</span>
    </a>
  `).join("");
}

function renderFooter() {
  const f = t("footer");
  document.getElementById("footer-made").textContent   = f.made;
  document.getElementById("footer-year").textContent   = new Date().getFullYear();
  document.getElementById("footer-rights").textContent = f.rights;
}

function renderAll() {
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderContact();
  renderFooter();
  observeReveal();
}

// ===========================
//   SCROLL ANIMATIONS
// ===========================
function observeReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.08 }
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
}

// ===========================
//   NAVBAR SCROLL + ACTIVE
// ===========================
function initNavbar() {
  const navbar   = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
    let current = "";
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.forEach(l => l.classList.toggle("active", l.dataset.section === current));
  });

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.getElementById(link.dataset.section)?.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    });
  });
}

// ===========================
//   MOBILE MENU
// ===========================
function initMobileMenu() {
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
  });
  document.getElementById("close-menu").addEventListener("click", closeMobileMenu);
}
function closeMobileMenu() {
  document.getElementById("hamburger").classList.remove("open");
  document.getElementById("mobile-menu").classList.remove("open");
  document.body.style.overflow = "";
}

// ===========================
//   LANGUAGE TOGGLE
// ===========================
function initLang() {
  document.getElementById("lang-btn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("ms_lang", currentLang);
    document.documentElement.dir  = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
    renderAll();
  });
}

// ===========================
//   INIT
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.dir  = currentLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLang;
  initTheme();
  renderAll();
  initNavbar();
  initMobileMenu();
  initLang();
});
