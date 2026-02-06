"use client";

import { Badge } from "~/components/ui/badge";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const mainProjects = [
  
  {
    title: "AI Travel Assistant",
    description:
      "A conversational AI tool that generates itineraries and travel suggestions using retrieval, external APIs, and a lightweight backend.",
    tech: ["Python","NLP", "PyTorch","LangChain", "Chromadb", "API integrations", "FastAPI"],
    highlight: true,
    inProgress: true,
    link: "",
    inProgressText: "Launch soon",
  },
  {
    title: "Medical RAG Chatbot",
    description:
      "A retrieval-based assistant for querying medical documents. It uses LangChain and FAISS for accurate information retrieval and runs on AWS with a secure CI/CD setup through Jenkins and Trivy. The focus was on reliability, clean deployment pipelines, and consistent performance under load..",
    tech: ["Python", "Flask", "LangChain", "FAISS", "Jenkins", "Docker","Trivy","AWS"],
    highlight: false,
    inProgress: false,
    link: "https://github.com/Keshav-chand/Medical-RAG-Chatbot",
    inProgressText: false,
  },
  {
    title: "Product Discovery & Ranking Engine",
    description:
      "An AI-powered product search and recommendation system enabling natural-language queries with price and feature constraints. Combines semantic search, learning-to-rank models, and LLM-based explanations, delivered through an interactive UI.",
    tech: ["Python", "pandas", "SentenceTransformers", "XGBoost", "LLMs","Streamlit","FastAPI"],
    highlight: false,
    inProgress: false,
    link: "https://github.com/Keshav-chand/Product-Discovery-Ranking-Engine",
    
  },
  {
    title: "CopyWriter-s-AI-Assistant",
    description:
    "An AI-powered writing assistant that extracts text from images, retrieves relevant content via semantic search, and generates refined posts using LLMs through a multi-tab Streamlit interface.",
    tech: ["Python", "Streamlit", "Pytesseract", "Pillow","ChromaDB","NumPy","Pandas"],
    highlight: false,
    inProgress: false,
    link: "https://github.com/Keshav-chand/CopyWriter-s-AI-Assistant",
  },
  
  {
    title: "AI Study Companion",
    description:
      "An AI-powered study assistant built with a complete GitOps workflow. It uses ArgoCD and Jenkins for automated deployments and Minikube for local Kubernetes orchestration. Designed to keep updates versioned, consistent, and easy to roll out.",
    tech: ["Jenkins", "ArgoCD", "Kubernetes", "Minikube", "Docker"],
    highlight: false,
    inProgress: false,
    link: "https://github.com/Keshav-chand/AI-Powered-Study-Companion",
  },
  
  {
    title: "Anime Recommendation System",
    description:
      "A recommendation engine using embeddings and similarity search to suggest anime based on user preferences and text metadata.",
    tech: ["Python", "sentence-transformers", "Jenkins CI/CD", "Docker"],
    highlight: false,
    inProgress: false,
    link: "https://github.com/Keshav-chand/Anime-Recommender",
  },
  
];

const smallProjects = [
  {
  title: "Chat Application",
  description: "A real-time chat app built with Spring Boot, MongoDB, and WebSockets. Supports multiple chat rooms, live messaging, and user authentication, demonstrating full-stack backend and real-time communication skills.",
  tech: ["Java", "Spring Boot", "WebSocket", "MongoDB", "Lombok"],
  link: "https://github.com/Keshav-chand/Chat-Application",
},

  
];

// Replace the RingLoader component with the provided HTML/CSS
const RingLoader = () => (
  <span className="relative ml-1.5 inline-block h-4 w-4">
    <span className="animate-spin-right absolute left-0 top-0 h-4 w-4 rounded-full border-2 border-orange-400 opacity-40"></span>
    <span className="animate-spin-left absolute left-0 top-0 h-4 w-4 rounded-full border-2 border-orange-400 opacity-40"></span>
  </span>
);

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="mb-8 border-b border-zinc-800 pb-2 text-3xl font-bold"
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Main Projects */}
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mainProjects.map((project, index) => (
          <motion.div
            key={index}
            className={project.link ? "cursor-pointer" : ""}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => {
              if (project.link) window.open(project.link, "_blank");
            }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Card
              className={`h-full border-zinc-800 bg-[#101010] transition-all hover:border-gray-700 ${project.highlight ? "ring-1 ring-teal-300/20" : ""}`}
            >
              <CardHeader className="relative">
                {project.inProgress && (
                  <div className="absolute right-4 top-4 flex items-center">
                    <Badge className="border-none bg-orange-500/20 py-1 pr-1 text-orange-400 hover:bg-orange-500/30">
                      {project.inProgressText} <RingLoader />
                    </Badge>
                  </div>
                )}
                <CardTitle
                  className={project.highlight ? "text-teal-300" : "text-white"}
                >
                  {project.title}
                </CardTitle>
                <CardDescription className="pt-2 text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.3 + techIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-[#202020] text-gray-300 hover:bg-[#252525]"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Small Projects */}
      <motion.h3
        className="mb-4 text-xl font-semibold text-teal-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Other Projects
      </motion.h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {smallProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => {
              if (project.link) window.open(project.link, "_blank");
            }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Card className="h-full border-zinc-800 bg-[#101010] transition-all hover:border-gray-700">
              <CardHeader className="p-4">
                <CardTitle className="text-base text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.4 + techIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-[#202020] px-2 py-0 text-xs text-gray-300 hover:bg-[#252525]"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
