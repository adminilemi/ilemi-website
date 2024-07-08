import BrandLogo from '@/components/BrandLogo';
import './Signup.scss';

import RightSide from '@/components/AuthComp/RightSide';
import SignUpForm from '@/components/AuthComp/SignUpForm';

const Signup = () => {
  return (
    <main
      className={` userSignup flex flex-col md:flex-row justify-between bg-white`}
    >
      <section className='flex flex-col aside pb-5'>
        <header className='border-bottom py-2 mb-3 '>
          <div className='container'>
            <BrandLogo className='w-[10%]' />
          </div>
        </header>
        <aside className='container '>
          <section className='w-full lg:w-10/12 mx-auto'>
            <h2> Welcome back,</h2>
            <p className='my-3'>
              Thank you for choosing to join us. Please complete your
              registration below to get started. We&apos;re excited to have you
              on board!.
            </p>

            <SignUpForm />
          </section>
        </aside>
      </section>
      <RightSide title='Get the right people to get your job done right' />
    </main>
  );
};

export default Signup;
