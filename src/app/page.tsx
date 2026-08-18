"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/foundation/Container";
import Button from "@/components/foundation/Button";
import Typography from "@/components/foundation/Typography";
import ImageWrapper from "@/components/foundation/ImageWrapper";
import Link from "@/components/foundation/Link";
import Logo from "@/components/foundation/Logo";
const capabilities = [
  {
    id: "01",
    num: "01",
    title: "Strategy & Transformation",
    shortDesc: "Clarify priorities, define opportunities, and create a practical path from ambition to execution.",
    description: "Clarify priorities, define opportunities, and create a practical path from ambition to execution.",
    focus: [
      "Business & AI Strategy",
      "Digital Transformation",
      "Product Strategy",
      "Operating Model Design"
    ],
    image: "/images/capability-strategy.jpg"
  },
  {
    id: "02",
    num: "02",
    title: "Product & Experience",
    shortDesc: "Design digital products and experiences that make important work easier, clearer, and more effective.",
    description: "Design digital products and experiences that make important work easier, clearer, and more effective.",
    focus: [
      "Product Design",
      "UX Research",
      "Experience Strategy",
      "Design Systems"
    ],
    image: "/images/capability-product.jpg"
  },
  {
    id: "03",
    num: "03",
    title: "AI & Automation",
    shortDesc: "Identify where AI can improve decisions, operations, and customer experiences — and where it should not.",
    description: "Identify where AI can improve decisions, operations, and customer experiences — and where it should not.",
    focus: [
      "AI Strategy",
      "Workflow Automation",
      "AI Product Design",
      "Intelligent Operations"
    ],
    image: "/images/capability-ai.jpg"
  },
  {
    id: "04",
    num: "04",
    title: "Digital Platforms",
    shortDesc: "Design and evolve digital platforms that connect people, products, data, and operations.",
    description: "Design and evolve digital platforms that connect people, products, data, and operations.",
    focus: [
      "Enterprise Platforms",
      "Internal Tools",
      "Customer Platforms",
      "Digital Products"
    ],
    image: "/images/capability-platforms.jpg"
  },
  {
    id: "05",
    num: "05",
    title: "Design Systems",
    shortDesc: "Create the foundations that bring consistency, speed, and quality to digital product teams.",
    description: "Create the foundations that bring consistency, speed, and quality to digital product teams.",
    focus: [
      "Design Systems",
      "UI Architecture",
      "Component Libraries",
      "Design Governance"
    ],
    image: "/images/capability-systems.jpg"
  }
];

const challenges = [
  {
    num: "01",
    title: "Fragmented Digital Experiences",
    desc: "Customers and employees move across products, channels, and systems that were never designed to work together."
  },
  {
    num: "02",
    title: "Slow Decision-Making",
    desc: "Important initiatives lose momentum when priorities, ownership, and direction are unclear."
  },
  {
    num: "03",
    title: "AI Without a Clear Role",
    desc: "Teams see the potential of AI but need a practical view of where it can create value."
  },
  {
    num: "04",
    title: "Products That Outgrow Their Foundations",
    desc: "Growing products often accumulate inconsistent experiences, disconnected systems, and unnecessary friction."
  },
  {
    num: "05",
    title: "Strategy That Stops at the Presentation",
    desc: "Good ideas create value only when teams can translate them into decisions, products, and measurable action."
  }
];

const industries = [
  {
    num: "01",
    title: "Financial Services",
    desc: "Digital products, customer journeys, operating models, and technology decisions shaped by trust and regulation."
  },
  {
    num: "02",
    title: "Healthcare",
    desc: "Connected experiences and systems designed around people, access, responsibility, and operational reality."
  },
  {
    num: "03",
    title: "Retail & Consumer",
    desc: "Products and experiences that connect customer expectations with commercial performance."
  },
  {
    num: "04",
    title: "Manufacturing",
    desc: "Digital capabilities that improve visibility, coordination, operational performance, and the way teams work."
  },
  {
    num: "05",
    title: "Technology & SaaS",
    desc: "Products, platforms, and experiences designed to scale with customers, teams, and business ambition."
  }
];

const projects = [
  {
    num: "01",
    label: "01 / ENTERPRISE STRATEGY",
    title: "Reframing a Business Around What Matters Most.",
    desc: "A strategy engagement focused on clarifying priorities, aligning stakeholders, and creating a practical direction for the next stage of growth.",
    tags: ["Strategy", "Transformation", "Operating Model"],
    image: "/images/case-transformation.jpg"
  },
  {
    num: "02",
    label: "02 / DIGITAL PRODUCT",
    title: "Making Important Work Easier to Navigate.",
    desc: "A product experience initiative focused on simplifying journeys, improving usability, and creating a clearer experience across key touchpoints.",
    tags: ["Product", "UX", "Design Systems"],
    image: "/images/case-product.jpg"
  },
  {
    num: "03",
    label: "03 / AI & INTELLIGENT OPERATIONS",
    title: "Finding Practical Value in AI.",
    desc: "An AI-focused engagement exploring where intelligent automation can improve decisions, reduce repetitive work, and create better experiences for teams.",
    tags: ["AI", "Automation", "Operations"],
    image: "/images/case-ai.jpg"
  }
];

const stages = [
  {
    num: "01",
    title: "Understand",
    desc: "Understand the business, the people, the existing product, and the constraints before deciding what to change."
  },
  {
    num: "02",
    title: "Define",
    desc: "Turn observations into priorities, opportunities, principles, and a clear direction for the work."
  },
  {
    num: "03",
    title: "Build",
    desc: "Translate direction into products, experiences, systems, and capabilities that teams can actually use."
  },
  {
    num: "04",
    title: "Evolve",
    desc: "Learn from real usage, measure what matters, and improve continuously as the business moves forward."
  }
];

const insightsList = [
  {
    num: "01",
    category: "AI & Strategy",
    title: "Where AI creates meaningful business value — and where it does not."
  },
  {
    num: "02",
    category: "Digital Transformation",
    title: "Why successful change depends on the organization as much as the technology."
  },
  {
    num: "03",
    category: "Product Thinking",
    title: "Why the best digital products make important decisions easier for the people using them."
  },
  {
    num: "04",
    category: "Design & Systems",
    title: "Why consistent experiences depend on the systems and principles behind them."
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCapId, setSelectedCapId] = useState("01");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-warm text-brand-dark overflow-x-hidden transition-colors duration-300">
      {/* Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-editorial ${
          isScrolled
            ? "bg-brand-warm/95 border-b border-brand-border/60 backdrop-blur-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[1320px] h-[88px] px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Logo className="w-8 h-8 text-brand-dark" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold text-brand-dark">
              Pixel Decode
            </span>
          </div>

          {/* Center: Main Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-10">
            {["Services", "Solutions", "Industries", "Insights", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[14px] lg:text-[15px] font-medium text-brand-secondary hover:text-brand-dark transition-editorial"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right: Action Buttons */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="#contact"
              variant="none"
              className="text-[14px] lg:text-[15px] font-semibold text-brand-dark hover:opacity-85 transition-editorial"
            >
              Contact
            </Link>
            <Button variant="primary" size="sm">
              Start a Conversation
            </Button>
          </div>

          {/* Mobile Menu Action */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-dark focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[88px] left-0 right-0 bg-brand-warm border-b border-brand-border p-6 space-y-6 transition-editorial">
            <nav className="flex flex-col gap-4">
              {["Services", "Solutions", "Industries", "Insights", "About"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-brand-secondary hover:text-brand-dark"
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-brand-border flex flex-col gap-4">
              <Link
                href="#contact"
                variant="none"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-brand-dark"
              >
                Contact
              </Link>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Viewport Content */}
      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-88px)] flex items-center py-6 md:py-8 lg:py-10">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Left Column: Editorial Headline & Copy (6 Columns) */}
              <div className="lg:col-span-6 flex flex-col items-start text-left animate-fade-in-up">
                {/* Eyebrow */}
                <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold mb-5">
                  PIXEL DECODE
                </Typography>

                {/* Headline */}
                <h1 className="text-display font-bold tracking-tight text-foreground leading-[0.98] max-w-[640px] mb-5">
                  Turning Technology Into Business Advantage.
                </h1>

                {/* Supporting copy */}
                <p className="text-body text-brand-secondary leading-[1.5] max-w-[560px] mb-8">
                  Pixel Decode helps organizations make better decisions about technology, products, and digital experiences — from strategic direction through execution.
                </p>

                {/* Primary CTA (Start a Conversation) */}
                <div className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "mailto:hello@pixeldecode.com?subject=Strategic Consultation Request";
                    }}
                  >
                    Start a Conversation &nbsp; →
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Portrait (6 Columns) */}
              <div className="lg:col-span-6 w-full h-full flex justify-center lg:justify-end animate-fade-in">
                <div className="relative w-full max-w-[620px] lg:max-w-none aspect-[4/3] md:aspect-[3/2] lg:aspect-[1.1/1] xl:aspect-[4/3] max-h-[500px] rounded-large-ui overflow-hidden shadow-editorial transition-editorial hover:shadow-xl group hero-image-container">
                  <ImageWrapper
                    src="/images/pixeldecode-hero.jpg"
                    alt="Three corporate and technology leaders collaborating on digital transformation in a premium architectural boardroom office"
                    fill
                    priority
                    radius="large"
                    hoverEffect="zoom"
                    wrapperClassName="w-full h-full"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </Container>

          {/* Scroll Cue (Understated, non-bouncing indicator) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-brand-secondary opacity-60 transition-opacity duration-300 hover:opacity-90 pointer-events-none hero-scroll-cue">
            <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
            <svg
              className="w-3.5 h-3.5 text-brand-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Section 02: Trust + Positioning Experience */}
        <section id="about" className="bg-brand-warm border-t border-brand-border/40 py-s64 md:py-s80 lg:py-s96 relative">
          <Container>
            {/* Section Title & Editorial Statement */}
            <div className="flex flex-col items-start text-left mb-s32 md:mb-s48 lg:mb-s64 animate-fade-in-up">
              <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold mb-3 md:mb-4">
                OUR APPROACH
              </Typography>
              <h2 className="text-section-heading font-semibold tracking-tight text-foreground leading-[1.05] max-w-[850px] mb-6 md:mb-8">
                Better technology starts with better decisions.
              </h2>
              <p className="text-body text-brand-secondary leading-[1.65] max-w-[600px]">
                We bring strategy, product thinking, design, and engineering together to help organizations decide what matters, build what creates value, and move with confidence.
              </p>
            </div>

            {/* Editorial Approach Content (2 columns on desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Visual Supporting Image (~35-40% width, i.e., 4 columns) */}
              <div className="lg:col-span-4 w-full flex justify-start">
                <div className="relative w-full aspect-[4/5] rounded-large-ui overflow-hidden shadow-editorial group">
                  <ImageWrapper
                    src="/images/positioning-approach.jpg"
                    alt="Senior digital transformation leaders discussing diagram workflows and digital strategies around a wooden meeting table in an architectural quiet luxury boardroom studio"
                    fill
                    radius="large"
                    hoverEffect="none"
                    wrapperClassName="w-full h-full"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Principles (8 columns) */}
              <div className="lg:col-span-8 flex flex-col gap-8 md:gap-10">
                {/* Principle 01 */}
                <div className="flex flex-col items-start text-left border-t border-brand-border pt-6">
                  <Typography variant="caption" className="text-brand-accent font-semibold mb-2">
                    01 — STRATEGY FIRST
                  </Typography>
                  <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                    Strategy First
                  </h3>
                  <p className="text-base text-brand-secondary leading-relaxed max-w-[600px]">
                    Start with the business objective, not the technology.
                  </p>
                </div>

                {/* Principle 02 */}
                <div className="flex flex-col items-start text-left border-t border-brand-border pt-6">
                  <Typography variant="caption" className="text-brand-accent font-semibold mb-2">
                    02 — HUMAN-CENTERED
                  </Typography>
                  <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                    Human-Centered
                  </h3>
                  <p className="text-base text-brand-secondary leading-relaxed max-w-[600px]">
                    Design around the people who use, manage, and depend on the product.
                  </p>
                </div>

                {/* Principle 03 */}
                <div className="flex flex-col items-start text-left border-t border-brand-border pt-6">
                  <Typography variant="caption" className="text-brand-accent font-semibold mb-2">
                    03 — BUILT FOR ADOPTION
                  </Typography>
                  <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                    Built for Adoption
                  </h3>
                  <p className="text-base text-brand-secondary leading-relaxed max-w-[600px]">
                    Create solutions that work in the real organization — not just in the presentation.
                  </p>
                </div>
              </div>

            </div>

          </Container>
        </section>

        {/* Section 03: Capability / Services Experience (LIGHT) */}
        <section id="services" className="bg-background text-foreground border-t border-brand-border/40 py-s80 md:py-s128 lg:py-s160 relative">
          <Container>
            {/* Section Introduction */}
            <div className="flex flex-col items-start text-left mb-s48 md:mb-s64 lg:mb-s80 animate-fade-in-up">
              <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold mb-3 md:mb-4">
                WHAT WE DO
              </Typography>
              <h2 className="text-section-heading font-semibold tracking-tight text-foreground leading-[1.05] max-w-[850px] mb-6 md:mb-8">
                From strategic direction to products that perform.
              </h2>
              <p className="text-body text-brand-secondary leading-[1.65] max-w-[600px]">
                We help leadership teams shape priorities, improve digital experiences, and build the capabilities needed to execute with confidence.
              </p>
            </div>

            {/* Capability Navigation Index (5-column border split index) */}
            <div className="w-full mb-s48 md:mb-s64 lg:mb-s80" role="tablist" aria-label="Capabilities Navigation">
              <div className="grid grid-cols-1 md:grid-cols-5 border-t border-b border-brand-border/60 divide-y md:divide-y-0 md:divide-x divide-brand-border/60 py-2">
                {capabilities.map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => setSelectedCapId(cap.id)}
                    className={`group flex flex-col items-start text-left p-5 md:p-6 transition-editorial outline-none focus-visible:ring-1 focus-visible:ring-brand-accent ${
                      selectedCapId === cap.id
                        ? "bg-brand-dark/[0.025]"
                        : "hover:bg-brand-dark/[0.005]"
                    }`}
                    aria-selected={selectedCapId === cap.id}
                    role="tab"
                    id={`tab-${cap.id}`}
                    aria-controls={`panel-${cap.id}`}
                  >
                    <span className="font-mono text-xs tracking-wider text-brand-secondary mb-2">
                      {cap.num}
                    </span>
                    <span className={`font-bold text-sm lg:text-base mb-1 flex items-center justify-between w-full transition-colors duration-300 ${
                      selectedCapId === cap.id ? "text-foreground" : "text-brand-secondary group-hover:text-foreground"
                    }`}>
                      {cap.title}
                      <span className={`transition-transform duration-300 ${selectedCapId === cap.id ? "translate-x-1 text-foreground" : "text-brand-secondary group-hover:translate-x-1 group-hover:text-foreground"}`}>
                        →
                      </span>
                    </span>
                    <span className="text-xs text-brand-secondary leading-relaxed mt-1 line-clamp-2 md:line-clamp-none">
                      {cap.shortDesc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Capability Explorer (2 columns - 58% content, 42% visual) */}
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                id={`panel-${cap.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${cap.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center transition-all duration-300 ${
                  selectedCapId === cap.id
                    ? "opacity-100 translate-y-0 relative z-10"
                    : "opacity-0 translate-y-4 absolute inset-x-0 pointer-events-none z-0"
                }`}
                style={{ display: selectedCapId === cap.id ? "grid" : "none" }}
              >
                {/* Left Content (7 Columns - ~58%) */}
                <div className="lg:col-span-7 flex flex-col items-start text-left lg:pr-12">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-body text-brand-secondary leading-[1.65] max-w-[600px] mb-8">
                    {cap.description}
                  </p>
                  <ul className="space-y-3.5 pt-6 border-t border-brand-border/60 w-full max-w-[440px]">
                    {cap.focus.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm lg:text-base font-semibold text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Visual (5 Columns - ~42%) */}
                <div className="lg:col-span-5 w-full h-full flex justify-center lg:justify-end">
                  <div className="relative w-full aspect-[4/3] rounded-large-ui overflow-hidden shadow-editorial w-full">
                    <ImageWrapper
                      src={cap.image}
                      alt={`Editorial illustration representing ${cap.title}`}
                      fill
                      radius="large"
                      hoverEffect="none"
                      wrapperClassName="w-full h-full"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Container>
        </section>

        {/* Section 04: Solutions / Business Problems Experience */}
        <section id="solutions" className="bg-brand-warm border-t border-brand-border/40 py-s64 md:py-s80 lg:py-s96 relative">
          <Container>
            {/* Section Introduction */}
            <div className="flex flex-col items-start text-left mb-s32 md:mb-s48 lg:mb-s64 animate-fade-in-up">
              <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold mb-2.5">
                WHERE WE HELP
              </Typography>
              <h2 className="text-section-heading font-semibold tracking-tight text-foreground leading-[1.04] max-w-[850px] mb-4 md:mb-6">
                Technology matters when it changes something that matters.
              </h2>
              <p className="text-body text-brand-secondary leading-[1.5] max-w-[600px]">
                The strongest technology decisions begin with a clear business question — what needs to improve, who needs to benefit, and what will make the difference?
              </p>
            </div>

            {/* Editorial Problem Landscape (12-column grid layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Column: Quiet Vertical Labels (4 Columns) */}
              <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-[120px] h-fit">
                <span className="font-mono text-2xl lg:text-3xl font-bold tracking-[0.25em] text-brand-secondary/35 leading-none">
                  BUSINESS
                </span>
                <span className="font-mono text-2xl lg:text-3xl font-bold tracking-[0.25em] text-brand-secondary/35 leading-none mt-2">
                  CHALLENGES
                </span>
              </div>

              {/* Right Column: Problem landscape editorial list (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col divide-y divide-brand-border/60">
                {challenges.map((item) => (
                  <div
                    key={item.num}
                    tabIndex={0}
                    role="button"
                    aria-label={`Business Challenge ${item.num}: ${item.title}`}
                    className="group py-5 md:py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-all duration-300 opacity-75 hover:opacity-100 focus:opacity-100 outline-none focus-visible:ring-1 focus-visible:ring-brand-accent/40 rounded-small-ui px-2 md:px-4 -mx-2 md:-mx-4 cursor-default"
                  >
                    <div className="flex items-start gap-6 md:gap-8 max-w-[640px]">
                       {/* Number */}
                       <span className="font-mono text-xs lg:text-sm tracking-wider text-brand-secondary font-semibold pt-1 shrink-0">
                         {item.num}
                       </span>
                       {/* Content */}
                       <div className="flex flex-col gap-2">
                         <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                           {item.title}
                         </h3>
                         <p className="text-base text-brand-secondary leading-relaxed">
                           {item.desc}
                         </p>
                       </div>
                    </div>
                    {/* Arrow */}
                    <div className="flex items-center shrink-0 self-end md:self-start pt-1 pl-12 md:pl-0">
                      <span className="text-xl text-brand-secondary group-hover:text-brand-accent group-hover:translate-x-1.5 transition-all duration-300">
                        →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 05: Industries / Use Cases Experience */}
        <section id="industries" className="bg-brand-warm border-t border-brand-border/40 py-s64 md:py-s80 lg:py-s96 relative">
          <Container>
            {/* Section Introduction */}
            <div className="flex flex-col items-start text-left mb-s32 md:mb-s48 lg:mb-s64 animate-fade-in-up">
              <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold mb-2.5">
                WHERE IT MATTERS
              </Typography>
              <h2 className="text-section-heading font-semibold tracking-tight text-foreground leading-[1.04] max-w-[850px] mb-4 md:mb-6">
                Different businesses. Different realities.
              </h2>
              <p className="text-body text-brand-secondary leading-[1.5] max-w-[600px]">
                We apply the same strategic discipline to very different environments — adapting products, technology, and AI to the realities of each organization.
              </p>
            </div>

            {/* Editorial Industry Index (12-column grid layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Column: Simple Header Label (4 Columns) */}
              <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-[120px] h-fit">
                <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold">
                  04 — USE CASES
                </Typography>
              </div>

              {/* Right Column: Industry Index List (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col divide-y divide-brand-border/60">
                {industries.map((item) => (
                  <div
                    key={item.num}
                    tabIndex={0}
                    role="button"
                    aria-label={`Industry ${item.num}: ${item.title}`}
                    className="group py-5 md:py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-all duration-300 opacity-75 hover:opacity-100 focus:opacity-100 outline-none focus-visible:ring-1 focus-visible:ring-brand-accent/40 rounded-small-ui px-4 -mx-4 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] cursor-default"
                  >
                    <div className="flex items-start gap-6 md:gap-8 max-w-[640px]">
                       {/* Number */}
                       <span className="font-mono text-xs lg:text-sm tracking-wider text-brand-secondary font-semibold pt-1 shrink-0">
                         {item.num}
                       </span>
                       {/* Content Content Wrapper with Translate Hover Effect */}
                       <div className="flex flex-col gap-2 transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1">
                         <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight group-hover:text-brand-accent group-hover:font-bold group-focus:text-brand-accent group-focus:font-bold transition-all duration-300">
                           {item.title}
                         </h3>
                         <p className="text-base text-brand-secondary leading-relaxed">
                           {item.desc}
                         </p>
                       </div>
                    </div>
                    {/* Arrow Link Indicator with Slide Hover Effect */}
                    <div className="flex items-center shrink-0 self-end md:self-start pt-1 pl-12 md:pl-0">
                       <span className="text-xl text-brand-secondary group-hover:text-brand-accent group-hover:translate-x-1.5 group-focus:text-brand-accent group-focus:translate-x-1.5 transition-all duration-300">
                         →
                       </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 06: Proof / Case Studies Experience (DARK / PROOF) */}
        <section
          id="work"
          className="bg-background text-foreground border-t border-brand-border/40 py-s64 md:py-s80 lg:py-s96 relative"
          style={{
            '--background': '#111111',
            '--foreground': '#F8F7F4',
            '--text-secondary': '#A3A3A3',
            '--border': '#2E2D2B'
          } as React.CSSProperties}
        >
          <Container>
            {/* Section Introduction */}
            <div className="flex flex-col items-start text-left mb-s32 md:mb-s48 lg:mb-s64 animate-fade-in-up">
              <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold mb-2.5">
                SELECTED WORK
              </Typography>
              <h2 className="text-section-heading font-semibold tracking-tight text-foreground leading-[1.04] max-w-[850px] mb-4 md:mb-6">
                The work starts before the build.
              </h2>
              <p className="text-body text-brand-secondary leading-[1.5] max-w-[600px]">
                Representative engagements across strategy, product, design, technology, and AI.
              </p>
            </div>

            {/* Three Alternating Project Chapters */}
            <div className="space-y-s64 md:space-y-s80 lg:space-y-s96">
              {projects.map((project, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={project.num}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-fade-in-up"
                  >
                    {/* Text Content Block */}
                    <div
                      className={`lg:col-span-7 flex flex-col items-start text-left ${
                        isEven ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12"
                      }`}
                    >
                      {/* Small Label */}
                      <span className="font-mono text-xs tracking-wider text-brand-secondary font-semibold mb-3 block">
                        {project.label}
                      </span>
                      {/* Large Project Title */}
                      <h3 className="text-h3 font-semibold text-foreground leading-[1.1] tracking-tight mb-4 max-w-[500px]">
                        {project.title}
                      </h3>
                      {/* Short Description */}
                      <p className="text-body text-brand-secondary leading-relaxed mb-6 max-w-[560px]">
                        {project.desc}
                      </p>
                      {/* Focus Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono font-semibold tracking-wider text-brand-secondary border border-brand-border rounded px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* CTA Button */}
                      <button
                        onClick={(e) => e.preventDefault()}
                        title="Detailed case study documentation is currently restricted under corporate NDA."
                        className="group/cta text-sm font-bold tracking-wider text-foreground hover:text-brand-secondary transition-colors duration-300 flex items-center gap-1.5 cursor-default outline-none focus-visible:ring-1 focus-visible:ring-brand-border rounded px-1.5 py-1 -mx-1.5"
                      >
                        Explore Project &nbsp;
                        <span className="text-brand-secondary group-hover/cta:text-foreground group-hover/cta:translate-x-1 transition-all duration-300">
                          →
                        </span>
                      </button>
                    </div>

                    {/* Image Visual Block */}
                    <div
                      className={`lg:col-span-5 w-full ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative w-full aspect-[4/3] rounded-small-ui overflow-hidden shadow-sm border border-brand-border group">
                        <ImageWrapper
                          src={project.image}
                          alt={`Editorial showcase representing ${project.title}`}
                          fill
                          radius="small"
                          hoverEffect="none"
                          wrapperClassName="w-full h-full"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Understated Section Transition Bridge */}
            <div className="flex flex-col items-center text-center mt-s48 md:mt-s64 lg:mt-s80 pt-s24 border-t border-brand-border/80 animate-fade-in-up">
              <span className="font-mono text-xs tracking-[0.25em] text-brand-secondary uppercase">
                Good work starts with understanding the problem &nbsp; →
              </span>
            </div>
          </Container>
        </section>

        {/* Section 07: How We Work / Process Experience */}
        <section id="process" className="bg-brand-warm border-t border-brand-border/40 py-s64 md:py-s80 lg:py-s96 relative">
          <Container>
            {/* Section Introduction */}
            <div className="flex flex-col items-start text-left mb-s32 md:mb-s48 lg:mb-s64 animate-fade-in-up">
              <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold mb-2.5">
                HOW WE WORK
              </Typography>
              <h2 className="text-section-heading font-semibold tracking-tight text-foreground leading-[1.04] max-w-[850px] mb-4 md:mb-6">
                From ambiguity to something that works.
              </h2>
              <p className="text-body text-brand-secondary leading-[1.5] max-w-[600px]">
                We work collaboratively with your teams to understand the problem, align on the right direction, build with intent, and continuously improve what matters.
              </p>
            </div>
 
            {/* Editorial Process Structured Index (4 columns on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 border-t border-brand-border/60 pt-12">
              {stages.map((stage) => (
                <div
                  key={stage.num}
                  tabIndex={0}
                  className="group flex flex-col items-start text-left outline-none focus-visible:ring-1 focus-visible:ring-brand-accent/40 rounded-small-ui py-2"
                >
                  {/* Number */}
                  <span className="font-mono text-xs tracking-wider text-brand-secondary font-semibold mb-3">
                    {stage.num}
                  </span>
                  {/* Stage Title */}
                  <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">
                    {stage.title}
                  </h3>
                  {/* Description */}
                  <p className="text-base text-brand-secondary leading-relaxed max-w-[280px]">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 08: Authority / Insights Experience (DARK / INSIGHTS) */}
        <section
          id="insights"
          className="bg-background text-foreground border-t border-brand-border/40 py-s64 md:py-s80 lg:py-s96 relative"
          style={{
            '--background': '#111111',
            '--foreground': '#F8F7F4',
            '--text-secondary': '#A3A3A3',
            '--border': '#2E2D2B'
          } as React.CSSProperties}
        >
          <Container>
            {/* Section Introduction */}
            <div className="flex flex-col items-start text-left mb-s32 md:mb-s48 lg:mb-s64 animate-fade-in-up">
              <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold mb-2.5">
                INSIGHTS
              </Typography>
              <h2 className="text-section-heading font-semibold tracking-tight text-foreground leading-[1.04] max-w-[850px] mb-4 md:mb-6">
                Thinking beyond the technology.
              </h2>
              <p className="text-body text-brand-secondary leading-[1.5] max-w-[600px]">
                Perspectives on AI, digital products, transformation, and the decisions that shape what comes next.
              </p>
            </div>

            {/* Large Typographic Authority Brand Messaging Statement */}
            <div className="w-full mb-s48 md:mb-s64 lg:mb-s80 animate-fade-in-up">
              <h3 className="font-sans text-3xl md:text-5xl lg:text-[56px] font-bold text-foreground tracking-tight leading-[1.08] max-w-[960px]">
                Good technology is not about doing more. <br className="hidden sm:inline" />
                It is about making better decisions.
              </h3>
            </div>

            {/* Editorial Index Layout (12-column grid layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-s48 md:mb-s64 lg:mb-s80">
              {/* Left Column: Simple Header Label & Medium Editorial Image (4 Columns) */}
              <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-[120px] h-fit gap-8">
                <Typography variant="caption" className="text-brand-secondary tracking-[0.2em] font-semibold">
                  06 — THINKING
                </Typography>
                
                {/* Medium Editorial Image */}
                <div className="relative w-full aspect-[4/5] rounded-small-ui overflow-hidden shadow-sm hidden lg:block border border-brand-border/60">
                  <ImageWrapper
                    src="/images/insights-strategist.jpg"
                    alt="Senior strategist analyzing system scaling blueprints and digital product flows in a calm luxury office environment"
                    fill
                    radius="small"
                    hoverEffect="none"
                    wrapperClassName="w-full h-full"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Insight Index Rows (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col divide-y divide-brand-border/60">
                {insightsList.map((item) => (
                  <div
                    key={item.num}
                    tabIndex={0}
                    role="button"
                    aria-label={`Insight Topic ${item.num}: ${item.title}`}
                    className="group py-5 md:py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-all duration-300 opacity-75 hover:opacity-100 focus:opacity-100 outline-none focus-visible:ring-1 focus-visible:ring-brand-accent/40 rounded-small-ui px-2 md:px-4 -mx-2 md:-mx-4 cursor-default"
                  >
                    <div className="flex items-start gap-6 md:gap-8 max-w-[640px]">
                       {/* Number */}
                       <span className="font-mono text-xs lg:text-sm tracking-wider text-brand-secondary font-semibold pt-1 shrink-0">
                         {item.num}
                       </span>
                       {/* Content with Category and Title */}
                       <div className="flex flex-col gap-1.5 transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1">
                         <span className="font-mono text-[10px] md:text-xs tracking-wider text-brand-secondary uppercase font-semibold">
                           {item.category}
                         </span>
                         <h3 className="text-xl md:text-[25px] font-semibold text-foreground tracking-tight leading-snug group-hover:text-brand-accent group-focus:text-brand-accent transition-all duration-300">
                           {item.title}
                         </h3>
                       </div>
                    </div>
                    {/* Arrow Link Indicator with Slide Hover Effect */}
                    <div className="flex items-center shrink-0 self-end md:self-start pt-1 pl-12 md:pl-0">
                       <span className="text-xl text-brand-secondary group-hover:text-brand-accent group-hover:translate-x-1.5 group-focus:text-brand-accent group-focus:translate-x-1.5 transition-all duration-300">
                         →
                       </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 09: Final CTA Experience */}
        <section
          id="contact"
          className="bg-background text-foreground py-s80 md:py-s96 lg:py-s128 relative flex flex-col justify-center min-h-[60vh]"
          style={{
            '--background': '#111111',
            '--foreground': '#F8F7F4',
            '--text-secondary': '#A3A3A3',
            '--border': '#2E2D2B'
          } as React.CSSProperties}
        >
          <Container>
            {/* Editorial Content Block */}
            <div className="flex flex-col items-start text-left max-w-[850px] animate-fade-in-up">
              {/* Eyebrow */}
              <span className="font-mono text-xs md:text-sm tracking-[0.2em] font-semibold text-brand-secondary uppercase mb-4 block">
                {"LET'S BUILD WHAT MATTERS"}
              </span>
              
              {/* Large Dominant Headline */}
              <h2 className="text-4xl md:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.0] max-w-[850px] mb-6 md:mb-8">
                Have a problem worth solving?
              </h2>
              
              {/* Supporting Copy */}
              <p className="text-lg md:text-[20px] text-brand-secondary leading-relaxed max-w-[560px] mb-10 md:mb-12">
                {"Tell us what you're trying to change. We'll help you find the clearest path from strategy to action."}
              </p>
              
              {/* Action Button */}
              <Button
                variant="primary"
                size="lg"
                className="transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:hello@pixeldecode.com?subject=Strategic Consultation Request";
                }}
              >
                Start a Conversation &nbsp; →
              </Button>
            </div>
          </Container>
        </section>

        {/* Footer Area */}
        <footer
          className="bg-background text-foreground border-t border-brand-border py-16 md:py-24"
          style={{
            '--background': '#111111',
            '--foreground': '#F8F7F4',
            '--text-secondary': '#A3A3A3',
            '--border': '#2E2D2B'
          } as React.CSSProperties}
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start mb-16 md:mb-24">
              {/* Left Column: Logo & Short Statement (5 Columns) */}
              <div className="md:col-span-5 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-6">
                  <Logo className="w-8 h-8 text-foreground" />
                  <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold text-foreground">
                    Pixel Decode
                  </span>
                </div>
                <p className="text-sm text-brand-secondary leading-relaxed max-w-[320px]">
                  Strategy, product, design, technology, and AI for organizations building what comes next.
                </p>
              </div>

              {/* Center Column: Smooth Navigation Links (4 Columns) */}
              <div className="md:col-span-4 flex flex-col gap-4">
                <span className="font-mono text-[10px] md:text-xs tracking-wider text-brand-secondary uppercase font-semibold">
                  Navigation
                </span>
                <nav className="flex flex-col gap-3">
                  {["Services", "Solutions", "Industries", "Insights", "About"].map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-brand-secondary hover:text-foreground transition-colors duration-300 w-fit"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Right Column: Contact Address (3 Columns) */}
              <div className="md:col-span-3 flex flex-col gap-4">
                <span className="font-mono text-[10px] md:text-xs tracking-wider text-brand-secondary uppercase font-semibold">
                  Contact
                </span>
                <a
                  href="mailto:hello@pixeldecode.com"
                  className="text-sm text-brand-secondary hover:text-foreground transition-colors duration-300 w-fit"
                >
                  hello@pixeldecode.com
                </a>
              </div>
            </div>

            {/* Legal Bottom Row */}
            <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-xs text-brand-secondary font-medium">
                © {new Date().getFullYear()} Pixel Decode. All rights reserved.
              </span>
              <div className="flex items-center gap-6">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="text-xs text-brand-secondary hover:text-foreground transition-colors duration-200 cursor-default"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="text-xs text-brand-secondary hover:text-foreground transition-colors duration-200 cursor-default"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}

