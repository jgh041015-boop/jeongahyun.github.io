import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  GraduationCap, 
  Award, 
  Code, 
  Layers, 
  ExternalLink,
  Instagram,
  Youtube,
  Monitor,
  PenTool,
  Video,
  Figma as FigmaIcon,
  BookOpen
} from "lucide-react";

const SectionTitle = ({ children, number }: { children: React.ReactNode; number: string }) => (
  <div className="flex items-baseline gap-4 mb-12">
    <span className="text-accent font-display text-4xl opacity-50">{number}</span>
    <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">{children}</h2>
  </div>
);

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="font-heading font-medium uppercase tracking-wider text-sm">{name}</span>
      <span className="font-mono text-xs opacity-60">{percentage}%</span>
    </div>
    <div className="h-1 bg-white/10 w-full overflow-hidden rounded-full">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-accent rounded-full"
      />
    </div>
  </div>
);

export default function App() {
  const [showMain, setShowMain] = useState(false);

  const activities = [
    {
      date: "2024/05/21 ~ 2024/08/18",
      title: "교내 소모임 ‘크로셰’ 소모임장",
      desc: "교내 소모임을 이끌며 다양한 창작 활동을 진행함."
    },
    {
      date: "2025/05/01 ~ 2025/08/18",
      title: "교내 소모임 ‘알쓸한잡’",
      desc: "인스타그램 계정 운영. 대학교 시설 소개와 학교 주변 카페를 추천하는 카드뉴스와 숏폼을 기획·출연·제작하여 업로드함.",
      icon: (
        <a href="https://www.instagram.com/ashs_zip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <Instagram size={16} className="text-pink-500 inline-block ml-2 hover:scale-125 transition-transform" />
        </a>
      )
    },
    {
      date: "2025/09/01 ~ 2025/12/05",
      title: "학과 소모임 ‘프리즘’",
      desc: "독서 소모임 활동을 하며 문학을 기반으로 한 문화콘텐츠 기획 활동 참여. 학과 우수 소모임으로 선정됨."
    },
    {
      date: "2025. 9. 5. ~ 현재",
      title: "개인 유튜브 채널 운영",
      desc: "콘서트, 페스티벌 등 공연 브이로그 직접 출연 및 편집. 최근 영상 업로드 2일 만에 조회수 1천 회 기록.",
      icon: (
        <a href="https://www.youtube.com/@heimoffgogo" target="_blank" rel="noopener noreferrer">
          <Youtube size={16} className="text-red-500 inline-block ml-2 hover:scale-125 transition-transform" />
        </a>
      )
    },
    {
      date: "2025/11/24",
      title: "2025 단양갱 페스타 서포터즈",
      desc: "양갱 주제 지역 축제 홍보 전략 구상. 생성형 AI를 활용해 영상과 음악을 직접 제작함."
    },
    {
      date: "2025/11/28",
      title: "2025 한성 SW 페스티벌 부스 운영",
      desc: "생성형 AI 활용 영상 작품 제작 및 전시. 관람객 대상 작품 소개 및 제작 과정 설명. 전시 부문 최우수상 수상."
    },
    {
      date: "2026/3/03 ~ 현재",
      title: "2026 여수세계섬박람회 서포터즈",
      desc: "AI를 이용하여 여수를 배경으로 한 애니메이션 제작 중."
    }
  ];

  const works = [
    {
      title: "가나 광고",
      type: "AD",
      items: "인쇄광고 비주얼과 카피 수업 결과물 (Figma로 제작)",
      img: "gana_movie.png",
      layout: "custom-gana",
      gallery: [
        { url: "gana_gift.png", width: 1125, height: 958, label: "Gift" },
        { url: "gana_yt.png", width: 960, height: 720, label: "YouTube" },
        { url: "gana_movie.png", width: 1771, height: 1168, label: "Movie" },
        { url: "gana_interpark.png", width: 660, height: 1173, label: "Interpark" },
        { url: "gana_reels.png", width: 1080, height: 2340, label: "Reels" }
      ]
    },
    {
      title: "<방문자: The Guest>",
      type: "Animation",
      items: "한성 생성 AI 크리에이티브 콘텐츠 챌린지 수상작. 기획 및 영상팀으로 참여. (AI로 제작)",
      img: "guest_main.png",
      youtubeUrl: "https://youtu.be/6wdYSdxIA7o?si=eTYyyQlRJxO9z9gS",
      gallery: [
        { type: 'image', label: 'A2 Poster', url: 'guest_poster.png', width: 420, height: 592 },
      ]
    },
    {
      title: "<나루와 상이>",
      type: "Animation",
      items: "2026 여수국제웹드라마영화제 출품 예정. 기획 및 이미지팀으로 참여. (AI로 제작)",
      img: "naru_main.png",
       gallery: [
        { url: "naru_1.png", width: 16, height: 9 },
        { url: "naru_2.png", width: 16, height: 9 },
        { url: "naru_3.png", width: 16, height: 9 },
        { url: "naru_4.png", width: 16, height: 9 },
        { url: "naru_5.png", width: 16, height: 9 },
       ]
    },
    {
      title: "알쓸한잡 카드뉴스",
      type: "Content Creation",
      items: "촬영/제작 (Adobe Photoshop으로 제작)",
      img: "cafe_main.png",
      instagramUrl: "https://www.instagram.com/p/DMwxvO1Rf9C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      gallery: [
        { url: "cafe_1.png", width: 4, height: 5 }
      ]
    },
    {
      title: "단양갱 페스타 홍보 릴스",
      type: "Content Creation",
      items: "기획/제작/편집 (음악, 영상 AI로 제작. Premiere Pro/CapCut으로 편집)",
      img: "danyang_reels.png",
      youtubeUrl: "https://youtube.com/shorts/4FxOlRH1ERU?si=kqqCywC3ZwkxuTcV",
      gallery: [
        { url: "danyang_reels.png", width: 9, height: 16, label: "Reels" }
      ]
    }
  ];

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white bg-zinc-950 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!showMain ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 cursor-pointer group"
            onClick={() => setShowMain(true)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-7xl md:text-[12rem] font-display uppercase tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">
                Jeon <br className="md:hidden" /> Ga Hyun
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1 }}
                className="mt-8 font-mono text-sm uppercase tracking-[0.5em] animate-pulse"
              >
                Click to Enter
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center">
              <h1 className="font-display text-2xl tracking-tighter uppercase cursor-pointer" onClick={() => setShowMain(false)}>Jeon Ga Hyun</h1>
              <nav className="hidden md:flex gap-8 font-heading text-xs uppercase tracking-[0.2em] font-semibold">
                <a href="#profile" className="hover:text-accent transition-colors">Profile</a>
                <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
                <a href="#activities" className="hover:text-accent transition-colors">Activities</a>
                <a href="#works" className="hover:text-accent transition-colors">Works</a>
              </nav>
            </header>

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
              {/* Hero Section */}
              <section className="mb-32 min-h-[70vh] flex items-center">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
                  <div className="md:w-3/4 lg:w-4/5">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <p className="text-accent font-mono text-sm mb-4 uppercase tracking-widest">Content Planner & Creator</p>
                      <h1 className="text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] tracking-tighter mb-10">
                        Creative <br />
                        <span className="text-stroke">Visionary</span>
                      </h1>
                      <p className="text-base md:text-lg lg:text-xl font-heading font-light leading-relaxed max-w-4xl text-zinc-400 break-keep">
                        창의적인 시선으로 세상을 담는 콘텐츠 기획자 <span className="text-white font-medium whitespace-nowrap">전가현입니다.</span> <br />
                        디지털 툴을 활용해 상상을 현실로 구현하고, <br />
                        사람들의 마음을 움직이는 이야기를 만듭니다.
                      </p>
                    </motion.div>
                  </div>
                  <div className="md:w-1/4 lg:w-1/5 flex justify-end items-start -mt-20 md:-mt-32">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: 30 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative w-full max-w-[240px] lg:max-w-[300px]"
                    >
                      <div className="aspect-square rounded-full overflow-hidden brutal-border shadow-2xl shadow-accent/10">
                        <img 
                          src="profile.jpg" 
                          alt="전가현 프로필" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Profile & Contact */}
              <section id="profile" className="mb-40">
                <SectionTitle number="01">Profile</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-12">
                    <div>
                      <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-6">Personal Info</h3>
                      <ul className="space-y-4 font-heading text-lg">
                        <li className="flex items-center gap-4"><User size={20} className="text-zinc-500" /> 전가현 (여)</li>
                        <li className="flex items-center gap-4"><Calendar size={20} className="text-zinc-500" /> 2004-04-10</li>
                        <li className="flex items-center gap-4"><GraduationCap size={20} className="text-zinc-500 shrink-0" /> <span className="whitespace-nowrap">한성대학교 문학문화콘텐츠학과 3학년 재학 중</span></li>
                        <li className="flex items-center gap-4 ml-9 text-zinc-400 text-sm italic">+ SW연계전공 이수 중</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-6">Contact</h3>
                      <ul className="space-y-4 font-heading text-lg">
                        <li className="flex items-center gap-4"><Phone size={20} className="text-zinc-500" /> 010-4184-4476</li>
                        <li className="flex items-center gap-4"><Mail size={20} className="text-zinc-500" /> jgh041098@naver.com</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-900/50 p-8 md:p-12 brutal-border rounded-2xl">
                    <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                      <Award size={16} /> Awards & Certs
                    </h3>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <span className="font-mono text-xs opacity-40 mt-1">2023</span>
                        <div>
                          <h4 className="font-heading font-semibold">한국사능력검정시험 3급</h4>
                          <p className="text-xs text-zinc-500 mt-1">2023/02/11</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="font-mono text-xs opacity-40 mt-1">2024</span>
                        <div>
                          <h4 className="font-heading font-semibold text-accent">한성 이마기난스 상상력 프로젝트</h4>
                          <p className="text-sm font-medium">최우수상 수상</p>
                          <p className="text-xs text-zinc-500 mt-1">2024/12/13</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="font-mono text-xs opacity-40 mt-1">2025</span>
                        <div>
                          <h4 className="font-heading font-semibold text-accent">한성 생성 AI 크리에이티브 콘텐츠 챌린지</h4>
                          <p className="text-sm font-medium">최우수상 수상</p>
                          <p className="text-xs text-zinc-500 mt-1">2025/11/28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section id="skills" className="mb-40">
                <SectionTitle number="02">Abilities</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div>
                    <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-10 flex items-center gap-2">
                      <Video size={16} /> Creative Tools
                    </h3>
                    <SkillBar name="Adobe Premiere" percentage={70} />
                    <SkillBar name="Photoshop" percentage={50} />
                    <SkillBar name="Midjourney" percentage={60} />
                    <SkillBar name="Runway" percentage={70} />
                    <p className="font-mono text-[10px] text-accent mt-4 tracking-widest animate-pulse">AND MORE ...</p>
                  </div>
                  <div>
                    <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-10 flex items-center gap-2">
                      <Layers size={16} /> Collaboration
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-zinc-900 border border-white/5 flex flex-col items-center gap-4 group hover:border-accent/50 transition-colors rounded-xl">
                        <FigmaIcon size={32} className="group-hover:text-accent transition-colors" />
                        <span className="font-heading text-sm uppercase tracking-widest">Figma</span>
                      </div>
                      <div className="p-6 bg-zinc-900 border border-white/5 flex flex-col items-center gap-4 group hover:border-accent/50 transition-colors rounded-xl">
                        <BookOpen size={32} className="group-hover:text-accent transition-colors" />
                        <span className="font-heading text-sm uppercase tracking-widest">Notion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Activities */}
              <section id="activities" className="mb-40">
                <SectionTitle number="03">Experience</SectionTitle>
                <div className="space-y-12 relative before:absolute before:left-[7px] before:top-2 before:bottom-0 before:w-px before:bg-white/10">
                  {activities.map((act, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="pl-10 relative"
                    >
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent border-4 border-zinc-950" />
                      <span className="font-mono text-xs text-accent uppercase tracking-widest mb-2 block">{act.date}</span>
                      <h3 className="text-2xl font-heading font-bold mb-3 flex items-center">
                        {act.title}
                        {act.icon}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed max-w-3xl">{act.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Works */}
              <section id="works" className="mb-40">
                <SectionTitle number="04">Selected Works</SectionTitle>
                <div className="space-y-24">
                  {works.map((work, idx) => (
                    <div key={idx} className="group">
                      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                        <div>
                          <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">{work.type}</p>
                          <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tighter">{work.title}</h3>
                          <p className="text-sm text-zinc-300 mt-3 font-medium bg-white/5 px-3 py-1.5 rounded-lg inline-block border border-white/10 -ml-3">{work.items}</p>
                          <div className="flex gap-3 mt-4">
                            {work.instagramUrl && (
                              <a 
                                href={work.instagramUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 hover:border-accent/50 transition-all group rounded-lg"
                              >
                                <Instagram size={18} className="group-hover:text-accent transition-colors" />
                                <span className="font-heading text-xs uppercase tracking-widest">Instagram</span>
                              </a>
                            )}
                            {work.youtubeUrl && (
                              <a 
                                href={work.youtubeUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 hover:border-accent/50 transition-all group rounded-lg"
                              >
                                <Youtube size={18} className="group-hover:text-accent transition-colors" />
                                <span className="font-heading text-xs uppercase tracking-widest">YouTube</span>
                              </a>
                            )}
                          </div>
                        </div>
                        <ExternalLink size={24} className="text-zinc-700 group-hover:text-accent transition-colors" />
                      </div>
                      
                      <div className={`grid gap-4 ${
                        work.layout === 'custom-gana' 
                          ? 'grid-cols-2 md:grid-cols-5' 
                          : 'grid-cols-2 md:grid-cols-4'
                      }`}>
                        {work.gallery.map((item, i) => {
                          const isObj = typeof item === 'object';
                          const url = isObj ? item.url : item;
                          const label = isObj ? (item.label || '') : '';
                          const isVideo = isObj && item.type === 'video';
                          const hasDimensions = isObj && item.width && item.height;

                          // Custom grid spanning for Gana layout
                          let gridSpan = '';
                          if (work.layout === 'custom-gana') {
                            // gift, youtube, movie take 3 columns combined in a row on desktop
                            // interpark, reels take 2 columns
                            // But to keep it simple and balanced:
                            if (i < 3) gridSpan = 'md:col-span-1'; // gift, yt, movie
                            else gridSpan = 'md:col-span-1'; // interpark, reels
                          } else if (idx === 1 && i === 0) {
                            gridSpan = 'col-span-2 row-span-2';
                          }

                          return (
                            <motion.div 
                              key={i}
                              whileHover={{ scale: 1.02 }}
                              className={`relative overflow-hidden brutal-border bg-zinc-900 flex items-center justify-center rounded-xl ${gridSpan} ${hasDimensions ? '' : 'aspect-square'}`}
                              style={hasDimensions ? { aspectRatio: `${item.width} / ${item.height}` } : {}}
                            >
                              <img 
                                src={url} 
                                alt={`${work.title} ${i}`} 
                                className={`w-full h-full transition-opacity duration-500 ${hasDimensions ? 'object-contain' : 'object-cover opacity-60 hover:opacity-100'}`}
                                referrerPolicy="no-referrer"
                              />
                              {isVideo && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                  <Video size={32} className="text-accent" />
                                </div>
                              )}
                              {label && (
                                <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 text-[10px] font-mono uppercase tracking-widest">
                                  {label}
                                </div>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 px-6 md:px-12">
              <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8 text-center">
                <p className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  © 2026 JEON GA HYUN. ALL RIGHTS RESERVED.
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
