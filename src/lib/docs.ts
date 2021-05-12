import fs from 'fs';
import { join } from 'path';
import type { Doc } from '@interfaces/docs';

let matter;
let searchEngine;

const docsDirectory = join(process.cwd(), 'src', 'docs');

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  if (!matter) {
    matter = require('gray-matter');
  }

  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllBlogs(): Doc[] {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.map((slug) => getDocBySlug(slug));

  return docs;
}

export function searchBlog(search: string) {
  if (!searchEngine) {
    const Fuse = require('fuse.js').default;

    const options = {
      includeScore: true,
      includeMatches: true,
      threshold: 0.3,
      ignoreLocation: true,
      keys: ['meta.title', 'meta.description', 'slug'],
    };

    searchEngine = new Fuse(getAllBlogs(), options);
  }

  return searchEngine.search(search);
}
