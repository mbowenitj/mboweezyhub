export const scrollToContact = () => {
  if (typeof window === 'undefined') return false;

  const selectors = ['[data-contact-section]', '#contact'];
  const section = selectors.map(sel => document.querySelector(sel)).find(Boolean);

  if (section) {
    const headerHeight = document.querySelector('header')?.clientHeight || 100;
    const y = section.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: y, behavior: 'smooth' });

    if (window.location.hash !== '#contact') {
      window.history.replaceState(null, '', '#contact');
    }
    return true;
  }

  return false;
};

// Handle hash changes on page load
export const initContactScroll = () => {
  if (typeof window === 'undefined') return;

  if (window.location.hash === '#contact') {
    setTimeout(() => {
      scrollToContact();
    }, 100); // Small delay to allow page hydration
  }

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#contact') {
      scrollToContact();
    }
  });
};