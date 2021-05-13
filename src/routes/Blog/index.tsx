import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import log from 'electron-log';
import { getDocBySlug } from '@lib/docs';
import markdownToHtml from '@lib/markdown';
import styles from './styles.module.scss';
import './prism.css';

function BlogPage() {
  const [content, setContent] = useState('');
  const params: any = useParams();
  const { meta, content: rawContent } = getDocBySlug(params.slug);

  useEffect(() => {
    process.noAsar = true;

    markdownToHtml(params.slug, rawContent)
      .then((c: string) => setContent(c))
      .catch((e: Error) => log.error(e));

    return () => {
      process.noAsar = false;
    };
  }, [rawContent]);

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
