export const NavLinks: { name: string; href: string }[] = [
  { name: "About Us", href: "/about-us" },
  { name: "Our Projects", href: "/our-projects" },
  { name: "Community Impact", href: "/community-impact" },
  { name: "Sustainibility Practices", href: "/sustainibility-practices" },
  { name: "Get Involved", href: "/get-involved" },
];

interface CommitmentStat {
  unit: string;
  data: number;
  description: string;
}

interface ProjectStat {
  id: number;
  name: string;
  description: string;
  clientName: string;
  date: string;
  focus: string;
  href: string;
  imageUrl: string;
}

interface Rating {
  rating: number;
  comment: string;
  userImage: string;
  username: string;
  role: string;
}

interface ArticlesAndInsights {
  id: number;
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  content: string;
  date: string;
}

export const PageData: {
  header: { title: string; description: string };
  main: {
    ourCommitment: {
      title: string;
      description: string;
      stats: CommitmentStat[];
      imageUrl: string;
    };
    ourProjects: {
      title: string;
      description: string;
      projects: ProjectStat[];
    };
    communityBenefits: {
      title: string;
      description: string;
      ratings: Rating[];
    };
    ecoFriendlyDev: {
      title: string;
      description: string;
      bulletList: string[];
      imageUrl: string;
    };
    joinOurMission: {
      title: string;
      description: string;
      moreDescription: string;
    };
    latestInsights: {
      title: string;
      description: string;
      articlesAndInsights: ArticlesAndInsights[];
    };
  };
} = {
  header: {
    title: "Building Sustainable Communities",
    description:
      "At EXPROPRIATION PROPERTY GROUP, we are committed to creating inclusive and sustainable communities. Our projects focus on residential, educational, and commercial developments, ensuring social equity and shared prosperity for all.",
  },
  main: {
    ourCommitment: {
      title: "Our Commitment to Community",
      description:
        "At EXPROPRIATION PROPERTY GROUP, we are dedicated to fostering sustainable and inclusive communities. Our mission is to develop properties that empower individuals and promote social equity, ensuring that every project reflects the needs of the community.",
      stats: [
        {
          unit: "years",
          data: 1,
          description:
            "Since our inception, we have transformed numerous communities through innovative property development.",
        },
        {
          unit: "projects",
          data: 1,
          description:
            "Our diverse portfolio includes residential, educational, and commercial developments that cater to various community needs.",
        },
        {
          unit: "beneficiaries",
          data: 500,
          description:
            "We actively involve community members in the development process, ensuring their voices are heard and valued.",
        },
        {
          unit: "values",
          data: 5,
          description:
            "Our core values of sustainability, inclusivity, collaboration, and social equity guide every project we undertake.",
        },
      ],
      imageUrl: "/our-commitment.webp",
    },
    ourProjects: {
      title: "Showcasing Our Projects",
      description:
        "Explore our diverse range of projects that enhance community living and promote sustainability.",
      projects: [
        {
          id: 1,
          name: "Green Haven",
          description:
            "A state-of-the-art residential complex designed with sustainability in mind, featuring green spaces and energy-efficient buildings.",
          clientName: "City of Springfield",
          date: "May 2022",
          focus: "Sustainability",
          href: "/our-projects/1",
          imageUrl: "/our-projects-1.webp",
        },
        {
          id: 2,
          name: "Springfield Learning Center",
          description:
            "An educational facility aimed at providing accessible learning opportunities for all ages, equipped with modern classrooms and community resources.",
          clientName: "N/A",
          date: " January 2023",
          focus: "Education",
          href: "/our-projects/2",
          imageUrl: "/our-projects-2.webp",
        },
        {
          id: 3,
          name: "Market Square Mall",
          description:
            "A shopping mall that features local businesses and promotes community engagement through various events and activities.",
          clientName: "Local Business Association",
          date: "August 2023",
          focus: "Community Engagement",
          href: "/our-projects/3",
          imageUrl: "/our-projects-3.webp",
        },
      ],
    },
    communityBenefits: {
      title: "Community Benefits",
      description:
        "Our projects have transformed lives, fostering unity and growth in communities.",
      ratings: [
        {
          rating: 5,
          comment:
            "The development of the Springfield Community Learning Center has provided invaluable resources for our residents, enhancing educational opportunities for all ages.",
          userImage: "/person-1.webp",
          username: "Alice Johnson",
          role: "Community Organizer",
        },
        {
          rating: 5,
          comment:
            "Market Square Shopping Mall has revitalized our neighborhood, bringing together local businesses and creating a vibrant community hub.",
          userImage: "/person-2.webp",
          username: "Michael Smith",
          role: "Local Business Owner",
        },
        {
          rating: 5,
          comment:
            "Living in the Green Haven Residential Complex has improved my family's quality of life, thanks to its sustainable design and green spaces.",
          userImage: "/person-3.webp",
          username: "Sarah Lee",
          role: "Resident",
        },
        {
          rating: 5,
          comment:
            "The educational initiatives supported by EXPROPRIATION PROPERTY GROUP have made a significant impact on our youth, preparing them for a brighter future.",
          userImage: "/person-4.webp",
          username: "David Brown",
          role: "Educator",
        },
        {
          rating: 5,
          comment:
            "The inclusive approach of EXPROPRIATION PROPERTY GROUP ensures that every voice in the community is heard and valued.",
          userImage: "/person-5.webp",
          username: "Emily Davis",
          role: "Social Worker",
        },
        {
          rating: 5,
          comment:
            "Their commitment to sustainable development is evident in every project, setting a standard for future developments in our city.",
          userImage: "/person-6.webp",
          username: "James Wilson",
          role: "City Planner",
        },
      ],
    },
    ecoFriendlyDev: {
      title: "Our Commitment to Eco-Friendly Development",
      description:
        "At EXPROPRIATION PROPERTY GROUP, we integrate sustainable practices into every phase of our projects. From using renewable materials to implementing energy-efficient designs, our goal is to minimize environmental impact while fostering inclusive communities.",
      bulletList: [
        "Utilization of renewable energy sources",
        "Incorporation of green building materials",
        "Implementation of water conservation techniques",
      ],
      imageUrl: "/our-commitment.webp",
    },
    joinOurMission: {
      title: "Join Our Mission",
      description:
        "Become a part of our community development efforts by volunteering or partnering with us. Your support can make a significant difference.",
      moreDescription:
        "At EXPROPRIATION PROPERTY GROUP, we believe in the power of community. By getting involved, you can help us create sustainable and inclusive environments that benefit everyone. Whether through volunteering, partnerships, or donations, your contribution is invaluable in shaping the future of our neighborhoods.",
    },
    latestInsights: {
      title: "Latest Insights",
      description: "Stay updated with our recent articles.",
      articlesAndInsights: [
        {
          id: 1,
          imageUrl: "/insight-1.webp",
          tag: "Sustainibility Practices",
          title: "Building Sustainable Communities: Our Approach",
          description:
            "Discover how EXPROPRIATION PROPERTY GROUP is redefining property development through sustainable practices.",
          href: "/insights/1",
          content:
            "At EXPROPRIATION PROPERTY GROUP, we believe that sustainable development is not just a trend but a necessity for the future of our communities. Our approach integrates eco-friendly materials and energy-efficient designs into every project we undertake. By prioritizing sustainability, we aim to minimize our environmental footprint while maximizing the quality of life for residents. This commitment is reflected in our residential properties, educational facilities, and shopping malls, all designed with the communitys needs in mind. We engage with local stakeholders throughout the planning and development phases to ensure that our projects align with the aspirations of the community. This collaborative approach fosters a sense of ownership among residents, empowering them to take an active role in shaping their environment. Our projects are not just buildings; they are spaces that encourage social interaction, economic growth, and environmental stewardship. By incorporating community feedback, we create developments that truly reflect the values and needs of the people we serve. As we continue to grow, our mission remains clear: to create inclusive and sustainable communities that promote social equity and shared prosperity. We invite you to join us on this journey, whether through volunteering, partnerships, or simply spreading the word about our initiatives. Together, we can build a brighter future for all, one project at a time.",
          date: "December 16, 2024",
        },
        {
          id: 2,
          imageUrl: "/insight-2.webp",
          tag: "Community Impact",
          title: "Empowering Communities Through Collaboration",
          description:
            "Learn how collaboration is at the heart of our property development projects.",
          href: "/insights/2",
          content:
            "Collaboration is a cornerstone of our philosophy at EXPROPRIATION PROPERTY GROUP. We believe that the best outcomes arise when diverse voices come together to share ideas and resources. Our projects are designed not only to meet the physical needs of the community but also to foster social connections and empower individuals. By involving beneficiaries in every stage of development, we create a sense of belonging and ownership that is vital for long-term success. Our team works closely with local organizations, government agencies, and community members to identify the unique challenges and opportunities within each neighborhood. This collaborative approach allows us to tailor our projects to the specific needs of the community, ensuring that our developments are both relevant and impactful. We also provide training and employment opportunities for local residents, equipping them with the skills needed to thrive in the construction and property management sectors. Through these efforts, we aim to create a ripple effect of positive change that extends beyond our projects. By empowering individuals and fostering collaboration, we contribute to the development of resilient communities that can adapt to future challenges. Join us in our mission to build a more inclusive and equitable society, where everyone has the opportunity to succeed.",
          date: "December 16, 2024",
        },
        {
          id: 3,
          imageUrl: "/insight-3.webp",
          tag: "Community Impact",
          title: "The Importance of Social Equity in Development",
          description:
            "Explore how social equity shapes our property development initiatives.",
          href: "/insights/3",
          content:
            "At EXPROPRIATION PROPERTY GROUP, we recognize that social equity is essential for creating thriving communities. Our mission is rooted in the belief that everyone deserves access to quality housing, education, and economic opportunities. By prioritizing social equity in our development projects, we aim to address systemic inequalities and create environments where all individuals can flourish. This commitment drives our decision-making processes and shapes the way we engage with the communities we serve. We actively seek to include marginalized voices in our planning and development efforts, ensuring that their needs and perspectives are heard and valued. This inclusive approach not only enhances the quality of our projects but also fosters a sense of community ownership and pride. By creating spaces that reflect the diversity of the population, we contribute to a more equitable society where everyone has the chance to thrive. As we move forward, we remain dedicated to advancing social equity through our initiatives. We invite you to learn more about our projects and how you can get involved in promoting social justice within your community. Together, we can create a future where everyone has the opportunity to succeed, regardless of their background.",
          date: "December 16, 2024",
        },
        {
          id: 4,
          imageUrl: "/insight-4.webp",
          tag: "Sustainibility Practices",
          title: "Innovative Approaches to Eco-Friendly Development",
          description:
            "Discover the innovative strategies we employ to promote eco-friendly property development.",
          href: "/insights/4",
          content:
            "Innovation is at the heart of our approach to eco-friendly property development at EXPROPRIATION PROPERTY GROUP. We continuously explore new technologies and methodologies that enhance the sustainability of our projects. From utilizing renewable energy sources to implementing green building practices, our goal is to create developments that are not only environmentally responsible but also economically viable. By embracing innovation, we can lead the way in transforming the property development landscape. Our team collaborates with experts in sustainable design and construction to integrate cutting-edge solutions into our projects. This includes the use of recycled materials, energy-efficient systems, and water conservation techniques. By prioritizing these practices, we not only reduce our ecological footprint but also create healthier living environments for residents. Our commitment to innovation ensures that our developments are future-proof and resilient in the face of climate change. As we continue to push the boundaries of eco-friendly development, we invite you to join us in our mission. Whether through supporting our initiatives or adopting sustainable practices in your own life, every action counts. Together, we can create a more sustainable future for our communities and the planet.",
          date: "December 16, 2024",
        },
      ],
    },
  },
};

export const AboutPageData: {
  ourCommitment: {
    title: string;
    description: string;
  };
  featureList: { title: string; description: string }[];
  team: {
    title: string;
    description: string;
    teamMember: {
      imageUrl: string;
      fullname: string;
      role: string;
      bio: string;
      linkedIn: string;
      twitter: string;
    }[];
  };
  joinMission: {
    title: string;
    description: string;
  };
} = {
  ourCommitment: {
    title: "Our Commitment to Community",
    description:
      "At EXPROPRIATION PROPERTY GROUP, we are dedicated to fostering sustainable and inclusive communities through our development projects.",
  },
  featureList: [
    {
      title: "Sustainability Focus",
      description:
        "We prioritize eco-friendly practices in all our projects, ensuring that our developments not only meet current needs but also protect the environment for future generations.",
    },
    {
      title: "Inclusive Spaces",
      description:
        "Our goal is to create spaces that are accessible and welcoming to everyone, reflecting the diverse needs of the communities we serve.",
    },
    {
      title: "Collaborative Approach",
      description:
        "We believe in working closely with community members and stakeholders, ensuring that our projects are tailored to meet their specific needs and aspirations.",
    },
  ],
  team: {
    title: "Our Dedicated Team",
    description: "Meet the passionate individuals driving our mission forward.",
    teamMember: [
      {
        imageUrl: "/person-7.webp",
        fullname: "Alice Johnson",
        role: "Executive Director",
        bio: "Alice has over 15 years of experience in property development and is passionate about creating sustainable communities.",
        linkedIn: "",
        twitter: "",
      },
      {
        imageUrl: "/person-8.webp",
        fullname: "Mark Thompson",
        role: "Project Manager",
        bio: "Mark specializes in managing large-scale development projects and ensuring they align with community needs.",
        linkedIn: "",
        twitter: "",
      },
      {
        imageUrl: "/person-9.webp",
        fullname: "Sarah Lee",
        role: "Community Engagement Coordinator",
        bio: "Sarah focuses on building relationships with community members and facilitating their involvement in our projects.",
        linkedIn: "",
        twitter: "",
      },
      {
        imageUrl: "/person-10.webp",
        fullname: "David Kim",
        role: "Sustainability Consultant",
        bio: "David brings expertise in eco-friendly practices and ensures our projects are sustainable.",
        linkedIn: "",
        twitter: "",
      },
      {
        imageUrl: "/person-11.webp",
        fullname: "Emily Carter",
        role: "Finance Officer",
        bio: "Emily manages the financial aspects of our projects, ensuring transparency and accountability.",
        linkedIn: "",
        twitter: "",
      },
      {
        imageUrl: "/person-12.webp",
        fullname: "James Rodriguez",
        role: "Urban Planner",
        bio: "James designs community spaces that foster inclusivity and accessibility.",
        linkedIn: "",
        twitter: "",
      },
      {
        imageUrl: "/person-13.webp",
        fullname: "Linda Patel",
        role: "Marketing Specialist",
        bio: "Linda promotes our projects and engages the community through effective communication strategies.",
        linkedIn: "",
        twitter: "",
      },
      {
        imageUrl: "/person-14.webp",
        fullname: "Robert Green",
        role: "Construction Supervisor",
        bio: "Robert oversees the construction process, ensuring quality and safety standards are met.",
        linkedIn: "",
        twitter: "",
      },
    ],
  },
  joinMission: {
    title: "Join Our Mission",
    description:
      "Discover how you can contribute to building sustainable communities.",
  },
};

export const OurProjectsPageData: {
  title: string;
  description: string;
  ourProjects: {
    title: string;
    subTitle: string;
    description: string;
    projects: ProjectStat[];
  };
} = {
  title: "Our Projects",
  description:
    "Explore our diverse projects, from residential complexes to educational facilities, all designed to foster sustainable and inclusive communities.",
  ourProjects: {
    title: "OUR PROJECTS",
    subTitle: "Showcasing Our Developments",
    description:
      "Explore our diverse range of projects that enhance community living and promote sustainability.",
    projects: [
      {
        id: 1,
        name: "Green Haven",
        description:
          "A state-of-the-art residential complex designed with sustainability in mind, featuring green spaces and energy-efficient buildings.",
        clientName: "City of Springfield",
        date: "May 2022",
        focus: "Sustainability",
        href: "/our-projects/1",
        imageUrl: "/our-projects-1.webp",
      },
      {
        id: 2,
        name: "Springfield Learning Center",
        description:
          "An educational facility aimed at providing accessible learning opportunities for all ages, equipped with modern classrooms and community resources.",
        clientName: "N/A",
        date: " January 2023",
        focus: "Education",
        href: "/our-projects/2",
        imageUrl: "/our-projects-2.webp",
      },
      {
        id: 3,
        name: "Market Square Mall",
        description:
          "A shopping mall that features local businesses and promotes community engagement through various events and activities.",
        clientName: "Local Business Association",
        date: "August 2023",
        focus: "Community Engagement",
        href: "/our-projects/3",
        imageUrl: "/our-projects-3.webp",
      },
    ],
  },
};

export const OurProjectsLinkData: {
  id: number;
  imageUrl: string;
  projectTitle: string;
  description: string;
  tags: string[];
  grid: { name: string; description: string }[];
  heading: string;
  propertyDescription: string;
  client: string;
  date: string;
  role: string;
  projectType: string;
}[] = [
  {
    id: 1,
    imageUrl: "/our-projects-1.webp",
    projectTitle: "Welcome to Green Haven",
    description:
      "Discover the Green Haven Residential Complex, a pioneering project that embodies our commitment to sustainability and community well-being.",
    tags: [
      "Eco-friendly design",
      "Community-focused amenities",
      "Energy-efficient buildings",
    ],
    grid: [
      { name: "Features", description: "Sustainable" },
      { name: "Amenities", description: "Inclusive" },
      { name: "Location", description: "Springfield" },
      { name: "Completion", description: "May 2022" },
    ],
    heading: "Lorem Ipsum Heading",
    propertyDescription:
      "Green Haven Residential Complex is a pioneering project that embodies our commitment to sustainable living. This state-of-the-art residential complex not only provides modern housing but also integrates green spaces and energy-efficient designs, promoting a healthier lifestyle for its residents. Our approach ensures that the community thrives in an environment that respects nature and fosters social interaction.",
    client: "City of Springfield",
    date: "May 2022",
    role: "Lead Developer",
    projectType: "Residential Complex",
  },
  {
    id: 2,
    imageUrl: "/our-projects-2.webp",
    projectTitle: "Empowering Education",
    description:
      "At the Springfield Community Learning Center, we believe in accessible learning for everyone, fostering a community of lifelong learners through innovative educational programs.",
    tags: ["Inclusive Learning", "Community Engagement", "Modern Facilities"],
    grid: [
      { name: "Mission", description: "Empower" },
      { name: "Vision", description: "Inspire" },
      { name: "Values", description: "Equity" },
      { name: "Goals", description: "Sustainability" },
    ],
    heading: "Lorem Ipsum Heading",
    propertyDescription:
      "Springfield Community Learning Center is a transformative educational facility designed to provide accessible learning opportunities for individuals of all ages. This project emphasizes community engagement and aims to foster a love for learning through modern classrooms and various community resources. Our commitment to inclusivity ensures that everyone can benefit from the educational programs offered here.",
    client: "City of Springfield",
    date: "January 2023",
    role: "Project Manager",
    projectType: "Residential Complex",
  },
  {
    id: 3,
    imageUrl: "/our-projects-3.webp",
    projectTitle: "Welcome to Market Square",
    description:
      "Discover a vibrant shopping experience that brings together local businesses and fosters community spirit through engaging events and activities.",
    tags: ["Local Business Support", "Community Events", "Inclusive Spaces"],
    grid: [
      { name: "Engagement", description: "Active" },
      { name: "Local", description: "Vendors" },
      { name: "Events", description: "Activities" },
      { name: "Community", description: "Connection" },
    ],
    heading: "Lorem Ipsum Heading",
    propertyDescription:
      "Market Square Shopping Mall is designed to be a vibrant hub for the community, featuring a variety of local businesses and spaces for community events. Our goal is to foster a sense of belonging and support local entrepreneurs, ensuring that the mall serves as a gathering place for all residents.",
    client: "Local Business Association",
    date: "August 2023",
    role: "Project Developer",
    projectType: "Residential Complex",
  },
];

export const SustainibilityPage: {
  backgroundImage: string;
  facts: { name: string; description: string }[];
  practicesTitle: string;
  practiceDescription: string;
  otherFacts: { title: string; description: string }[];
} = {
  backgroundImage: "/sustainibility-practices.jpg",
  facts: [
    {
      name: "Our Commitment to Sustainability",
      description:
        "At EXPROPRIATION PROPERTY GROUP, we are dedicated to creating sustainable and inclusive communities. Our eco-friendly practices are at the core of our development projects, ensuring that we not only meet the needs of the community but also protect our environment for future generations.",
    },
    {
      name: "Discover Our Eco-Friendly Initiatives",
      description:
        "Learn more about how we integrate sustainability into every aspect of our projects, from planning to construction.",
    },
  ],
  practicesTitle: "Innovative Eco-Friendly Practices",
  practiceDescription:
    "At EXPROPRIATION PROPERTY GROUP, we integrate sustainable practices into every phase of our projects. From using renewable materials to implementing energy-efficient designs, our methods are designed to minimize environmental impact and promote a greener future.",
  otherFacts: [
    {
      title: "Renewable Materials",
      description:
        "We prioritize the use of sustainable materials to reduce carbon footprint.",
    },
    {
      title: "Energy Efficiency",
      description:
        "Our designs focus on maximizing energy efficiency in all buildings.",
    },
  ],
};

export const GetInvolvedPage: {
  title: string;
  description: string;
  joinOurTitle: string;
  joinOurDescription: string;
  statements: { title: string; description: string }[];
} = {
  title: "Join Our Community Efforts",
  description:
    "At EXPROPRIATION PROPERTY GROUP, we believe in the power of collaboration and community involvement. Join us in creating sustainable and inclusive spaces that empower individuals and promote shared prosperity.",
  joinOurTitle: "Join Our Volunteer Team for Community Growth",
  joinOurDescription:
    "At EXPROPRIATION PROPERTY GROUP, volunteers play a crucial role in shaping sustainable communities. By joining our team, you can contribute to projects that promote social equity and shared prosperity. We offer diverse roles that leverage your skills and passion.",
  statements: [
    {
      title: "Project Support",
      description:
        "Assist in planning and executing community projects, ensuring they meet sustainability goals.",
    },
    {
      title: "Community Outreach",
      description:
        "Engage with local residents to gather input and foster collaboration in our initiatives",
    },
  ],
};
