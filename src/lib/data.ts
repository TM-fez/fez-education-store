export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  price: number;
  category_id: string;
  is_featured: boolean;
  image_url: string;
};

export const categories: Category[] = [
  { id: "c1", name: "Business", slug: "business" },
  { id: "c2", name: "Technology", slug: "technology" },
  { id: "c3", name: "Management", slug: "management" },
];

export const products: Product[] = [
  {
    id: "p1",
    title: "Advanced Business Writing & Communication",
    slug: "advanced-business-writing",
    description: "Master the art of corporate communication in Botswana's business environment. This comprehensive guide covers everything from drafting executive summaries to managing difficult email threads. Includes practical templates used by top professionals in Gaborone.",
    short_description: "Master corporate communication with practical templates and strategies.",
    price: 450, // Pula
    category_id: "c1",
    is_featured: true,
    image_url: "/images/product_p1.png",
  },
  {
    id: "p2",
    title: "Corporate Project Management Practical Guide",
    slug: "corporate-project-management",
    description: "A pragmatic approach to managing projects within the SADC region. Learn risk mitigation, stakeholder management, and agile integration specifically tailored for local enterprise contexts.",
    short_description: "A pragmatic approach to managing projects within the SADC region.",
    price: 600,
    category_id: "c3",
    is_featured: true,
    image_url: "/images/product_p2.png",
  },
  {
    id: "p3",
    title: "Professional Customer Service Masterclass",
    slug: "customer-service-masterclass",
    description: "Elevate your service standards to world-class levels. This module breaks down the psychology of customer satisfaction, handling local consumer expectations, and building brand loyalty.",
    short_description: "Elevate your service standards to world-class levels.",
    price: 350,
    category_id: "c1",
    is_featured: false,
    image_url: "/images/product_p3.png",
  },
  {
    id: "p4",
    title: "Digital Transformation for African Enterprises",
    slug: "digital-transformation-africa",
    description: "A roadmap for digitizing legacy business models. Understand the technology stack required for modern operations, e-commerce integration, and cloud adoption strategy for SMEs.",
    short_description: "A roadmap for digitizing legacy business models and adopting cloud infrastructure.",
    price: 750,
    category_id: "c2",
    is_featured: true,
    image_url: "/images/product_p4.png",
  },
  {
    id: "p5",
    title: "Financial Literacy & Wealth Building",
    slug: "financial-literacy-wealth",
    description: "Personal and corporate financial management fundamentals. Learn to read balance sheets, understand BURS taxation basics, and make informed investment decisions.",
    short_description: "Personal and corporate financial management fundamentals including taxation basics.",
    price: 500,
    category_id: "c1",
    is_featured: false,
    image_url: "/images/product_p5.png",
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}
