import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import { getDocBySlug } from '@lib/docs';
import markdownToHtml from '@lib/markdown';
import styles from './styles.module.scss';
import './prism.css';

function BlogPage() {
  const params: any = useParams();
  const { meta } = getDocBySlug(params.slug);
  const content = markdownToHtml(params.slug);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Helmet>
      <main className="main-container">
        <article
          className={styles.articleContainer}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </>
  );
}

export default BlogPage;
