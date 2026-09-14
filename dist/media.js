(() => {
  const content = window.PILLAR_CONTENT || {};
  const safeUrl = (value) => { if (!value) return ''; try { const u = new URL(value, location.href); return u.protocol === 'https:' || (u.origin === location.origin && u.protocol === location.protocol) ? u.href : ''; } catch { return ''; } };
  const dialog = document.getElementById('booking');
  document.querySelectorAll('.booking').forEach(link => {
    const url = safeUrl(content.bookingUrl);
    if (url) link.href = url;
    else link.addEventListener('click', event => { event.preventDefault(); dialog.showModal(); });
  });
  document.querySelectorAll('[data-media]').forEach(container => {
    const key = container.dataset.media;
    const item = key === 'reel' ? content.reel : content.samples?.[key];
    if (!item) return;
    const src = safeUrl(item.src);
    if (!src) return;
    let player;
    if (item.kind === 'embed') {
      const url = new URL(src);
      const allowed = ['fast.wistia.net', 'fast.wistia.com', 'player.vimeo.com', 'www.youtube-nocookie.com', 'www.youtube.com'];
      if (!allowed.includes(url.hostname) && !url.hostname.endsWith('.cloudflarestream.com')) return;
      player = document.createElement('iframe'); player.src = src; player.title = item.title || 'Project video';
      player.allow = 'fullscreen; picture-in-picture; encrypted-media'; player.allowFullscreen = true; player.loading = 'lazy'; player.referrerPolicy = 'strict-origin-when-cross-origin';
    } else {
      player = container.querySelector('video') || document.createElement('video'); player.src = src; player.controls = true; player.playsInline = true; player.preload = 'none'; player.setAttribute('aria-label', item.title || 'Project video');
      const poster = safeUrl(item.poster); if (poster) player.poster = poster;
      const captions = safeUrl(item.captions); if (captions) { const track = document.createElement('track'); track.kind = 'captions'; track.src = captions; track.srclang = 'en'; track.label = 'English'; player.append(track); }
      player.append('Your browser does not support video playback.');
      player.addEventListener('error', () => { const message = document.createElement('div'); message.className = 'media-empty'; const title = document.createElement('strong'); title.textContent = 'This video is temporarily unavailable.'; const hint = document.createElement('span'); hint.textContent = 'Please try again later.'; message.append(title, hint); container.replaceChildren(message); }, { once: true });
    }
    container.replaceChildren(player);
    if (player.tagName === 'VIDEO' && item.poster) {
      const playButton = document.createElement('button');
      playButton.className = 'video-play';
      playButton.setAttribute('aria-label', 'Play ' + (item.title || 'project video'));
      const icon = document.createElement('span'); icon.className = 'video-play-icon'; icon.setAttribute('aria-hidden', 'true'); icon.textContent = '▶';
      const label = document.createElement('span'); label.textContent = 'Watch the film';
      playButton.append(icon, label); container.append(playButton);
      player.controls = false;
      playButton.addEventListener('click', async () => {
        playButton.hidden = true; player.controls = true;
        try { await player.play(); player.focus(); } catch { if (playButton.isConnected) playButton.hidden = false; }
      });
      player.addEventListener('play', () => { playButton.hidden = true; player.controls = true; });
      player.tabIndex = 0;
    }
    const caption = container.parentElement.querySelector('.sample-caption'); if (caption) caption.textContent = item.caption || item.title || 'Project story';
  });
  document.querySelectorAll('[data-quote]').forEach(container => {
    const q = content.quotes?.[Number(container.dataset.quote) - 1]; if (!q?.quote || !q.name) return;
    container.querySelector('.eyebrow').textContent = 'CLIENT STORY';
    container.querySelector('.quote-text').textContent = '“' + q.quote + '”';
    container.querySelector('.quote-person').textContent = [q.name, q.title, q.company].filter(Boolean).join(' · ');
  });
})();
