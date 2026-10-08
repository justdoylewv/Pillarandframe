(() => {
  document.documentElement.classList.add('js');

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('navigation');
  const mobile = window.matchMedia('(max-width: 760px)');
  const closeMenu = ({ restoreFocus = false } = {}) => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navigation.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    closeMenu();
    if (mobile.matches && link.hash && link.origin === location.origin) {
      const target = document.getElementById(link.hash.slice(1));
      if (target) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      closeMenu({ restoreFocus: true });
    }
  });
  mobile.addEventListener('change', () => {
    closeMenu({ restoreFocus: mobile.matches && navigation.contains(document.activeElement) });
  });

  document.querySelectorAll('[role="tablist"]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const activate = tab => {
      tabs.forEach(item => {
        const active = item === tab;
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
        document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
      });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          activate(tabs[next]);
          tabs[next].focus();
        }
      });
    });
  });

  const film = document.getElementById('film-container');
  const play = document.getElementById('play-film');
  let player;
  play.addEventListener('click', () => {
    player = document.createElement('iframe');
    player.src = film.dataset.stream + '?autoplay=true';
    player.title = 'PowerField Energy overview film';
    player.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
    player.allowFullscreen = true;
    film.replaceChildren(player);
    player.focus();
  });
  const video = { pause() { if (player) player.src = player.src.replace('?autoplay=true', ''); } };

  const dialog = document.getElementById('booking-dialog');
  const frame = document.getElementById('booking-frame');
  const calendarStatus = document.getElementById('calendar-status');
  let opener;
  let calendarTimer;
  frame.addEventListener('load', () => {
    if (!frame.getAttribute('src')) return;
    window.clearTimeout(calendarTimer);
    calendarStatus.hidden = true;
  });
  document.querySelectorAll('a.book').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !dialog.showModal) return;
      event.preventDefault();
      opener = link;
      if (player) video.pause();
      dialog.showModal();
      document.body.classList.add('modal-open');
      if (!frame.getAttribute('src')) {
        calendarStatus.hidden = false;
        frame.src = frame.dataset.src;
        calendarTimer = window.setTimeout(() => {
          calendarStatus.textContent = 'Taking longer than expected? Use “Open calendar” below.';
        }, 10000);
      }
    });
  });
  document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (opener && mobile.matches && navigation.contains(opener)) menuButton.focus();
    else opener?.focus();
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
