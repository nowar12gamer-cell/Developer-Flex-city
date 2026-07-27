<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developers Flex City - Roleplay Server</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <h1>🎮 Developers Flex City</h1>
            </div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#apply">Apply Now</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h2>Welcome to Developers Flex City</h2>
            <p>A Premium Roleplay Server for Developers & Gamers</p>
            <button class="cta-button" onclick="document.getElementById('apply').scrollIntoView({behavior: 'smooth'})">
                Join Us Now
            </button>
        </div>
        <div class="hero-overlay"></div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>About Our Server</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Welcome to <strong>Developers Flex City</strong> - the ultimate roleplay experience designed for developers and gaming enthusiasts. Our server offers an immersive world where you can build, create, and collaborate with like-minded players.</p>
                    <p>Whether you're a seasoned roleplayer or just starting out, our community welcomes you with open arms. Join thousands of players in an exciting adventure filled with endless possibilities.</p>
                </div>
                <div class="about-stats">
                    <div class="stat">
                        <h3>1000+</h3>
                        <p>Active Players</p>
                    </div>
                    <div class="stat">
                        <h3>24/7</h3>
                        <p>Server Online</p>
                    </div>
                    <div class="stat">
                        <h3>100%</h3>
                        <p>Fun Guaranteed</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
        <div class="container">
            <h2>Server Features</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <i class="fas fa-crown"></i>
                    <h3>Premium Experience</h3>
                    <p>High-quality roleplay environment with professional moderation and support.</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-users"></i>
                    <h3>Active Community</h3>
                    <p>Join a vibrant community of developers and gamers from around the world.</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Safe & Secure</h3>
                    <p>Advanced anti-cheat systems and fair play rules ensure everyone's safety.</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-rocket"></i>
                    <h3>Regular Updates</h3>
                    <p>Continuous improvements and new content added regularly.</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-headset"></i>
                    <h3>Support Team</h3>
                    <p>Dedicated support team ready to help 24/7.</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-star"></i>
                    <h3>Exclusive Events</h3>
                    <p>Special events and tournaments with amazing rewards.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Apply Section -->
    <section id="apply" class="apply">
        <div class="container">
            <h2>Join Our Server</h2>
            <p class="apply-subtitle">Ready to become part of Developers Flex City?</p>
            <div class="apply-buttons">
                <a href="https://discord.gg/your-server-link" target="_blank" class="apply-btn discord">
                    <i class="fab fa-discord"></i> Join Discord
                </a>
                <a href="https://forms.gle/your-form-link" target="_blank" class="apply-btn form">
                    <i class="fas fa-clipboard"></i> Apply Form
                </a>
            </div>
            <p class="apply-note">📝 Fill out the application form and join our Discord server to get started!</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 Developers Flex City. All rights reserved.</p>
            <div class="social-links">
                <a href="#" title="Discord"><i class="fab fa-discord"></i></a>
                <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" title="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
