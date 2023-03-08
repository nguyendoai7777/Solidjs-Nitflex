import { Route, Routes, useLocation, useNavigate } from '@solidjs/router';

import { Home } from './screens/home';
import { NoneLoginScreen } from './screens/none-login';
import './config.scss';
import './global.scss';
import { createEffect, createSignal, Show } from 'solid-js';
import { TvShow } from './screens/tv-show';
import { Movies } from './screens/movies';
import { NewPopular } from './screens/new-popular';
import { MyList } from './screens/my-list';
import { BrowseLanguage } from './screens/browse-language';
import { AppNav } from './components/app-nav';

export default function App() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = createSignal(false);

  createEffect(() => {
    const isLogin = !!localStorage.getItem('isLogin');
    if (isLogin) {
      if (loc.pathname === '/nl') {
        navigate('/home');
      }
      setAuth(true);
    } else {
      // un auth
      navigate('/nl');
      setAuth(false);
    }
  });

  return (
    <>
      <Show when={auth} keyed>
        <AppNav />
      </Show>
      <div
        class="div"
        style={{
          height: '200vh',
          'background-color': '#000',
          'padding-top': '76.5px',
        }}
      >
        <Routes>
          <Route path="/home" component={Home} />
          <Route path="/tv-show" component={TvShow} />
          <Route path="/movies" component={Movies} />
          <Route path="/new" component={NewPopular} />
          <Route path="/my-list" component={MyList} />
          <Route path="/bl" component={BrowseLanguage} />
          <Route path="/nl" component={NoneLoginScreen} />
        </Routes>
      </div>
    </>
  );
}
