import React from 'react';

function BookDemo() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: 'white' }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <a href="/" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <img src="/assets/images/logo.png" alt="Lendefi Markets" style={{ height: '50px', width: 'auto' }} />
              <span style={{ 
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)', 
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                Lendefi Markets
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/#markets">Markets</a>
              <a href="/#features">Features</a>
              <a href="/#video">Video</a>
              <a href="/contact">Contact</a>
              <a href="#docs">Docs</a>
              <a href="/" className="btn btn-primary">Connect Wallet</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Book Demo Section */}
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl mb-4">
              Book a <span className="gradient-text">Demo</span>
            </h1>
            <p className="text-xl text-gray-300">
              Schedule a personalized demo of Lendefi Markets with our team. 
              Learn how our composable lending protocol can benefit your organization.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form 
              name="book-demo" 
              method="POST" 
              data-netlify="true"
              className="form-container"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                
                fetch('/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(formData as any).toString()
                })
                .then(() => {
                  alert('Thank you for booking a demo! We\'ll contact you soon to schedule.');
                  form.reset();
                })
                .catch(() => alert('Sorry, there was an error. Please try again.'));
              }}
            >
              <input type="hidden" name="form-name" value="book-demo" />
              
              <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="form-input"
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="form-input"
                  required 
                />
              </div>
              
              <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <input 
                  type="text" 
                  name="company" 
                  placeholder="Company Name" 
                  className="form-input"
                  required 
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  className="form-input"
                  required 
                />
              </div>
              
              <input 
                type="text" 
                name="role" 
                placeholder="Your Role/Title" 
                className="form-input"
              />
              
              <textarea 
                name="message" 
                placeholder="Tell us about your interest in Lendefi Markets (optional)"
                className="form-textarea"
                style={{ minHeight: '100px' }}
              ></textarea>
              
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Book Demo
                </button>
              </div>
            </form>
          </div>
          
          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect p-6">
                <h4 className="text-lg font-semibold mb-2">30-Minute Demo</h4>
                <p className="text-gray-400">Comprehensive walkthrough of Lendefi Markets features and capabilities</p>
              </div>
              <div className="glass-effect p-6">
                <h4 className="text-lg font-semibold mb-2">Custom Solutions</h4>
                <p className="text-gray-400">Discuss how our protocol can be tailored to your specific needs</p>
              </div>
              <div className="glass-effect p-6">
                <h4 className="text-lg font-semibold mb-2">Technical Deep Dive</h4>
                <p className="text-gray-400">Detailed technical discussion for developers and architects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '64px 0 32px', marginTop: '80px' }}>
        <div className="container">
          <div className="text-center">
            <div className="logo" style={{ justifyContent: 'center', marginBottom: '16px' }}>
              <img src="/assets/images/logo.png" alt="Lendefi Markets" style={{ height: '40px', width: 'auto' }} />
              <span style={{ 
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)', 
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.25rem',
                fontWeight: 'bold'
              }}>
                Lendefi Markets
              </span>
            </div>
            <p className="text-gray-400" style={{ marginBottom: '32px' }}>
              Composable lending markets protocol for DeFi
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '32px' }}>
              <a href="/" className="text-gray-400">Home</a>
              <a href="#" className="text-gray-400">Documentation</a>
              <a href="#" className="text-gray-400">GitHub</a>
              <a href="#" className="text-gray-400">Discord</a>
              <a href="#" className="text-gray-400">Twitter</a>
            </div>
            <p className="text-gray-400" style={{ fontSize: '0.875rem' }}>
              © 2024 Lendefi Protocol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BookDemo;