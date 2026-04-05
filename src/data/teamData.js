const sharedSocials = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

export const teamSectionContent = {
  label: "Our avengers",
  title: "Meet with our team member",
  ctaLabel: "Join with us",
  ctaHref: "#contact",
};

export const teamTabs = [
  { key: "design", label: "Design team" },
  { key: "development", label: "Development team" },
];

export const teamData = {
  design: {
    description:
      "What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.",
    featureImage:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp",
    featureAlt: "Creative team standing beneath an overpass",
    members: [
      {
        id: 1,
        name: "Nicolas K. Ellington",
        role: "Founder",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait of Nicolas K. Ellington",
        socials: sharedSocials,
      },
      {
        id: 2,
        name: "Carlos E. Ashcroft",
        role: "CEO",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait of Carlos E. Ashcroft",
        socials: sharedSocials,
      },
      {
        id: 3,
        name: "Leonardo F. Ashton",
        role: "UX Designer",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait of Leonardo F. Ashton",
        socials: sharedSocials,
      },
      {
        id: 4,
        name: "Ricardo P. Winslow",
        role: "UI Designer",
        image:
          "https://images.unsplash.com/photo-1546456073-92b9f0a8d4b8?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait of Ricardo P. Winslow",
        socials: sharedSocials,
      },
    ],
  },
  development: {
    description:
      "Our development crew turns ambitious concepts into polished, performant products with careful engineering, smart systems, and launch-ready execution.",
    featureImage:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6-500x600.webp",
    featureAlt: "Developers gathering outdoors near a staircase",
    members: [
      {
        id: 5,
        name: "Adrian T. Carrington",
        role: "Founder",
        image:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait of Adrian T. Carrington",
        socials: sharedSocials,
      },
      {
        id: 6,
        name: "Marcus J. Remington",
        role: "CEO",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f62?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait of Marcus J. Remington",
        socials: sharedSocials,
      },
      {
        id: 7,
        name: "Victor L. Harrington",
        role: "UX Designer",
        image:
          "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait of Victor L. Harrington",
        socials: sharedSocials,
      },
      {
        id: 8,
        name: "Samuel R. Worthington",
        role: "UI Designer",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Portrait of Samuel R. Worthington",
        socials: sharedSocials,
      },
    ],
  },
};
