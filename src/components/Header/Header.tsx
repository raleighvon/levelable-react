import React from 'react';
import { HeaderProps } from './Header.types'
import styles from './Header.module.css';

export default function Header({ title }: HeaderProps) {
  return (
    <header>
      <div className="">
        <div id="logo">
          <img src="/images/logo-2.png" alt="Levelable Logo" />
          <p>Accessible Design, Better Experience</p>
        </div>
        <nav className="main_nav">
          {/* Replace with your React nav component */}
          {/* Example: <MainNav /> */}
        </nav>
      </div>
    </header>
  );
};
