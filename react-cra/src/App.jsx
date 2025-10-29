import React from 'react';
import './App.css';
import {ReactComponent as MonkeySvg} from './assets/monkey.svg'
import {ReactComponent as ReactSvg} from './assets/react.svg'
import {ReactComponent as JavascriptSvg} from './assets/javascript.svg'

export default function App() {
  return (
    <div className='main'>
      <div className='content'>
        <div className='inner-content'>
          <MonkeySvg className="monkey"/>

          <div className='tech-container'>
            <ReactSvg/>
            <JavascriptSvg/>
          </div>

          <div className='description-container'>
            <header className='header'>
              React + JS
            </header>
            <p className='description'>
              Congrats! You've reached the first page of your website. To customize anything on this site, simply go ahead and make changes to your files via t.Webpages.
            </p>
          </div>
        </div>  
      </div>
    </div>
  );
}
