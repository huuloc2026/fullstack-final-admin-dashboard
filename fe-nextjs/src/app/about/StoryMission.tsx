import { CheckCircleIcon } from "lucide-react";
import React from "react";

const StoryMission = () => {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
      {[
        {
          title: "Our Story",
          text: "Founded in 2020, our company started as a small team of passionate developers who believed in building a better web. Over the years, we have grown into a global platform that powers millions of websites, applications, and e-commerce experiences.",
          points: [
            "Started with a small but dedicated team.",
            "Grew into a global platform in just a few years.",
            "Empowering developers and businesses worldwide.",
          ],
        },
        {
          title: "Our Mission",
          text: "We believe in the power of technology to bring people together, drive innovation, and create meaningful experiences. Our mission is to provide developers with the tools and resources they need to build the future of the internet.",
          points: [
            "Deliver high-quality, scalable solutions.",
            "Support open-source development and collaboration.",
            "Continuously innovate to meet evolving digital needs.",
          ],
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-4 lg:items-start lg:text-left"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">{item.title}</h2>
          <p className="max-w-prose text-neutral-600 dark:text-neutral-300 md:text-lg">
            {item.text}
          </p>
          <ul className="space-y-2">
            {item.points.map((point, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-neutral-600 dark:text-neutral-300">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StoryMission;
