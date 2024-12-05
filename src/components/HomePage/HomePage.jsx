import React, { useEffect } from "react";
import { PageLayout } from "@/utils/PageLayout/PageLayout";
import HeroHome from "./Hero/Hero";
import ServicesHome from "./Services/Services";
import PrivilegesHome from "./Privileges/Privileges";
import InstructionHome from "./Instruction/Instruction";
import PricingHome from "./Pricing/Pricing";
import WhyPayard from "./WhyPayard/WhyPayard";
import CTA from "./CTA/CTA";
import Consulting from "./Consulting/Consulting";
import UpcomingFeatures from "./UpcomingFeatures/UpcomingFeatures";

const HomePage = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <HeroHome />
      <ServicesHome />
      <PrivilegesHome />
      <InstructionHome />
      <PricingHome />
      <WhyPayard />
      <CTA />
      <Consulting />
      <UpcomingFeatures />
    </PageLayout>
  );
};

export default HomePage;
