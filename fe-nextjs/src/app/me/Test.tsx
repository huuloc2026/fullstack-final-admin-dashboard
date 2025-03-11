import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
const ImageAvatar = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <Avatar>
          <AvatarImage src={faker.image.avatar()} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faker.image.avatar()} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faker.image.avatar()} />
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faker.image.avatar()} />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faker.image.avatar()} />
          <AvatarFallback>GH</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={faker.image.avatar()} />
          <AvatarFallback>IJ</AvatarFallback>
        </Avatar>
      </div>
    </React.Fragment>
  );
};

export default ImageAvatar;
