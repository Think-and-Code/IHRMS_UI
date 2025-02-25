import React from "react";

interface StatsOverviewProps {
    title: string;
    value: number | string;
    updatedAt: string;
    bgColor?: string;
    textColor?: string;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({
    title,
    value,
    updatedAt,
    bgColor = "bg-violet-100",
    textColor = "text-gray-800",
}) => {
    return (
        <div className={`${bgColor} p-6 rounded-lg shadow-lg`}>
            <h2 className={`text-lg font-bold ${textColor}`}>{title}</h2>
            <p className="text-4xl font-semibold text-gray-600 mt-2">{value}</p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
                <span>Updated {updatedAt}</span>
            </div>
        </div>
    );
};

export default StatsOverview;
