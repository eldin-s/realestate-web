import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="dashboard-layout">
      <header>
        <h1>Dashboard</h1>
        {/* Add navigation or other header components here */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Add footer components here */}
      </footer>
    </div>
  );
};

export default DashboardLayout;