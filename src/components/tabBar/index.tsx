"use client"

import type { MovieCategory } from "@/types/movie"

interface TabBarProps {
  activeTab: MovieCategory
  onTabChange: (tab: MovieCategory) => void
}

const tabs = [
  { key: "now_playing" as MovieCategory, label: "Now Playing" },
  { key: "top_rated" as MovieCategory, label: "Top Rated" },
]

const TabBar = ({ activeTab, onTabChange }: TabBarProps) => {
  return (
    <div className="tabBar">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`tab ${activeTab === tab.key && "active"}`}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
};

export default TabBar;