import DashboardHeader from '@/components/DashboardComp/Header/DashboardHeader';
import Sidebar from '@/components/DashboardComp/Sidebar/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <main className='flex justify-between'>
      <section className='min-h-screen border-r border-Grey5 bg-white p-1'>
        <Sidebar />
      </section>
      <aside className='flex-1'>
        <DashboardHeader />
        {children}
      </aside>
    </main>
  );
}
