import '../styles/globals.css';
import '../styles/utilities.css';
import '../styles/homepage.css';
import '../styles/detail.css';
import '../styles/checkout.css';
import '../styles/complete-checkout.css';
import '../styles/sign-in.css';
import '../styles/sign-up.css';
import '../styles/sign-up-photo.css';
import '../styles/sign-up-photo-success.css';
import '../styles/sign-up-success.css';
import '../styles/404-not-found.css';
import '../styles/overview.css';
import '../styles/sidebar.css';
import '../styles/transactions.css';
import '../styles/transactions-detail.css';
import '../styles/edit-profile.css';
import '../styles/navbar-log-in.css';
import '../styles/bootstrap-5.0.2-dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('../styles/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
