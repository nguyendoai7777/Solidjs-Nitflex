import './AppNav.scss';
import { Logo } from '../common/Logo';
import { Button } from '@suid/material';
import { A, Link } from '@solidjs/router';
import { createEffect, createSignal } from 'solid-js';

const target = 100;

export const AppNav = () => {
  const [isOverTarget, setIsOverTarget] = createSignal(false);
  createEffect(() => {
    document.body.onscroll = (e) => {
      const current = document.querySelector('html').scrollTop;
      if (current > target) {
        setIsOverTarget(true);
      } else {
        setIsOverTarget(false);
      }
    };
  });

  return (
    <div
      class="app-nav d-flex align-items-center"
      style={{
        'background-color': isOverTarget() ? 'deeppink' : 'transparent',
      }}
    >
      <div class="logo cursor-pointer">
        <Link href="/home">
          <Logo w="92.5px" h="25px" fill="dodgerblue" />
        </Link>
      </div>

      <A href="/home" class="ms-5">
        <Button>Home</Button>
      </A>
      <A class="mx-2" href="/tv-show">
        <Button>Show</Button>
      </A>
      <A class="mx-2" href="/movies">
        <Button>Movies</Button>
      </A>
      <A class="mx-2" href="/new">
        <Button>New & Popular</Button>
      </A>
      <A class="mx-2" href="/my-list">
        <Button>My List</Button>
      </A>
      <A class="mx-2" href="/bl">
        <Button>Browse & Language</Button>
      </A>

      <div class="d-flex ms-auto">
        <div class="search-box">aaa</div>
        <div class="search-box">aaa</div>
        <div class="search-box">aaa</div>
      </div>
    </div>
  );
};
