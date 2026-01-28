'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Code,
  Database,
  Eye,
  LineChart,
  MessageSquare,
  Server,
  Shield,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import HeaderSection from '../components/sections/HeaderSection';

export default function ServicesPage() {
  const coreRef = useRef(null);
  const { scrollYProgress: coreProgress } = useScroll({
    target: coreRef,
    offset: ["start end", "end start"]
  });
  const smoothCoreProgress = useSpring(coreProgress, { stiffness: 70, damping: 20 });

  const coreY1 = useTransform(smoothCoreProgress, [0, 1], [40, -40]);
  const coreY2 = useTransform(smoothCoreProgress, [0, 1], [80, -80]);
  const coreY3 = useTransform(smoothCoreProgress, [0, 1], [60, -60]);

  const specializedRef = useRef(null);
  const { scrollYProgress: specializedProgress } = useScroll({
    target: specializedRef,
    offset: ["start end", "end start"]
  });
  const smoothSpecializedProgress = useSpring(specializedProgress, { stiffness: 70, damping: 20 });
  const specializedY1 = useTransform(smoothSpecializedProgress, [0, 1], [20, -20]);
  const specializedY2 = useTransform(smoothSpecializedProgress, [0, 1], [40, -40]);
  const specializedY3 = useTransform(smoothSpecializedProgress, [0, 1], [30, -30]);
  const specializedY4 = useTransform(smoothSpecializedProgress, [0, 1], [25, -25]);

  const processRef = useRef(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ["start end", "end start"]
  });
  const smoothProcessProgress = useSpring(processProgress, { stiffness: 70, damping: 20 });

  // Individual transforms for each process step (one-by-one reveal)
  const step1Y = useTransform(smoothProcessProgress, [0, 0.2], [100, 0]);
  const step1Opacity = useTransform(smoothProcessProgress, [0, 0.15], [0, 1]);

  const step2Y = useTransform(smoothProcessProgress, [0.15, 0.35], [100, 0]);
  const step2Opacity = useTransform(smoothProcessProgress, [0.15, 0.3], [0, 1]);

  const step3Y = useTransform(smoothProcessProgress, [0.3, 0.5], [100, 0]);
  const step3Opacity = useTransform(smoothProcessProgress, [0.3, 0.45], [0, 1]);

  const step4Y = useTransform(smoothProcessProgress, [0.45, 0.65], [100, 0]);
  const step4Opacity = useTransform(smoothProcessProgress, [0.45, 0.6], [0, 1]);

  const step5Y = useTransform(smoothProcessProgress, [0.6, 0.8], [100, 0]);
  const step5Opacity = useTransform(smoothProcessProgress, [0.6, 0.75], [0, 1]);
  return (
    <div>
      {/* Hero Section */}
      <HeaderSection
        title="Our AI Services"
        subtitle="Cutting-edge AI agent solutions tailored to your business needs"
      />
      {/* Main Services */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden relative" ref={coreRef}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent)] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Core AI Agent Solutions"
            subtitle="Our flagship services that are transforming industries"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-20">
            {[
              {
                icon: <Brain size={48} />,
                title: 'AI Agents for Businesses',
                description: 'Automating workflows, decision-making, and customer engagement.',
                features: [
                  'Build intelligent agents for customer support, sales, and lead generation.',
                  'Automate repetitive tasks to save time and reduce operational costs.',
                  'Enable real-time decision-making with AI-driven insights.',
                ],
                color: 'indigo',
                style: {
                  y: coreY1,
                  glow: 'group-hover:shadow-indigo-500/20 group-hover:border-indigo-500/30',
                  icon: 'text-indigo-600 dark:text-indigo-400',
                  bg: 'group-hover:bg-indigo-500/5'
                }
              },
              {
                icon: <MessageSquare size={48} />,
                title: 'AI SaaS Development',
                description: 'Scalable AI-powered SaaS platforms tailored for modern businesses.',
                features: [
                  'Develop cloud-native SaaS platforms with AI at the core.',
                  'Ensure scalability, security, and high availability for enterprise users.',
                  'Provide subscription-based AI solutions with seamless user experience.',
                ],
                color: 'blue',
                style: {
                  y: coreY2,
                  glow: 'group-hover:shadow-blue-500/20 group-hover:border-blue-500/30',
                  icon: 'text-blue-600 dark:text-blue-400',
                  bg: 'group-hover:bg-blue-500/5'
                }
              },
              {
                icon: <Eye size={48} />,
                title: 'Custom AI Development',
                description: 'From computer vision to NLP, we build AI models that solve real-world problems.',
                features: [
                  'Design and train AI models for industry-specific challenges.',
                  'Implement computer vision, NLP, predictive analytics, and recommendation systems.',
                  'Deliver end-to-end solutions from data preparation to deployment.',
                ],
                color: 'emerald',
                style: {
                  y: coreY3,
                  glow: 'group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/30',
                  icon: 'text-emerald-600 dark:text-emerald-400',
                  bg: 'group-hover:bg-emerald-500/5'
                }
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                style={{ y: service.style.y }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative h-full flex flex-col p-6 md:p-7 rounded-[1.5rem] bg-zinc-50 dark:bg-zinc-900/40 border-2 border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:border-primary/40 ${service.style.glow}`}
              >
                {/* Corner Radial Glow matching About Us page */}
                <div className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-100 ${service.style.bg.replace('bg-', 'bg-').replace('/5', '/10')} blur-[80px]`} />
                <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 ${service.style.bg} rounded-[1.5rem] pointer-events-none`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative mb-5 w-fit">
                    {/* Icon Aura matching About Us page */}
                    <div className={`absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${service.style.bg.replace('/5', '/40')}`} />
                    <div className={`relative p-3.5 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-100/50 dark:border-zinc-800/50 w-fit transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.style.icon}`}>
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-black mb-2.5 text-zinc-900 dark:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <div className="space-y-4 flex-grow">
                    <h4 className="text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 group/item">
                          <div className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${service.style.icon.split(' ')[0]} transition-transform group-hover/item:scale-150`} />
                          <span className="text-zinc-600 dark:text-zinc-400 text-[13px] font-medium leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button variant="outline" size="sm" className="w-full group/btn overflow-hidden relative py-2">
                      <Link href="/contact-us" className="flex items-center justify-center gap-2 relative z-10 text-xs">
                        Learn More <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50 overflow-hidden relative" ref={specializedRef}>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Specialized AI Services"
            subtitle="Targeted solutions for specific business challenges"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
            {[
              {
                icon: <LineChart size={36} />,
                title: 'Predictive Analytics',
                description: 'Forecast trends, identify opportunities, and mitigate risks with advanced predictive models.',
                color: 'indigo',
                bgHover: 'group-hover:bg-indigo-500/25',
                iconColor: 'text-indigo-600 dark:text-indigo-400',
                iconBg: 'bg-indigo-500/40',
                titleHover: 'group-hover:text-indigo-600',
                style: 'group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/30'
              },
              {
                icon: <Database size={36} />,
                title: 'Data Intelligence',
                description: 'Extract actionable insights from your data with our AI-powered analytics solutions.',
                color: 'blue',
                bgHover: 'group-hover:bg-blue-500/25',
                iconColor: 'text-blue-600 dark:text-blue-400',
                iconBg: 'bg-blue-500/40',
                titleHover: 'group-hover:text-blue-600',
                style: 'group-hover:shadow-blue-500/10 group-hover:border-blue-500/30'
              },
              {
                icon: <Zap size={36} />,
                title: 'Process Automation',
                description: 'Streamline operations with intelligent automation of repetitive and complex processes.',
                color: 'amber',
                bgHover: 'group-hover:bg-amber-500/25',
                iconColor: 'text-amber-600 dark:text-amber-400',
                iconBg: 'bg-amber-500/40',
                titleHover: 'group-hover:text-amber-600',
                style: 'group-hover:shadow-amber-500/10 group-hover:border-amber-500/30'
              },
              {
                icon: <Server size={36} />,
                title: 'AI Infrastructure',
                description: 'Build and maintain the robust infrastructure needed to support advanced AI operations.',
                color: 'zinc',
                bgHover: 'group-hover:bg-zinc-500/25',
                iconColor: 'text-zinc-600 dark:text-zinc-400',
                iconBg: 'bg-zinc-500/40',
                titleHover: 'group-hover:text-zinc-600',
                style: 'group-hover:shadow-zinc-500/10 group-hover:border-zinc-500/30'
              },
              {
                icon: <Shield size={36} />,
                title: 'AI Security',
                description: 'Protect your AI systems and data with our specialized security solutions.',
                color: 'rose',
                bgHover: 'group-hover:bg-rose-500/25',
                iconColor: 'text-rose-600 dark:text-rose-400',
                iconBg: 'bg-rose-500/40',
                titleHover: 'group-hover:text-rose-600',
                style: 'group-hover:shadow-rose-500/10 group-hover:border-rose-500/30'
              },
              {
                icon: <Code size={36} />,
                title: 'Custom AI Development',
                description: 'Bespoke AI solutions tailored to your unique business requirements and challenges.',
                color: 'emerald',
                bgHover: 'group-hover:bg-emerald-500/25',
                iconColor: 'text-emerald-600 dark:text-emerald-400',
                iconBg: 'bg-emerald-500/40',
                titleHover: 'group-hover:text-emerald-600',
                style: 'group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/30'
              },
              {
                icon: <Brain size={36} />,
                title: 'AI Consulting',
                description: 'Strategic guidance on implementing AI to transform your business operations.',
                color: 'violet',
                bgHover: 'group-hover:bg-violet-500/25',
                iconColor: 'text-violet-600 dark:text-violet-400',
                iconBg: 'bg-violet-500/40',
                titleHover: 'group-hover:text-violet-600',
                style: 'group-hover:shadow-violet-500/10 group-hover:border-violet-500/30'
              },
              {
                icon: <MessageSquare size={36} />,
                title: 'Conversational AI',
                description: 'Create natural, engaging interactions between your systems and users.',
                color: 'cyan',
                bgHover: 'group-hover:bg-cyan-500/25',
                iconColor: 'text-cyan-600 dark:text-cyan-400',
                iconBg: 'bg-cyan-500/40',
                titleHover: 'group-hover:text-cyan-600',
                style: 'group-hover:shadow-cyan-500/10 group-hover:border-cyan-500/30'
              },
            ].map((service, index) => {
              // Assign staggered Y based on column (4 columns)
              const columnY = [specializedY1, specializedY2, specializedY3, specializedY4][index % 4];

              return (
                <motion.div
                  key={index}
                  style={{ y: columnY }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group p-5 md:p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border-2 border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:scale-[1.02] h-full flex flex-col relative overflow-hidden group-hover:shadow-2xl group-hover:z-20 ${service.style} ${service.bgHover}`}
                >
                  {/* Corner Radial Glow */}
                  <div className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full transition-all duration-1000 opacity-0 group-hover:opacity-100 bg-${service.color}-500/10 blur-[40px]`} />

                  <div className="relative mb-4 w-fit">
                    {/* Icon Aura */}
                    <div className={`absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${service.iconBg}`} />
                    <div className={`relative p-3 bg-white dark:bg-zinc-900 rounded-lg shadow-sm w-fit ${service.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>

                  <h3 className={`text-base font-bold mb-1.5 text-zinc-900 dark:text-white ${service.titleHover} transition-colors relative z-10`}>
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[13px] leading-relaxed relative z-10 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden relative" ref={processRef}>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Our Implementation Process"
            subtitle="How we deliver exceptional AI solutions for your business"
            centered
          />

          <div className="relative mt-24 max-w-4xl mx-auto">
            {/* Background Line */}
            <div className="absolute top-0 bottom-0 left-[48px] md:left-1/2 w-1.5 bg-zinc-100 dark:bg-zinc-800 -translate-x-1/2 z-0 hidden sm:block rounded-full" />

            {[
              {
                title: 'Discovery & Assessment',
                description:
                  'We begin by understanding your business, challenges, and goals. Our team conducts a thorough assessment to identify opportunities where AI agents can create the most value.',
                icon: <Brain size={32} />,
              },
              {
                title: 'Solution Design',
                description:
                  'Our AI architects design a custom solution tailored to your specific needs, selecting the right technologies and approaches to address your unique challenges.',
                icon: <Code size={32} />,
              },
              {
                title: 'Development & Training',
                description:
                  'We develop your AI agents and train them using your data, continuously refining their capabilities to ensure they meet your performance requirements.',
                icon: <Database size={32} />,
              },
              {
                title: 'Integration & Deployment',
                description:
                  'We seamlessly integrate the AI solution with your existing systems and deploy it in your environment, ensuring minimal disruption to your operations.',
                icon: <Server size={32} />,
              },
              {
                title: 'Monitoring & Optimization',
                description:
                  'After deployment, we continuously monitor the performance of your AI agents, making adjustments and improvements to maximize their effectiveness.',
                icon: <LineChart size={32} />,
              },
            ].map((step, index) => {
              // Use pre-defined transforms for each step
              const stepTransforms = [
                { y: step1Y, opacity: step1Opacity },
                { y: step2Y, opacity: step2Opacity },
                { y: step3Y, opacity: step3Opacity },
                { y: step4Y, opacity: step4Opacity },
                { y: step5Y, opacity: step5Opacity },
              ][index];

              return (
                <motion.div
                  key={index}
                  style={{ y: stepTransforms.y, opacity: stepTransforms.opacity }}
                  className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16 md:mb-20 relative z-10"
                >
                  {/* Icon/Number Column - Always on Left */}
                  <div className="md:w-1/3 flex justify-center md:justify-end md:pr-8">
                    <div className="relative">
                      <div className="bg-primary text-white p-6 rounded-3xl shadow-2xl shadow-primary/20 h-24 w-24 flex items-center justify-center relative z-10 border-4 border-white dark:border-zinc-900 transition-transform duration-500 hover:scale-110">
                        {step.icon}
                        <div className="absolute -top-3 -right-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 w-10 h-10 rounded-2xl flex items-center justify-center font-black text-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card Column - Always on Right */}
                  <div className="md:w-2/3 text-center md:text-left">
                    <div className="bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border-2 border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-xl hover:border-primary/40 group">
                      <h3 className="text-2xl md:text-3xl font-black mb-4 text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-white">
              Ready to Transform Your Business with AI?
            </motion.h2>

            <motion.p className="text-xl mb-8 text-zinc-400">
              Contact us today to discuss how our AI agents can help you achieve
              your business goals.
            </motion.p>

            <motion.div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="shadow-xl transition-all"
              >
                <Link href="/contact-us">Schedule a Consultation</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <Link href="/clients">View Case Studies</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
