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
    description: "Poor leadership costs companies in high turnover and lost productivity. This business solution equips your management team with the exact frameworks necessary to stop micromanaging and start leading. By implementing these strategies, your organization will effectively resolve conflicts, enforce accountability, and dramatically increase team output.",
    short_description: "Stop micromanaging and start leading. Resolve workplace conflicts and drive measurable team productivity.",
    price: 850,
    category_id: "c1",
    is_featured: true,
    image_url: "/images/cover_leadership_new.png",
    target_audience: "Supervisors, Department Heads, and Emerging Leaders",
    key_learning_outcomes: ["Resolving workplace conflicts", "Building high-performance teams", "Driving staff accountability", "Effective delegation strategies"]
  },
  {
    id: "p2",
    title: "Customer Service Excellence Handbook",
    slug: "customer-service-excellence-handbook",
    subtitle: "Elevating the Standard of Service Delivery",
    description: "Customer churn is directly tied to frontline service failure. This framework transforms your staff into brand ambassadors who proactively protect your market share. Learn exactly how to neutralize difficult customer interactions, exceed standard expectations, and cultivate deep, revenue-generating brand loyalty in the competitive SADC market.",
    short_description: "Transform your frontline staff to neutralize complaints, exceed expectations, and build revenue-generating brand loyalty.",
    price: 650,
    category_id: "c2",
    is_featured: true,
    image_url: "/images/cover_customer_service_p2.png",
    target_audience: "Frontline Staff, Customer Service Managers, Retail Teams",
    key_learning_outcomes: ["Handling difficult customer interactions", "Building brand loyalty", "Exceeding consumer expectations", "Professional service communication"]
  },
  {
    id: "p3",
    title: "Stock Loss & Shrinkage Practical Guide",
    slug: "stock-loss-shrinkage-guide",
    subtitle: "Operational Strategies for Retail and Warehousing",
    description: "Every percentage of shrinkage directly destroys your bottom line. This operational toolkit is designed for one purpose: protecting your profitability. Implement robust inventory controls, expose vulnerability points in your supply chain, and permanently reduce inventory losses through rigorous staff training and compliance auditing.",
    short_description: "Protect your profitability. Reduce inventory losses, improve accountability, and strengthen operational controls.",
    price: 900,
    category_id: "c3",
    is_featured: true,
    image_url: "/images/cover_stock_loss_new.png",
    target_audience: "Retail Managers, Warehouse Supervisors, Operations Directors",
    key_learning_outcomes: ["Identifying shrinkage vulnerability points", "Implementing robust inventory controls", "Staff training for loss prevention", "Auditing and compliance"]
  },
  {
    id: "p4",
    title: "Workplace Etiquette & Professional Conduct",
    slug: "workplace-etiquette-professional-conduct",
    subtitle: "Cultivating a Professional Corporate Culture",
    description: "A toxic or unprofessional culture derails operational focus and invites HR liabilities. This comprehensive standard-setter ensures your entire workforce understands the non-negotiable expectations of professional behavior, ethical conduct, and mutual respect necessary for a high-functioning corporate environment.",
    short_description: "Establish non-negotiable standards for professional behavior, ethical conduct, and mutual respect.",
    price: 450,
    category_id: "c4",
    is_featured: false,
    image_url: "/images/cover_etiquette_p4.png",
    target_audience: "New Hires, Junior Staff, Human Resources",
    key_learning_outcomes: ["Understanding corporate expectations", "Professional appearance and demeanor", "Ethical workplace conduct", "Fostering respect and inclusion"]
  },
  {
    id: "p5",
    title: "Business Communication Workbook",
    slug: "business-communication-workbook",
    subtitle: "Mastering Internal and External Correspondence",
    description: "Ineffective communication causes costly operational delays and compromises your brand's external perception. This practical solution eliminates ambiguity by providing your team with exact templates and protocols for drafting executive summaries, managing internal comms, and delivering high-stakes presentations.",
    short_description: "Eliminate costly operational delays with exact protocols for clear, impactful corporate communication.",
    price: 550,
    category_id: "c4",
    is_featured: false,
    image_url: "/images/cover_communication_p5.png",
    target_audience: "All Professionals, Administrative Staff, Managers",
    key_learning_outcomes: ["Drafting clear and concise emails", "Structuring executive summaries", "Effective internal communication", "Delivering impactful presentations"]
  },
  {
    id: "p6",
    title: "Critical Thinking for Supervisors",
    slug: "critical-thinking-for-supervisors",
    subtitle: "Problem Solving and Decision Making in Operations",
    description: "When supervisors cannot solve problems independently, entire operational workflows stall. This advanced framework equips mid-level management to critically analyze operational bottlenecks, objectively evaluate evidence, and execute rapid, calculated decisions under pressure without escalating every issue.",
    short_description: "Empower mid-level management to rapidly analyze bottlenecks and execute calculated decisions under pressure.",
    price: 700,
    category_id: "c1",
    is_featured: true,
    image_url: "/images/cover_critical_thinking_p6.png",
    target_audience: "Supervisors, Shift Managers, Operations Leads",
    key_learning_outcomes: ["Analyzing operational bottlenecks", "Evaluating evidence objectively", "Risk mitigation strategies", "Decision making under pressure"]
  },
  {
    id: "p7",
    title: "Customer Relations Management Guide",
    slug: "customer-relations-management-guide",
    subtitle: "Building Long-Term Client Partnerships",
    description: "Losing a key B2B client is an unacceptable revenue hit. This solution moves your team from reactive transactional service to proactive account management. Implement proven strategies to nurture key accounts, recover from complex service failures, and maximize long-term client retention.",
    short_description: "Move from reactive service to proactive account management to maximize long-term B2B client retention.",
    price: 750,
    category_id: "c2",
    is_featured: false,
    image_url: "/images/cover_crm_p7.png",
    target_audience: "Account Managers, B2B Sales Professionals, Client Success Teams",
    key_learning_outcomes: ["Nurturing long-term relationships", "Managing B2B accounts", "Client retention strategies", "Handling complex service recoveries"]
  },
  {
    id: "p8",
    title: "Quality Assurance Fundamentals",
    slug: "quality-assurance-fundamentals",
    subtitle: "Maintaining Excellence in Service and Production",
    description: "Inconsistent delivery destroys brand reputation. This operational safeguard provides the core methodologies needed to enforce rigorous quality control and strict process auditing. Standardize your operations to guarantee exceptional consistency across every customer touchpoint and production phase.",
    short_description: "Enforce rigorous quality control to guarantee exceptional consistency across operations.",
    price: 800,
    category_id: "c3",
    is_featured: false,
    image_url: "/images/cover_qa_p8.png",
    target_audience: "QA Officers, Production Managers, Service Delivery Leads",
    key_learning_outcomes: ["Principles of quality control", "Process auditing techniques", "Maintaining delivery consistency", "Fostering continuous improvement"]
  },
  {
    id: "p9",
    title: "Management Essentials Toolkit",
    slug: "management-essentials-toolkit",
    subtitle: "The Foundation of Effective Business Operations",
    description: "A business without structured management processes is effectively flying blind. This foundational blueprint provides the critical mechanisms for strategic operational planning, ruthless resource allocation, and continuous team performance monitoring to ensure organizational goals are actually met.",
    short_description: "Implement critical mechanisms for strategic planning, resource allocation, and strict performance monitoring.",
    price: 950,
    category_id: "c1",
    is_featured: true,
    image_url: "/images/cover_management_p9.png",
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
