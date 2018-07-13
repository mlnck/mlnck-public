import { riderSearchResults } from '../_mocks/landingpage.values.js'

function renderPrediction (cb) {
  console.log('rendering prediction based on text: ', s);

  setTimeout(() => {
    console.log('emulating `waitTime` variable');
    cb && cb();
  },1000);
}
module.exports = renderPrediction;
