import { motion } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import { useState } from "react";
// Frontend copy protection only prevents casual copying.
// Browser-rendered content cannot be fully protected from advanced users.
import ahmedImg from "@/assets/ahmed.jpg";
import hamidImg from "@/assets/hamid.jpg";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  socials: { icon: typeof Linkedin; href: string }[];
}

const team: TeamMember[] = [
  {
    name: "Ahmed Sarfraz",
    role: "Founder & CEO",
    bio: "Visionary leader driving Code Envision Technologies' mission to deliver world-class software, AI platforms, and digital solutions from Pakistan to the globe.",
    image: ahmedImg,
    alt: "Ahmed Sarfraz - Founder and CEO of Code Envision Technologies",
    socials: [
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/ahmed-tatla-36a458268?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
    ],
  },
  {
    name: "Hamid Saifullah",
    role: "Co-Founder & CTO",
    bio: "Co-Founder & CTO focused on scalable full-stack systems, cloud architecture, and reliable product engineering for modern web, SaaS, and AI platforms.",
    image: hamidImg,
    alt: "Hamid Saifullah - Co-Founder and CTO of Code Envision Technologies",
    socials: [
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/hamid-s-baa10b292?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
    ],
  },
];

const TeamAvatar = ({ src, alt }: { src: string; alt: string }) => {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <User className="text-muted-foreground" size={32} aria-hidden="true" />
        <span className="sr-only">{alt}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => setErrored(true)}
      className="protected-image w-full h-full object-cover object-center"
    />
  );
};

const TeamSection = () => {
  return (
    <section className="relative z-10 px-6 py-16 md:py-24">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-gradient-headline mb-4">
            Our Team
          </h2>
          <p className="text-sm text-silver max-w-2xl mx-auto leading-relaxed">
            Meet the people behind Code Envision Technologies, focused on software engineering, AI development, product design, and digital growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-2xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative glass glass-hover rounded-2xl overflow-hidden"
            >
              <div className="relative p-6 md:p-8">
                <div className="mb-5">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg bg-white ring-1 ring-white/10">
                    <TeamAvatar src={member.image} alt={member.alt} />
                  </div>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-foreground tracking-[-0.01em] mb-1">
                  {member.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--glow-purple))] font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-silver leading-relaxed mb-5">
                  {member.bio}
                </p>

                <div className="flex items-center gap-2">
                  {member.socials.map((social, si) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={si}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-[hsl(0_0%_100%/0.04)] border border-[hsl(0_0%_100%/0.06)] flex items-center justify-center hover:border-[hsl(0_0%_100%/0.15)] hover:bg-[hsl(0_0%_100%/0.08)] transition-all duration-300"
                      >
                        <SocialIcon size={14} className="text-dim hover:text-silver" />
                      </a>
                    );
                  })}
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        "radial-gradient(circle at top right, hsl(260 80% 65% / 0.08), transparent 70%)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
