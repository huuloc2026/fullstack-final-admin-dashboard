import CardDemoHero from "@/app/about/CardDemoHero/CardDemoHero";
import Link from "next/link";
import React from "react";

const HeroPreview = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          About Us
        </h1>
        <p className="max-w-2xl text-neutral-600 dark:text-neutral-300 md:text-lg">
          We&apos;re on a mission to help teams build, deploy, and scale the
          best web experiences.
        </p>
        <div className="flex justify-center gap-4">
          {/* <CardDemoHero />
          <CardDemoHero />
          <CardDemoHero /> */}
        </div>
      </div>
    </>
  );
};

export default HeroPreview;
