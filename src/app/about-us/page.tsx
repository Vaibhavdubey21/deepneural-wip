"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Globe,
  Lightbulb,
  Rocket,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import SectionHeading from "../components/SectionHeading";
import HeaderSection from "../components/sections/HeaderSection";
import AnimatedCounter from "../components/AnimatedCounter";

const AboutPage: React.FC = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  const visionY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const missionY = useTransform(smoothProgress, [0, 1], [0, -50]);

  const valuesRef = useRef(null);
  const { scrollYProgress: valuesProgress } = useScroll({
    target: valuesRef,
    offset: ["start end", "end start"],
  });

  const smoothValuesProgress = useSpring(valuesProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  // Balanced Y offsets for the grid
  const valuesY1 = useTransform(smoothValuesProgress, [0, 1], [0, -30]);
  const valuesY2 = useTransform(smoothValuesProgress, [0, 1], [0, -30]);
  const valuesY3 = useTransform(smoothValuesProgress, [0, 1], [0, -30]);

  const statsRef = useRef(null);
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });

  const smoothStatsProgress = useSpring(statsProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  const statsY = useTransform(smoothStatsProgress, [0, 1], [0, -50]);

  const teamRef = useRef(null);
  const { scrollYProgress: teamProgress } = useScroll({
    target: teamRef,
    offset: ["start end", "end start"],
  });

  const smoothTeamProgress = useSpring(teamProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });
  const teamTextY1 = useTransform(smoothTeamProgress, [0, 1], [80, -80]);
  const teamTextY2 = useTransform(smoothTeamProgress, [0, 1], [40, -40]);

  const techRef = useRef(null);
  return (
    <div>
      <HeaderSection
        title="About DeepNeural"
        subtitle="Helping real estate investment firms and modern businesses
            grow through Artificial Intelligence and Custom Software Development"
      />

      {/* Mission and Vision */}
      <section
        className="py-20 pt-18 bg-white dark:bg-black overflow-hidden"
        ref={scrollRef}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              subheading="What drives us"
              heading="Vision & Mission"
              description="The principles that guide how we build autonomous AI
                agents—responsibly, reliably, and at scale."
            />
          </div>
          {/* Section header */}

          <div className="flex flex-col gap-8 mt-12 relative max-w-7xl mx-auto">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full pointer-events-none opacity-20 dark:opacity-30">
              <div className="absolute top-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            {/* Vision Card */}
            <motion.div
              style={{ y: visionY }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01, zIndex: 20 }}
              className="
                group relative overflow-hidden rounded-2xl
                bg-white dark:bg-zinc-950
                border border-zinc-200/60 dark:border-zinc-800/60
                shadow-md hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.3)]
                hover:border-primary/50 transition-all duration-500
                p-5 md:p-6
              "
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-all duration-1000" />

              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative rounded-2xl p-4 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Rocket size={32} className="text-primary" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                    OUR VISION
                  </p>
                  <h3 className="mt-2 text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors duration-300">
                    Defining the Future of Intelligent Automation.
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                To become a leading technology partner for real estate
                investment firms and modern businesses, helping them
                modernize operations, elevate decision-making, and achieve
                breakthrough performance through AI, custom software, and
                automation.
              </p>

              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/60">
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 italic">
                  &quot;We envision technology as a trusted partner in every
                  organization—practical when applied, transparent always,
                  and guided by real business needs.&quot;
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              style={{ y: missionY }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, scale: 1.01, zIndex: 20 }}
              className="
                group relative overflow-hidden rounded-2xl
                bg-white dark:bg-zinc-950
                border border-zinc-200/60 dark:border-zinc-800/60
                shadow-md hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.3)]
                hover:border-primary/50 transition-all duration-500
                p-5 md:p-6
              "
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-all duration-1000" />

              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative rounded-2xl p-4 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Target size={32} className="text-primary" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                    OUR MISSION
                  </p>
                  <h3 className="mt-2 text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors duration-300">
                    Turning AI Innovation into Everyday Impact.
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Our mission is to help businesses leverage Real Estate
                Investment technology, Artificial Intelligence, and Custom
                Software Development to improve efficiency, simplify
                operations, and support sustainable growth. By building
                scalable solutions across real estate, healthcare, financial
                services, and enterprise teams, we help businesses operate
                smarter, faster, and more efficiently.
              </p>

              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/60">
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 italic">
                  &quot;We build technology that works alongside teams—taking
                  on repetitive and complex tasks so people can focus on
                  creative and strategic work.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section
        className="py-24 bg-white dark:bg-black overflow-hidden relative"
        ref={valuesRef}
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] -right-20 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at DeepNeural"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-20 max-w-6xl mx-auto">
            {[
              {
                icon: <Lightbulb size={40} />,
                title: "Innovation",
                description:
                  "We design agentic AI systems that break down complexity into intelligent, self-driven workflows.Continuous experimentation and learning shape how we build scalable automation that adapts and evolves.",
                color: "indigo",
              },
              {
                icon: <Award size={40} />,
                title: "Excellence",
                description:
                  "We hold our autonomous systems to the same standards we hold ourselves—precision, reliability, and performance. Every solution is engineered, tested, and delivered with a focus on measurable impact and long-term value.",
                color: "violet",
              },
              {
                icon: <Globe size={40} />,
                title: "Responsibility",
                description:
                  "We develop and deploy agentic AI with accountability, ethics, and trust at the core. Our responsibility extends beyond technology—driving positive impact for communities, businesses, and society.",
                color: "emerald",
              },
              {
                icon: <Zap size={40} />,
                title: "Collaboration",
                description:
                  "We work as one ecosystem—teams, partners, and clients—aligned toward shared outcomes.Co-creation and transparency are embedded in how our AI agents integrate seamlessly into real business workflows.",
                color: "rose",
              },
            ].map((value, index) => {
              const colorMaps = {
                indigo: {
                  border: "hover:border-indigo-500/50",
                  shadow: "hover:shadow-indigo-500/30",
                  glow: "bg-indigo-500",
                  iconBg: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
                  iconText: "text-indigo-600 dark:text-indigo-400",
                },
                blue: {
                  border: "hover:border-blue-500/50",
                  shadow: "hover:shadow-blue-500/30",
                  glow: "bg-blue-500",
                  iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
                  iconText: "text-blue-600 dark:text-blue-400",
                },
                violet: {
                  border: "hover:border-violet-500/50",
                  shadow: "hover:shadow-violet-500/30",
                  glow: "bg-violet-500",
                  iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
                  iconText: "text-violet-600 dark:text-violet-400",
                },
                emerald: {
                  border: "hover:border-emerald-500/50",
                  shadow: "hover:shadow-emerald-500/30",
                  glow: "bg-emerald-500",
                  iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
                  iconText: "text-emerald-600 dark:text-emerald-400",
                },
                amber: {
                  border: "hover:border-amber-500/50",
                  shadow: "hover:shadow-amber-500/30",
                  glow: "bg-amber-500",
                  iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
                  iconText: "text-amber-600 dark:text-amber-400",
                },
                rose: {
                  border: "hover:border-rose-500/50",
                  shadow: "hover:shadow-rose-500/30",
                  glow: "bg-rose-500",
                  iconBg: "bg-rose-500/10 group-hover:bg-rose-500/20",
                  iconText: "text-rose-600 dark:text-rose-400",
                },
              };

              const style =
                colorMaps[value.color as keyof typeof colorMaps] ||
                colorMaps.indigo;

              // Assign staggered Y based on column
              const columnY = [valuesY1, valuesY2, valuesY3][index % 3];

              return (
                <motion.div
                  key={index}
                  style={{ y: columnY }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01, zIndex: 10 }}
                  className={`
                  relative group p-6 md:p-7 rounded-2xl transition-all duration-500
                  border-2 border-zinc-200 dark:border-zinc-800
                  bg-white dark:bg-zinc-950
                  hover:shadow-lg ${style.border} ${style.shadow}
                `}
                >
                  {/* Subtle colored background glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 transition-opacity duration-700 rounded-2xl ${style.glow}`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`
                      inline-flex p-3 rounded-xl mb-4 transition-all duration-500 group-hover:scale-110
                      ${style.iconBg} ${style.iconText} shadow-sm
                    `}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white transition-colors group-hover:text-zinc-900 dark:group-hover:text-white">
                      {value.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm font-medium">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section
        className="py-24 bg-zinc-50 dark:bg-zinc-950/50 overflow-hidden relative"
        ref={teamRef}
      >
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experts behind DeepNeural's innovative AI solutions. Founded by industry veterans with decades of experience in technology, consulting, and AI innovation, our leadership team brings together unmatched expertise and vision."
            centered
          />

          <div className="max-w-5xl mx-auto mt-16 md:mt-24">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center translate-y-0">
              {/* Left: Founder Photo */}
              <motion.div className="w-full md:w-[320px] lg:w-[380px] shrink-0 mx-auto md:mx-0">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 group translate-y-0">
                  <Image
                    src="/img.jpeg"
                    alt="Vivek Saraf"
                    width={500}
                    height={500}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
                </div>
              </motion.div>

              {/* Right: Content with Accent Line */}
              <div className="w-full grow flex gap-6 md:gap-10">
                {/* Vertical Blue Line accent to match the mockup */}
                <div className="w-1.5 bg-primary/80 rounded-full shrink-0 my-2" />

                <div className="space-y-16">
                  {/* Founder Bio - Moving Layer 1 */}
                  <motion.div style={{ y: teamTextY1 }}>
                    <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white leading-tight">
                      <span className="text-primary">Vivek Saraf</span> –
                      Founder & CEO
                    </h3>
                    <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                      AI entrepreneur and technology leader and an{" "}
                      <span className="text-zinc-900 dark:text-white font-bold">
                        IIT Kanpur
                      </span>{" "}
                      alumnus with{" "}
                      <span className="text-zinc-900 dark:text-white font-bold">
                        23+ years
                      </span>{" "}
                      of experience in enterprise tech, AI automation, and
                      consulting—shaping DeepNeural&apos;s product and
                      innovation roadmap.
                    </p>
                  </motion.div>

                  {/* Team Section - Moving Layer 2 */}
                  <motion.div style={{ y: teamTextY2 }}>
                    <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white">
                      Our Leadership & Team
                    </h3>
                    <p className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                      Backed by talented{" "}
                      <span className="text-zinc-900 dark:text-white font-bold">
                        IITian&apos;s
                      </span>{" "}
                      and seasoned technologists driving AI innovation, product
                      engineering, and enterprise-grade delivery. We are a
                      fast-growing AI start up with{" "}
                      <span className="text-zinc-900 dark:text-white font-bold">
                        6+ members
                      </span>{" "}
                      strong team.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Achievements */}
      <section
        className="py-24 bg-white dark:bg-black overflow-hidden relative"
        ref={statsRef}
      >
        {/* Background gradient hint */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="DeepNeural by the Numbers"
            subtitle="Our growth and impact since 2018"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                label: "AI Agents Deployed",
                value: 16,
                icon: <Zap size={36} />,
                color: "indigo",
              },
              {
                label: "Team Members",
                value: 6,
                icon: <Users size={36} />,
                color: "blue",
              },
              {
                label: "Enterprise Clients",
                value: 8,
                icon: <Globe size={36} />,
                color: "emerald",
              },
            ].map((stat, index) => {
              const colorMaps = {
                indigo: {
                  text: "text-indigo-600 dark:text-indigo-400",
                  bg: "bg-indigo-500/10 dark:bg-indigo-500/5",
                  border: "hover:border-indigo-500/50",
                  shadow: "hover:shadow-indigo-500/20",
                  glow: "bg-indigo-500",
                  icon: "text-indigo-600 dark:text-indigo-400 border-indigo-500/20 bg-indigo-500/10 group-hover:bg-indigo-500/20",
                },
                blue: {
                  text: "text-blue-600 dark:text-blue-400",
                  bg: "bg-blue-500/10 dark:bg-blue-500/5",
                  border: "hover:border-blue-500/50",
                  shadow: "hover:shadow-blue-500/20",
                  glow: "bg-blue-500",
                  icon: "text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/10 group-hover:bg-blue-500/20",
                },
                emerald: {
                  text: "text-emerald-600 dark:text-emerald-400",
                  bg: "bg-emerald-500/10 dark:bg-emerald-500/5",
                  border: "hover:border-emerald-500/50",
                  shadow: "hover:shadow-emerald-500/20",
                  glow: "bg-emerald-500",
                  icon: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/10 group-hover:bg-emerald-500/20",
                },
              };

              const style = colorMaps[stat.color as keyof typeof colorMaps];

              return (
                <motion.div
                  key={index}
                  style={{ y: statsY }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: statsY.get() - 8, scale: 1.02 }}
                  className={`
                    group relative p-10 text-center rounded-[2.5rem] transition-all duration-500
                    bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800
                    hover:shadow-2xl ${style.border} ${style.shadow}
                  `}
                >
                  {/* Subtle colored background glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-700 rounded-[2.5rem] ${style.glow}`}
                  />

                  <div
                    className={`
                    inline-flex p-6 rounded-[2rem] mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                    ${style.icon} border shadow-lg relative z-10
                  `}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`relative z-10 text-5xl md:text-6xl font-black mb-3 transition-colors duration-500 ${style.text}`}
                  >
                    <AnimatedCounter value={stat.value} />+
                  </div>
                  <div className="relative z-10 text-zinc-500 dark:text-zinc-400 font-black uppercase tracking-[0.2em] text-xs">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-white dark:bg-black overflow-hidden relative"
        ref={techRef}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Our Technology Approach"
            subtitle="How we build practical AI and software solutions that deliver real business value"
            centered
          />

          <div className="max-w-4xl mx-auto mt-20">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-linear-to-b from-zinc-200 via-zinc-100 to-transparent dark:from-zinc-800 dark:via-zinc-900 -translate-x-1/2 z-0 md:block hidden"></div>

              {[
                {
                  title: "Deep Learning Foundation",
                  description:
                    "Our agents are built on advanced neural network architectures, trained on vast datasets to recognize patterns and make intelligent decisions.",
                  color: "indigo",
                },
                {
                  title: "Reinforcement Learning",
                  description:
                    "We use reinforcement learning techniques to enable our agents to learn from experiences and continuously improve their performance over time.",
                  color: "blue",
                },
                {
                  title: "Knowledge Integration",
                  description:
                    "Our systems integrate with your existing knowledge bases and data sources, leveraging your institutional knowledge to make better decisions.",
                  color: "emerald",
                },
                {
                  title: "Human-in-the-Loop Design",
                  description:
                    "We design our AI agents to work collaboratively with humans, providing transparency into decision-making and allowing for oversight.",
                  color: "violet",
                },
                {
                  title: "Continuous Improvement",
                  description:
                    "Our agents are constantly learning and evolving, adapting to new data and changing business conditions to deliver ever-improving results.",
                  color: "rose",
                },
              ].map((step, index) => {
                const colorMaps = {
                  indigo: {
                    border: "group-hover:border-indigo-500/50",
                    shadow:
                      "hover:shadow-[0_20px_60px_-12px_rgba(99,102,241,0.3)]",
                    glow: "from-indigo-500/10",
                    numberBorder: "border-indigo-500/50",
                    numberText: "text-indigo-600 dark:text-indigo-400",
                    numberBg: "bg-indigo-500/20",
                    title:
                      "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
                  },
                  blue: {
                    border: "group-hover:border-blue-500/50",
                    shadow:
                      "hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.3)]",
                    glow: "from-blue-500/10",
                    numberBorder: "border-blue-500/50",
                    numberText: "text-blue-600 dark:text-blue-400",
                    numberBg: "bg-blue-500/20",
                    title:
                      "group-hover:text-blue-600 dark:group-hover:text-blue-400",
                  },
                  emerald: {
                    border: "group-hover:border-emerald-500/50",
                    shadow:
                      "hover:shadow-[0_20px_60px_-12px_rgba(16,185,129,0.3)]",
                    glow: "from-emerald-500/10",
                    numberBorder: "border-emerald-500/50",
                    numberText: "text-emerald-600 dark:text-emerald-400",
                    numberBg: "bg-emerald-500/20",
                    title:
                      "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
                  },
                  violet: {
                    border: "group-hover:border-violet-500/50",
                    shadow:
                      "hover:shadow-[0_20px_60px_-12px_rgba(139,92,246,0.3)]",
                    glow: "from-violet-500/10",
                    numberBorder: "border-violet-500/50",
                    numberText: "text-violet-600 dark:text-violet-400",
                    numberBg: "bg-violet-500/20",
                    title:
                      "group-hover:text-violet-600 dark:group-hover:text-violet-400",
                  },
                  rose: {
                    border: "group-hover:border-rose-500/50",
                    shadow:
                      "hover:shadow-[0_20px_60px_-12px_rgba(244,63,94,0.3)]",
                    glow: "from-rose-500/10",
                    numberBorder: "border-rose-500/50",
                    numberText: "text-rose-600 dark:text-rose-400",
                    numberBg: "bg-rose-500/20",
                    title:
                      "group-hover:text-rose-600 dark:group-hover:text-rose-400",
                  },
                };

                const style =
                  colorMaps[step.color as keyof typeof colorMaps] ||
                  colorMaps.indigo;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 50,
                      delay: 0.1,
                    }}
                    className="flex items-start gap-8 mb-16 relative z-10 group"
                  >
                    <div className="relative shrink-0 ml-10 md:ml-0">
                      <div
                        className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-all rounded-full ${style.numberBg}`}
                      />
                      <div
                        className={`relative h-14 w-14 rounded-2xl bg-white dark:bg-zinc-900 border-2 ${style.numberBorder} flex items-center justify-center text-xl font-black ${style.numberText} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    <div
                      className={`bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-all duration-500 grow shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] ${style.shadow} ${style.border} translate-y-0 group-hover:-translate-y-2 relative overflow-hidden`}
                    >
                      {/* Colorful background glow for hover state */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${style.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                      />

                      <h3
                        className={`relative z-10 text-xl font-black mb-2 text-zinc-900 dark:text-white transition-colors ${style.title}`}
                      >
                        {step.title}
                      </h3>
                      <p className="relative z-10 text-zinc-500 dark:text-zinc-400 text-base leading-relaxed group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join Us on Our Mission
            </motion.h2>

            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Partner with DeepNeural to transform your business with AI,
              custom software, and automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact-us">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Contact Our Team
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Our Solutions
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
