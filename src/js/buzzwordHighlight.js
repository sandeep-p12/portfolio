/**
 * These words are buzzwords that should be highlighted
 */
const buzzwords = [
  "Python"
];

// Add tags that should be searched for buzzwords
const paragraphs = document.querySelectorAll('p');
const lis = document.querySelectorAll('li');
const tags = [...paragraphs, ...lis];

for (const word of buzzwords) {
  const regex = new RegExp(`(\\s|^)(${word})([.,/()"']?)(\\s|$)`, 'g');
  for (const element of tags) {
    element.innerHTML = element.innerHTML.replace(
      regex,
      (match, p1, p2, p3, p4) => `${p1}<span class="buzzword">${p2}</span>${p3}${p4}`,
    );
  }
}
