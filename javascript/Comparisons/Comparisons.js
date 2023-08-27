'use strict';

function sortYear(arr) {
  arr.sort(compareYear);
  return arr;
}

function compareYear(a, b) {
  return b.year - a.year;
}

function sortTitle(arr) {
  arr.sort(compareTitle);
  return arr;
}

function compareTitle(a, b) {
  const titleA = removeLeadingArticle(a.title);
  const titleB = removeLeadingArticle(b.title);
  return titleA.localeCompare(titleB);
}

function removeLeadingArticle(title) {
  const articleRegex = /^(?:The|A|An)\s+/i;
  return title.replace(articleRegex, '');
}

module.exports = { sortYear, compareYear, sortTitle, compareTitle };