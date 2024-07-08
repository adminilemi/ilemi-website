import VerifyEmail from '@/components/AuthComp/VerifyEmail';
import '../Auths.scss';
import BrandLogo from '@/components/BrandLogo';
import RightSide from '@/components/AuthComp/RightSide';

export default function page() {
  return (
    <div className={` email flex flex-col md:flex-row justify-between`}>
      <section className='flex flex-col '>
        <header className='border-bottom py-2 mb-3 '>
          <div className='container'>
            <BrandLogo className='w-[10%]' />
          </div>
        </header>
        <aside className='container'>
          <VerifyEmail />
        </aside>
      </section>
      <RightSide title='Fast and Reliable jobs to get you hired immediately' />
    </div>
  );
}
