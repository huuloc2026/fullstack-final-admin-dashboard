import AlertDialogWithIcon from "@/app/components/DiaLogShow";
import { fetchProfile } from "@/app/me/fetchProfile";
import Profile from "@/app/me/Profile";
import ImageAvatar from "@/app/me/Test";
import TestOke from "@/app/me/TestOke";

import React from "react";
import { toast } from "sonner";

const ProfilePage = async () => {
  const data = await fetchProfile();
  return (
    <>
      <div className="text-white">
        Hello, {data.name}
        <ImageAvatar />
        <TestOke />
        <AlertDialogWithIcon
          title="Delete Item"
          description="Are you sure you want to delete this item? This action cannot be undone."
          buttonLabel="Delete"
          variant="destructive"
        />
        <br />
        <div>{data ? <Profile /> : null}</div>
      </div>
    </>
  );
};

export default ProfilePage;
