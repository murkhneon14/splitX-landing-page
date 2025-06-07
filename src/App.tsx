import { useState, useEffect, useRef } from "react"; 
import { Toaster } from "sonner";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        const sectionHeight = window.innerHeight;
        const section = Math.floor(scrollTop / sectionHeight);
        setCurrentSection(section);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Scroll to section function kept for potential future use
  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="splitx-app">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid-pattern"></div>
          <div className="floating-particles"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-black/20">
          <div className="pixel-logo glitch-text">SplitX</div>
          <div className="flex items-center gap-4">
            {/* Removed music icon and sign-in button */}
          </div>
        </nav>

        {/* Vertical Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="vertical-scroll-container"
        >
          {/* Section 1: Hero */}
          <section className="scroll-section hero-section">
            <div className="hero-content">
              <div className="hero-text-side">
                <h1 className="hero-title glitch-text">
                  SPLIT<span className="neon-cyan">X</span>
                </h1>
                <p className="hero-subtitle pixel-text">
                Divide Bills,not Friends!!
                </p>
                <div className="hero-tagline">
                  <p className="pixel-text neon-pink">
                    💸  Prototype stage
                  </p>
                  <p className="pixel-text">
                    Split, share, and settle all in one app.
                  </p>
                  <div className="feature-checks">
                    <div className="check-item">✅ I didn't eat that</div>
                    <div className="check-item">✅ Pay what you owe</div>
                    <div className="check-item">📱 Install splitX now!</div>
                  </div>
                </div>
              </div>
              
              <div className="phone-mockup-container">
                <div className="pixel-phone">
                  <div className="phone-bezel">
                    <div className="phone-screen">
                      <div className="screen-content">
                        <div className="status-bar">
                          <span className="time">12:34</span>
                          <span className="battery">🔋 100%</span>
                        </div>
                        <div className="app-header">
                          <span className="pixel-text">SplitX v2.0</span>
                        </div>
                        <div className="expense-list">
                          <div className="expense-item">
                            <span>Naan-Paneer</span>
                            <span className="amount neon-pink">₹699</span>
                          </div>
                          <div className="split-indicator">
                            <div className="split-line"></div>
                          </div>
                          <div className="users-row">
                            <div className="user-avatar">Nik</div>
                            <div className="user-avatar">AB</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="phone-buttons">
                    <div className="power-button"></div>
                    <div className="volume-buttons">
                      <div className="volume-up"></div>
                      <div className="volume-down"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Problem Statement */}
          <section className="scroll-section problem-section">
            <div className="section-content">
              <div className="phone-mockup-container">
                <div className="pixel-phone">
                  <div className="phone-bezel">
                    <div className="phone-screen">
                      <div className="screen-content">
                        <div className="status-bar">
                          <span className="time">12:35</span>
                          <span className="battery">🔋 99%</span>
                        </div>
                        <div className="chat-app">
                          <div className="chat-header">WhatsApp</div>
                          <div className="chat-messages">
                            <div className="message received">
                              <span>Bro Netflix ka paisa de de</span>
                            </div>
                            <div className="message sent">
                              <span>Kitna tha? 🤔</span>
                            </div>
                            <div className="message received">
                              <span>199 ka half... 99.50</span>
                            </div>
                            <div className="message sent">
                              <span>Kal de dunga 😅</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="problem-text">
                <h2 className="section-title pixel-text neon-pink">
                  Your money. Your squad.
                </h2>
                <p className="section-subtitle">
                  But no more "tu de dena baad mein"!
                </p>
                <div className="cta-button" onClick={() => {
                  // Replace this URL with your actual app download link
                  const downloadUrl = 'https://example.com/download/splitx-app';
                  window.open(downloadUrl, '_blank');
                }}>
                  <span className="pixel-text">👉 Download now and split smart 💡</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Solution */}
          <section className="scroll-section solution-section">
            <div className="section-content">
              <div className="solution-text">
                <h2 className="section-title pixel-text neon-green">
                  Roommates? Trips? Coffee with friends?
                </h2>
                <p className="section-subtitle">
                  🧾 Track every rupee.
                </p>
                <p className="section-subtitle">
                  ✅ Press "Settle Up" and forget the rest.
                </p>
              </div>
              
              <div className="phone-mockup-container">
                <div className="pixel-phone">
                  <div className="phone-bezel">
                    <div className="phone-screen">
                      <div className="screen-content">
                        <div className="status-bar">
                          <span className="time">12:36</span>
                          <span className="battery">🔋 98%</span>
                        </div>
                        <div className="app-header">
                          <span className="pixel-text">SplitX Dashboard</span>
                        </div>
                        <div className="dashboard">
                          <div className="balance-card">
                            <div className="balance-title">Your Balance</div>
                            <div className="balance-amount neon-green">+₹250</div>
                          </div>
                          <div className="recent-activity">
                            <div className="activity-item">
                              <span>Coffee ☕</span>
                              <span className="neon-cyan">₹120</span>
                            </div>
                            <div className="activity-item">
                              <span>Uber 🚗</span>
                              <span className="neon-yellow">₹180</span>
                            </div>
                          </div>
                          <div className="settle-button">
                            <span className="pixel-text">SETTLE UP</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Features */}
          <section className="scroll-section features-section">
            <div className="features-container">
              <h2 className="section-title pixel-text">POWER-UPS</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon split-icon">⚡</div>
                  <h3 className="pixel-text">Smart Split</h3>
                  <p>But not AI-powered yet</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon track-icon">📊</div>
                  <h3 className="pixel-text">Sub Tracker</h3>
                  <p>Create group & split subscription bills</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon remind-icon">🔔</div>
                  <h3 className="pixel-text">Gentle Nudge</h3>
                  <p>Friendly payment reminders</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Coming Soon */}
          <section className="scroll-section cta-section">
            <div className="cta-container">
              <h2 className="section-title pixel-text">COMING SOON</h2>
              <div className="arcade-machine">
                <div className="screen">
                  <div className="insert-coin-text blink">
                    INSERT COIN TO JOIN BETA
                  </div>
                </div>
                <div className="coin-slot"></div>
              </div>
              
              <div className="newsletter-signup">
                <div className="nes-cartridge">
                  <h3 className="pixel-text">Contact Us</h3>
                  <p className="pixel-text" style={{fontSize: '0.8rem', margin: '10px 0'}}>
                    Email us at: <a href="mailto:nectarsof@gmail.com" style={{color: '#ff6ec7', textDecoration: 'none'}}>nectarsof@gmail.com</a>
                  </p>
                  <button 
                    className="blow-cartridge"
                    onClick={() => window.location.href = 'mailto:nectarsof@gmail.com?subject=SplitX%20Inquiry'}
                    style={{marginTop: '15px'}}
                  >
                    ✉️ SEND EMAIL
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section Indicators */}
        <div className="section-indicators">
          {[0, 1, 2, 3, 4].map((index) => (
            <div 
              key={index}
              className={`indicator ${currentSection === index ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
            />
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="terminal-footer">
          <span className="terminal-text">
            {"> wait_for_release.exe [✓] | Status: LOADING_AWESOME..."}
          </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="pixel-logo-large glitch-text">SplitX</div>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
        <div className="loading-text pixel-text blink">
          Loading... splitting reality...
        </div>
      </div>
      <div className="scanlines"></div>
    </div>
  );
}
