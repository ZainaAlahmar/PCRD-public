import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { ProfileSection } from "@/components/sections/ProfileSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ActivitiesSection />
      <ProfileSection />
    </>
  );
}
