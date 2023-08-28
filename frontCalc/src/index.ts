import renderLoader from './components/loader';
import './components/style.css';
import buildConfig from './config';
import initCalc from './initCalc';


(async () => {
  
  await buildConfig();

  initCalc();
})();

renderLoader();