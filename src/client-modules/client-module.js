console.log('[YM EMBED] Client module loaded');

function addDocTitleToPayload() {
  const titlePathData = document.querySelectorAll('span.breadcrumbs__link');
  if (titlePathData.length) {
    const titleElement = titlePathData[titlePathData.length - 1];
    const titleText = titleElement.innerText;
    if (window.ymConfig && window.ymConfig.payload) {
      window.ymConfig.payload.title = titleText;
      window.ymConfig.payload.pageUrl = window.location.href;
    } else if (window.ymConfig) {
      window.ymConfig.payload = { title: titleText, pageUrl: window.location.href };
    }
  }
  console.log("BOT.JS", window.ymConfig?.payload);
  return window.ymConfig?.payload;
}

function safeGetUid() {
  try {
    const jid = window?.frames?.ymIframe?.chat?.jid;

    if (typeof jid === 'string' && jid.includes('@')) {
      return jid.split('@')[0];
    } else {
      console.warn('[YM] Invalid jid (not string or missing @):', jid);
    }
  } catch (e) {
    console.warn('[YM] UID error (exception):', e);
  }
  return null;
}

function sendBotPayload(uid) {
  const payload = addDocTitleToPayload();

  const headers = new Headers({
    'content-type': 'application/json',
  });

  const body = JSON.stringify({
    bot: window.ymConfig?.bot,
    uid,
    referrer: window.ymConfig?.bot,
    payload,
    pageUrl: window.location.href,
    source: 'yellowmessenger',
    isYmAuth: false,
  });

  fetch("https://cloud.yellow.ai/api/plugin/update-user-info?bot=x1687158407670", {
    method: 'POST',
    headers,
    body,
  })
    .then((res) => res.text())
    .then((result) => {
      console.log('[YM] Payload sent:', result);
    })
    .catch((err) => console.error('[YM] Payload error:', err));
}

function waitForUidAndSend(retries = 10, delay = 200) {
  const uid = safeGetUid();
  if (uid) {
    if (!window.botWasClosedManually) {
      console.log('[YM] Sending payload (bot not manually closed)');
      sendBotPayload(uid);
    } else {
      console.log('[YM] Skipping payload — bot manually closed');
    }
  } else if (retries > 0) {
    setTimeout(() => waitForUidAndSend(retries - 1, delay), delay);
  } else {
    console.warn('[YM] UID not found after retrying');
  }
}

function interceptBotClose() {
  window.addEventListener('message', (event) => {
    if (typeof event.data === 'object' && event.data.event === 'ym-close') {
      console.log('[YM] Bot manually closed');
      window.botWasClosedManually = true;
    }
  });
}

const clientModule = {
  onRouteDidUpdate() {
    if (typeof window === 'undefined') return;
    window.botWasClosedManually = false;
    interceptBotClose();
    waitForUidAndSend();
  },
};

export default clientModule;
