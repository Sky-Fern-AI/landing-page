import React from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Spotlight } from "./components/ui/spotlight";
import { GridBackground } from "./components/ui/grid-background";
import { MovingBorder } from "./components/ui/moving-border";
import { AnimatedGradientText } from "./components/ui/animated-gradient-text";
import { BeamBackground } from "./components/ui/beam-background";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import {
  Check,
  Mic,
  FileText,
  Search,
  MessageSquare,
  FolderOpen,
  BarChart3,
  User,
  Mail,
  Building2,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FlipWords } from "./components/ui/textflip";
import { EvervaultCard } from "./components/ui/evervault-card";
import { SiZoom, SiNotion, SiGooglemeet } from "react-icons/si";
import { FaMicrosoft, FaGoogle } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate API call for static demo
    console.log("Form submitted:", formData);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", company: "", role: "" });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border relative z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Sky Fern AI" className="w-8 h-8" />
            <span className="font-sans text-xl font-semibold text-foreground">
              Sky Fern AI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Spotlight />
        <GridBackground />
        <BeamBackground />

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                <span className="inline-block px-3 py-1.5 bg-background/80 border-2 border-primary/60 rounded-[4px] backdrop-blur-sm min-w-[200px] md:min-w-[260px] text-center shadow-[2px_2px_0px_0px_rgba(var(--primary-rgb),0.3),-1px_-1px_0px_0px_rgba(var(--primary-rgb),0.2)] [transform:rotate(-0.5deg)]">
                  <FlipWords
                    words={[
                      "User Interviews",
                      "PDFs",
                      "Meetings",
                      "Conversations",
                    ]}
                    className="text-primary"
                  />
                </span>{" "}
                to{" "}
                <span className="inline-block px-3 py-1.5 bg-background/80 border-2 border-primary/60 rounded-[4px] backdrop-blur-sm min-w-[240px] md:min-w-[340px] text-center shadow-[2px_2px_0px_0px_rgba(var(--primary-rgb),0.3),-1px_-1px_0px_0px_rgba(var(--primary-rgb),0.2)] [transform:rotate(0.5deg)]">
                  <FlipWords
                    words={[
                      "Affinity Maps",
                      "Insights",
                      "User Personas",
                      "Minutes",
                      "UX Journey",
                    ]}
                    className="text-primary"
                  />
                </span>
                , 10x faster
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Discover high quality user insights in minutes, without the
                manual work. Let Sky Fern AI handle the busywork so you can
                focus on understanding your users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MovingBorder duration={4}>
                <Card className="p-8 bg-card/95 backdrop-blur-sm border-0 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h3 className="font-sans text-xl font-semibold text-card-foreground">
                        Join the waitlist
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Get early access to Sky Fern AI for UX researchers
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>
                        <Input
                          type="text"
                          placeholder="Full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          disabled={isLoading || isSubmitted}
                          className="pl-10 bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>
                        <Input
                          type="email"
                          placeholder="Work email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          disabled={isLoading || isSubmitted}
                          className="pl-10 bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building2 className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>
                        <Input
                          type="text"
                          placeholder="Company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          required
                          disabled={isLoading || isSubmitted}
                          className="pl-10 bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Briefcase className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>
                        <Input
                          type="text"
                          placeholder="Role (e.g., UX Researcher, Product Manager)"
                          value={formData.role}
                          onChange={(e) =>
                            setFormData({ ...formData, role: e.target.value })
                          }
                          disabled={isLoading || isSubmitted}
                          className="pl-10 bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      {error && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md p-2"
                        >
                          {error}
                        </motion.p>
                      )}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 font-semibold"
                          disabled={isSubmitted || isLoading}
                        >
                          {isSubmitted ? (
                            <div className="flex items-center gap-2">
                              <Check className="w-4 h-4" />
                              Thanks! We'll be in touch soon
                            </div>
                          ) : isLoading ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                              Joining...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              Request early access
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </Card>
              </MovingBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 border-y border-border relative"
      >
        <p className="text-center text-sm text-muted-foreground mb-8">
          Works seamlessly with your existing tools
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {/* Microsoft Teams */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <BsMicrosoftTeams className="w-8 h-8 text-[#6264A7] group-hover:scale-110 transition-transform duration-200" />
            <span className="font-semibold text-sm text-[#6264A7] group-hover:text-[#5a5fc7] transition-colors">
              Teams
            </span>
          </div>

          {/* Google Meet */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <SiGooglemeet className="w-8 h-8 text-[#00AC47] group-hover:scale-110 transition-transform duration-200" />
            <span className="font-semibold text-sm text-[#00AC47] group-hover:text-[#00a543] transition-colors">
              Google Meet
            </span>
          </div>

          {/* Zoom */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <SiZoom className="size-20 text-[#2D8CFF] group-hover:scale-110 transition-transform duration-200" />
            {/* <span className="font-semibold text-sm text-[#2D8CFF] group-hover:text-[#1e7be8] transition-colors">Zoom</span> */}
          </div>

          {/* Notion */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <SiNotion className="w-8 h-8 text-[#000000] dark:text-[#FFFFFF] group-hover:scale-110 transition-transform duration-200" />
            <span className="font-semibold text-sm text-[#000000] dark:text-[#FFFFFF] group-hover:text-[#333333] dark:group-hover:text-[#e0e0e0] transition-colors">
              Notion
            </span>
          </div>
        </div>
      </motion.section>

      {/* Problems Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-4 text-center text-balance">
              Focus on the human parts of research
            </h2>
            <p className="text-lg text-muted-foreground mb-16 text-center text-pretty max-w-2xl mx-auto">
              Let Sky Fern AI do the busywork.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Spend hours writing up notes",
                solution: "Analyzing",
                description:
                  "AI generates structured research docs automatically while you interview",
              },
              {
                title: "Manually tag and organize",
                solution: "Discovering patterns",
                description:
                  "AI identifies themes and insights across all your research",
              },
              {
                title: "Dig through scattered notes",
                solution: "Finding insights instantly",
                description:
                  "Search and chat with all your research in one place",
              },
              {
                title: "Juggle multiple tools",
                solution: "Working seamlessly",
                description:
                  "One platform for recording, analyzing, and sharing research",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/95 backdrop-blur-sm border border-border h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-destructive mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans text-lg font-semibold text-card-foreground mb-2">
                        {item.title}
                      </h3>
                      <div className="h-px bg-border my-3" />
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">
                          {item.solution}
                        </span>{" "}
                        — {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="relative overflow-hidden bg-accent/30">
        <GridBackground className="opacity-50" />

        <div className="container relative z-10 mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Everything you need for{" "}
              <AnimatedGradientText>UX research</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              From interview to insight, all in one platform
            </p>
          </motion.div>

          <BentoGrid className="max-w-7xl mx-auto">
            <BentoGridItem
              title="AI-powered documentation"
              description="Turn interviews into structured research docs automatically. The Notion-like editor captures themes, quotes, and insights while you focus on the conversation."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 items-center justify-center">
                  <FileText className="w-12 h-12 text-primary" />
                </div>
              }
              icon={<FileText className="w-6 h-6 text-primary" />}
              className="md:col-span-2"
            />
            <BentoGridItem
              title="Chat with your research"
              description="Ask questions like 'What are the main challenges users face?' and get instant answers with sources."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 items-center justify-center">
                  <MessageSquare className="w-12 h-12 text-blue-500" />
                </div>
              }
              icon={<MessageSquare className="w-6 h-6 text-blue-500" />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Universal capture"
              description="Works with Teams, Meet, Zoom, or upload audio files. Every format becomes searchable, analyzable research data."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-teal-500/20 to-teal-500/5 items-center justify-center">
                  <Mic className="w-12 h-12 text-teal-500" />
                </div>
              }
              icon={<Mic className="w-6 h-6 text-teal-500" />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Auto-generated insights"
              description="AI analyzes all interviews and generates visual graphs showing trends, pain points, and opportunities. See patterns you'd never spot manually."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-purple-500" />
                </div>
              }
              icon={<BarChart3 className="w-6 h-6 text-purple-500" />}
              className="md:col-span-2"
            />
            <BentoGridItem
              title="Unified research repository"
              description="Import docs, upload audio, connect meeting tools. Everything in one organized workspace."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 items-center justify-center">
                  <FolderOpen className="w-12 h-12 text-orange-500" />
                </div>
              }
              icon={<FolderOpen className="w-6 h-6 text-orange-500" />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Instant search"
              description="Find any quote, insight, or theme across all your interviews in seconds. Every piece of research, always at your fingertips."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 items-center justify-center">
                  <Search className="w-12 h-12 text-cyan-500" />
                </div>
              }
              icon={<Search className="w-6 h-6 text-cyan-500" />}
              className="md:col-span-2"
            />
          </BentoGrid>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-center text-balance">
              From interview to{" "}
              <FlipWords
                words={[
                  "Insights",
                  "Documentation",
                  "Analysis",
                  "Reports",
                  "Knowledge",
                ]}
                className="text-primary"
              />{" "}
              in three steps
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                step: 1,
                title: "Conduct your interviews",
                description:
                  "Connect Sky Fern AI to Teams, Meet, or Zoom. Or upload existing audio files. Focus on the conversation—the AI handles documentation in real-time.",
                image: "/video-call-interface-with-ai-transcription.jpg",
              },
              {
                step: 2,
                title: "AI learns your research",
                description:
                  "The AI agent analyzes all your interviews, identifies patterns, extracts key themes, and builds a comprehensive knowledge graph of your research. All automatically.",
                image:
                  "/ai-analyzing-research-data-with-knowledge-graph-vi.jpg",
              },
              {
                step: 3,
                title: "Get instant insights",
                description:
                  "Ask questions in chat, search for specific quotes, generate visual reports, or share findings with stakeholders. Your research is always organized, searchable, and actionable.",
                image:
                  "/research-insights-dashboard-with-charts-and-chat-i.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group/card"
              >
                <EvervaultCard className="h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {item.step}
                      </div>
                      <h3 className="font-sans text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mb-4 rounded-lg overflow-hidden border border-border/50">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </EvervaultCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-accent/30">
        <BeamBackground />

        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Spend less time documenting, more time researching
                </h2>
                <ul className="space-y-4">
                  {[
                    "Save 4+ hours per interview on documentation",
                    "Never lose important insights or quotes again",
                    "Answer stakeholder questions in seconds, not hours",
                    "Spot patterns across dozens of interviews instantly",
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-3"
                    >
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 bg-card/95 backdrop-blur-sm border border-border">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="text-4xl font-bold text-foreground mb-2">
                        10x
                      </div>
                      <div className="text-muted-foreground">
                        faster documentation
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="text-4xl font-bold text-foreground mb-2">
                        4+ hours
                      </div>
                      <div className="text-muted-foreground">
                        saved per interview
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="text-4xl font-bold text-foreground mb-2">
                        100%
                      </div>
                      <div className="text-muted-foreground">
                        of insights captured
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to transform your UX research workflow?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 text-pretty leading-relaxed">
            Join UX researchers who are spending less time on documentation and
            more time understanding their users.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Request early access
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="Sky Fern AI" className="w-8 h-8" />
                <span className="font-sans text-lg font-semibold text-foreground">
                  Sky Fern AI
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered research intelligence platform for UX researchers.
              </p>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-4">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-foreground transition-colors"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-4">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Sky Fern AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
