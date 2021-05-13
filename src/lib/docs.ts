import fs from 'fs';
import { join } from 'path';
import type { Blog } from '@interfaces/blogs';

let matter;
let searchEngine;

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(join(__dirname, 'blogs'), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  if (!matter) {
    matter = require('gray-matter');
  }

  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllBlogs(): Blog[] {
  const slugs = fs
    .readdirSync(join(__dirname, 'blogs'))
    .filter((slug) => slug !== 'index.ts');
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
