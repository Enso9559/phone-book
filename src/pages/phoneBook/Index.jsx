import React from 'react';
import Container from '../../components/Container';
import Navigation from '../../components/Navigation';
import styles from './phoneBook.module.scss';

const PhoneBookPage = () => {
  return (
    <div className="App">
      <div className={styles.wrapperHeader}>
        <Navigation />
        <Container />
      </div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};
export default PhoneBookPage;
