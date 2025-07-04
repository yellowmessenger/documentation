/*
import React, { useEffect } from 'react';

export default function SafeRedirect({ to = '/' }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@docusaurus/router').then(({ useHistory }) => {
        try {
          const history = useHistory?.();
          if (history?.push) {
            history.push(to);
          }
        } catch (err) {
          console.warn('[SafeRedirect] Routing context not ready:', err);
        }
      });
    }
  }, [to]);

  return null;
}

*/


import React, { useEffect } from 'react';

export default function SafeRedirect({ to = '/' }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@docusaurus/router').then(({ useHistory }) => {
        try {
          const history = useHistory?.();
          if (history?.push) {
            history.push(to);
          }
        } catch (err) {
          console.warn('[SafeRedirect] Routing context not ready:', err);
        }
      });
    }
  }, [to]);

  return (
    <noscript>
      <meta httpEquiv="refresh" content={`0;url=${to}`} />
    </noscript>
  );
}
