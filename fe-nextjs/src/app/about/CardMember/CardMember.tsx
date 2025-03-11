import React from "react";
import "./styles.css";

interface CardMemberProps {
  name: string;
  role: string;
}
const CardMember: React.FC<CardMemberProps> = ({ name, role }) => {
  return (
    <div className="  items-center justify-center rounded-xl p-4">
      <div className="CardMember">
        <div className="card">
          <div>
            <img src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png" />
            <p className="heading">{name}</p>
            <p className="">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMember;
