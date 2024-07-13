import BrandLogo from '@/components/BrandLogo';
import './Signin.scss';
import RightSide from '@/components/AuthComp/RightSide';
import SigninForm from '@/components/AuthComp/SigninForm';

const Signin = () => {
  return (
    <div className={` SignIn flex flex-col md:flex-row justify-between`}>
      <section className='flex flex-col aside'>
        <header className='border-bottom py-2 mb-3 bg-mainColor'>
          <div className='container'>
            <BrandLogo className='w-[10%]' />
          </div>
        </header>

        <aside className='w-7/12 mx-auto'>
          <h2> Welcome back,</h2>
          <p>Welcome back! Please enter your details.</p>

          <SigninForm />
        </aside>
      </section>
      <RightSide />
    </div>
  );
};

export default Signin;
