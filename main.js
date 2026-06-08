// Assemble obfuscated email links from data attributes
document.querySelectorAll('[data-e][data-d]').forEach(function (a) {
  a.href = 'mailto:' + a.dataset.e + '@' + a.dataset.d;
});
