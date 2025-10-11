import { ReactComponent as MonkeySvg} from "./assets/monkey.svg"
import { ReactComponent as ReactSvg} from './assets/react.svg'
import { ReactComponent as TypescriptSvg } from "./assets/typescript.svg"
import './App.css';

export default function App() {
  return (
    <div className='main'>
      <div className='content'>
        <div className='inner-content'>
          <MonkeySvg className="monkey"/>

          <div className='tech-container'>
            <ReactSvg/>
            <TypescriptSvg/>
          </div>

          <div className='description-container'>
            <header className='header'>
              React + Typescript
            </header>
            <p className='description'>
              Congrats! You've reached the first page of your website. To customize anything on this site, simply go ahead and make changes to your files via t.Site.
            </p>
          </div>
        </div>  
      </div>
    </div>
  );
};
