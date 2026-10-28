import React, { useEffect } from 'react';

const MEASUREMENT_ID = 'G-LTW9DHSLLC';

export function StudioAnalytics() {
  useEffect(() => {
    if (!MEASUREMENT_ID) return;
    if (document.getElementById('google-analytics-script')) return;

    // 1. Inject external gtag.js script
    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // 2. Inject initialization inline script
    const inlineScript = document.createElement('script');
    inlineScript.id = 'google-analytics-init';
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${MEASUREMENT_ID}');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
}

