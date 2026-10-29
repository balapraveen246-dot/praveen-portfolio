/**
 * Projects Data for Praveen's Portfolio
 * All project descriptions, tags, and URLs are accurately represented.
 * Grand Horizon was tested and verified to be 404 (unavailable), so it is displayed with
 * a 'Demo Unavailable' status until a working URL is provided.
 */

export const projectsData = [
  {
    id: 'udemy-upgrade',
    name: 'Udemy Upgrade Version',
    category: 'Educational Platform UI',
    description: 'A course-platform-inspired website demonstrating responsive layouts and frontend development.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    liveUrl: 'https://balapraveen246-dot.github.io/UDEMY_UPGRADE_VERSION/',
    codeUrl: null, // Set to repo URL when public code link is available
    status: 'Live', // 'Live' | 'In Progress' | 'Unavailable'
    statusBadge: 'Live Demo Available',
    gradient: 'from-amber-900/30 via-neutral-900 to-neutral-950',
    accentColor: '#D4AF37',
    iconType: 'graduation',
    number: '01',
    features: ['Course listing grid', 'Hero banner with search', 'Responsive navigation']
  },
  {
    id: 'greenden',
    name: 'Greenden',
    category: 'Plant & E-Commerce Showcase',
    description: 'A plant and gardening-themed website focused on clean product presentation and responsive design.',
    tags: ['Tailwind CSS', 'HTML5', 'Responsive Design', 'Product Showcase'],
    liveUrl: 'https://balapraveen246-dot.github.io/greeny/index.html',
    codeUrl: null,
    status: 'Live',
    statusBadge: 'Live Demo Available',
    gradient: 'from-emerald-950/40 via-neutral-900 to-neutral-950',
    accentColor: '#10B981',
    iconType: 'leaf',
    number: '02',
    features: ['Modern plant catalog', 'Clean responsive cards', 'Newsletter & footer section']
  },
  {
    id: 'nostra',
    name: 'Nostra',
    category: 'Fashion & E-Commerce Storefront',
    description: 'A fashion and shopping-inspired frontend project currently under development.',
    tags: ['Frontend Development', 'E-Commerce UI', 'Under Construction'],
    liveUrl: null, // No fake URL; strictly under development
    codeUrl: null,
    status: 'In Progress',
    statusBadge: 'In Progress / Coming Soon',
    gradient: 'from-neutral-800/40 via-neutral-900 to-neutral-950',
    accentColor: '#A1A1AA',
    iconType: 'shopping-bag',
    number: '03',
    features: ['Trendy apparel catalog', 'Filter & category layout', 'Interactive cart design']
  },
  {
    id: 'weather-report',
    name: 'Weather Report',
    category: 'Real-Time Utility App',
    description: 'A weather-report application with a user-friendly interface for viewing weather information.',
    tags: ['React', 'API Integration', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://weather-report-ten-lime.vercel.app/',
    codeUrl: null,
    status: 'Live',
    statusBadge: 'Live Demo Available',
    gradient: 'from-sky-950/40 via-neutral-900 to-neutral-950',
    accentColor: '#38BDF8',
    iconType: 'cloud-sun',
    number: '04',
    features: ['Current conditions & forecast', 'City search interface', 'Responsive weather cards']
  },
  {
    id: 'bulkmail',
    name: 'BulkMail',
    category: 'Email Workflow Web App',
    description: 'A bulk-email web application with an interface designed to help users manage email lists and initiate email workflows.',
    tags: ['MERN Stack', 'React', 'Node.js', 'Express', 'Vercel'],
    liveUrl: 'https://bulkmail-frontend-silk.vercel.app/',
    codeUrl: null,
    status: 'Live',
    statusBadge: 'Live Demo Available',
    gradient: 'from-violet-950/40 via-neutral-900 to-neutral-950',
    accentColor: '#8B5CF6',
    iconType: 'mail',
    number: '05',
    features: ['Recipient list management', 'Email template composer', 'Status dashboard']
  },
  {
    id: 'grand-horizon',
    name: 'Grand Horizon',
    category: 'Hotel Booking & Resort Interface',
    description: 'A modern hotel booking and resort website showcasing accommodations, amenities, and room discovery.',
    tags: ['React', 'Hotel UI', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://grandhorizon-indol.vercel.app/',
    codeUrl: null,
    status: 'Live',
    statusBadge: 'Live Demo Available',
    gradient: 'from-amber-950/30 via-neutral-900 to-neutral-950',
    accentColor: '#EAB308',
    iconType: 'building',
    number: '06',
    features: ['Room discovery UI', 'Amenities showcase', 'Responsive resort layout']
  },
  {
    id: 'medical-website',
    name: 'Medical Website',
    category: 'Healthcare & Clinic Portal',
    description: 'A healthcare-themed website focused on clear information presentation and accessible navigation.',
    tags: ['React', 'Healthcare UI', 'Responsive Design', 'Vercel'],
    liveUrl: 'https://medical-web-mu-two.vercel.app/',
    codeUrl: null,
    status: 'Live',
    statusBadge: 'Live Demo Available',
    gradient: 'from-teal-950/40 via-neutral-900 to-neutral-950',
    accentColor: '#14B8A6',
    iconType: 'activity',
    number: '07',
    features: ['Doctor & specialty listings', 'Appointment request section', 'Accessible clinic info']
  }
];
