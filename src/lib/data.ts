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
  subtitle: string;
  target_audience: string;
  key_learning_outcomes: string[];
};

export const categories: Category[] = [
  { id: "c1", name: "Leadership & Management", slug: "leadership" },
  { id: "c2", name: "Customer Experience", slug: "customer-experience" },
  { id: "c3", name: "Operational Excellence", slug: "operations" },
  { id: "c4", name: "Workplace Skills", slug: "workplace-skills" },
];

export const products: Product[] = [
  {
    id: "p1",
    title: "Leadership & Team Building Toolkit",
    slug: "leadership-team-building-toolkit",
    subtitle: "A Practical Guide for Emerging and Senior Managers",
    description: "Equip your management team with the frameworks necessary to lead effectively in the modern Botswana workplace. This toolkit moves beyond theory, offering actionable strategies to resolve conflicts, inspire accountability, and build high-performance teams.",
    short_description: "Equip your management team with frameworks to lead effectively, resolve conflicts, and inspire accountability.",
    price: 850,
    category_id: "c1",
    is_featured: true,
    image_url: "/images/cover_leadership.png",
    target_audience: "Supervisors, Department Heads, and Emerging Leaders",
    key_learning_outcomes: ["Resolving workplace conflicts", "Building high-performance teams", "Driving staff accountability", "Effective delegation strategies"]
  },
  {
    id: "p2",
    title: "Customer Service Excellence Handbook",
    slug: "customer-service-excellence-handbook",
    subtitle: "Elevating the Standard of Service Delivery",
    description: "Transform your frontline staff into brand ambassadors. This handbook breaks down the psychology of customer satisfaction, handling local consumer expectations, and building lasting brand loyalty in a competitive market.",
    short_description: "Transform your frontline staff into brand ambassadors with practical service delivery strategies.",
    price: 650,
    category_id: "c2",
    is_featured: true,
    image_url: "/images/cover_customer_service.png",
    target_audience: "Frontline Staff, Customer Service Managers, Retail Teams",
    key_learning_outcomes: ["Handling difficult customer interactions", "Building brand loyalty", "Exceeding consumer expectations", "Professional service communication"]
  },
  {
    id: "p3",
    title: "Stock Loss & Shrinkage Practical Guide",
    slug: "stock-loss-shrinkage-guide",
    subtitle: "Operational Strategies for Retail and Warehousing",
    description: "A crucial resource for operations managers focused on protecting the bottom line. Learn to implement robust inventory controls, identify vulnerability points, and train staff on shrinkage prevention protocols.",
    short_description: "A crucial resource for operations managers focused on protecting the bottom line through inventory control.",
    price: 900,
    category_id: "c3",
    is_featured: true,
    image_url: "/images/cover_stock_loss.png",
    target_audience: "Retail Managers, Warehouse Supervisors, Operations Directors",
    key_learning_outcomes: ["Identifying shrinkage vulnerability points", "Implementing robust inventory controls", "Staff training for loss prevention", "Auditing and compliance"]
  },
  {
    id: "p4",
    title: "Workplace Etiquette & Professional Conduct",
    slug: "workplace-etiquette-professional-conduct",
    subtitle: "Cultivating a Professional Corporate Culture",
    description: "Set the standard for professional behavior within your organization. This guide covers office dynamics, professional appearance, ethical conduct, and fostering a respectful, productive work environment.",
    short_description: "Set the standard for professional behavior, ethical conduct, and office dynamics within your organization.",
    price: 450,
    category_id: "c4",
    is_featured: false,
    image_url: "/images/cover_leadership.png",
    target_audience: "New Hires, Junior Staff, Human Resources",
    key_learning_outcomes: ["Understanding corporate expectations", "Professional appearance and demeanor", "Ethical workplace conduct", "Fostering respect and inclusion"]
  },
  {
    id: "p5",
    title: "Business Communication Workbook",
    slug: "business-communication-workbook",
    subtitle: "Mastering Internal and External Correspondence",
    description: "Enhance your team's ability to communicate clearly and effectively. Features practical exercises and templates for drafting executive summaries, managing email threads, and delivering impactful presentations.",
    short_description: "Enhance your team's ability to communicate clearly with practical templates and exercises.",
    price: 550,
    category_id: "c4",
    is_featured: false,
    image_url: "/images/cover_customer_service.png",
    target_audience: "All Professionals, Administrative Staff, Managers",
    key_learning_outcomes: ["Drafting clear and concise emails", "Structuring executive summaries", "Effective internal communication", "Delivering impactful presentations"]
  },
  {
    id: "p6",
    title: "Critical Thinking for Supervisors",
    slug: "critical-thinking-for-supervisors",
    subtitle: "Problem Solving and Decision Making in Operations",
    description: "Equip your mid-level management with the analytical skills required to solve operational bottlenecks. Learn to evaluate evidence, mitigate risks, and make sound business decisions under pressure.",
    short_description: "Equip mid-level management with analytical skills to solve bottlenecks and make sound decisions.",
    price: 700,
    category_id: "c1",
    is_featured: true,
    image_url: "/images/cover_stock_loss.png",
    target_audience: "Supervisors, Shift Managers, Operations Leads",
    key_learning_outcomes: ["Analyzing operational bottlenecks", "Evaluating evidence objectively", "Risk mitigation strategies", "Decision making under pressure"]
  },
  {
    id: "p7",
    title: "Customer Relations Management Guide",
    slug: "customer-relations-management-guide",
    subtitle: "Building Long-Term Client Partnerships",
    description: "Move beyond transactional service to relationship management. This guide provides strategies for account managers and B2B professionals to nurture client relationships, manage accounts, and drive retention.",
    short_description: "Move beyond transactional service to build long-term B2B client partnerships and drive retention.",
    price: 750,
    category_id: "c2",
    is_featured: false,
    image_url: "/images/cover_customer_service.png",
    target_audience: "Account Managers, B2B Sales Professionals, Client Success Teams",
    key_learning_outcomes: ["Nurturing long-term relationships", "Managing B2B accounts", "Client retention strategies", "Handling complex service recoveries"]
  },
  {
    id: "p8",
    title: "Quality Assurance Fundamentals",
    slug: "quality-assurance-fundamentals",
    subtitle: "Maintaining Excellence in Service and Production",
    description: "Establish a culture of continuous improvement. Understand the core principles of quality control, process auditing, and maintaining consistency in both service delivery and product handling.",
    short_description: "Establish a culture of continuous improvement and understand core principles of quality control.",
    price: 800,
    category_id: "c3",
    is_featured: false,
    image_url: "/images/cover_stock_loss.png",
    target_audience: "QA Officers, Production Managers, Service Delivery Leads",
    key_learning_outcomes: ["Principles of quality control", "Process auditing techniques", "Maintaining delivery consistency", "Fostering continuous improvement"]
  },
  {
    id: "p9",
    title: "Management Essentials Toolkit",
    slug: "management-essentials-toolkit",
    subtitle: "The Foundation of Effective Business Operations",
    description: "A comprehensive resource covering the fundamentals of business management. From strategic planning to resource allocation and performance monitoring, this toolkit provides a solid operational foundation.",
    short_description: "A comprehensive resource covering strategic planning, resource allocation, and performance monitoring.",
    price: 950,
    category_id: "c1",
    is_featured: true,
    image_url: "/images/cover_leadership.png",
    target_audience: "New Managers, Small Business Owners, Operations Directors",
    key_learning_outcomes: ["Strategic planning fundamentals", "Resource allocation and budgeting", "Monitoring team performance", "Operational leadership"]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}
