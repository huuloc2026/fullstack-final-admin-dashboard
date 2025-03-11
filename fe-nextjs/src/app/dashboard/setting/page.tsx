import { PersonalInfo } from "./PersonalInfo";
import { ChangePassword } from "./ChangePassword";
import { PrivacySettings } from "./PrivacySettings";
import { DeleteAccount } from "./DeleteAccount";

export default function AccountSettings() {
  return (
    <div className="min-h-screen items-center justify-center space-y-4">
      {/* <PersonalInfo /> */}
      <ChangePassword />
      <PrivacySettings />
      <DeleteAccount />
    </div>
  );
}
