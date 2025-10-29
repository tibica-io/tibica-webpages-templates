import MonkeySvg from './assets/monkey.svg?react'
import ReactSvg from './assets/react.svg?react'
import ViteSvg from './assets/vite.svg?react'
import TypescriptSvg from './assets/typescript.svg?react'
import './App.css';

export default function App() {
  return (
    <div className='main'>
      <div className='content'>
        <div className='inner-content'>
          <MonkeySvg className="monkey"/>

          <div className='tech-container'>
            <ViteSvg/>
            <ReactSvg/>
            <TypescriptSvg/>
          </div>

          <div className='description-container'>
            <header className='header'>
              Vite + React + Typescript
            </header>
            <p className='description'>
              Congrats! You've reached the first page of your website. To customize anything on this site, simply go ahead and make changes to your files via t.Webpages.
            </p>
          </div>
        </div>  
      </div>
    </div>
  );
};
