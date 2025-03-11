import HeroPreview from "@/app/about/About-ui";
import Contact from "@/app/about/Contact";
import KeyToSuccess from "@/app/about/Keytosuccess/KeyToSuccess";
import StoryMission from "@/app/about/StoryMission";
import TeamMember from "@/app/about/TeamMember";

import { Button } from "@/components/ui/button";

import React from "react";

const About = () => {
  return (
    <>
      <main className="flex-1 md:py-5">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="">
            <HeroPreview />
          </div>
          {/* Section: Story & Mission */}
          <div className="">
            <StoryMission />
          </div>

          {/* Section: Team Members */}

          <div className="">
            <TeamMember />
          </div>
          <main className="">
            <div className="grid grid-cols-6 grid-rows-6 gap-4 w-full h-full">
              <div className="col-span-2 row-span-6 flex justify-center items-center">
                <KeyToSuccess />
              </div>
              <div className="col-span-2 row-span-6 col-start-3 flex justify-center items-center">
                <KeyToSuccess />
              </div>
              <div className="col-span-2 row-span-6 col-start-5 flex justify-center items-center">
                <KeyToSuccess />
              </div>
            </div>
          </main>
          <div className="h-screen">
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
