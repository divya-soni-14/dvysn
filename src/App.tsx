import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Home, BookOpen } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 z-0">
        <div className="dot-pattern"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-16 sm:px-6 sm:pt-24">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-2">
            Hi, I'm Divya Soni
          </h1>
          <h2 className="text-xl text-gray-600 font-medium">
            and I'm a Software Engineer!
          </h2>
          
          {/* Navigation */}
          <nav className="mt-8">
            <ul className="flex space-x-6">
              <li>
                <button 
                  onClick={() => setActiveSection('home')}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    activeSection === 'home' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <Home className="h-5 w-5 mr-2" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveSection('blog')}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    activeSection === 'blog' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span>Blog</span>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I love building beautiful software. This website is an attempt to document that journey. Thanks for stopping by, hope you find something interesting here!            </p>
            
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Hyderabad, India</span>
            </div>
            <h3 className="pr-3 pb-3 text-gray-500 text-xl font-semibold">Say Hi!</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/divya-soni-14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 border border-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/divya-soni14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 border border-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:divya.rajeshsoni@gmail.com" 
                className="flex items-center px-4 py-2 border border-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>Email</span>
              </a>
            </div>
          </section>
        )}
        
        {/* Blog Section */}
        {activeSection === 'blog' && (
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recent Articles</h3>
            
            <div className="space-y-8">
              {/* Blog Post 1 */}
              <article className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium text-gray-900 mb-2">
                 Awesome Stuff Coming Soon!
                </h4>
                <p className="text-gray-500 text-sm mb-3">April 15, 2025</p>
                <p className="text-gray-700 mb-4">
                  Coming Sooooooooooooooooooon.
                </p>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </a>
              </article>
              
             
            </div>
          </section>
        )}
        
        <footer className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Divya Soni. All rights reserved. Maybe. Idk. Hopefully.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;