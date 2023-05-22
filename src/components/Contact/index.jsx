import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Link to="/person-1">Person 1</Link>
      </div>
      <div>
        <Link to="/person-2">Person 2</Link>
      </div>
      <div>
        <Link to="/person-3">Person 3</Link>
      </div>
    </div>
  );
};

export default Contact;
