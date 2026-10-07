export interface QuickActionItem {
  id: number;
  title: string;
  line1: string;
  line2: string;
  btnText: string;
  color: string;
  bgBadge: string;
  iconName: string;
  actionKey: "booths" | "offers" | "vouchers" | "services" | "serviceRequest" | "results";
}

export interface VoterBenefitCategory {
  id: number;
  title: string;
  iconName: string;
  color: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  image: string;
  youtubeId: string;
  description: string;
}

export const HERO_FEATURES = [
  {
    num: "01",
    title: "Cadre Strength",
    subtitle: "Our Backbone",
    iconName: "Users",
  },
  {
    num: "02",
    title: "People Empowerment",
    subtitle: "Our Mission",
    iconName: "GraduationCap",
  },
  {
    num: "03",
    title: "Public Services",
    subtitle: "Our Duty",
    iconName: "HeartHandshake",
  },
  {
    num: "04",
    title: "Transparent Results",
    subtitle: "Our Commitment",
    iconName: "TrendingUp",
  },
];

export const YOUTUBE_HERO_BULLETS = [
  "Program Updates",
  "Success Stories",
  "Training Highlights",
  "Public Service Initiatives",
  "Live Events & Interactions",
];

export const YOUTUBE_CHANNEL_BULLETS = [
  "Live Program Events",
  "Training & Workshops",
  "Success Stories",
  "Public Service Activities",
  "Inspirational Messages",
];

export const QUICK_ACTIONS: QuickActionItem[] = [
  {
    id: 1,
    title: "BOOTH WISE CADRE TRAINING",
    line1: "Min. 10 Cadres per Booth",
    line2: "Training • Skills • Growth",
    btnText: "VIEW BOOTHS",
    color: "#08793F",
    bgBadge: "bg-emerald-600",
    iconName: "Users",
    actionKey: "booths",
  },
  {
    id: 2,
    title: "SPECIAL OFFERS FOR CADRES",
    line1: "Training • Certificates",
    line2: "Rewards & Recognition",
    btnText: "VIEW OFFERS",
    color: "#1D46C4",
    bgBadge: "bg-blue-600",
    iconName: "Gift",
    actionKey: "offers",
  },
  {
    id: 3,
    title: "SUBSIDY VOUCHERS FOR VOTERS",
    line1: "Skill • Education • Health",
    line2: "Business • & More",
    btnText: "GET VOUCHERS",
    color: "#6D31D6",
    bgBadge: "bg-purple-600",
    iconName: "Ticket",
    actionKey: "vouchers",
  },
  {
    id: 4,
    title: "FREE PRIVILEGED SERVICES",
    line1: "We Care, We Serve,",
    line2: "We Stand With You",
    btnText: "VIEW SERVICES",
    color: "#C2410C",
    bgBadge: "bg-orange-600",
    iconName: "HandHeart",
    actionKey: "services",
  },
  {
    id: 5,
    title: "POST A REQUEST / SERVICE NEED",
    line1: "Tell Us Your Need,",
    line2: "We Will Reach You",
    btnText: "SUBMIT REQUEST",
    color: "#0B7268",
    bgBadge: "bg-teal-600",
    iconName: "FileText",
    actionKey: "serviceRequest",
  },
  {
    id: 6,
    title: "RESULTS & IMPACT DASHBOARD",
    line1: "Track Our Work,",
    line2: "See The Change",
    btnText: "VIEW RESULTS",
    color: "#D11824",
    bgBadge: "bg-red-600",
    iconName: "BarChart3",
    actionKey: "results",
  },
];

export const VOTER_BENEFITS: VoterBenefitCategory[] = [
  { id: 1, title: "Education Support", iconName: "GraduationCap", color: "#1D4ED8" },
  { id: 2, title: "Skill Development Training", iconName: "Laptop", color: "#0B7268" },
  { id: 3, title: "Employment Assistance", iconName: "Briefcase", color: "#92400E" },
  { id: 4, title: "Women Empowerment", iconName: "Users", color: "#BE185D" },
  { id: 5, title: "Health Care", iconName: "HeartPulse", color: "#DC2626" },
  { id: 6, title: "Agriculture Support", iconName: "Sprout", color: "#15803D" },
  { id: 7, title: "Senior Citizen Care", iconName: "HeartHandshake", color: "#7E22CE" },
  { id: 8, title: "Youth Support", iconName: "Zap", color: "#2563EB" },
];

export const HOW_IT_WORKS_STEPS = [
  { num: "01", title: "Identify Your Need", iconName: "Search" },
  { num: "02", title: "Register / Submit Request", iconName: "FileText" },
  { num: "03", title: "Cadre Visits You", iconName: "Users" },
  { num: "04", title: "Service / Benefit Provided", iconName: "Settings" },
  { num: "05", title: "Follow Up & Verify", iconName: "ShieldCheck" },
  { num: "06", title: "Happy Citizen / Strong Society", iconName: "Smile" },
];

export const PROMISES = {
  col1: [
    "Opportunities for Every Youth",
    "Dignity for Every Family",
    "Transparency in Every Step",
  ],
  col2: [
    "Development in Every Village",
    "Service to Every Citizen",
    "Accountability to the People",
  ],
};

export const LATEST_VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "Cadre Training Program",
    category: "Cadre Training",
    duration: "14:20",
    image: "/images/video-cadre-training.webp",
    youtubeId: "M7lc1UVf-VE",
    description:
      "Grassroot training modules on voter outreach, local issues enumeration, and booth-level public governance.",
  },
  {
    id: "v2",
    title: "Health Camp Highlights",
    category: "Public Healthcare",
    duration: "08:45",
    image: "/images/video-health-camp.webp",
    youtubeId: "LXb3EKWsInQ",
    description:
      "Free medical diagnosis, dental screenings, and essential medicine distribution provided to 3,500+ rural citizens.",
  },
  {
    id: "v3",
    title: "Skill Training for Youth",
    category: "Youth Upliftment",
    duration: "11:15",
    image: "/images/video-skill-training.webp",
    youtubeId: "3JZ_D3ELwOQ",
    description:
      "Empowering young citizens with practical IT literacy, computer skills, and interview coaching for career readiness.",
  },
  {
    id: "v4",
    title: "Women Empowerment",
    category: "Women Development",
    duration: "16:30",
    image: "/images/video-women-empowerment.webp",
    youtubeId: "fJ9rUzIMcZQ",
    description:
      "Self-help collective workshops promoting financial autonomy, handicrafts cooperatives, and legal awareness.",
  },
  {
    id: "v5",
    title: "Public Service in Action",
    category: "Constituency Action",
    duration: "19:05",
    image: "/images/video-public-service.webp",
    youtubeId: "21X5lGlDOfg",
    description:
      "Rapid resolution of civic grievances: sanitation, potable water supplies, and direct grievance escalation.",
  },
];

export const IMPACT_METRICS = [
  {
    num: "5,000+",
    label: "BOOTHS COVERED",
    iconName: "UsersRound",
  },
  {
    num: "50,000+",
    label: "TRAINED CADRES",
    iconName: "Users",
  },
  {
    num: "2,00,000+",
    label: "PEOPLE SERVED",
    iconName: "MapPin",
  },
  {
    num: "1,50,000+",
    label: "SERVICES DELIVERED",
    iconName: "Award",
  },
];
