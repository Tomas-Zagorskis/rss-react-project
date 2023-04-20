import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Router from 'router';

export const render = (url: string, options?: object) => {
  return ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <Router />
      </StaticRouter>
    </Provider>,
    options
  );
};
