import React, { useState } from 'react';
import heroImg from '../assets/hero.png';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Modal from '../components/Modal';
import Card from '../components/Card';
import { constellations } from '../data/constellations';

const LandingPage: React.FC = () => {
  const [selected, setSelected] = useState<typeof constellations[0] | null>(null);
  const [query, setQuery] = useState('');
  const filtered = constellations.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.brief.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="font-sans starfield">
      <Navbar />
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-60" />
        <div className="relative text-center max-w-2xl px-4 py-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Cosmic Mythology AR Explorer
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
            Dive into the night sky, discover constellations, and unveil the stories that shaped cultures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#explore"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200"
            >
              Explore the Sky
            </a>
            <a
              href="#mythology"
              className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3 px-6 rounded-lg shadow-inner transition-colors duration-200"
            >
              Discover Mythology
            </a>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section id="explore" className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Search Constellations</h2>
          <SearchBar placeholder="Search constellations..." value={query} onChange={setQuery} />
{filtered.length === 0 ? (
            <p className="text-center text-gray-600 mt-8">No constellations match your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filtered.map((c) => (
                <Card
                  key={c.id}
                  title={c.name}
                  description={c.brief}
                  onClick={() => setSelected(c)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Mythology Section */}
      <section id="mythology" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Celestial Mythology</h2>
          <p className="text-center text-gray-700 mb-8">
            Stories from ancient cultures that explain the patterns we see among the stars.
          </p>
          {/* Placeholder content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Greek</h3>
              <p className="text-gray-600">Orion, the hunter, was placed among the stars by Zeus.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Mayan</h3>
              <p className="text-gray-600">The Milky Way was thought to be a celestial river.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultures Section */}
      <section id="cultures" className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Cultural Traditions</h2>
          <p className="text-center text-gray-700 mb-8">
            Explore how different societies celebrated the night sky.
          </p>
          {/* Placeholder cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Indigenous Australian" description="Songlines and constellations" onClick={() => {}} />
            <Card title="Chinese" description="The Twenty-Eight Mansions" onClick={() => {}} />
            <Card title="Arab" description="Al-Falak and navigation" onClick={() => {}} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About This Project</h2>
          <p className="text-gray-700 mb-4">
            Cosmic Mythology AR Explorer blends science and cultural heritage, offering an immersive educational experience.
          </p>
          <p className="text-gray-600">© 2026 Cosmic Mythology. All rights reserved.</p>
        </div>
      </section>

      {/* Modal for selected constellation */}
      {selected && (
        <Modal onClose={() => setSelected(null)} title={selected.name}>
          <p className="mb-4">{selected.description}</p>
          <p className="text-sm text-gray-600">{selected.story}</p>
        </Modal>
      )}
    </div>
  );
};

export default LandingPage;
