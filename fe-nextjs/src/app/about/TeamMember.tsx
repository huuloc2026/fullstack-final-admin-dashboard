import CardMember from "@/app/about/CardMember/CardMember";
import React from "react";

const teamMembers = [
  { name: "Alice Johnson", role: "Product Manager" },
  { name: "Bob Smith", role: "Software Engineer" },
  { name: "Ella Brown", role: "UX Designer" },
];

const TeamMember = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-6 ">
      <div className="col-span-2 row-span-6 flex h-full w-full justify-center">
        {" "}
        <CardMember name={"Alice Johnson"} role={"Product Manager"} />
      </div>
      <div className="col-span-2 row-span-6 col-start-3 flex h-full w-full justify-center">
        {" "}
        <CardMember name={"Alice Johnson"} role={"Product Manager"} />
      </div>
      <div className="col-span-2 row-span-6 col-start-5 flex h-full w-full justify-center">
        {" "}
        <CardMember name={"Alice Johnson"} role={"Product Manager"} />
      </div>
    </div>
  );
};

export default TeamMember;
