import { useState } from 'react';
import SearchBar from '../searchBar';
import './header.scss';
import TabBar from '../tabBar';
import ViewToggle from '../viewToggle';
import { MovieCategory, ViewMode } from '@/types/movie';

interface HeaderProps {
  activeTab: MovieCategory
  handleTabChange: (tab: MovieCategory) => void
  viewMode: ViewMode
  setViewMode: (mode: ViewMode) => void
  search: string
  setSearch: (value: string) => void
}

const Header = ({activeTab, handleTabChange, viewMode, setViewMode, search, setSearch}: HeaderProps) => {
  return (
    <div className="header">
      <div className='searchGroup'>
        <h1 className='title'>MovieFlix</h1>

        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="filterGroup">
        <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

        <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>
    </div>
  )
};

export default Header;