import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="bg-background">
      <SidebarProvider>
        <AppSidebar />

      <main className='w-full'>
        <SidebarTrigger />
        {children}
      </main>
      </SidebarProvider>
      <footer>
        {/* Add footer components here */}
      </footer>
    </div>
  );
};

export default DashboardLayout;