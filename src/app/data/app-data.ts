
  export const stats = [
    { label: 'Generated', description: 'Emails created', value: '50%' },
    { label: 'Time Saved', description: 'Avg. reduction', value: '50%' },
    { label: 'Users', description: 'Happy customers', value: '5K+' }
  ];

  export const featureSection = {
  heading: "Everything You Need to Communicate Better",
  subheading: "Powerful features designed for professionals who value their time",
  features: [
  {
    icon: "heroSparkles",
    title: "Smart Email Generator",
    description: "AI-powered email creation tailored to your context and tone"
  },
  {
    icon: "heroPencilSquare",
    title: "Improve Existing Emails",
    description: "Polish and refine your drafts with intelligent suggestions"
  },
  {
    icon: "heroAdjustmentsHorizontal",
    title: "Tone & Style Control",
    description: "Choose from professional, casual, friendly, and more"
  },
  {
    icon: "heroDocumentText",
    title: "Ready-Made Templates",
    description: "Pre-built templates for every business scenario"
  },
  {
    icon: "heroClock",
    title: "Email History & Versioning",
    description: "Track all versions and changes to your emails"
  },
  {
    icon: "heroDocumentArrowDown",
    title: "Export to PDF / Copy",
    description: "Seamless integration with your workflow"
  }
]
};

export const plans = [
  {
    name: "Free",
    price: 0,
    period: "/month",
    highlight: false,
    features: [
      "10 email generations per month",
      "3 tone options",
      "Basic templates",
      "Email history (7 days)",
      "Copy & export"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    price: 29,
    period: "/month",
    highlight: true,        // MOST POPULAR
    tag: "MOST POPULAR",
    features: [
      "Unlimited email generations",
      "All tone options",
      "Premium templates",
      "Unlimited history",
      "Priority support",
      "Team collaboration"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Business",
    price: 99,
    period: "/month",
    highlight: false,
    features: [
      "Everything in Pro",
      "Custom templates",
      "API access",
      "Advanced analytics",
      "White-label option",
      "Dedicated support"
    ],
    buttonText: "Get Started"
  }
];


export const analytics = [
  {
    icon:'heroEnvelope',
    value: 127,
    label: "Emails Generated"
  },
  {
    icon:'heroClock',
    value: "24h",
    label: "Time Saved"
  },
  {
    icon:'heroDocument',
    value: 18,
    label: "Templates Used"
  },
  {
    icon:'heroUsers',
    value: 5,
    label: "Team Members"
  }
]

export const quickActions = [
  {
    title: "Generate New Email",
    description: "Create a perfect email from scratch with AI",
    icon: "heroEnvelopeSolid",
    gradient: "linear-gradient(135deg, #7F00FF, #E100FF)"
  },
  {
    title: "Improve Email",
    description: "Polish and enhance your existing drafts",
    icon: "heroPencilSquareSolid",
    gradient: "linear-gradient(135deg, #FF00A8, #FF4D4D)"
  },
  {
    title: "Browse Templates",
    description: "Start with professional templates",
    icon: "heroDocumentTextSolid",
    gradient: "linear-gradient(135deg, #00C97A, #00E8A1)"
  },
  {
    title: "Email History",
    description: "View and manage previous emails",
    icon: "heroClockSolid",
    gradient: "linear-gradient(135deg, #FF6A00, #FF3D00)"
  },
  {
    title: "Team Workspace",
    description: "Collaborate with your team",
    icon: "heroUserGroupSolid",
    gradient: "linear-gradient(135deg, #005CFF, #3A8DFF)"
  }
];


export const recentEmails = [
  {
    title: "Job Application Follow-up",
    tone: "Professional",
    preview: "Thank you for considering my application...",
    time: "2 hours ago"
  },
  {
    title: "Project Proposal",
    tone: "Business",
    preview: "I'm excited to present our proposal for...",
    time: "5 hours ago"
  },
  {
    title: "Client Meeting Request",
    tone: "Formal",
    preview: "I would like to schedule a meeting to discuss...",
    time: "Yesterday"
    
  }
];
