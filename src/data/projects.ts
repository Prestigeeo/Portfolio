import { Project } from "@/types/project";

// EDIT HERE: This is the only file you need to edit when adding, removing,
// or updating a project. The home page and project pages update automatically.
export const projects: Project[] = [
  {
    slug: "customer-intelligence-classifier",
    number: "01",
    category: "NLP & machine learning",
    title: "Customer Intelligence Classifier",
    shortDescription: "Classifying customer messages and surfacing sentiment for more thoughtful support triage.",
    overview: "An NLP-focused system that explores how incoming customer messages can be organised by intent and sentiment to help teams respond with greater context.",
    tools: ["Python", "NLP", "Classification", "Sentiment analysis"],
    role: "Developed the Streamlit interface for the Customer Intelligence Classifier and deployed the application to make it accessible to users.",
    accent: "rose",
    status: "Featured",
    repositoryUrl: "https://github.com/tag-ecosystemai/c1-navigators-project-1.git"
  },
  {
    slug: "nimde-research-assistant",
    number: "02",
    category: "RAG & LLM engineering",
    title: "Nimde — Local Research Assistant",
    shortDescription: "A local-first assistant for exploring academic papers through source-grounded answers.",
    overview: "Nimde helps researchers work through academic papers by generating paper briefs, building literature matrices, and answering questions grounded in retrieved sources.",
    tools: ["Python", "Ollama", "ChromaDB", "Embeddings", "RAG"],
    role: "Team Lead and AI Engineering Lead: query processing, prompt construction, LLM integration, retrieval testing, and evaluation.",
    accent: "lilac",
    status: "Featured",
    repositoryUrl: "https://github.com/tag-ecosystemai/c1-navigators-project-2.git",
    metrics: [{ label: "Recall@5", value: "95.6%" }, { label: "Mean reciprocal rank", value: "0.847" }]
  },
  {
    slug: "credit-risk-agent",
    number: "03",
    category: "AI agents & fintech",
    title: "Banking Credit-Risk Investigation Agent",
    shortDescription: "An evidence-aware workflow for reviewing risk signals in credit applications.",
    overview: "An AI-assisted investigation concept designed to help credit officers review applications, transactions, supporting documents, and credit policies for risk indicators and inconsistencies.",
    tools: ["Product requirements", "Data sourcing", "Research", "Evidence-grounded workflows"],
    role: "Product requirements documentation, data sourcing, and defining evidence requirements for risk investigations.",
    accent: "sage",
    status: "Featured",
    repositoryUrl: "https://github.com/tag-ecosystemai/c1-navigators-project-3.git"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
