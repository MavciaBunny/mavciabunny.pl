document.querySelectorAll('a[href^="http"]').forEach(a => {
  a.addEventListener('click', () => {
    if (window.gtag) window.gtag('event', 'outbound_click', {url: a.href});
  });
});
