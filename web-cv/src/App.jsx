import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, MapPin, 
  BarChart2, TrendingUp, Code, 
  Briefcase, GraduationCap, Award, 
  ExternalLink, ChevronDown, Linkedin,
  Database, Brain, Users, Dumbbell,
  BookOpen, Star, Lightbulb, Globe
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Xử lý sự kiện cuộn trang để đổi màu menu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'achievements'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // --- DỮ LIỆU KINH NGHIỆM (EXPERIENCE) ---
  const experiences = [
    {
      id: 1,
      role: "Data Quality Analyst",
      company: "Dự án AI của Avalon Concentrix",
      period: "04/2025 - 11/2025",
      image: "/exp-avalon.jpg", 
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      description: [
        "Hiểu sâu về quy trình đào tạo AI và xử lý dữ liệu huấn luyện (Training Data).",
        "Thực hiện Data Pre-processing & Quality Control: chuẩn hóa dữ liệu hình ảnh & ngôn ngữ.",
        "Quản lý và vận hành sàn BPO, hoàn thành KPI liên tục trong 6 tháng.",
        "Nâng cấp kỹ năng làm việc nhóm và giải quyết vấn đề Big Data."
      ]
    },
    {
      id: 2,
      role: "Trader & Admin",
      company: "The Bullish Alliance",
      period: "10/2024 - 04/2025",
      image: "/exp-trader.jpg", 
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      description: [
        "Quản lý & phân tích dữ liệu thị trường (Forex & Commodity).",
        "Xây dựng chiến lược trading giúp quỹ tăng +300% ROI trong 4 tháng.",
        "Phát triển cộng đồng đầu tư lên 1.200+ followers và 40.000 lượt xem.",
        "Tham gia quản lý quỹ: xây dựng chiến lược phân bổ vốn & kiểm soát rủi ro."
      ]
    },
    {
      id: 3,
      role: "Học viên & Thực tập dự án",
      company: "MindX Technology School",
      period: "11/2024 - 02/2025",
      image: "/exp-mindx.jpg", 
      icon: <Code className="w-6 h-6 text-yellow-500" />,
      description: [
        "Dự án 1: Dashboard phân tích doanh số SME, xác định lĩnh vực đầu tư tiềm năng.",
        "Dự án 2: Dashboard tối ưu chiến lược truyền thông trên sàn TMĐT.",
        "Dự án 3: Xây dựng mô hình Machine Learning dự báo hiệu suất mạng viễn thông."
      ]
    },
    {
      id: 4,
      role: "Leader Coach",
      company: "CLB Calisthenics and Gym - UEF",
      period: "01/2023 - 02/2025",
      image: "/exp-coach.jpg", 
      icon: <Dumbbell className="w-6 h-6 text-red-500" />,
      description: [
        "Lãnh đạo và vận hành câu lạc bộ với 50 thành viên.",
        "Tổng hợp, phân tích dữ liệu thành viên để đưa ra lịch trình tập luyện phù hợp.",
        "Tổ chức các hoạt động và sự kiện cho câu lạc bộ."
      ]
    }
  ];

  const education = [
    {
      school: "UEF International University",
      degree: "Bachelor of Business Administration",
      period: "2022 - 2026",
      desc: "Chuyên ngành Quản trị Kinh doanh"
    },
    {
      school: "MindX Technology School",
      degree: "Data Analyst Program",
      period: "2023 - 2024",
      desc: "Python, SQL, BI, Machine Learning"
    },
    {
      school: "FTMO Academy",
      degree: "Trader Development Program",
      period: "2024",
      desc: "Phân tích kỹ thuật và tâm lý giao dịch"
    }
  ];

  // --- DỮ LIỆU THÀNH TỰU (ĐÃ SẮP XẾP ĐÚNG YÊU CẦU CỦA BẠN) ---
  const achievements = [
    {
      title: "Sinh viên 5 tốt cấp trường",
      year: "2024",
      description: "Danh hiệu cao quý ghi nhận sự xuất sắc toàn diện trong học tập và rèn luyện.",
      images: ["/ach-sv5tot.jpg"],
      icon: <User className="text-blue-500" />,
      color: "bg-blue-50 border-blue-100"
    },
    {
      title: "Quý quân Strategist Pro",
      year: "2024",
      description: "Cuộc thi phân tích dữ liệu (DATA) tại Đại Học Kinh Tế Tài Chính TP.HCM.",
      images: ["/ach-strategist.jpg"],
      icon: <Award className="text-yellow-500" />,
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      title: "Giải Nhất 3 cuộc thi Data MindX",
      year: "2024",
      description: "Chiến thắng thuyết phục tại các kỳ Final Test lớp D4E74 và B158.",
      images: ["/ach-mindx-1.jpg", "/ach-mindx-2.jpg", "/ach-mindx-3.jpg"],
      icon: <Code className="text-green-500" />,
      color: "bg-green-50 border-green-100"
    },
    
    // --- MỤC MỚI 1: HỘI THẢO QUỐC TẾ (Đứng trước Giải Nhì NCKH Cấp Trường) ---
    {
      title: "Hội thảo Quốc tế Kinh tế Số & Hội nhập",
      year: "2025",
      description: "Tham gia và đóng góp tại hội thảo quốc tế về các xu hướng kinh tế số.",
      images: ["/ach-hoithao.jpg"], 
      icon: <Globe className="text-teal-500" />,
      color: "bg-teal-50 border-teal-100"
    },

    {
      title: "Giải Nhì NCKH cấp trường",
      year: "2025",
      description: "Đề tài nghiên cứu khoa học xuất sắc cấp Đại học UEF.",
      images: ["/ach-nckh-truong.jpg"],
      icon: <BookOpen className="text-purple-500" />,
      color: "bg-purple-50 border-purple-100"
    },

    // --- MỤC MỚI 2: GIẢI RICUP (Đứng trước Giải Ba NCKH Cấp Bộ) ---
    {
      title: "Giải thưởng NC Tiềm năng Ứng dụng RICUP",
      year: "2025",
      description: "Giải thưởng vinh danh các nghiên cứu có tính thực tiễn cao tại cuộc thi RICUP.",
      images: ["/ach-ricup.jpg"], 
      icon: <Lightbulb className="text-orange-500" />,
      color: "bg-orange-50 border-orange-100"
    },

    {
      title: "Giải Ba NCKH cấp Bộ",
      year: "2025",
      description: "Thành tích nghiên cứu khoa học cấp Bộ Giáo dục & Đào tạo.",
      images: ["/ach-nckh-bo.jpg"],
      icon: <Star className="text-red-500" />,
      color: "bg-red-50 border-red-100"
    },
    {
      title: "Đăng tạp chí quốc tế JDI",
      year: "2025",
      description: "Bài nghiên cứu được đăng trên tạp chí JDI của UEF (Chủ đề: Gen Z & Livestream Trust).",
      images: ["/ach-jdi.jpg"],
      icon: <ExternalLink className="text-indigo-500" />,
      color: "bg-indigo-50 border-indigo-100"
    }
  ];

  const skills = {
    technical: [
      { name: "Python (Pandas, Numpy, Sklearn)", level: 85 },
      { name: "SQL & Database Design", level: 90 },
      { name: "Power BI & Dashboarding", level: 85 },
      { name: "Machine Learning (TensorFlow)", level: 70 },
      { name: "Excel (Pivot, Advanced)", level: 95 }
    ],
    domain: [
      { name: "Financial Analysis (Forex, Crypto)", level: 90 },
      { name: "Risk Management", level: 85 },
      { name: "Social Media Growth", level: 80 },
      { name: "Project Management", level: 85 }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900 tracking-tighter cursor-pointer" onClick={() => scrollToSection('home')}>
            NN<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Experience', 'Skills', 'Education', 'Achievements'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => window.print()}
            className="px-5 py-2 bg-blue-900 text-white rounded-full text-sm font-medium hover:bg-blue-800 transition-transform hover:scale-105 shadow-lg shadow-blue-900/20"
          >
            Download CV
          </button>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 z-0"></div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase mb-2 animate-pulse">
              Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              Ngô Văn <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Nhật
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Financial & Market Analyst với tư duy dữ liệu sắc bén. Chuyên biến những con số khô khan thành chiến lược đầu tư hiệu quả.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="mailto:danny196nhatt@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">
                <Mail size={18} />
                Liên hệ ngay
              </a>
              <button onClick={() => scrollToSection('experience')} className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
                Xem kinh nghiệm
                <ChevronDown size={18} />
              </button>
            </div>

            <div className="flex gap-6 pt-8 text-slate-500">
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={18} />
                <span>0775419990</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <MapPin size={18} />
                <span>Ho Chi Minh City</span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-80 h-96 mx-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl rotate-0 transition-transform hover:-rotate-2 duration-500 group">
                <img 
                  src="/avatar.jpg" 
                  alt="Ngô Văn Nhật" 
                  className="w-full h-full object-cover bg-blue-50 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=NhatNgo&backgroundColor=b6e3f4';
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-bold text-lg">Ngô Văn Nhật</p>
                  <p className="text-sm text-blue-200">Data Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mục Tiêu Nghề Nghiệp</h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Mục Tiêu Ngắn Hạn</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    Ứng dụng Python, SQL, Power BI vào phân tích thị trường.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    Hoàn thiện kỹ năng trực quan hóa dữ liệu kinh doanh.
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Mục Tiêu Dài Hạn</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-indigo-500 mt-1">•</span>
                    Trở thành Market Analyst / Portfolio Manager chuyên nghiệp.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-500 mt-1">•</span>
                    Tối ưu danh mục đầu tư cho doanh nghiệp/quỹ lớn.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hành Trình Sự Nghiệp</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Sự kết hợp giữa tư duy phân tích dữ liệu và kinh nghiệm thực chiến.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-slate-200 transform md:-translate-x-1/2 top-0 hidden md:block"></div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full transform md:-translate-x-1/2 mt-6 hidden md:block z-10"></div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex flex-col gap-4">
                        <div className="w-full h-48 rounded-xl overflow-hidden relative border border-slate-100">
                          <img 
                            src={exp.image} 
                            alt={exp.role} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.target.src = 'https://placehold.co/600x400?text=Chưa+có+ảnh';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                          <div className="absolute bottom-3 left-4 text-white font-medium flex items-center gap-2">
                             {exp.icon}
                             <span>{exp.company}</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full whitespace-nowrap">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                                <span className="text-blue-400 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-slate-900 text-white relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Code className="text-blue-400" />
                Finance & Data Skills
              </h2>
              <div className="space-y-6">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Users className="text-purple-400" />
                Business & Leadership
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {skills.domain.map((skill, index) => (
                  <div key={index} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                    <h3 className="font-bold text-lg text-slate-100 mb-1">{skill.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-1.5 w-8 rounded-full ${i < Math.floor(skill.level/20) ? 'bg-purple-500' : 'bg-slate-700'}`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
         </div>
      </section>

      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <GraduationCap className="text-blue-600" />
                Học Vấn
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                      <div className="w-0.5 h-full bg-slate-100 mt-2"></div>
                    </div>
                    <div className="pb-6">
                      <h3 className="text-xl font-bold text-slate-900">{edu.school}</h3>
                      <p className="text-blue-600 font-medium">{edu.degree}</p>
                      <p className="text-sm text-slate-500 mb-2">{edu.period}</p>
                      <p className="text-slate-600">{edu.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div id="achievements">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Award className="text-yellow-500" />
                Thành Tựu Nổi Bật
              </h2>
              <div className="space-y-6">
                {achievements.map((ach, index) => (
                  <div key={index} className={`p-5 rounded-xl border transition-all duration-300 hover:shadow-lg ${ach.color}`}>
                    <div className="flex gap-4 items-start mb-4">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        {ach.icon}
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2 items-center mb-1">
                           <h3 className="font-bold text-slate-900 text-lg">{ach.title}</h3>
                           <span className="text-xs px-2 py-0.5 bg-white rounded-full border border-slate-200 font-medium text-slate-500">{ach.year}</span>
                        </div>
                        <p className="text-slate-600 text-sm">{ach.description}</p>
                      </div>
                    </div>
                    
                    {ach.images.length > 0 && (
                      <div className={`grid gap-2 ${ach.images.length > 1 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
                        {ach.images.map((img, i) => (
                          <div key={i} className="rounded-lg overflow-hidden h-32 border border-slate-200 group">
                            <img 
                              src={img} 
                              alt={`${ach.title} ${i+1}`} 
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                  e.target.src = 'https://placehold.co/400x300?text=Ảnh+Thành+Tựu';
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ngô Văn Nhật</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:danny196nhatt@gmail.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Mail size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-sm">
            © 2025 Ngo Van Nhat.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;