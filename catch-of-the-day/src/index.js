// let's go!
import React from 'react';
import { render } from 'react-dom';
// import { render } from 'react-dom'; //<-- only render component of package
// // import ReactDom from 'react-dom'; <--Full package
// import App from './components/app';
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import { BrowserRouter, Match, Miss } from 'react-router'


const Root = () => {
  return (
    <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={StorePicker} />
      <Match exactly pattern="/store/:storeId" component={App} />
      <Miss component={NotFound} />

    </div>
    </BrowserRouter>
    )
}


render(<Root/>, document.querySelector('#main'))
