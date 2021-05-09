import React from 'react';
import { GitHub, Twitter, Linkedin } from 'react-feather';
import { Link } from 'react-router-dom';
import { getAllDocs } from '../../lib/docs';
import styles from './styles.module.scss';
import type { Doc } from '../../interfaces/docs';

const docs = getAllDocs();

const HomePage = () => {
  return (
    <main>
      <section className="main-container">
        <div className={styles.styMainInfo}>
          <h3>
            Hi, I am <span className="main-gradient">Joshua</span>
          </h3>
          <br />
          <h4 className="main-gradient">
            Software Engineer
            <br />
            Web Platform
          </h4>
          <p>
            Pleased to meet you!
            <br />
            I mainly deal with Javascript and stuffs related with web.
            <br />
            Currently building great stuffs with the awesome team at{' '}
            <a href="https://www.tokopedia.com">Tokopedia</a>.
            <br />
            <br />
            Feel free to reach me anytime to have a nice chat together 🍻
          </p>
        </div>
        <div className={`${styles.styMainInfo} ${styles.styContactInfo}`}>
          <h4 className="main-gradient">Get In Touch</h4>
          <div>
            <p>
              The universe is a pretty big place.
              <br />
              You can find me on:
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/in/josteph22/"
                >
                  <Linkedin /> @josteph22
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/josteph"
                >
                  <GitHub /> @josteph
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://twitter.com/jostephhh"
                >
                  <Twitter /> @jostephhh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr />

      <section className={styles.styBlogInfo}>
        <h2>Blog</h2>

        {docs.map((doc: Doc) => (
          <div className={styles.styBlogDisplay} key={doc.slug}>
            <h3>
              <Link to={`/blog/${doc.slug}`} className="ani-link color-normal">
                {doc.meta.title}
              </Link>
            </h3>
            <p className="font-sm">{doc.meta.published}</p>
            <p>{doc.meta.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;