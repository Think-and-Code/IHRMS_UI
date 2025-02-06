import React from "react";

import StatsOverview from "../components/StatsOverview";
import RecentActivities from "../components/RecentActivities";

const Home: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          <StatsOverview title={"Users"} value={"12"} updatedAt={"2 minutes ago"} />
          <StatsOverview title={"Pending Tasks"} value={"3"} updatedAt={"50 seconds ago"} />
          <StatsOverview title={"Completed Tasks"} value={"6"} updatedAt={"1 hour ago"} />
        </div>
        <RecentActivities />
      </div>
    </div>
  );
};

export default Home;
