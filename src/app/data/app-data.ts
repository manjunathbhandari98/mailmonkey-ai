
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
    gradient: "linear-gradient(135deg, #7F00FF, #E100FF)",
    link:'/generate-email',
  },
  {
    title: "Improve Email",
    description: "Polish and enhance your existing drafts",
    icon: "heroPencilSquareSolid",
    gradient: "linear-gradient(135deg, #FF00A8, #FF4D4D)",
    link:'/improve-email'
  },
  {
    title: "Browse Templates",
    description: "Start with professional templates",
    icon: "heroDocumentTextSolid",
    gradient: "linear-gradient(135deg, #00C97A, #00E8A1)",
    link:'/templates'
  },
  {
    title: "Email History",
    description: "View and manage previous emails",
    icon: "heroClockSolid",
    gradient: "linear-gradient(135deg, #FF6A00, #FF3D00)",
    link:'/history'
  },
  // {
  //   title: "Team Workspace",
  //   description: "Collaborate with your team",
  //   icon: "heroUserGroupSolid",
  //   gradient: "linear-gradient(135deg, #005CFF, #3A8DFF)",
  //   link:'team-workspace'
  // }
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


export const templateCategories = [
  {
    title: "Job Application",
    count: 12,
    icon: "heroBriefcase"
  },
  {
    title: "Office Communication",
    count: 18,
    icon: "heroBuildingOffice"
  },
  {
    title: "Marketing",
    count: 15,
    icon: "heroMegaphone"
  },
  {
    title: "Sales",
    count: 10,
    icon: "heroChartBar"
  },
  {
    title: "Cold Outreach",
    count: 8,
    icon: "heroEnvelope"
  },
  {
    title: "HR Templates",
    count: 14,
    icon: "heroUserGroup"
  },
  {
    title: "Customer Support",
    count: 20,
    icon: "heroChatBubbleLeftRight"
  }
];

export const emailTemplates = [
  // ------------------------------
  // JOB APPLICATION
  // ------------------------------
  {
    id: 1,
    category: "Job Application",
    title: "Job Application – Software Developer",
    preview: "I’m excited to apply for the Software Developer position...",
    subject: "Application for Software Developer Position",
    tone: "Professional",
    likes: 128,
    content: `Dear Hiring Manager,

I hope you're doing well. I am writing to express my interest in the Software Developer position at your company. With hands-on experience in building scalable applications and strong problem-solving skills, I am confident I can contribute effectively to your team.

I have attached my resume for your review and would appreciate the opportunity to discuss how my background aligns with your requirements.

Thank you for your time.
Best regards,
John Doe`
  },
  {
    id: 2,
    category: "Job Application",
    title: "Cold Job Application",
    preview: "I’m reaching out regarding potential roles at your company...",
    subject: "Inquiry About Job Opportunities",
    tone: "Casual",
    likes: 96,
    content: `Hello,

I hope you're doing well. I wanted to reach out to express my interest in potential openings at your company. I greatly admire your work culture and the impactful products you build.

If there are any roles aligned with my skill set, I would truly appreciate the chance to connect.

Warm regards,
John Doe`
  },

  // ------------------------------
  // OFFICE COMMUNICATION
  // ------------------------------
  {
    id: 3,
    category: "Office Communication",
    title: "Leave Request Email",
    preview: "I would like to request a day of leave on...",
    subject: "Leave Request for [Date]",
    tone: "Formal",
    likes: 142,
    content: `Hi [Manager Name],

I hope you're doing well. I would like to request leave on [Date] due to personal reasons. I will ensure all pending tasks are completed or handed over prior to my absence.

Please let me know if any additional information is required.

Regards,
John Doe`
  },
  {
    id: 4,
    category: "Office Communication",
    title: "Project Update Email",
    preview: "Here’s the weekly update for the project...",
    subject: "Weekly Project Update",
    tone: "Professional",
    likes: 109,
    content: `Hello Team,

Here is the weekly update for the project:

• Completed module A  
• In progress: module B  
• Pending: Testing phase  

Please let me know if any adjustments are required.

Regards,
John Doe`
  },

  // ------------------------------
  // MARKETING
  // ------------------------------
  {
    id: 5,
    category: "Marketing",
    title: "Product Announcement",
    preview: "We're excited to announce our new product...",
    subject: "Introducing Our New Product!",
    tone: "Enthusiastic",
    likes: 214,
    content: `Hello,

We’re excited to announce the launch of our newest product designed to help you simplify your workflow. It comes with powerful new features and improved performance.

Stay tuned for upcoming offers and updates.

Best,
Marketing Team`
  },
  {
    id: 6,
    category: "Marketing",
    title: "Monthly Newsletter",
    preview: "Here’s your monthly update from our team...",
    subject: "Your Monthly Newsletter",
    tone: "Friendly",
    likes: 173,
    content: `Hello,

Here’s your monthly update from our team:

• New features released  
• Exclusive blog insights  
• Upcoming events  

Thank you for being a valued reader.

Warm regards,
The Team`
  },

  // ------------------------------
  // SALES
  // ------------------------------
  {
    id: 7,
    category: "Sales",
    title: "Product Demo Request",
    preview: "We’d love to give you a personalized demo...",
    subject: "Schedule Your Product Demo",
    tone: "Professional",
    likes: 189,
    content: `Hi [Client Name],

Thank you for showing interest in our product. We’d be happy to arrange a personalized demo at your convenience.

Please let me know your preferred date and time.

Best,
Sales Team`
  },
  {
    id: 8,
    category: "Sales",
    title: "Exclusive Discount Offer",
    preview: "We’re excited to offer you an exclusive discount...",
    subject: "Exclusive Discount Just for You!",
    tone: "Persuasive",
    likes: 241,
    content: `Hi,

We’re excited to offer you an exclusive limited-time discount on our product. This is a great chance to get premium features at a reduced price.

Let us know if you'd like to upgrade.

Regards,
Sales Team`
  },

  // ------------------------------
  // COLD OUTREACH
  // ------------------------------
  {
    id: 9,
    category: "Cold Outreach",
    title: "Potential Client Outreach",
    preview: "I came across your business and wanted to connect...",
    subject: "Quick Question About Your Business",
    tone: "Professional",
    likes: 157,
    content: `Hi [Name],

I came across your work and was impressed with what you're building. I believe our solution can help streamline your process and improve efficiency.

Would you be open to a quick call sometime this week?

Thanks,
John Doe`
  },
  {
    id: 10,
    category: "Cold Outreach",
    title: "Networking Email",
    preview: "I’d love to connect and learn more about your work...",
    subject: "Would Love to Connect!",
    tone: "Friendly",
    likes: 111,
    content: `Hello [Name],

I hope you're doing well. I’ve been following your work in [industry], and I find it very inspiring. I would love to connect and learn from your experience.

Looking forward to connecting.

Regards,
John Doe`
  },

  // ------------------------------
  // HR TEMPLATES
  // ------------------------------
  {
    id: 11,
    category: "HR Templates",
    title: "Interview Invitation",
    preview: "We’d like to invite you for an interview...",
    subject: "Interview Invitation – [Role Name]",
    tone: "Formal",
    likes: 202,
    content: `Hi [Candidate Name],

We’re pleased to inform you that you have been shortlisted for the [Role Name] position. We’d like to schedule an interview with you.

Please share your availability for this week.

Best,
HR Team`
  },
  {
    id: 12,
    category: "HR Templates",
    title: "Offer Letter Email",
    preview: "We’re excited to offer you the position of...",
    subject: "Official Offer – [Role Name]",
    tone: "Formal",
    likes: 186,
    content: `Hi [Candidate Name],

We are delighted to offer you the position of [Role Name] at our organization. Attached is your official offer letter containing all details.

We look forward to having you on our team.

Regards,
HR Team`
  },

  // ------------------------------
  // CUSTOMER SUPPORT
  // ------------------------------
  {
    id: 13,
    category: "Customer Support",
    title: "Support Acknowledgment",
    preview: "We’ve received your support request...",
    subject: "We’ve Received Your Support Request",
    tone: "Polite",
    likes: 168,
    content: `Hello,

We’ve received your support request and our team is looking into it. You can expect a response within 24 hours.

Thank you for your patience.

Best,
Support Team`
  },
  {
    id: 14,
    category: "Customer Support",
    title: "Issue Resolved Email",
    preview: "Your issue has now been resolved...",
    subject: "Your Issue Has Been Resolved",
    tone: "Professional",
    likes: 194,
    content: `Hello,

Good news! Your reported issue has been successfully resolved. Please check and confirm that everything is working as expected.

If you need further help, feel free to reach out.

Regards,
Support Team`
  }
];


export const emailHistory = [
  {
    id: "HIST-001",
    title: "Job Application Follow-up",
    type: "Job Application",
    tone: "Professional",
    preview: "Thank you for considering my application...",
    content: `Dear Hiring Manager,

I hope you're doing well. I wanted to follow up regarding my application for the Software Developer role.

I remain very enthusiastic about the opportunity and would be happy to provide any additional details if needed.

Thank you for your time.

Best regards,
John Doe`,
    createdAt: "2025-02-21T10:15:00Z",
    updatedAt: "2025-02-21T10:20:00Z",
    status: "saved",
    wordCount: 83,
    charCount: 451,
    version: 1,
    tags: ["follow-up", "job"],
    actions: ["copy", "download", "view", "regenerate"]
  },

  {
    id: "HIST-002",
    title: "Client Meeting Request",
    type: "Business Communication",
    tone: "Formal",
    preview: "I would like to schedule a meeting to discuss...",
    content: `Hello,

I would like to schedule a meeting to discuss the ongoing requirements and next steps of the project.

Please let me know your availability this week.

Regards,
John Doe`,
    createdAt: "2025-02-20T15:42:00Z",
    updatedAt: "2025-02-20T15:55:00Z",
    status: "sent",
    wordCount: 55,
    charCount: 312,
    version: 2,
    tags: ["client", "meeting"],
    actions: ["copy", "download", "view"]
  },

  {
    id: "HIST-003",
    title: "Project Proposal Summary",
    type: "Proposal",
    tone: "Business",
    preview: "I'm excited to present our proposal for...",
    content: `Dear Team,

I'm excited to present our proposal for the Q2 upgrade initiative.  
This proposal outlines the plan, delivery timeline, and budget estimation.

Looking forward to your feedback.

Best,
John Doe`,
    createdAt: "2025-02-19T08:30:00Z",
    updatedAt: "2025-02-19T08:43:00Z",
    status: "saved",
    wordCount: 62,
    charCount: 345,
    version: 1,
    tags: ["proposal", "project"],
    actions: ["copy", "download", "view", "regenerate"]
  },

  {
    id: "HIST-004",
    title: "Customer Support Response",
    type: "Support",
    tone: "Polite",
    preview: "Thank you for contacting our support team...",
    content: `Hello,

Thank you for contacting our support team.  
We have received your query and our technical team is investigating the issue.

We will update you within the next 24 hours.

Kind regards,
Support Team`,
    createdAt: "2025-02-18T11:12:00Z",
    updatedAt: "2025-02-18T11:15:00Z",
    status: "sent",
    wordCount: 64,
    charCount: 320,
    version: 1,
    tags: ["support", "customer"],
    actions: ["copy", "view"]
  },

  {
    id: "HIST-005",
    title: "Marketing Outreach Email",
    type: "Marketing",
    tone: "Friendly",
    preview: "Hope you're doing well! We're excited to share...",
    content: `Hi there,

Hope you’re doing well! We’re excited to share a new opportunity that we believe you'll find valuable.

Let us know if you'd like more details.

Cheers,
Marketing Team`,
    createdAt: "2025-02-17T09:00:00Z",
    updatedAt: "2025-02-17T09:02:00Z",
    status: "draft",
    wordCount: 55,
    charCount: 301,
    version: 3,
    tags: ["marketing", "outreach"],
    actions: ["copy", "download", "view", "regenerate"]
  }
];
