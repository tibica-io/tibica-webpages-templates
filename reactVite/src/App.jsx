import './App.css';
import MonkeySvg from './assets/monkey.svg?react'
import ReactSvg from './assets/react.svg?react'
import ViteSvg from './assets/vite.svg?react'
import JavascriptSvg from './assets/javascript.svg?react'

export default function App() {
  return (
    <div className='main'>
      <div className='content'>
        <div className='inner-content'>
          <MonkeySvg className="monkey"/>

          <div className='tech-container'>
            <ViteSvg/>
            <ReactSvg/>
            <JavascriptSvg/>
          </div>

          <div className='description-container'>
            <header className='header'>
              Vite + React + JS
            </header>
            <p className='description'>
              {"Congrats! You've reached the first page of your website. To customize anything on this site, simply go ahead and make changes to your files via t.Site."}
            </p>
          </div>
        </div>  
      </div>
    </div>
  );
}
