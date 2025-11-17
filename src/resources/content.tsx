import type { About, Blog, Gallery, Home, Newsletter, Person, Pricing, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "F-STUDIO",
  lastName: "",
  name: "F-STUDIO",
  role: "Ekonomický systém pro správu podnikání",
  avatar: "/images/avatar.jpg",
  email: "info@f-studio.cz",
  location: "Europe/Prague", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Čeština", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Přihlaste se k odběru novinek F-STUDIO</>,
  description: <>Získejte nejnovější informace o funkcích a aktualizacích</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/decrondawe21-boop/corporate-app",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Domů",
  title: `F-STUDIO - Ekonomický systém pro správu podnikání`,
  description: `Komplexní a moderní řešení pro správu malých a středních podniků`,
  headline: <>Profesionální správa vašeho podnikání</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">F-STUDIO</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Měsíc zdarma
        </Text>
      </Row>
    ),
    href: "/pricing",
  },
  subline: (
    <>
      F-STUDIO je komplexní ekonomický systém pro moderní správu malých a středních podniků.
      <br /> Vytvořeno pro maximální efektivitu a jednoduchost použití.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "O nás",
  title: `O F-STUDIO`,
  description: `Komplexní ekonomický systém pro moderní správu podnikání`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "O F-STUDIO",
    description: (
      <>
      F-STUDIO je moderní ekonomický systém navržený pro komplexní správu malých a středních podniků.
      Nabízíme profesionální nástroje pro účetnictví, fakturaci, skladové hospodářství, CRM a další
      funkce nezbytné pro efektivní řízení vašeho podnikání. Náš systém je navržen s důrazem na
      jednoduchost použití a maximální produktivitu.
      </>
    ),
  },
  work: {
    display: true,
    title: "Klíčové funkce",
    experiences: [
      {
        company: "Účetnictví a Finance",
        timeframe: "",
        role: "Komplexní správa financí",
        achievements: [
          "Automatizované účetní operace",
          "Přehledné finanční reporty",
          "Integrace s bankovními účty",
        ],
        images: [],
      },
      {
        company: "Fakturace a Objednávky",
        timeframe: "",
        role: "Profesionální správa dokumentů",
        achievements: [
          "Vytváření faktur a nabídek",
          "Automatické připomínky plateb",
          "Export do různých formátů",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Technologie",
    skills: [
      {
        title: "Moderní technologie",
        description: (
          <>Postaveno na nejnovějších technologiích pro maximální výkon a bezpečnost.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Novinky a články",
  description: `Nejnovější novinky z F-STUDIO`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Reference",
  title: `Reference – F-STUDIO`,
  description: `Projekty a reference F-STUDIO`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const pricing: Pricing = {
  path: "/pricing",
  label: "Ceník",
  title: "Ceník F-STUDIO",
  description: "Vyberte si předplatné F-STUDIO pro váš podnik",
  image: "/images/og/pricing.jpg",
  headline: <>Profesionální řešení pro váš podnik</>,
  subline: <>Vyberte si balíček, který nejlépe vyhovuje potřebám vašeho podnikání. Měsíc na vyzkoušení zdarma.</>,
  tiers: [
    {
      name: "Mikro",
      price: "350 Kč",
      period: "za uživatele / měsíc",
      description: "Ideální pro malé firmy a začínající podnikatele",
      features: [
        "Základní účetnictví",
        "Fakturace a nabídky",
        "Správa kontaktů",
        "Základní reporting",
        "Email podpora",
      ],
      cta: "Začít zdarma",
      ctaLink: "#contact",
    },
    {
      name: "Střední",
      price: "950 Kč",
      period: "za uživatele / měsíc",
      description: "Pro rostoucí firmy s pokročilými potřebami",
      features: [
        "Vše z balíčku Mikro",
        "Pokročilé účetnictví",
        "Skladové hospodářství",
        "CRM systém",
        "Detailní analytika",
        "Prioritní podpora",
        "API integrace",
      ],
      highlighted: true,
      cta: "Začít zdarma",
      ctaLink: "#contact",
    },
    {
      name: "Business",
      price: "Na míru",
      period: "sestaveno podle potřeb",
      description: "Řešení přizpůsobené přesně vašim požadavkům",
      features: [
        "Vše z balíčku Střední",
        "Vlastní funkce na míru",
        "Dedikovaný account manager",
        "Školení zaměstnanců",
        "24/7 Premium podpora",
        "SLA garance",
        "On-premise možnost",
      ],
      cta: "Kontaktovat nás",
      ctaLink: "#contact",
    },
    {
      name: "PREMIUM",
      price: "5 000 Kč",
      period: "měsíc (4 uživatelé v ceně)",
      description: "Kompletní balíček pro malé týmy",
      features: [
        "Vše z balíčku Střední",
        "4 uživatelé v základní ceně",
        "Další uživatelé: 950 Kč/měsíc",
        "Premium podpora",
        "Měsíční konzultace",
        "Prioritní vývoj funkcí",
      ],
      cta: "Začít zdarma",
      ctaLink: "#contact",
    },
  ],
  trial: {
    display: true,
    description: "Všechny balíčky zahrnují měsíc zkušební doby zdarma. Bez závazků, kdykoliv lze zrušit.",
  },
};

export { person, social, newsletter, home, about, blog, work, gallery, pricing };
