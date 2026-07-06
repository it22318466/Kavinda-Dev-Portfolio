import React from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Database,
  Cloud,
  Rocket,
  Mail,
  Bot,
  Sprout,
  Zap,
  Target,
  Laptop,
  Palette,
  Globe,
  Server,
  Smartphone,
  GitBranch,
  Layers,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Building2,
  MapPin,
  Calendar,
  CloudCog,
  CodeSquare,
  ServerIcon,
  ServerCogIcon,
  MedalIcon,
  AwardIcon,
  CloudCogIcon,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { FaAmazon, FaJava, FaPython } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { DiGoogleCloudPlatform, DiJavascript } from "react-icons/di";
import {
  SiCss,
  SiExpress,
  SiExpressvpn,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiJson,
  SiLaravel,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiSqlite,
  SiVercel,
  SiWinamp,
  SiXampp,
  SiYaml,
} from "react-icons/si";
import { FaFlutter, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa6";
import { FcNext } from "react-icons/fc";
import {
  RiFirebaseFill,
  RiNodejsFill,
  RiNodejsLine,
  RiSupabaseFill,
} from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { BsJavascript } from "react-icons/bs";
import { MdJavascript } from "react-icons/md";
import { GrMysql } from "react-icons/gr";

const EducationalQualifications = () => {
  const qualifications = [
    {
      degree: "BSc (Hons) Computer Science (Software Engineering)",
      institution: "Kingston University",
      location: "London, UK",
      grade: "First Class",
      icon: GraduationCap,
      year: "Graduate",
    },
    {
      degree: "BSc (Hons) Information Technology & Software Engineering",
      institution: "SLIIT University",
      location: "Malabe, Colombo, LK",
      grade: "3rd Year",
      icon: GraduationCap,
      year: "Undergraduate",
    },
    {
      degree:
        "Pearson BTEC Higher National Diploma (HND) in Computing & Software Engineering",
      institution: "London Metropolitan University",
      location: "London, UK",
      grade: "Merit",
      icon: MedalIcon,
      year: "Graduate",
    },
    {
      degree: "Pearson Diploma in Information Technology (DITEC)",
      institution: "Pearson UK",
      location: "London, UK",
      grade: "Merit",
      icon: Award,
      year: "Graduate",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "The Golden Key Institute of Information Technology Ltd",
      location: "Colombo, LK",
      grade: "A",
      icon: AwardIcon,
      year: "Graduate",
    },
    {
      degree: "DevOps Master Program (DSMP)",
      institution: "DSMP",
      location: "LK",
      grade: "Developers Stack & DevOps Engineer",
      icon: CloudCogIcon,
      year: "Studying",
    },
    {
      degree: "Computer Programming Course (Coding Program)",
      institution: "DP Education",
      location: "LK",
      grade: "Coding & Programmer",
      icon: Code2,
      year: "Studying",
    },
  ];

  const techStack = [
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Laravel", icon: SiLaravel },
    { name: "MERN Stack", icon: Layers },
    { name: "Flutter", icon: FaFlutter },
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Nest.js", icon: SiNestjs },
    { name: "Node.js", icon: RiNodejsLine },
    { name: "Express.js", icon: SiExpress },
    { name: "Vue.js", icon: FaVuejs },
    { name: "React Native", icon: TbBrandReactNative },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "C", icon: CodeSquare },
    { name: "JavaScript", icon: SiJavascript },
    { name: "SQL", icon: Database },
    { name: "Firebase", icon: RiFirebaseFill },
    { name: "Supabase", icon: RiSupabaseFill },
    { name: "NoSQL", icon: GrMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "SQLite", icon: SiSqlite },
    { name: "XAMPP", icon: SiXampp },
    { name: "WAMP", icon: SiWinamp },
    { name: "SQL Server", icon: ServerCogIcon },
    { name: "Mongoose", icon: SiMongoose },
    { name: "CSS", icon: SiCss },
    { name: "HTML", icon: SiHtml5 },
    { name: "MongoDB", icon: SiMongodb },
    { name: "JSON", icon: SiJson },
    { name: "YAML", icon: SiYaml },
    { name: "jQuery", icon: SiJquery },
  ];

  const cloudTech = [
    { name: "AWS", icon: FaAmazon },
    { name: "Azure", icon: VscAzureDevops },
    { name: "GCP", icon: SiGooglecloud },
    { name: "Vercel", icon: SiVercel },
    { name: "RESTful APIs", icon: GitBranch },
    { name: "Agile", icon: TrendingUp },
    { name: "Scrum", icon: CheckCircle },
  ];

  const interests = [
    { name: "AI", icon: Bot },
    { name: "DevOps", icon: CloudCog },
    { name: "Cloud", icon: Cloud },
    { name: "Creator", icon: Sparkles },
    { name: "UI/UX", icon: Palette },
    { name: "Scalable Systems", icon: Layers },
  ];

  const passions = [
    { name: "Software Development", icon: Laptop },
    { name: "Full-Stack Development", icon: Layers },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Web Development", icon: Globe },
    { name: "Web Design", icon: Palette },
    { name: "UI/UX Design", icon: Palette },
    { name: "Cloud Systems", icon: Cloud },
    { name: "Freelancing", icon: Rocket },
    { name: "AI Services", icon: Bot },
    { name: "Digital Creator", icon: Sparkles },
    { name: "SEO Services", icon: TrendingUp },
  ];

  return (
    <section id="education" className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 opacity-90 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 opacity-90 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 opacity-90 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Educational Qualifications & Experience | Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-3xl mx-auto">
              Software Engineer · Full Stack Developer · Mobile & Web Developer
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              First Class BSc (Hons) Computer Science (Software Engineering) -
              Kingston University · London · UK
            </p>
          </div>
        </FadeIn>

        {/* Professional Summary */}
        <FadeIn delay={100}>
          <div className="mb-16">
            <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Professional Summary
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Software Engineer, Full Stack & Web Developer with a First
                    Class BSc (Hons) in Computer Science (Software Engineering)
                    from Kingston University (UK) and hands-on experience in
                    Web, Mobile, App & Desktop application development. Skilled
                    in SpringBoot, WordPress, Portfolio, MERN, Laravel with PHP,
                    Flutter with Dart, React.js, Next.js, Nest.js, Express.js,
                    Node.js, Vue.js, React Native, Java, Python, C, JS, SQL,
                    Firebase, Supabase, NoSQL, PostgreSQL, MySQL, SQLite, Xampp,
                    Wamp, SQL Server and MongoDB. Experienced in building
                    RESTful APIs, FAST APIs, deploying cloud-based solutions
                    (AWS, Azure, GCP, Vercel) and applying Agile/Scrum
                    methodologies. Proven ability to design scalable, secure and
                    user-friendly software systems through freelance and
                    academic projects.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <Rocket className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-white font-semibold">8+ Years</p>
                    <p className="text-white/60 text-sm">
                      Freelancing Experience
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      lochanabandara36@gmail.com
                    </p>
                    <p className="text-white/60 text-sm">Contact Me</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <Sprout className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-white font-semibold">
                      Continuous Learning
                    </p>
                    <p className="text-white/60 text-sm">
                      Advanced AI, DevOps & Cloud Computing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Educational Qualifications */}
        <FadeIn delay={200}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Educational Qualifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualifications.map((qual, index) => {
                const Icon = qual.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute top-28 right-4">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          qual.grade === "First Class" || qual.grade === "A"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : qual.grade === "Merit"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        }`}
                      >
                        {qual.grade}
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {qual.degree}
                        </h4>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-white/70 text-sm">
                            <Building2 className="w-4 h-4" />
                            <span>{qual.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/60 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{qual.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/60 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{qual.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Tech Stack */}
        <FadeIn delay={300}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-primary" />
              🛠️ Tech Stack
            </h3>
            <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                    >
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                      <span className="text-xs text-white/70 text-center group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Cloud & Methods */}
        <FadeIn delay={400}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Cloud className="w-6 h-6 text-primary" />
              ☁️ Cloud & Methods
            </h3>
            <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {cloudTech.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                    >
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                      <span className="text-xs text-white/70 text-center group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Interests & Current Focus */}
        <FadeIn delay={500}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              Interests & Current Focus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  Interested In
                </h4>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-white">
                          {interest.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Currently Learning
                </h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    <Bot className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-white">Advanced AI</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <CloudCog className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-white">DevOps</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                    <Cloud className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">
                      Cloud Technologies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Passions */}
        <FadeIn delay={600}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              💻 Passions
            </h3>
            <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {passions.map((passion, index) => {
                  const Icon = passion.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                    >
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                      <span className="text-xs text-white/70 text-center group-hover:text-white transition-colors">
                        {passion.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Closing Statement */}
        <FadeIn delay={700}>
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <p className="text-xl font-semibold text-white">
                  Code + Create + Innovate + Repeat
                </p>
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p className="text-white/70 mb-4">
                Passionate about building scalable, secure & user-friendly
                software systems across Web, Mobile App & Desktop platforms.
              </p>
              <p className="text-white/60 text-sm">
                Always learning new technologies and improving my professional
                software engineering skills.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <p className="text-white/80">
                  Thank You for Visiting My Profile...
                </p>
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EducationalQualifications;
