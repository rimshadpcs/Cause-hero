import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Users, BookOpen, Stethoscope, MapPin, Mail, Facebook, Twitter, ArrowRight, CreditCard, Star, Sparkles } from 'lucide-react';

// Import images
import heroBackground from './assets/images/hero/hero_bg.jpg';
import cheeroLogo from './assets/images/logos/cheero_logo.png';

// Education images
import education1 from './assets/images/education/education1.jpg';
import education2 from './assets/images/education/education2.jpeg';
import education3 from './assets/images/education/education3.jpeg';
import education4 from './assets/images/education/education4.jpeg';
import education6 from './assets/images/education/education6.jpg';
import education11 from './assets/images/education/education11.jpeg';

// Health images
import health1 from './assets/images/health/health1.jpeg';
import health2 from './assets/images/health/health2.jpeg';
import health3 from './assets/images/health/health3.jpeg';
import health4 from './assets/images/health/health4.jpeg';
import health5 from './assets/images/health/health5.jpeg';

// Welfare images
import welfare1 from './assets/images/welfare/welfare1.jpeg';
import welfare2 from './assets/images/welfare/welfare2.jpeg';
import welfare3 from './assets/images/welfare/welfare3.jpeg';
import welfare4 from './assets/images/welfare/welfare4.jpeg';
import welfare5 from './assets/images/welfare/welfare5.jpeg';

// Facilities images
import facilities1 from './assets/images/facilities/facilities1.jpeg';
import facilities2 from './assets/images/facilities/facilities2.jpeg';
import facilities3 from './assets/images/facilities/facilities3.jpeg';
import facilities4 from './assets/images/facilities/facilities4.jpeg';
import facilities5 from './assets/images/facilities/facilities5.jpeg';

// Achievement images
import achievement1 from './assets/images/achievements/achievment1.jpeg';
import achievement2 from './assets/images/achievements/achievment2.jpeg';
import achievement3 from './assets/images/achievements/achievment3.jpeg';
import achievement4 from './assets/images/achievements/achievment4.jpeg';
import achievement5 from './assets/images/achievements/achievment5.jpeg';

// Newspaper clippings
import clip1 from './assets/images/clips/clip1.jpeg';
import clip2 from './assets/images/clips/clip2.jpeg';
import clip3 from './assets/images/clips/clip3.jpeg';
import clip4 from './assets/images/clips/clip4.jpeg';
import clip5 from './assets/images/clips/clip5.jpeg';

// Media logos
import charityCommission from './assets/images/media/charitycommision.png';
import crowdfunder from './assets/images/media/crowdfunder.png';
import eenadu from './assets/images/media/Eenadu.png';
import suryaa from './assets/images/media/suryaa.jpg';
import saakshi from './assets/images/media/saakshi.avif';
import warangalVoice from './assets/images/media/Warangalvoice.png';

const CheerochCharityWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState({ images: [], title: '', currentIndex: 0 });
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalContent, setLegalContent] = useState({ title: '', content: '' });
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'achievements', 'donate', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });

      // Handle visibility for animations
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = elementTop < window.innerHeight - 100;
        
        if (elementVisible) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (galleryOpen) {
        switch (e.key) {
          case 'ArrowLeft':
            prevImage();
            break;
          case 'ArrowRight':
            nextImage();
            break;
          case 'Escape':
            closeGallery();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openGallery = (images, title, index = 0) => {
    setCurrentGallery({ images, title, currentIndex: index });
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentGallery(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = () => {
    setCurrentGallery(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
    }));
  };

  const openLegalModal = (type) => {
    if (type === 'privacy') {
      setLegalContent(privacyPolicy);
    } else if (type === 'terms') {
      setLegalContent(termsAndConditions);
    }
    setLegalModalOpen(true);
  };

  const closeLegalModal = () => {
    setLegalModalOpen(false);
  };

  const openTeamModal = () => {
    setTeamModalOpen(true);
  };

  const closeTeamModal = () => {
    setTeamModalOpen(false);
  };

  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description: "Providing quality education and computer literacy to children and adults",
      features: [
        "Free computer courses with qualified tutors",
        "Free school for children under 6 years old",
        "Daily coaching for government school children",
        "Free library with internet access"
      ],
      images: [education1, education2, education3, education4, education6, education11]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Welfare",
      description: "Supporting basic needs and skill development for vulnerable communities",
      features: [
        "Daily free meals for 30-40 needy individuals",
        "Free tailoring classes with experienced tutors",
        "Reverse osmosis water plant for purified drinking water",
        "Emergency support services"
      ],
      images: [welfare1, welfare2, welfare3, welfare4, welfare5]
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Health",
      description: "Comprehensive healthcare services for all community members",
      features: [
        "Free health clinic for all ages",
        "Emergency ambulance service",
        "Laboratory for blood tests and health assessments",
        "Prenatal care for pregnant women"
      ],
      images: [health1, health2, health3, health4, health5]
    }
  ];

  const stats = [
    { number: "29+", label: "Paid Workers" },
    { number: "5+", label: "Volunteers" },
    { number: "500+", label: "Aids Provided" },
    { number: "23+", label: "Years Running" }
  ];

  const achievements = [
    "Established a free clinic treating numerous patients with severe conditions",
    "Expanded tailoring program from 6 to 20 sewing machines",
    "Increased daily coaching recipients to over 130 children",
    "Launched reverse osmosis water plant for community"
  ];

  const privacyPolicy = {
    title: "Privacy Policy",
    content: `
<h2>Privacy Policy</h2>
<p><strong>Effective Date: 2023</strong></p>

<h3>1. Introduction</h3>
<p>CHEERO Charity ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.</p>

<h3>2. Information We Collect</h3>
<h4>2.1 Personal Information</h4>
<p>We may collect personal information that you voluntarily provide to us when you:</p>
<ul>
<li>Make a donation</li>
<li>Contact us through our website or email</li>
<li>Subscribe to our newsletter</li>
<li>Participate in our programs or services</li>
</ul>

<p>This information may include:</p>
<ul>
<li>Name and contact information (email, phone, address)</li>
<li>Payment information (processed securely through third-party payment processors)</li>
<li>Demographic information</li>
<li>Communication preferences</li>
</ul>

<h4>2.2 Non-Personal Information</h4>
<p>We may collect non-personal information about your visit to our website, including:</p>
<ul>
<li>Browser type and version</li>
<li>Operating system</li>
<li>IP address (anonymized)</li>
<li>Pages visited and time spent on our website</li>
<li>Referring website</li>
</ul>

<h3>3. How We Use Your Information</h3>
<p>We use your information to:</p>
<ul>
<li>Process donations and provide donation receipts</li>
<li>Respond to your inquiries and provide customer service</li>
<li>Send updates about our programs and impact (with your consent)</li>
<li>Improve our website and services</li>
<li>Comply with legal obligations</li>
<li>Ensure the security of our website and prevent fraud</li>
</ul>

<h3>4. Information Sharing and Disclosure</h3>
<p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
<ul>
<li><strong>Service Providers:</strong> With trusted third-party service providers who help us operate our website and process donations (e.g., payment processors, email service providers)</li>
<li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
<li><strong>With Your Consent:</strong> When you explicitly consent to sharing your information</li>
</ul>

<h3>5. Data Security</h3>
<p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

<h3>6. Data Retention</h3>
<p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, or resolve disputes.</p>

<h3>7. Your Rights</h3>
<p>You have the right to:</p>
<ul>
<li>Access, update, or delete your personal information</li>
<li>Opt-out of marketing communications</li>
<li>Request a copy of your data</li>
<li>Lodge a complaint with relevant data protection authorities</li>
</ul>

<h3>8. Cookies and Tracking Technologies</h3>
<p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>

<h3>9. Third-Party Links</h3>
<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>

<h3>10. Children's Privacy</h3>
<p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>

<h3>11. Changes to This Privacy Policy</h3>
<p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the effective date.</p>

<h3>12. Contact Us</h3>
<p>If you have any questions about this Privacy Policy, please contact us at:</p>
<p><strong>CHEERO Charity</strong><br>
Email: CheeroCharity@outlook.com<br>
Address: 4 Sapperton House, Brunel Estate, Westbourne Park Road, London W2 5UT</p>

<p><em>This Privacy Policy was last updated on 2023.</em></p>
    `
  };

  const termsAndConditions = {
    title: "Terms and Conditions",
    content: `
<h2>Terms and Conditions</h2>
<p><strong>Effective Date: 2023</strong></p>

<h3>1. Introduction</h3>
<p>These Terms and Conditions ("Terms") govern your use of the CHEERO Charity website and services. By accessing or using our website, you agree to be bound by these Terms.</p>

<h3>2. About CHEERO Charity</h3>
<p>CHEERO (CHANDRA HEALTH EDUCATIONAL EMPOWERMENT RESEARCH ORGANISATION) is a registered charity in the United Kingdom (Charity Registration Number: 1162798). We are committed to providing education, healthcare, and welfare services to underserved communities.</p>

<h3>3. Use of Our Website</h3>
<h4>3.1 Permitted Use</h4>
<p>You may use our website for lawful purposes only. You agree not to:</p>
<ul>
<li>Use the website in any way that violates applicable laws or regulations</li>
<li>Transmit or upload harmful, offensive, or inappropriate content</li>
<li>Attempt to gain unauthorized access to our systems</li>
<li>Interfere with the proper functioning of the website</li>
<li>Use automated systems to access the website without permission</li>
</ul>

<h4>3.2 User Content</h4>
<p>Any content you submit to us (such as contact forms or feedback) becomes our property and may be used for our charitable purposes, subject to our Privacy Policy.</p>

<h3>4. Donations</h3>
<h4>4.1 Donation Policy</h4>
<p>All donations are voluntary and are used to support our charitable activities. By making a donation, you confirm that:</p>
<ul>
<li>You are legally able to make the donation</li>
<li>The donation is made with your own funds</li>
<li>You understand that donations are generally non-refundable</li>
</ul>

<h4>4.2 Refund Policy</h4>
<p>Donations are typically non-refundable. However, if you believe an error has occurred, please contact us within 30 days of the donation.</p>

<h4>4.3 Tax Receipts</h4>
<p>As a UK registered charity, we can provide Gift Aid declarations for eligible UK taxpayers. Please contact us for tax receipt requests.</p>

<h3>5. Intellectual Property</h3>
<p>The content, design, and materials on our website are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>

<h3>6. Disclaimer of Warranties</h3>
<p>Our website and services are provided "as is" without any warranties, express or implied. We do not guarantee that:</p>
<ul>
<li>The website will be available at all times</li>
<li>The information is accurate or complete</li>
<li>The website will be free from errors or viruses</li>
</ul>

<h3>7. Limitation of Liability</h3>
<p>To the fullest extent permitted by law, CHEERO Charity shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.</p>

<h3>8. Privacy</h3>
<p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>

<h3>9. Third-Party Services</h3>
<p>Our website may integrate with third-party services (such as payment processors or social media platforms). Your use of these services is subject to their respective terms and conditions.</p>

<h3>10. Governing Law</h3>
<p>These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

<h3>11. Changes to Terms</h3>
<p>We may update these Terms from time to time. Continued use of our website after changes constitutes acceptance of the new Terms.</p>

<h3>12. Termination</h3>
<p>We may terminate or suspend your access to our website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or our organization.</p>

<h3>13. Contact Information</h3>
<p>If you have any questions about these Terms, please contact us at:</p>
<p><strong>CHEERO Charity</strong><br>
Email: CheeroCharity@outlook.com<br>
Address: 4 Sapperton House, Brunel Estate, Westbourne Park Road, London W2 5UT</p>

<h3>14. Severability</h3>
<p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>

<p><em>These Terms and Conditions were last updated on, 2023.</em></p>
    `
  };

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Chandra Sekhar",
      title: "Founder & Chairman",
      role: "Leadership",
      description: "With over 25 years of experience in community development and healthcare, Dr. Chandra Sekhar founded CHEERO Charity with a vision to bridge the gap between resources and those in need. He oversees all strategic initiatives and maintains direct involvement in our health programs.With over 25 years of experience in community development and healthcare, Dr. Chandra Sekhar founded CHEERO Charity with a vision to bridge the gap between resources and those in need. He oversees all strategic initiatives and maintains direct involvement in our health programs.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mrs. Lakshmi Devi",
      title: "Program Director",
      role: "Operations",
      description: "Leading our education and welfare programs, Mrs. Lakshmi has been instrumental in expanding our reach to over 130 children through daily coaching programs. She manages the day-to-day operations and coordinates with local communities to identify needs.",
      image: "https://images.unsplash.com/photo-1594824388853-bf9d0a81b4be?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Mr. Ravi Kumar",
      title: "Health Services Coordinator",
      role: "Healthcare",
      description: "A qualified nurse with 15 years of experience, Mr. Ravi manages our free health clinic and ambulance services. He has been crucial in establishing our laboratory services and ensuring quality healthcare reaches the most vulnerable in our community.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Ms. Priya Sharma",
      title: "Volunteer Coordinator",
      role: "Community Outreach",
      description: "Ms. Priya leads our volunteer program and manages community outreach initiatives. She coordinates our tailoring classes, computer training programs, and helps new volunteers integrate into our mission. Her passion for education has helped establish our free library and internet access center.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
            40%, 43% { transform: translateY(-10px); }
            70% { transform: translateY(-5px); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out forwards;
          }
          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out forwards;
          }
          .animate-pulse-slow {
            animation: pulse 3s ease-in-out infinite;
          }
          .animate-bounce-slow {
            animation: bounce 2s infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .shimmer-bg {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }
          .hover-lift {
            transition: all 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
          .text-gradient {
            background: linear-gradient(135deg, #65C26F, #4ade80);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .floating-particles {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #65C26F;
            border-radius: 50%;
            opacity: 0.3;
            animation: float 4s ease-in-out infinite;
          }
          .prose {
            color: #374151;
            line-height: 1.75;
          }
          .prose h2 {
            color: #111827;
            font-weight: 700;
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            border-bottom: 2px solid #65C26F;
            padding-bottom: 0.5rem;
          }
          .prose h3 {
            color: #111827;
            font-weight: 600;
            font-size: 1.25rem;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .prose h4 {
            color: #111827;
            font-weight: 600;
            font-size: 1.125rem;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
          }
          .prose p {
            margin-bottom: 1rem;
          }
          .prose ul {
            margin: 1rem 0;
            padding-left: 1.5rem;
          }
          .prose li {
            margin-bottom: 0.5rem;
            position: relative;
          }
          .prose li::marker {
            color: #65C26F;
          }
          .prose strong {
            color: #111827;
            font-weight: 600;
          }
          .prose em {
            color: #6B7280;
            font-style: italic;
          }
        `
      }} />

      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="floating-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white">
                <img 
                  src={cheeroLogo} 
                  alt="CHEERO Charity Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">CHEERO Charity</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'programs', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item
                      ? 'border-b-2'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{
                    color: activeSection === item ? '#65C26F' : undefined,
                    borderColor: activeSection === item ? '#65C26F' : undefined
                  }}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('donate')}
                className="text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                style={{backgroundColor: '#65C26F'}}
              >
                <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100"></div>
                <Heart className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Donate</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                  style={{backgroundColor: '#65C26F'}}
                >
                  Donate
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'programs', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('donate')}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left font-semibold"
                style={{color: '#65C26F'}}
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            style={{backgroundImage: `url(${heroBackground})`}}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/60 to-blue-900/50"></div>
            
            {/* Animated shapes */}
            <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-green-200 opacity-20 animate-pulse-slow"></div>
            <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-green-300 opacity-30 animate-bounce-slow"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-green-400 opacity-25 animate-pulse-slow"></div>
            
            {/* Floating icons */}
            <div className="absolute top-1/4 left-1/4 opacity-10 animate-float">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <div className="absolute top-1/3 right-1/3 opacity-10 animate-float" style={{animationDelay: '1s'}}>
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 opacity-10 animate-float" style={{animationDelay: '2s'}}>
              <Stethoscope className="w-7 h-7 text-green-600" />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`animate-on-scroll ${isVisible[0] ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="mb-6 flex justify-center">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                <span className="text-gray-700 font-medium">Transforming Lives Since 2000</span>
                <Star className="w-5 h-5 text-yellow-500 animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-24 leading-tight">
              <span className="block mb-4">Welcome to</span>
              <span className="block text-gradient animate-pulse-slow">CHEERO Charity</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button 
                onClick={() => scrollToSection('donate')}
                className="group relative text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{backgroundColor: '#65C26F'}}
              >
                <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100"></div>
                <Heart className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Donate Now</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('programs')}
                className="group border-3 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden hover:bg-green-500 hover:text-white"
                style={{
                  borderColor: '#65C26F',
                  color: '#65C26F',
                  borderWidth: '3px'
                }}
              >
                <span className="relative z-10 flex items-center">
                  Our Programs
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            <p className="text-xl md:text-2xl text-white mb-4 mt-32 leading-relaxed max-w-4xl mx-auto font-semibold" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)'}}>
              Bridging the gap between donors and underprivileged communities. With a focus on education, welfare, and health, we've been transforming lives for over two decades.
            </p>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 animate-on-scroll ${isVisible[1] ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-gradient">CHEERO</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CHANDRA HEALTH EDUCATIONAL EMPOWERMENT RESEARCH ORGANISATION is committed to making a positive impact in our community. Located in Tungabhadra, a village known for its accessibility and vibrant community.
            </p>
          </div>

          {/* Mission, Team, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><div className="w-4 h-4 rounded-full" style={{backgroundColor: '#65C26F'}}></div></div>,
                title: "Mission",
                description: "To provide essential services in education, welfare, and health to those in need."
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Our Team", 
                description: "29 dedicated paid workers and 5 passionate volunteers working together."
              },
              {
                icon: <Heart className="w-8 h-8 text-white" />,
                title: "Our Values",
                description: "Transparency, Accountability, and Compassion in everything we do."
              }
            ].map((item, index) => (
              <div key={index} className={`text-center p-6 bg-green-50 rounded-2xl hover-lift animate-on-scroll ${isVisible[index + 2] ? 'animate-slideInLeft' : 'opacity-0'}`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110" style={{backgroundColor: '#65C26F'}}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className={`bg-black text-white rounded-2xl p-8 hover-lift animate-on-scroll ${isVisible[5] ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-110" style={{color: '#65C26F'}}>{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-100 rounded-full opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30 animate-bounce-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 animate-on-scroll ${isVisible[6] ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive services designed to empower and uplift our community
            </p>
          </div>

          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-on-scroll ${isVisible[7 + index] ? (index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight') : 'opacity-0'}`}>
                  <div className="flex items-center mb-6 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{backgroundColor: '#65C26F'}}>
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{program.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group">
                        <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 transition-all duration-300 group-hover:scale-150" style={{backgroundColor: '#65C26F'}}></div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-on-scroll ${isVisible[10 + index] ? (index % 2 === 0 ? 'animate-slideInRight' : 'animate-slideInLeft') : 'opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 h-80">
                    {program.images.slice(0, 4).map((image, imgIndex) => (
                      <div key={imgIndex} className="relative overflow-hidden rounded-lg hover-lift group cursor-pointer" onClick={() => openGallery(program.images, program.title, imgIndex)}>
                        <img 
                          src={image} 
                          alt={`${program.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-green-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                              </svg>
                            </div>
                            <p className="text-xs">View Image</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 animate-on-scroll ${isVisible[13] ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600">
              Since our inception, we have made significant strides in serving our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`animate-on-scroll ${isVisible[14] ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start group hover-lift">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110" style={{backgroundColor: '#65C26F'}}>
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-4 animate-on-scroll ${isVisible[15] ? 'animate-slideInRight' : 'opacity-0'}`}>
              {[achievement1, achievement2, achievement3, achievement4].map((image, index) => (
                <div key={index} className="rounded-2xl h-40 hover-lift group relative overflow-hidden cursor-pointer" onClick={() => openGallery([achievement1, achievement2, achievement3, achievement4, achievement5], 'Our Achievements', index)}>
                  <img 
                    src={image} 
                    alt={`Achievement ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-green-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-xs">View Image</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-100 rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-bounce-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 animate-on-scroll ${isVisible[16] ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient">In</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work has been recognized and featured by leading media outlets and publications
            </p>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Newspaper Clippings Collage */}
            <div className={`animate-on-scroll ${isVisible[17] ? 'animate-slideInLeft' : 'opacity-0'}`}>
              
              {/* Collage Grid Layout */}
              <div className="grid grid-cols-3 gap-3 h-96 relative">
                {/* Clip 1 - Square, top-left */}
                <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => openGallery([clip1, clip2, clip3, clip4, clip5], 'Press Coverage', 0)}>
                  <img 
                    src={clip1} 
                    alt="Press clipping 1" 
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-xs">View</p>
                    </div>
                  </div>
                </div>

                {/* Clip 2 - Square, top-center */}
                <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => openGallery([clip1, clip2, clip3, clip4, clip5], 'Press Coverage', 1)}>
                  <img 
                    src={clip2} 
                    alt="Press clipping 2" 
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-xs">View</p>
                    </div>
                  </div>
                </div>

                {/* Clip 4 - Vertical rectangle, top-right spanning 2 rows */}
                <div className="col-span-1 row-span-2 relative group cursor-pointer" onClick={() => openGallery([clip1, clip2, clip3, clip4, clip5], 'Press Coverage', 3)}>
                  <img 
                    src={clip4} 
                    alt="Press clipping 4" 
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-xs">View</p>
                    </div>
                  </div>
                </div>

                {/* Clip 3 - Square, bottom-left */}
                <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => openGallery([clip1, clip2, clip3, clip4, clip5], 'Press Coverage', 2)}>
                  <img 
                    src={clip3} 
                    alt="Press clipping 3" 
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-xs">View</p>
                    </div>
                  </div>
                </div>

                {/* Clip 5 - Vertical rectangle, bottom-center spanning 1 row */}
                <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => openGallery([clip1, clip2, clip3, clip4, clip5], 'Press Coverage', 4)}>
                  <img 
                    src={clip5} 
                    alt="Press clipping 5" 
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-xs">View</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Media Logos Grid */}
            <div className={`animate-on-scroll ${isVisible[18] ? 'animate-slideInRight' : 'opacity-0'}`}>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Charity Commission */}
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover-lift animate-on-scroll ${isVisible[19] ? 'animate-fadeInUp' : 'opacity-0'} relative group`} style={{animationDelay: '0.1s'}}>
                  <div className="w-full h-16 flex items-center justify-center relative">
                    <img 
                      src={charityCommission} 
                      alt="UK Charity Commission" 
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 pointer-events-none">
                    UK Charity Commission
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </div>

                {/* Crowdfunder */}
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover-lift animate-on-scroll ${isVisible[20] ? 'animate-fadeInUp' : 'opacity-0'} relative group`} style={{animationDelay: '0.2s'}}>
                  <div className="w-full h-16 flex items-center justify-center relative">
                    <img 
                      src={crowdfunder} 
                      alt="Crowdfunder UK" 
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 pointer-events-none">
                    Crowdfunder UK
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </div>

                {/* Eenadu News */}
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover-lift animate-on-scroll ${isVisible[21] ? 'animate-fadeInUp' : 'opacity-0'} relative group`} style={{animationDelay: '0.3s'}}>
                  <div className="w-full h-16 flex items-center justify-center relative">
                    <img 
                      src={eenadu} 
                      alt="Eenadu News" 
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 pointer-events-none">
                    Eenadu News
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </div>

                {/* Suryaa */}
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover-lift animate-on-scroll ${isVisible[22] ? 'animate-fadeInUp' : 'opacity-0'} relative group`} style={{animationDelay: '0.4s'}}>
                  <div className="w-full h-16 flex items-center justify-center relative">
                    <img 
                      src={suryaa} 
                      alt="Suryaa Telugu News" 
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 pointer-events-none">
                    Suryaa Telugu News
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </div>

                {/* Saakshi News */}
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover-lift animate-on-scroll ${isVisible[23] ? 'animate-fadeInUp' : 'opacity-0'} relative group`} style={{animationDelay: '0.5s'}}>
                  <div className="w-full h-16 flex items-center justify-center relative">
                    <img 
                      src={saakshi} 
                      alt="Saakshi News" 
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 pointer-events-none">
                    Saakshi News
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </div>

                {/* Warangal Voice */}
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover-lift animate-on-scroll ${isVisible[24] ? 'animate-fadeInUp' : 'opacity-0'} relative group`} style={{animationDelay: '0.6s'}}>
                  <div className="w-full h-16 flex items-center justify-center relative">
                    <img 
                      src={warangalVoice} 
                      alt="Warangal Voice" 
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 pointer-events-none">
                    Warangal Voice
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-300 rounded-full opacity-30 animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-green-100 rounded-full opacity-25 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 animate-on-scroll ${isVisible[16] ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Make a <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-xl text-gray-600">
              Your donation helps us provide education, healthcare, and welfare services to those in need
            </p>
          </div>

          <div className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 hover-lift animate-on-scroll ${isVisible[17] ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <div className="mb-8">
              {/* Donation Impact */}
              <div className="bg-green-50 rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Impact</h3>
                <div className="space-y-4">
                  {[
                    { impact: 'Provide computer training and digital literacy to students of all ages' },
                    { impact: 'Supply nutritious meals for children and families in need' },
                    { impact: 'Fund essential medical supplies and healthcare services for our clinic' },
                    { impact: 'Support tailoring and skill development programs for economic empowerment' },
                    { impact: 'Maintain our reverse osmosis water plant for clean drinking water' },
                    { impact: 'Keep our free library and internet access center running for the community' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0 transition-all duration-300 group-hover:scale-150" style={{backgroundColor: '#65C26F'}}></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors text-lg">
                        {item.impact}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 italic">Every donation, no matter the size, makes a meaningful difference in our community.</p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Choose Payment Method</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* PayPal Button */}
                <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-lg group relative overflow-hidden">
                  <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100"></div>
                  <svg className="w-6 h-6 mr-3 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a9.36 9.36 0 0 1-.077.437c-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106h4.61a.641.641 0 0 0 .633-.74l.033-.210.629-3.987.041-.17a.641.641 0 0 1 .633-.74h.394c3.776 0 6.73-1.533 7.59-5.966.36-1.855.174-3.406-.777-4.471z"/>
                  </svg>
                  <span className="relative z-10">Donate with PayPal</span>
                </button>

                {/* Bank Transfer */}
                <button 
                  className="text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-lg group relative overflow-hidden"
                  style={{backgroundColor: '#65C26F'}}
                >
                  <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100"></div>
                  <CreditCard className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10">Bank Transfer</span>
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Note:</strong> If you want to donate through bank transfer, please contact us. 
                  PayPal integration coming soon!
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                >
                  Contact us for bank details
                </button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-8 p-4 bg-gray-50 rounded-2xl hover-lift">
              <div className="flex items-center justify-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure donation processing • UK Charity Registration: 1162798
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-white relative overflow-hidden" style={{backgroundColor: '#65C26F'}}>
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white bg-opacity-5 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 animate-on-scroll ${isVisible[18] ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get <span className="text-green-200">Involved</span>
            </h2>
            <p className="text-xl text-green-100">
              Join us in empowering vulnerable communities across India
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`animate-on-scroll ${isVisible[19] ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="group">
                  <h4 className="font-semibold text-green-200 mb-2 group-hover:text-white transition-colors">UK Address</h4>
                  <div className="flex items-start hover-lift">
                    <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p>Cheero Charity</p>
                      <p>4 Sapperton House, Brunel Estate</p>
                      <p>Westbourne Park Road</p>
                      <p>London W2 5UT</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <h4 className="font-semibold text-green-200 mb-2 group-hover:text-white transition-colors">India Address</h4>
                  <div className="flex items-start hover-lift">
                    <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p>Cheero Charity, Premayatana</p>
                      <p>Taranath Buildings, Tungabhadra</p>
                      <p>Adoni taluk, Kurnool district</p>
                      <p>Andhra Pradesh, Pin – 518397</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center hover-lift group">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>CheeroCharity@outlook.com</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-green-200 font-semibold mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110 hover:rotate-6">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className={`bg-white bg-opacity-10 rounded-3xl p-8 hover-lift animate-on-scroll ${isVisible[20] ? 'animate-slideInRight' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-2xl bg-white bg-opacity-20 placeholder-green-200 text-white border border-green-400 focus:outline-none focus:border-green-200 transition-all duration-300 hover:bg-opacity-30"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 rounded-2xl bg-white bg-opacity-20 placeholder-green-200 text-white border border-green-400 focus:outline-none focus:border-green-200 transition-all duration-300 hover:bg-opacity-30"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-6 py-4 rounded-2xl bg-white bg-opacity-20 placeholder-green-200 text-white border border-green-400 focus:outline-none focus:border-green-200 resize-none transition-all duration-300 hover:bg-opacity-30"
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Thank you for your interest! Please email us at CheeroCharity@outlook.com')}
                  className="w-full bg-white px-6 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden"
                  style={{color: '#65C26F'}}
                >
                  <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100"></div>
                  <span className="relative z-10">Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`flex items-center justify-center space-x-3 mb-4 group animate-on-scroll ${isVisible[21] ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white">
                <img 
                  src={cheeroLogo} 
                  alt="CHEERO Charity Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold group-hover:text-gray-300 transition-colors">CHEERO Charity</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering Communities, Changing Lives Since 2000
            </p>
            <p className="text-sm text-gray-500 mb-4">
              CHEERO (CHANDRA HEALTH EDUCATIONAL EMPOWERMENT RESEARCH ORGANISATION) is a charity registered in the UK with the Charity Commission (1162798)
            </p>
            
            {/* Footer Navigation */}
            <div className="flex justify-center space-x-6 mb-4">
              <button 
                onClick={() => openLegalModal('privacy')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => openLegalModal('terms')}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                Terms & Conditions
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={openTeamModal}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                Team & Volunteers
              </button>
            </div>
            
            <p className="text-sm text-gray-500">
              © 2023 CHEERO Charity. All rights reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Team & Volunteers Modal */}
      {teamModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-8 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Team & Volunteers</h2>
                <p className="text-gray-600">Meet the dedicated people who make our mission possible</p>
              </div>
              <button 
                onClick={closeTeamModal}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(95vh-200px)]">
              <div className="space-y-8">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      {/* Member Image */}
                      <div className="flex justify-center mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-200">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Member Info */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-xl font-semibold text-green-600 mb-3">{member.title}</p>
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          {member.role}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-lg text-left">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Information */}
              <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Join Our Team</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">29+ Paid Workers</h4>
                    <p className="text-gray-600">Dedicated professionals working full-time to serve our community with expertise in healthcare, education, and social services.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">5+ Active Volunteers</h4>
                    <p className="text-gray-600">Passionate volunteers who contribute their time and skills to support our various programs and community outreach initiatives.</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <p className="text-gray-700 mb-4">Interested in joining our mission? We're always looking for dedicated individuals to help transform lives.</p>
                  <button 
                    onClick={() => {
                      closeTeamModal();
                      setTimeout(() => scrollToSection('contact'), 300);
                    }}
                    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legal Documents Modal */}
      {legalModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
              <h2 className="text-2xl font-bold text-gray-900">{legalContent.title}</h2>
              <button 
                onClick={closeLegalModal}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: legalContent.content }}
                style={{
                  '--tw-prose-body': '#374151',
                  '--tw-prose-headings': '#111827',
                  '--tw-prose-links': '#065f46',
                  '--tw-prose-bold': '#111827',
                  '--tw-prose-bullets': '#65C26F'
                }}
              />
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-center">
              <button 
                onClick={closeLegalModal}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-2xl font-bold">{currentGallery.title}</h3>
              <button 
                onClick={closeGallery}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            {/* Main Image */}
            <div className="flex-1 relative flex items-center justify-center">
              <img 
                src={currentGallery.images[currentGallery.currentIndex]} 
                alt={`${currentGallery.title} ${currentGallery.currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
              >
                <ArrowRight className="w-6 h-6 transform rotate-180" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex justify-center space-x-2 mt-4 overflow-x-auto">
              {currentGallery.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGallery(prev => ({ ...prev, currentIndex: index }))}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentGallery.currentIndex 
                      ? 'border-green-400 opacity-100' 
                      : 'border-gray-600 opacity-60 hover:opacity-80'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Image Counter */}
            <div className="text-center mt-4">
              <span className="text-white text-sm">
                {currentGallery.currentIndex + 1} of {currentGallery.images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheerochCharityWebsite;