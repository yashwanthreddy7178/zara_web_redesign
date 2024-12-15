import React, { Suspense, lazy } from 'react';
import Footer from './Footer';
import Header from './Header';

const Hero = lazy(() => import('./Hero'));
const NewCollections = lazy(() => import('./NewCollections'));
const JoinLife = lazy(() => import('./JoinLife'));
const Newsletter = lazy(() => import('./Newsletter'));

function LandingPage() {
  return (
    <div className="min-h-screen bg-white pt-40">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <NewCollections />
        <JoinLife />
        <Newsletter />
      </Suspense>
      <Footer />
    </div>
  );
}

export default LandingPage; 