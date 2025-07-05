import { Link } from 'react-router-dom';

function Contact() {

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: 'white' }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
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
            </Link>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              <Link to="/" className="btn btn-outline">← Back to Main</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl mb-4">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about Lendefi Markets? Get in touch with our team.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="form-container"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              
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
              
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                className="form-input"
                required 
              />
              
              <textarea 
                name="message" 
                placeholder="Your Message"
                className="form-textarea"
                required
              ></textarea>
              
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect p-6">
                <h4 className="text-lg font-semibold mb-2">General Inquiries</h4>
                <p className="text-gray-400">hello@lendefimarkets.com</p>
              </div>
              <div className="glass-effect p-6">
                <h4 className="text-lg font-semibold mb-2">Developer Support</h4>
                <p className="text-gray-400">dev@lendefimarkets.com</p>
              </div>
              <div className="glass-effect p-6">
                <h4 className="text-lg font-semibold mb-2">Partnership</h4>
                <p className="text-gray-400">partners@lendefimarkets.com</p>
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
              <Link to="/" className="text-gray-400">Home</Link>
              <Link to="/docs/" className="text-gray-400">Documentation</Link>
              <a href="https://github.com/LendefiMarkets" className="text-gray-400">GitHub</a>
              <a href="https://x.com/LendefiMarkets" className="text-gray-400">X</a>
            </div>
            <p className="text-gray-400" style={{ fontSize: '0.875rem' }}>
              © 2025 Lendefi Labs LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;