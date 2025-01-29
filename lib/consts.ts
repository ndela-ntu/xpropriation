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
        },
        {
          id: 2,
          imageUrl: "/insight-2.webp",
          tag: "Community Impact",
          title: "Empowering Communities Through Collaboration",
          description:
            "Learn how collaboration is at the heart of our property development projects.",
          href: "/insights/2",
        },
        {
          id: 3,
          imageUrl: "/insight-3.webp",
          tag: "Community Impact",
          title: "The Importance of Social Equity in Development",
          description:
            "Explore how social equity shapes our property development initiatives.",
          href: "/insights/3",
        },
        {
          id: 4,
          imageUrl: "/insight-4.webp",
          tag: "Sustainibility Practices",
          title: "Innovative Approaches to Eco-Friendly Development",
          description:
            "Discover the innovative strategies we employ to promote eco-friendly property development.",
          href: "/insights/4",
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
