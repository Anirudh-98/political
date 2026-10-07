import {
  BookOpen,
  Brush,
  Camera,
  ChartNoAxesColumn,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HeartHandshake,
  Keyboard,
  Landmark,
  Laptop,
  Mail,
  Megaphone,
  MessageSquare,
  Mic,
  Palette,
  PenLine,
  Scale,
  Search,
  ShieldCheck,
  Share2,
  Sparkles,
  Sprout,
  UserRound,
  Users,
  UsersRound,
  Utensils,
  Wallet,
  Wrench,
  CalendarCheck,
  BedDouble,
  ConciergeBell,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface CourseArea {
  icon: LucideIcon;
  title: string;
}

export interface Course {
  slug: string;
  // Name as shown in the nav and on cards
  name: string;
  tagline?: string;
  // Hero photo and the photo beside the introduction
  image: string;
  sideImage: string;
  sideImageAlt: string;
  intro: string[];
  areasTitle: string;
  areas: CourseArea[];
}

export const COURSES: Course[] = [
  {
    slug: "political-diploma-cadre",
    name: "Political Diploma Cadre",
    tagline: "Real-Time Training. Real-Life Skills. Real Future.",
    image: "/images/page-training.webp",
    sideImage: "/images/video-cadre-training.webp",
    sideImageAlt: "Trainees attending a cadre training session",
    intro: [
      "The Political Diploma Cadre program focuses on developing trained booth-level cadre through structured training and practical experience.",
    ],
    areasTitle: "Core Training Areas",
    areas: [
      { icon: Landmark, title: "Political & Public Service" },
      { icon: Scale, title: "Public Policy & Governance" },
      { icon: Users, title: "Leadership & Ethics" },
      { icon: MessageSquare, title: "Communication Skills" },
      { icon: HeartHandshake, title: "Social Service" },
      { icon: UsersRound, title: "Team Building & Coordination" },
    ],
  },
  {
    slug: "diploma-in-journalism",
    name: "Diploma in Journalism",
    image: "/images/course-journalism.webp",
    sideImage: "/images/page-media.webp",
    sideImageAlt: "A reporter interviewing a resident on the street",
    intro: [
      "A livelihood-oriented diploma course that builds practical skills in news gathering, reporting and digital media.",
    ],
    areasTitle: "Focus Areas",
    areas: [
      { icon: PenLine, title: "Reporting & News Writing" },
      { icon: Mic, title: "Interviewing" },
      { icon: FileText, title: "Editing" },
      { icon: Share2, title: "Digital & Social Media" },
      { icon: Camera, title: "Camera & Field Work" },
      { icon: ShieldCheck, title: "Media Ethics" },
    ],
  },
  {
    slug: "diploma-in-hotel-event-management",
    name: "Diploma in Hotel & Event Management",
    image: "/images/course-hotel-event.webp",
    sideImage: "/images/sec-programs-planning.webp",
    sideImageAlt: "A team planning together around a table",
    intro: [
      "A livelihood-oriented diploma course that builds practical skills for work in hospitality and event services.",
    ],
    areasTitle: "Focus Areas",
    areas: [
      { icon: ConciergeBell, title: "Front Office & Guest Service" },
      { icon: Utensils, title: "Food & Beverage Service" },
      { icon: BedDouble, title: "Housekeeping" },
      { icon: CalendarCheck, title: "Event Planning & Coordination" },
      { icon: MessageSquare, title: "Hospitality Communication" },
      { icon: HeartHandshake, title: "Customer Care" },
    ],
  },
  {
    slug: "diploma-in-advanced-digital-marketing",
    name: "Diploma in Advanced Digital Marketing",
    image: "/images/course-digital-marketing.webp",
    sideImage: "/images/sec-training-digital.webp",
    sideImageAlt: "Students working on laptops in a digital skills class",
    intro: [
      "A livelihood-oriented diploma course that builds practical skills for promoting businesses and services online.",
    ],
    areasTitle: "Focus Areas",
    areas: [
      { icon: Share2, title: "Social Media Marketing" },
      { icon: Search, title: "Search Marketing" },
      { icon: PenLine, title: "Content Creation" },
      { icon: Mail, title: "Email & Messaging Campaigns" },
      { icon: ChartNoAxesColumn, title: "Analytics & Reporting" },
      { icon: Megaphone, title: "Branding" },
    ],
  },
  {
    slug: "diploma-in-craft-painting",
    name: "Diploma in Craft & Painting",
    image: "/images/course-craft-painting.webp",
    sideImage: "/images/video-women-empowerment.webp",
    sideImageAlt: "A women's group working on handicrafts together",
    intro: [
      "A livelihood-oriented diploma course for craft and painting teachers, building creative and teaching skills.",
    ],
    areasTitle: "Focus Areas",
    areas: [
      { icon: Brush, title: "Drawing & Painting" },
      { icon: Sparkles, title: "Craft Work" },
      { icon: Palette, title: "Design & Colour" },
      { icon: BookOpen, title: "Teaching Methods" },
      { icon: Wrench, title: "Tools & Materials" },
      { icon: Sprout, title: "Self Employment" },
    ],
  },
  {
    slug: "computer-it-courses",
    name: "Computer & IT Courses",
    image: "/images/course-computer-it.webp",
    sideImage: "/images/video-skill-training.webp",
    sideImageAlt: "Young people learning computer skills at a training centre",
    intro: [
      "Livelihood-oriented courses that build practical computer and digital skills for study, work and daily life.",
    ],
    areasTitle: "Focus Areas",
    areas: [
      { icon: Laptop, title: "Computer Fundamentals" },
      { icon: FileText, title: "Office Tools" },
      { icon: Globe, title: "Internet & Email" },
      { icon: Keyboard, title: "Typing & Data Entry" },
      { icon: ShieldCheck, title: "Digital Safety" },
      { icon: Wrench, title: "Basic Troubleshooting" },
    ],
  },
  {
    slug: "spoken-english-communication",
    name: "Spoken English & Communication",
    image: "/images/course-spoken-english.webp",
    sideImage: "/images/sec-training-speaking.webp",
    sideImageAlt: "A trainee practising public speaking in front of her class",
    intro: [
      "A livelihood-oriented course that builds confidence in everyday English and clear communication.",
    ],
    areasTitle: "Focus Areas",
    areas: [
      { icon: MessageSquare, title: "Everyday Conversation" },
      { icon: Mic, title: "Pronunciation" },
      { icon: BookOpen, title: "Vocabulary & Grammar" },
      { icon: Megaphone, title: "Public Speaking" },
      { icon: UserRound, title: "Interview Communication" },
      { icon: Sparkles, title: "Confidence Building" },
    ],
  },
  {
    slug: "competitive-exam-coaching",
    name: "Competitive Exam Coaching",
    tagline: "Quality Education for All",
    image: "/images/course-competitive-exam.webp",
    sideImage: "/images/video-skill-training.webp",
    sideImageAlt: "Young people studying at a training centre",
    intro: [
      "The program promotes subsidised online coaching and skill opportunities with a focus on reducing the financial burden of education.",
    ],
    areasTitle: "How It Works",
    areas: [
      { icon: Wallet, title: "Affordable Access" },
      { icon: Laptop, title: "Online Classes" },
      { icon: BookOpen, title: "Study Material" },
      { icon: Users, title: "Expert Support" },
      { icon: ClipboardCheck, title: "Tests" },
      { icon: GraduationCap, title: "Certification" },
    ],
  },
];

export const getCourse = (slug: string) => COURSES.find((course) => course.slug === slug);

export const courseHref = (course: Course) => `/training/${course.slug}`;
