import React, { useEffect, useState, useRef } from "react";
import StatsOverview from "../components/StatsOverview";
import RecentActivities from "../components/RecentActivities";

const LazySection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 1.0 } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[400px] opacity-0 transition-opacity duration-1000 ease-in-out" 
         style={{ opacity: isVisible ? 1 : 0 }}>
      {isVisible && children}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="!scroll-smooth">
      <LazySection>
        <div className="flex">
          <div className="flex-1 p-15">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
              <StatsOverview title={"Users"} value={"12"} updatedAt={"2 minutes ago"} />
              <StatsOverview title={"Pending Tasks"} value={"3"} updatedAt={"50 seconds ago"} />
              <StatsOverview title={"Completed Tasks"} value={"6"} updatedAt={"1 hour ago"} />
            </div>
            <RecentActivities />
          </div>
        </div>
      </LazySection>

      <LazySection>
        <div className="flex">
          <div className="flex-1 p-15">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
              <StatsOverview title={"Users"} value={"12"} updatedAt={"2 minutes ago"} />
              <StatsOverview title={"Pending Tasks"} value={"3"} updatedAt={"50 seconds ago"} />
              <StatsOverview title={"Completed Tasks"} value={"6"} updatedAt={"1 hour ago"} />
            </div>
            <RecentActivities />
          </div>
        </div>
      </LazySection>

      <LazySection>
        <div className="flex">
          <div className="flex-1 p-15">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
              <StatsOverview title={"Users"} value={"12"} updatedAt={"2 minutes ago"} />
              <StatsOverview title={"Pending Tasks"} value={"3"} updatedAt={"50 seconds ago"} />
              <StatsOverview title={"Completed Tasks"} value={"6"} updatedAt={"1 hour ago"} />
            </div>
            <RecentActivities />
          </div>
        </div>
      </LazySection>
    </div>
  );
};

export default Home;
