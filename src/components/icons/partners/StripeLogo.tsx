import React from 'react';

export const StripeLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M52.9 2.6C50.1 1 46.5.4 42.8.4s-7.2.6-9.9 2.2c-2.7 1.6-4.1 4.1-4.1 7.3 0 3.2 1.4 5.7 4.1 7.3 2.7 1.6 6.3 2.2 9.9 2.2s7.2-.6 9.9-2.2c2.7-1.6 4.1-4.1 4.1-7.3.1-3.2-1.3-5.7-4-7.3zM42.8 20c-4.9 0-8.8-2.1-8.8-7.3s3.9-7.3 8.8-7.3 8.8 2.1 8.8 7.3-3.9 7.3-8.8 7.3zM0 24.6h6.3V.4H0v24.2zM10.1.4h6.3v24.2h-6.3V.4z" fill="currentColor"/>
  </svg>
);