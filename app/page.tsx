import ProfileHeader from "../components/ProfileHeader";
import ProfileDetails from "../components/ProfileDetails";
import SidebarRight from "../components/SidebarRight";

export default function HomePage() {
  return (
    <div className="flex space-x-4 mt-4">
      <div className="flex-1">
        <ProfileHeader />
        <ProfileDetails />
      </div>
    </div>
  );
}
