import logo from './logo.svg';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <div className='app__notification'>This is just a test</div>
      <div className='text-center'>
        <header className='flex min-h-screen flex-col items-center justify-center bg-secondary font-sans'>
          <img src={logo} style={{ height: '40vmin' }} className='animate-spin-slow' alt='logo' />
          <p className='text-white'>
            Edit <code className='font-monospace rounded bg-gray-700 p-1'>src/App.js</code> and save to reload.
          </p>
          <div className='mt-2 flex items-center space-x-8'>
            <a className='cursor-pointer text-primary' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
              Learn ReactJS
            </a>
            <a className='cursor-pointer text-primary' href='https://tailwindcss.com' target='_blank' rel='noopener noreferrer'>
              Learn Tailwind CSS
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default App;
