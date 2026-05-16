# BPO Agent  
```
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Modern BPO Agent | Navigate the Future of Real Estate</title>
    
    <!-- External CSS & Fonts -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    
    <!-- Configuration -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    colors: {
                        brand: {
                            50: '#f0fdfa',
                            100: '#ccfbf1',
                            500: '#14b8a6', // Teal
                            600: '#0d9488',
                            900: '#134e4a',
                        },
                        dark: '#0f172a'
                    }
                }
            }
        }
    </script>
    
    <style>
        /* Custom Styles for Polish */
        .glass-nav {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        
        .hero-gradient {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            position: relative;
            overflow: hidden;
        }

        .hero-gradient::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at top right, rgba(20, 184, 166, 0.15) 0%, transparent 40%);
            pointer-events: none;
        }

        .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
    </style>
</head>
<body class="font-sans text-gray-800 antialiased bg-gray-50 selection:bg-brand-500 selection:text-white">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20">
                <div class="flex items-center">
                    <a href="#" class="flex items-center gap-2 group">
                        <div class="w-10 h-10 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold text-xl group-hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/30">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                        <span class="font-serif font-bold text-2xl tracking-tight text-dark">BPO<span class="text-brand-500">Pro</span></span>
                    </a>
                </div>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#landscape" class="text-gray-600 hover:text-brand-600 font-medium transition-colors">The Market Shift</a>
                    <a href="#value" class="text-gray-600 hover:text-brand-600 font-medium transition-colors">The BPO Advantage</a>
                    <a href="#tools" class="text-gray-600 hover:text-brand-600 font-medium transition-colors">Tools for Growth</a>
                    <a href="#join" class="px-6 py-2.5 rounded-full bg-dark text-white font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Join the Network
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-gray-600 hover:text-dark focus:outline-none p-2 rounded-md transition-colors">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
            <div class="px-4 pt-2 pb-6 space-y-1">
                <a href="#landscape" class="mobile-link block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-md">The Market Shift</a>
                <a href="#value" class="mobile-link block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-md">The BPO Advantage</a>
                <a href="#tools" class="mobile-link block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-md">Tools for Growth</a>
                <a href="#join" class="mobile-link mt-4 block text-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700">Join the Network</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-gradient pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative">
        <div class="max-w-7xl mx-auto text-center relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
                <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                The Future of Real Estate Valuation
            </div>
            
            <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                Stop Being Just a Door Opener. <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-teal-200">Become the Expert.</span>
            </h1>
            
            <p class="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                The real estate market is evolving rapidly. Tech-based solutions are commoditizing traditional agent services. To thrive, you must elevate your perceived value. Master Broker Price Opinions (BPOs) and become the trusted professional clients rely on.
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a href="#value" class="px-8 py-4 rounded-full bg-brand-500 text-white font-semibold text-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 group">
                    Discover the BPO Edge
                    <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a href="#tools" class="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm flex items-center justify-center">
                    Explore Agent Tools
                </a>
            </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg class="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.29,201.33,110.53Z" fill="#f9fafb"></path>
            </svg>
        </div>
    </section>

    <!-- The Changing Landscape Section -->
    <section id="landscape" class="py-24 bg-gray-50 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">The Reality Check</h2>
                <h3 class="font-serif text-4xl md:text-5xl font-bold text-dark mb-6">The Market Has Shifted. Have You?</h3>
                <div class="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
            </div>

            <div class="grid md:grid-cols-3 gap-10">
                <!-- Change 1 -->
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div class="w-14 h-14 bg-red-50 text-red-500 rounded-xl flex items-center justify-center text-2xl mb-6">
                        <i class="fa-solid fa-robot"></i>
                    </div>
                    <h4 class="text-xl font-bold text-dark mb-4">Tech Explosion</h4>
                    <p class="text-gray-600 leading-relaxed">
                        iBuyers, automated valuation models (AVMs), and tech-driven brokerages are streamlining transactions. Technology is doing the heavy lifting that agents used to do.
                    </p>
                </div>

                <!-- Change 2 -->
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div class="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                        <i class="fa-solid fa-tags"></i>
                    </div>
                    <h4 class="text-xl font-bold text-dark mb-4">Commoditization</h4>
                    <p class="text-gray-600 leading-relaxed">
                        Basic services like setting up searches or opening doors are seen as commodities. Consumers are questioning traditional commission structures for these rudimentary tasks.
                    </p>
                </div>

                <!-- Change 3 -->
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div class="w-14 h-14 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                        <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <h4 class="text-xl font-bold text-dark mb-4">The Survival Mandate</h4>
                    <p class="text-gray-600 leading-relaxed">
                        To survive and thrive, you cannot just be a "salesperson." You must be perceived as a highly analytical, localized market expert—a true professional.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- The BPO Advantage Section -->
    <section id="value" class="py-24 bg-white border-y border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-16">
                
                <div class="lg:w-1/2">
                    <div class="relative">
                        <!-- Abstract decorative shapes instead of an image -->
                        <div class="w-full aspect-square max-w-md mx-auto relative">
                            <div class="absolute inset-0 bg-brand-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                            <div class="relative w-full h-full bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                                <!-- Mock UI Header -->
                                <div class="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                                    <div class="font-bold text-dark">Subject Property Analysis</div>
                                    <div class="flex gap-2">
                                        <div class="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div class="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                </div>
                                <!-- Mock UI Content -->
                                <div class="p-6 flex-1 flex flex-col gap-4">
                                    <div class="h-32 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                                        <i class="fa-solid fa-image text-3xl"></i>
                                    </div>
                                    <div class="space-y-3">
                                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                                    </div>
                                    <div class="mt-auto grid grid-cols-2 gap-4">
                                        <div class="bg-brand-50 p-3 rounded-lg border border-brand-100">
                                            <div class="text-xs text-brand-600 font-semibold mb-1">Est. Value</div>
                                            <div class="font-bold text-dark">$425,000</div>
                                        </div>
                                        <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                            <div class="text-xs text-blue-600 font-semibold mb-1">Confidence Score</div>
                                            <div class="font-bold text-dark">94%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Floating Badge -->
                            <div class="absolute -right-6 -bottom-6 bg-dark text-white p-4 rounded-xl shadow-xl flex items-center gap-4 transform rotate-3">
                                <div class="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-xl">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <div>
                                    <div class="font-bold">Trusted Expert</div>
                                    <div class="text-sm text-gray-300">Data-Driven Results</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:w-1/2">
                    <h2 class="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Elevate Your Status</h2>
                    <h3 class="font-serif text-4xl md:text-5xl font-bold text-dark mb-6">Why Master BPOs?</h3>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        Broker Price Opinions (BPOs) are more than just forms filled out for banks. They are rigorous, data-driven valuations that demonstrate deep market knowledge. While widely used by financial institutions, this same expertise can set you apart with everyday clients.
                    </p>

                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-building-columns"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-dark mb-2">Institutional Credibility</h4>
                                <p class="text-gray-600">If banks trust you to value assets for lending and foreclosure decisions, buyers and sellers will trust you with their largest investments.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-magnifying-glass-chart"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-dark mb-2">Beyond the CMA</h4>
                                <p class="text-gray-600">A standard CMA is often perceived as a basic sales tool. A BPO approach provides a comprehensive, objective analysis that justifies pricing strategies.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-handshake-angle"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-dark mb-2">Value for Investors</h4>
                                <p class="text-gray-600">Real estate investors rely heavily on accurate ARV (After Repair Value) and current market valuations. BPO skills make you invaluable to this lucrative demographic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tools for Growth Section -->
    <section id="tools" class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Your Arsenal</h2>
                <h3 class="font-serif text-4xl md:text-5xl font-bold text-dark mb-6">Tools to Connect and Serve</h3>
                <p class="max-w-2xl mx-auto text-lg text-gray-600">We provide the resources you need to build your valuation skills, generate reports that impress, and connect with clients who need your expertise.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Tool 1 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center card-hover">
                    <div class="w-16 h-16 mx-auto bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-2xl mb-6">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h4 class="font-bold text-lg text-dark mb-3">Certification Prep</h4>
                    <p class="text-gray-600 text-sm">Study guides and practice scenarios to help you earn recognized BPO certifications.</p>
                </div>

                <!-- Tool 2 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center card-hover">
                    <div class="w-16 h-16 mx-auto bg-purple-50 text-purple-500 rounded-full flex items-center justify-center text-2xl mb-6">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                    <h4 class="font-bold text-lg text-dark mb-3">Pro Report Templates</h4>
                    <p class="text-gray-600 text-sm">Consumer-friendly valuation templates that translate complex data into compelling presentations.</p>
                </div>

                <!-- Tool 3 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center card-hover">
                    <div class="w-16 h-16 mx-auto bg-green-50 text-green-500 rounded-full flex items-center justify-center text-2xl mb-6">
                        <i class="fa-solid fa-network-wired"></i>
                    </div>
                    <h4 class="font-bold text-lg text-dark mb-3">REO/Asset Routing</h4>
                    <p class="text-gray-600 text-sm">Direct connections to asset management companies looking for qualified local BPO agents.</p>
                </div>

                <!-- Tool 4 -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center card-hover">
                    <div class="w-16 h-16 mx-auto bg-orange-50 text-orange-500 rounded-full flex items-center justify-center text-2xl mb-6">
                        <i class="fa-solid fa-users-viewfinder"></i>
                    </div>
                    <h4 class="font-bold text-lg text-dark mb-3">Investor Matching</h4>
                    <p class="text-gray-600 text-sm">Tools to showcase your valuation expertise to local flippers, wholesalers, and landlords.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section id="join" class="py-24 bg-dark relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#14b8a6 1px, transparent 1px); background-size: 30px 30px;"></div>
        
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 class="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Ready to Differentiate Yourself?</h2>
            <p class="text-xl text-gray-300 mb-10">
                Join our network of elite agents who are leading with valuation expertise. Stop competing on commission and start competing on value.
            </p>
            
            <form class="max-w-md mx-auto bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row gap-2" onsubmit="event.preventDefault(); showSuccessMessage();">
                <input type="email" placeholder="Enter your email address" required class="flex-1 bg-transparent border-none text-white px-6 py-3 focus:outline-none placeholder-gray-400">
                <button type="submit" class="bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 px-8 rounded-full transition-colors w-full sm:w-auto">
                    Get Started Free
                </button>
            </form>
            <p class="text-sm text-gray-400 mt-4"><i class="fa-solid fa-shield-halved mr-1"></i> We respect your privacy. No spam.</p>

            <!-- Success Message (Hidden by default) -->
            <div id="success-message" class="hidden mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 backdrop-blur-sm animate-fade-in">
                <i class="fa-solid fa-circle-check mr-2"></i> Welcome to the network! Check your inbox for next steps.
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div class="col-span-1 md:col-span-2">
                    <a href="#" class="flex items-center gap-2 mb-4">
                        <div class="w-8 h-8 rounded bg-brand-500 text-white flex items-center justify-center font-bold text-sm">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                        <span class="font-serif font-bold text-xl tracking-tight text-white">BPO<span class="text-brand-500">Pro</span></span>
                    </a>
                    <p class="text-gray-400 leading-relaxed max-w-sm">
                        Empowering real estate agents to transition from transactional salespeople to highly valued market experts through the power of professional valuation.
                    </p>
                </div>
                
                <div>
                    <h4 class="text-white font-semibold mb-4">Resources</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-brand-500 transition-colors">BPO Certification Guide</a></li>
                        <li><a href="#" class="hover:text-brand-500 transition-colors">Valuation Templates</a></li>
                        <li><a href="#" class="hover:text-brand-500 transition-colors">Market Reports</a></li>
                        <li><a href="#" class="hover:text-brand-500 transition-colors">Blog</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-white font-semibold mb-4">Connect</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-brand-500 transition-colors">Agent Community</a></li>
                        <li><a href="#" class="hover:text-brand-500 transition-colors">Contact Support</a></li>
                    </ul>
                    <div class="flex gap-4 mt-6">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all"><i class="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-gray-500 text-sm">© 2026 BPOPro Network. All rights reserved.</p>
                <div class="flex gap-6 text-sm text-gray-500">
                    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Interactive Scripts -->
    <script>
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('py-4', 'py-0'); // Slight shrink effect if padding existed
            } else {
                navbar.classList.remove('shadow-md');
            }
        });

        // Mobile menu toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const icon = mobileBtn.querySelector('i');

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.replace('fa-xmark', 'fa-bars');
            } else {
                icon.classList.replace('fa-bars', 'fa-xmark');
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);

        // Close mobile menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMenu();
                }
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    const headerOffset = 80; // Height of fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });
        });

        // Form submission simulation
        function showSuccessMessage() {
            const form = document.querySelector('form');
            const successMsg = document.getElementById('success-message');
            
            form.querySelector('input').value = '';
            successMsg.classList.remove('hidden');
            
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 5000);
        }

        // Add simple fade-in animation class to head
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.5s ease-out forwards;
            }
        `;
        document.head.appendChild(style);
    </script>
</body>
</html>

```
