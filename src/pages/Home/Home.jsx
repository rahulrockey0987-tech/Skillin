import Hero from "../../components/home/Hero";
import SearchSection from "../../components/home/SearchSection";
import Companies from "../../components/home/Companies";
import PopularCourses from "../../components/home/PopularCourses";
import Internships from "../../components/home/Internships";
import LatestJobs from "../../components/home/LatestJobs";
import Stats from "../../components/home/Stats";
import WhyChoose from "../../components/home/WhyChoose";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <Companies />
      <PopularCourses />
      <Internships />
      <LatestJobs />
      <Stats />
      <WhyChoose />
      <CTA />
      <Footer />
    </>
  );
}