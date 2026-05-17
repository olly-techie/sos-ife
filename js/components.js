const Components = {
    Home: () => `
        <section id="home" class="hero">
            <div class="container hero-content reveal floating">
                <p class="reveal" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-bottom: 1rem;">Osun State Ministry of Education</p>
                <h1 style="text-shadow: 0 10px 30px rgba(0,0,0,0.3);">School of Science <br><span style="color: var(--secondary);">Ile-Ife</span></h1>
                <p style="font-style: italic; color: var(--secondary); margin-bottom: 1.5rem; font-weight: 500;">"For Moral and Academic Excellence"</p>
                <p>Empowering the next generation of scientific leaders through rigorous study, character building, and innovative discovery.</p>
                <div class="hero-btns">
                    <a href="#/about" class="btn btn-primary glow-trigger">Discover More</a>
                    <a href="#/contact" class="btn" style="border: 2px solid var(--white); margin-left: 1rem;">Contact Us</a>
                </div>
            </div>
        </section>

        <section class="stats" style="background: var(--primary); color: var(--white); padding: 4rem 0; position: relative; overflow: hidden;">
            <div class="container">
                <div class="grid-3 text-center">
                    <div class="reveal">
                        <h2 style="color: var(--secondary); font-size: 3.5rem; margin-bottom: 0.5rem; font-weight: 800;">35+</h2>
                        <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.75rem; font-weight: 600;">Years of Excellence</p>
                    </div>
                    <div class="reveal">
                        <h2 style="color: var(--secondary); font-size: 3.5rem; margin-bottom: 0.5rem; font-weight: 800;">1,500+</h2>
                        <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.75rem; font-weight: 600;">Distinguished Alumni</p>
                    </div>
                    <div class="reveal">
                        <h2 style="color: var(--secondary); font-size: 3.5rem; margin-bottom: 0.5rem; font-weight: 800;">100%</h2>
                        <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.75rem; font-weight: 600;">Science Focused</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="principal-message">
            <div class="container">
                <div class="grid-3" style="align-items: center; grid-template-columns: 1fr 2fr;">
                    <div class="reveal parallax-wrap">
                        <img src="assets/images/s1.jpg" alt="Principal" style="box-shadow: 20px 20px 0 var(--bg-light);">
                    </div>
                    <div class="reveal">
                        <span style="color: var(--secondary); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem;">Welcome to SOS Ile-Ife</span>
                        <h2 style="margin-top: 1rem; font-size: 2.5rem;">From the Principal's Desk</h2>
                        <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.8;">"Our mission is to nurture minds that are not only academically sound in the sciences but also morally upright. At the School of Science, Ile-Ife, we provide the environment and tools necessary for students to explore their potential and prepare for the challenges of a technological world."</p>
                        <div style="border-left: 4px solid var(--secondary); padding-left: 1.5rem;">
                            <p style="font-weight: 800; color: var(--primary); font-size: 1.2rem; margin-bottom: 0.2rem;">Mrs. A. B. Oluyemi</p>
                            <p style="color: var(--text-muted); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Principal, School of Science, Ile-Ife</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="latest-news" style="background: var(--bg-light);">
            <div class="container">
                <div class="text-center reveal">
                    <h2 class="section-title">Latest Updates</h2>
                </div>
                <div class="grid-3">
                    <div class="card reveal glass-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="background: rgba(5, 150, 105, 0.1); color: var(--secondary); padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700;">ACADEMICS</span>
                            <span style="color: var(--text-muted); font-size: 0.875rem;">May 15, 2026</span>
                        </div>
                        <h3>2026 Entrance Examination Results</h3>
                        <p>The first batch of results for the 2026/2027 academic session is now available. Successful candidates should check the board.</p>
                        <a href="#/admissions" style="color: var(--secondary); font-weight: 600; font-size: 0.875rem; display: inline-block; margin-top: 1rem;" class="glow-trigger">Learn More →</a>
                    </div>
                    <div class="card reveal glass-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="background: rgba(59, 130, 246, 0.1); color: var(--accent); padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700;">EVENTS</span>
                            <span style="color: var(--text-muted); font-size: 0.875rem;">May 10, 2026</span>
                        </div>
                        <h3>Annual Science Fair 2026</h3>
                        <p>Our students will be showcasing innovative projects ranging from renewable energy solutions to biological research at the state fair.</p>
                        <a href="#/gallery" style="color: var(--secondary); font-weight: 600; font-size: 0.875rem; display: inline-block; margin-top: 1rem;" class="glow-trigger">View Gallery →</a>
                    </div>
                    <div class="card reveal glass-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="background: rgba(245, 158, 11, 0.1); color: #f59e0b; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700;">FACILITIES</span>
                            <span style="color: var(--text-muted); font-size: 0.875rem;">May 01, 2026</span>
                        </div>
                        <h3>Upgraded Physics Laboratory</h3>
                        <p>We've commissioned new advanced optics and electromagnetism kits to further enhance practical learning for our senior students.</p>
                        <a href="#/academics" style="color: var(--secondary); font-weight: 600; font-size: 0.875rem; display: inline-block; margin-top: 1rem;" class="glow-trigger">See Facilities →</a>
                    </div>
                </div>
            </div>
        </section>
    `,

    About: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 10rem 0 6rem; text-align: center; position: relative; overflow: hidden;">
            <div class="container reveal">
                <h1 style="color: var(--white); font-size: 3.5rem;">About Our Citadel</h1>
                <p style="opacity: 0.8; letter-spacing: 1px;">A tradition of excellence in science education.</p>
            </div>
        </section>

        <section id="about-detail">
            <div class="container">
                <div class="grid-3" style="align-items: start; gap: 4rem;">
                    <div class="reveal">
                        <h3 style="color: var(--secondary); margin-bottom: 2rem; font-size: 1.5rem;">Our History & Timeline</h3>
                        <div class="timeline" style="border-left: 2px solid var(--bg-light); padding-left: 2rem; position: relative;">
                            <div style="margin-bottom: 3rem; position: relative;">
                                <div style="position: absolute; left: -2.35rem; top: 0.2rem; width: 12px; height: 12px; background: var(--secondary); border-radius: 50%; box-shadow: 0 0 10px var(--secondary);"></div>
                                <span style="font-weight: 800; color: var(--secondary); font-size: 1.2rem;">1990</span>
                                <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--primary);">Foundation</h4>
                                <p style="font-size: 0.9rem; color: var(--text-muted);">Established by the Osun State Government as a specialized center for science excellence.</p>
                            </div>
                            <div style="margin-bottom: 3rem; position: relative;">
                                <div style="position: absolute; left: -2.35rem; top: 0.2rem; width: 12px; height: 12px; background: var(--secondary); border-radius: 50%;"></div>
                                <span style="font-weight: 800; color: var(--secondary); font-size: 1.2rem;">2005</span>
                                <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--primary);">Facility Expansion</h4>
                                <p style="font-size: 0.9rem; color: var(--text-muted);">Major renovation and equipping of the Biology and Chemistry laboratories.</p>
                            </div>
                            <div style="position: relative;">
                                <div style="position: absolute; left: -2.35rem; top: 0.2rem; width: 12px; height: 12px; background: var(--secondary); border-radius: 50%;"></div>
                                <span style="font-weight: 800; color: var(--secondary); font-size: 1.2rem;">2020</span>
                                <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--primary);">ICT Integration</h4>
                                <p style="font-size: 0.9rem; color: var(--text-muted);">Launch of the modern computer suite and digital literacy initiative.</p>
                            </div>
                        </div>
                    </div>
                    <div class="reveal">
                        <h3 style="color: var(--secondary); margin-bottom: 2rem; font-size: 1.5rem;">Mission & Vision</h3>
                        <div class="card glass-card" style="margin-bottom: 2rem;">
                            <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--primary);">Our Mission</h4>
                            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">To provide a conducive environment for rigorous scientific study, fostering critical thinking, ethical conduct, and a passion for discovery in every student.</p>
                        </div>
                        <div class="card glass-card">
                            <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--primary);">Our Vision</h4>
                            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">To be the leading center for science education in West Africa, producing graduates who pioneer technological advancements and social progress.</p>
                        </div>
                    </div>
                    <div class="reveal">
                        <h3 style="color: var(--secondary); margin-bottom: 2rem; font-size: 1.5rem;">Strategic Goals</h3>
                        <ul style="list-style: none;">
                            <li class="reveal" style="margin-bottom: 1.5rem; display: flex; gap: 1rem;">
                                <i class="fas fa-check-circle" style="color: var(--secondary); font-size: 1.2rem; margin-top: 0.2rem;"></i>
                                <span style="color: var(--text-dark); font-weight: 500;">Achieving 100% distinction in all science subjects across state exams.</span>
                            </li>
                            <li class="reveal" style="margin-bottom: 1.5rem; display: flex; gap: 1rem;">
                                <i class="fas fa-check-circle" style="color: var(--secondary); font-size: 1.2rem; margin-top: 0.2rem;"></i>
                                <span style="color: var(--text-dark); font-weight: 500;">Developing holistic individuals with strong moral character and integrity.</span>
                            </li>
                            <li class="reveal" style="margin-bottom: 1.5rem; display: flex; gap: 1rem;">
                                <i class="fas fa-check-circle" style="color: var(--secondary); font-size: 1.2rem; margin-top: 0.2rem;"></i>
                                <span style="color: var(--text-dark); font-weight: 500;">Fostering regional leadership in Science & Technology competitions.</span>
                            </li>
                            <li class="reveal" style="display: flex; gap: 1rem;">
                                <i class="fas fa-check-circle" style="color: var(--secondary); font-size: 1.2rem; margin-top: 0.2rem;"></i>
                                <span style="color: var(--text-dark); font-weight: 500;">Building lasting partnerships with higher institutions and industries.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section style="background: var(--bg-light); position: relative; overflow: hidden;">
            <div class="container">
                <div class="text-center reveal">
                    <h2 class="section-title">Leadership Team</h2>
                    <p style="margin-bottom: 4rem; color: var(--text-muted); font-size: 1.1rem;">Guided by dedicated administrators with decades of experience.</p>
                </div>
                <div class="grid-3">
                    <div class="card text-center reveal glass-card">
                        <div class="parallax-wrap" style="width: 140px; height: 140px; margin: 0 auto 2rem; border-radius: 50%; border: 4px solid var(--white); box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                            <img src="assets/images/s1.jpg" alt="Principal" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <h3 style="font-size: 1.25rem;">Mrs. A. B. Oluyemi</h3>
                        <p style="color: var(--secondary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.75rem; margin-bottom: 1rem;">The Principal</p>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">Providing visionary leadership and maintaining world-class academic standards.</p>
                    </div>
                    <div class="card text-center reveal glass-card">
                        <div class="parallax-wrap" style="width: 140px; height: 140px; margin: 0 auto 2rem; border-radius: 50%; border: 4px solid var(--white); box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                            <img src="assets/images/s2.jpg" alt="VP Academics" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <h3 style="font-size: 1.25rem;">Mr. S. O. Adeyemo</h3>
                        <p style="color: var(--secondary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.75rem; margin-bottom: 1rem;">VP Academics</p>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">Overseeing curriculum delivery and innovative student performance tracking.</p>
                    </div>
                    <div class="card text-center reveal glass-card">
                        <div class="parallax-wrap" style="width: 140px; height: 140px; margin: 0 auto 2rem; border-radius: 50%; border: 4px solid var(--white); box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                            <img src="assets/images/s3.jpg" alt="VP Admin" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <h3 style="font-size: 1.25rem;">Dr. (Mrs.) I. A. Bello</h3>
                        <p style="color: var(--secondary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.75rem; margin-bottom: 1rem;">VP Administration</p>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">Coordinating streamlined school operations and comprehensive student welfare.</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="grid-3" style="align-items: center; gap: 4rem;">
                    <div class="reveal" style="grid-column: span 2;">
                        <h2 style="margin-bottom: 1.5rem; font-size: 2.5rem;">The Campus Environment</h2>
                        <p style="margin-bottom: 2rem; font-size: 1.1rem; color: var(--text-muted); line-height: 1.8;">Situated in a serene part of Ile-Ife, our campus is designed to promote concentration and intellectual curiosity. We prioritize safety and create an atmosphere where every student feels secure and supported.</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                            <div class="reveal" style="display: flex; gap: 1.5rem; align-items: flex-start;">
                                <div style="background: rgba(5, 150, 105, 0.1); padding: 1rem; border-radius: 1rem;">
                                    <i class="fas fa-shield-alt" style="color: var(--secondary); font-size: 1.5rem;"></i>
                                </div>
                                <div>
                                    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Secure Campus</h4>
                                    <p style="font-size: 0.9rem; color: var(--text-muted);">24/7 security personnel and perimeter fencing for student safety.</p>
                                </div>
                            </div>
                            <div class="reveal" style="display: flex; gap: 1.5rem; align-items: flex-start;">
                                <div style="background: rgba(5, 150, 105, 0.1); padding: 1rem; border-radius: 1rem;">
                                    <i class="fas fa-leaf" style="color: var(--secondary); font-size: 1.5rem;"></i>
                                </div>
                                <div>
                                    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Serene Setting</h4>
                                    <p style="font-size: 0.9rem; color: var(--text-muted);">Quiet, green environment perfect for intensive study sessions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="reveal parallax-wrap">
                        <img src="assets/images/gate.jpg" alt="Campus" style="box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                    </div>
                </div>
            </div>
        </section>
    `,

    Academics: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 10rem 0 6rem; text-align: center; position: relative; overflow: hidden;">
            <div class="container reveal">
                <h1 style="color: var(--white); font-size: 3.5rem;">Academic Excellence</h1>
                <p style="opacity: 0.8; letter-spacing: 1px;">Nurturing the scientific minds of tomorrow.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="text-center reveal">
                    <h2 class="section-title">Our Departments</h2>
                    <p style="max-width: 700px; margin: 0 auto 4rem; color: var(--text-muted); font-size: 1.1rem;">A specialized curriculum designed for high-achieving science students.</p>
                </div>
                <div class="grid-3">
                    <div class="card reveal glass-card">
                        <div style="background: rgba(5, 150, 105, 0.1); width: 60px; height: 60px; border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                            <i class="fas fa-atom" style="font-size: 1.8rem; margin-bottom: 0;"></i>
                        </div>
                        <h3>Physics</h3>
                        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Hands-on exploration of mechanics, waves, and electricity.</p>
                        <ul style="font-size: 0.9rem; color: var(--primary); padding-left: 1.25rem; list-style: disc; font-weight: 500;">
                            <li style="margin-bottom: 0.5rem;">Mechanics & Optics</li>
                            <li style="margin-bottom: 0.5rem;">Electromagnetism</li>
                            <li>Modern Physics</li>
                        </ul>
                    </div>
                    <div class="card reveal glass-card">
                        <div style="background: rgba(5, 150, 105, 0.1); width: 60px; height: 60px; border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                            <i class="fas fa-flask" style="font-size: 1.8rem; margin-bottom: 0;"></i>
                        </div>
                        <h3>Chemistry</h3>
                        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Mastering the building blocks of matter through experimentation.</p>
                        <ul style="font-size: 0.9rem; color: var(--primary); padding-left: 1.25rem; list-style: disc; font-weight: 500;">
                            <li style="margin-bottom: 0.5rem;">Organic Synthesis</li>
                            <li style="margin-bottom: 0.5rem;">Inorganic Reactions</li>
                            <li>Physical Chemistry</li>
                        </ul>
                    </div>
                    <div class="card reveal glass-card">
                        <div style="background: rgba(5, 150, 105, 0.1); width: 60px; height: 60px; border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                            <i class="fas fa-dna" style="font-size: 1.8rem; margin-bottom: 0;"></i>
                        </div>
                        <h3>Biology</h3>
                        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Studying life from molecular levels to complex ecosystems.</p>
                        <ul style="font-size: 0.9rem; color: var(--primary); padding-left: 1.25rem; list-style: disc; font-weight: 500;">
                            <li style="margin-bottom: 0.5rem;">Genetics & Evolution</li>
                            <li style="margin-bottom: 0.5rem;">Human Physiology</li>
                            <li>Plant Science</li>
                        </ul>
                    </div>
                    <div class="card reveal glass-card">
                        <div style="background: rgba(5, 150, 105, 0.1); width: 60px; height: 60px; border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                            <i class="fas fa-square-root-alt" style="font-size: 1.8rem; margin-bottom: 0;"></i>
                        </div>
                        <h3>Mathematics</h3>
                        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Building robust analytical and problem-solving foundations.</p>
                        <ul style="font-size: 0.9rem; color: var(--primary); padding-left: 1.25rem; list-style: disc; font-weight: 500;">
                            <li style="margin-bottom: 0.5rem;">Calculus & Algebra</li>
                            <li style="margin-bottom: 0.5rem;">Further Mathematics</li>
                            <li>Statistics</li>
                        </ul>
                    </div>
                    <div class="card reveal glass-card">
                        <div style="background: rgba(5, 150, 105, 0.1); width: 60px; height: 60px; border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                            <i class="fas fa-laptop-code" style="font-size: 1.8rem; margin-bottom: 0;"></i>
                        </div>
                        <h3>Tech & ICT</h3>
                        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Mastering digital literacy and computational thinking.</p>
                        <ul style="font-size: 0.9rem; color: var(--primary); padding-left: 1.25rem; list-style: disc; font-weight: 500;">
                            <li style="margin-bottom: 0.5rem;">Computer Science</li>
                            <li style="margin-bottom: 0.5rem;">Data Analysis</li>
                            <li>Digital Citizenship</li>
                        </ul>
                    </div>
                    <div class="card reveal glass-card">
                        <div style="background: rgba(5, 150, 105, 0.1); width: 60px; height: 60px; border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                            <i class="fas fa-book" style="font-size: 1.8rem; margin-bottom: 0;"></i>
                        </div>
                        <h3>English & Arts</h3>
                        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Ensuring well-rounded communication and critical thinking.</p>
                        <ul style="font-size: 0.9rem; color: var(--primary); padding-left: 1.25rem; list-style: disc; font-weight: 500;">
                            <li style="margin-bottom: 0.5rem;">English Language</li>
                            <li style="margin-bottom: 0.5rem;">Literature in English</li>
                            <li>Civic Education</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section style="background: var(--bg-light);">
            <div class="container">
                <div class="grid-3" style="align-items: center; gap: 4rem;">
                    <div class="reveal" style="grid-column: span 2;">
                        <h2 style="margin-bottom: 2rem; font-size: 2.5rem;">Academic Support & Facilities</h2>
                        <p style="margin-bottom: 3rem; font-size: 1.1rem; color: var(--text-muted);">We provide students with the high-tech resources they need to excel beyond the classroom.</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
                            <div class="reveal">
                                <h4 style="margin-bottom: 0.75rem; font-size: 1.2rem; color: var(--primary);"><i class="fas fa-microscope" style="color: var(--secondary); margin-right: 0.75rem;"></i> Modern Laboratories</h4>
                                <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Fully equipped labs for Physics, Chemistry, and Biology, allowing for intensive practical work.</p>
                            </div>
                            <div class="reveal">
                                <h4 style="margin-bottom: 0.75rem; font-size: 1.2rem; color: var(--primary);"><i class="fas fa-laptop" style="color: var(--secondary); margin-right: 0.75rem;"></i> ICT Center</h4>
                                <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">A high-speed internet-enabled computer laboratory for research and digital learning.</p>
                            </div>
                            <div class="reveal">
                                <h4 style="margin-bottom: 0.75rem; font-size: 1.2rem; color: var(--primary);"><i class="fas fa-university" style="color: var(--secondary); margin-right: 0.75rem;"></i> Library</h4>
                                <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">A vast collection of scientific journals, textbooks, and digital reference materials.</p>
                            </div>
                            <div class="reveal">
                                <h4 style="margin-bottom: 0.75rem; font-size: 1.2rem; color: var(--primary);"><i class="fas fa-user-friends" style="color: var(--secondary); margin-right: 0.75rem;"></i> Guidance & Counseling</h4>
                                <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Professional support for academic planning, career pathing, and personal development.</p>
                            </div>
                        </div>
                    </div>
                    <div class="reveal parallax-wrap" style="box-shadow: 0 30px 60px rgba(0,0,0,0.1);">
                        <img src="assets/images/class.jpg" alt="Science Lab">
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="text-center reveal">
                    <h2 class="section-title">Beyond the Classroom</h2>
                    <p style="margin-bottom: 4rem; color: var(--text-muted); font-size: 1.1rem;">Enriching student life through intellectual and scientific clubs.</p>
                </div>
                <div class="grid-3">
                    <div class="card reveal glass-card" style="border-top: 5px solid var(--secondary);">
                        <h3 style="margin-bottom: 1rem;">JETS Club</h3>
                        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">The Junior Engineers, Technicians, and Scientists club focuses on hands-on building, robotics, and regional competitions.</p>
                    </div>
                    <div class="card reveal glass-card" style="border-top: 5px solid var(--accent);">
                        <h3 style="margin-bottom: 1rem;">Olympiad Training</h3>
                        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">Specialized coaching for national and international Science & Mathematics Olympiads for high achievers.</p>
                    </div>
                    <div class="card reveal glass-card" style="border-top: 5px solid #f59e0b;">
                        <h3 style="margin-bottom: 1rem;">Literary & Debating</h3>
                        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">Sharpening communication, logical reasoning, and public speaking skills through regular intra-state competitions.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    Admissions: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 10rem 0 6rem; text-align: center; position: relative; overflow: hidden;">
            <div class="container reveal">
                <h1 style="color: var(--white); font-size: 3.5rem;">Join Our Community</h1>
                <p style="opacity: 0.8; letter-spacing: 1px;">Follow our structured process to begin your journey at SOS Ile-Ife.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="grid-3" style="gap: 4rem;">
                    <div class="reveal" style="grid-column: span 2;">
                        <h2 class="section-title" style="display: block; text-align: left;">Admission Process</h2>
                        <div style="margin-top: 3rem;">
                            <div class="reveal" style="display: flex; gap: 2rem; margin-bottom: 3rem;">
                                <div style="background: var(--secondary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 800; font-size: 1.2rem; box-shadow: 0 10px 20px rgba(5, 150, 105, 0.3);">1</div>
                                <div>
                                    <h3 style="margin-bottom: 0.5rem;">Purchase Application Form</h3>
                                    <p style="color: var(--text-muted); line-height: 1.6;">Forms are available at the school administrative office during working hours (8:00 AM - 3:00 PM, Monday to Friday).</p>
                                </div>
                            </div>
                            <div class="reveal" style="display: flex; gap: 2rem; margin-bottom: 3rem;">
                                <div style="background: var(--secondary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 800; font-size: 1.2rem; box-shadow: 0 10px 20px rgba(5, 150, 105, 0.3);">2</div>
                                <div>
                                    <h3 style="margin-bottom: 0.5rem;">Document Submission</h3>
                                    <p style="color: var(--text-muted); line-height: 1.6;">Submit completed forms along with birth certificates, 4 recent passport photographs, and results from your previous school.</p>
                                </div>
                            </div>
                            <div class="reveal" style="display: flex; gap: 2rem; margin-bottom: 3rem;">
                                <div style="background: var(--secondary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 800; font-size: 1.2rem; box-shadow: 0 10px 20px rgba(5, 150, 105, 0.3);">3</div>
                                <div>
                                    <h3 style="margin-bottom: 0.5rem;">Entrance Examination</h3>
                                    <p style="color: var(--text-muted); line-height: 1.6;">Sit for the competitive entrance exam covering Mathematics, English, and General Science knowledge.</p>
                                </div>
                            </div>
                            <div class="reveal" style="display: flex; gap: 2rem;">
                                <div style="background: var(--secondary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 800; font-size: 1.2rem; box-shadow: 0 10px 20px rgba(5, 150, 105, 0.3);">4</div>
                                <div>
                                    <h3 style="margin-bottom: 0.5rem;">Interview & Enrollment</h3>
                                    <p style="color: var(--text-muted); line-height: 1.6;">Successful candidates will be invited for a brief oral interview before final admission and orientation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="reveal">
                        <div class="card glass-card" style="border: 2px solid var(--bg-light);">
                            <h3 style="margin-bottom: 2rem; border-bottom: 1px solid var(--bg-light); padding-bottom: 1rem;">Important Dates</h3>
                            <div style="font-size: 0.95rem;">
                                <div style="display: flex; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid #f8fafc; margin-bottom: 1rem;">
                                    <span style="font-weight: 700; color: var(--primary);">Forms Sale</span>
                                    <span style="color: var(--secondary); font-weight: 600;">April 1st</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid #f8fafc; margin-bottom: 1rem;">
                                    <span style="font-weight: 700; color: var(--primary);">Exam (Batch 1)</span>
                                    <span style="color: var(--secondary); font-weight: 600;">May 15th</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid #f8fafc; margin-bottom: 1rem;">
                                    <span style="font-weight: 700; color: var(--primary);">Interviews</span>
                                    <span style="color: var(--secondary); font-weight: 600;">June 10th</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding-bottom: 1rem;">
                                    <span style="font-weight: 700; color: var(--primary);">Resumption</span>
                                    <span style="color: var(--secondary); font-weight: 600;">September</span>
                                </div>
                            </div>
                            <button class="btn btn-primary glow-trigger" style="width: 100%; margin-top: 2rem;">Download Prospectus</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section style="background: var(--bg-light);">
            <div class="container">
                <div class="text-center reveal">
                    <h2 class="section-title">Frequently Asked Questions</h2>
                </div>
                <div style="max-width: 900px; margin: 0 auto;" class="grid-3">
                    <div class="card reveal glass-card">
                        <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">Is it purely for science?</h4>
                        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Yes, our curriculum is specialized for students pursuing careers in STEM fields.</p>
                    </div>
                    <div class="card reveal glass-card">
                        <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">Criteria for admission?</h4>
                        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Based on entrance exam performance, previous records, and interview results.</p>
                    </div>
                    <div class="card reveal glass-card">
                        <h4 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem;">Boarding facilities?</h4>
                        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Currently a day school. Private hostel accommodations are available nearby.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    Gallery: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 10rem 0 6rem; text-align: center; position: relative; overflow: hidden;">
            <div class="container reveal">
                <h1 style="color: var(--white); font-size: 3.5rem;">Life at SOS</h1>
                <p style="opacity: 0.8; letter-spacing: 1px;">A glimpse into our academic, sporting, and social activities.</p>
            </div>
        </section>

        <section id="gallery">
            <div class="container">
                <div class="gallery-grid">
                    <div class="gallery-item reveal">
                        <div class="gallery-img-container parallax-wrap">
                            <img src="assets/images/b1.jpg" alt="Academics">
                        </div>
                        <div class="gallery-caption" style="padding: 1.5rem; background: var(--white);">
                            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary);">Interactive Learning</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">Students engaged in a collaborative classroom project.</p>
                        </div>
                    </div>
                    <div class="gallery-item reveal">
                        <div class="gallery-img-container parallax-wrap">
                            <img src="assets/images/b2.jpg" alt="Laboratory">
                        </div>
                        <div class="gallery-caption" style="padding: 1.5rem; background: var(--white);">
                            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary);">Chemistry Lab</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">Junior students conducting safe titration experiments.</p>
                        </div>
                    </div>
                    <div class="gallery-item reveal">
                        <div class="gallery-img-container parallax-wrap">
                            <img src="assets/images/b3.jpg" alt="Compound">
                        </div>
                        <div class="gallery-caption" style="padding: 1.5rem; background: var(--white);">
                            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary);">Main Building</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">The architectural heart of our science citadel.</p>
                        </div>
                    </div>
                    <div class="gallery-item reveal">
                        <div class="gallery-img-container parallax-wrap">
                            <img src="assets/images/gate2.jpg" alt="Entrance">
                        </div>
                        <div class="gallery-caption" style="padding: 1.5rem; background: var(--white);">
                            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary);">School Gate</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">The iconic entrance to the School of Science, Ile-Ife.</p>
                        </div>
                    </div>
                    <div class="gallery-item reveal">
                        <div class="gallery-img-container parallax-wrap">
                            <img src="assets/images/class.jpg" alt="Discussion">
                        </div>
                        <div class="gallery-caption" style="padding: 1.5rem; background: var(--white);">
                            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary);">Seminar Session</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">Guest lecture on emerging biotechnologies.</p>
                        </div>
                    </div>
                    <div class="gallery-item reveal">
                        <div class="gallery-img-container parallax-wrap">
                            <img src="assets/images/s4.jpg" alt="Facilities">
                        </div>
                        <div class="gallery-caption" style="padding: 1.5rem; background: var(--white);">
                            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary);">Physics Equipment</h4>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">Modern optics kits ready for student use.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    Contact: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 10rem 0 6rem; text-align: center; position: relative; overflow: hidden;">
            <div class="container reveal">
                <h1 style="color: var(--white); font-size: 3.5rem;">Get In Touch</h1>
                <p style="opacity: 0.8; letter-spacing: 1px;">We are here to help you begin your journey.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="grid-3" style="gap: 4rem;">
                    <div class="reveal">
                        <h2 class="section-title" style="display: block; text-align: left;">Contact Details</h2>
                        <div class="reveal" style="display: flex; gap: 1.5rem; margin-bottom: 3rem;">
                            <div style="background: rgba(5, 150, 105, 0.1); padding: 1rem; border-radius: 1rem; height: fit-content;">
                                <i class="fas fa-map-marker-alt" style="color: var(--secondary); font-size: 1.5rem;"></i>
                            </div>
                            <div>
                                <h3 style="margin-bottom: 0.5rem;">Location</h3>
                                <p style="color: var(--text-muted);">Ondo Road, Ile-Ife, Osun State, Nigeria</p>
                            </div>
                        </div>
                        <div class="reveal" style="display: flex; gap: 1.5rem; margin-bottom: 3rem;">
                            <div style="background: rgba(5, 150, 105, 0.1); padding: 1rem; border-radius: 1rem; height: fit-content;">
                                <i class="fas fa-clock" style="color: var(--secondary); font-size: 1.5rem;"></i>
                            </div>
                            <div>
                                <h3 style="margin-bottom: 0.5rem;">Office Hours</h3>
                                <p style="color: var(--text-muted);">Mon - Fri: 8:00 AM - 3:00 PM</p>
                                <p style="color: var(--text-muted); font-size: 0.8rem;">Closed on Weekends</p>
                            </div>
                        </div>
                        <div class="reveal" style="display: flex; gap: 1.5rem;">
                            <div style="background: rgba(5, 150, 105, 0.1); padding: 1rem; border-radius: 1rem; height: fit-content;">
                                <i class="fas fa-envelope" style="color: var(--secondary); font-size: 1.5rem;"></i>
                            </div>
                            <div>
                                <h3 style="margin-bottom: 0.5rem;">Inquiries</h3>
                                <p style="color: var(--text-muted);">info@sosife.edu.ng</p>
                                <p style="color: var(--text-muted);">admissions@sosife.edu.ng</p>
                            </div>
                        </div>
                    </div>
                    <div class="reveal" style="grid-column: span 2;">
                        <div class="card glass-card" style="padding: 3rem;">
                            <h3 style="margin-bottom: 2rem;">Send a Direct Message</h3>
                            <form id="contact-form">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                                    <input type="text" placeholder="Your Name" style="width: 100%; padding: 1rem; border: 1px solid var(--bg-light); border-radius: 0.75rem; background: rgba(255,255,255,0.5);">
                                    <input type="email" placeholder="Email Address" style="width: 100%; padding: 1rem; border: 1px solid var(--bg-light); border-radius: 0.75rem; background: rgba(255,255,255,0.5);">
                                </div>
                                <input type="text" placeholder="Subject" style="width: 100%; padding: 1rem; border: 1px solid var(--bg-light); border-radius: 0.75rem; margin-bottom: 1.5rem; background: rgba(255,255,255,0.5);">
                                <textarea placeholder="How can we help you?" rows="5" style="width: 100%; padding: 1rem; border: 1px solid var(--bg-light); border-radius: 0.75rem; margin-bottom: 1.5rem; background: rgba(255,255,255,0.5);"></textarea>
                                <button type="submit" class="btn btn-primary glow-trigger" style="width: 100%; padding: 1rem; font-size: 1rem;">Send Secure Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    Privacy: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 10rem 0 6rem; text-align: center; position: relative; overflow: hidden;">
            <div class="container reveal">
                <h1 style="color: var(--white); font-size: 3.5rem;">Privacy Policy</h1>
                <p style="opacity: 0.8; letter-spacing: 1px;">How we protect your personal information.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div style="max-width: 800px; margin: 0 auto;" class="reveal">
                    <div class="card glass-card" style="padding: 3rem;">
                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">Data Collection</h2>
                        <p style="margin-bottom: 2rem; color: var(--text-muted); line-height: 1.8;">At School of Science, Ile-Ife, we are committed to maintaining the trust and confidence of our visitors. We collect personal information only when you voluntarily provide it through our contact forms or admission applications.</p>
                        
                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">How We Use Your Data</h2>
                        <p style="margin-bottom: 2rem; color: var(--text-muted); line-height: 1.8;">The information we collect is used solely for school-related purposes, such as processing admissions, responding to inquiries, and sending official school updates. We do not sell or share your data with third-party marketing companies.</p>

                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">Security</h2>
                        <p style="margin-bottom: 2rem; color: var(--text-muted); line-height: 1.8;">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration.</p>

                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">Cookies</h2>
                        <p style="margin-bottom: 2rem; color: var(--text-muted); line-height: 1.8;">Our website may use cookies to improve your browsing experience. You can choose to disable cookies through your browser settings, though some features of the site may not function correctly.</p>

                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">Contact Us</h2>
                        <p style="color: var(--text-muted); line-height: 1.8;">If you have any questions about this Privacy Policy, please contact us at info@sosife.edu.ng.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    Terms: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 10rem 0 6rem; text-align: center; position: relative; overflow: hidden;">
            <div class="container reveal">
                <h1 style="color: var(--white); font-size: 3.5rem;">Terms of Use</h1>
                <p style="opacity: 0.8; letter-spacing: 1px;">Rules and regulations for using our digital platform.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div style="max-width: 800px; margin: 0 auto;" class="reveal">
                    <div class="card glass-card" style="padding: 3rem;">
                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">Acceptance of Terms</h2>
                        <p style="margin-bottom: 2rem; color: var(--text-muted); line-height: 1.8;">By accessing and using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations.</p>
                        
                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">User Conduct</h2>
                        <p style="margin-bottom: 2rem; color: var(--text-muted); line-height: 1.8;">Users are expected to use the website responsibly and for lawful purposes only. Any attempt to disrupt the site's operation or access unauthorized data is strictly prohibited.</p>

                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">Intellectual Property</h2>
                        <p style="margin-bottom: 2rem; color: var(--text-muted); line-height: 1.8;">All content on this website, including text, images, and logos, is the property of School of Science, Ile-Ife, and is protected by copyright laws. Use of this content without prior written permission is prohibited.</p>

                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">Disclaimer</h2>
                        <p style="margin-bottom: 2rem; color: var(--text-muted); line-height: 1.8;">The information provided on this website is for general informational purposes only. While we strive for accuracy, we make no guarantees regarding the completeness or reliability of the information.</p>

                        <h2 style="margin-bottom: 1.5rem; color: var(--primary);">Modifications</h2>
                        <p style="color: var(--text-muted); line-height: 1.8;">We reserve the right to modify these terms at any time without prior notice. Your continued use of the site constitutes acceptance of the updated terms.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    Sitemap: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 10rem 0 6rem; text-align: center; position: relative; overflow: hidden;">
            <div class="container reveal">
                <h1 style="color: var(--white); font-size: 3.5rem;">Sitemap</h1>
                <p style="opacity: 0.8; letter-spacing: 1px;">A comprehensive guide to our website structure.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="grid-3">
                    <div class="reveal">
                        <h3 style="color: var(--secondary); margin-bottom: 1.5rem;"><i class="fas fa-home" style="margin-right: 0.75rem;"></i>Main Pages</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 1rem;"><a href="#/home" style="color: var(--primary); font-weight: 600; text-decoration: none;">Home</a></li>
                            <li style="margin-bottom: 1rem;"><a href="#/about" style="color: var(--primary); font-weight: 600; text-decoration: none;">About Us</a></li>
                            <li style="margin-bottom: 1rem;"><a href="#/academics" style="color: var(--primary); font-weight: 600; text-decoration: none;">Academics</a></li>
                            <li style="margin-bottom: 1rem;"><a href="#/admissions" style="color: var(--primary); font-weight: 600; text-decoration: none;">Admissions</a></li>
                            <li style="margin-bottom: 1rem;"><a href="#/gallery" style="color: var(--primary); font-weight: 600; text-decoration: none;">Gallery</a></li>
                            <li style="margin-bottom: 1rem;"><a href="#/contact" style="color: var(--primary); font-weight: 600; text-decoration: none;">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="reveal">
                        <h3 style="color: var(--secondary); margin-bottom: 1.5rem;"><i class="fas fa-gavel" style="margin-right: 0.75rem;"></i>Legal & Information</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 1rem;"><a href="#/privacy" style="color: var(--primary); font-weight: 600; text-decoration: none;">Privacy Policy</a></li>
                            <li style="margin-bottom: 1rem;"><a href="#/terms" style="color: var(--primary); font-weight: 600; text-decoration: none;">Terms of Use</a></li>
                            <li style="margin-bottom: 1rem;"><a href="#/sitemap" style="color: var(--primary); font-weight: 600; text-decoration: none;">Sitemap</a></li>
                        </ul>
                    </div>
                    <div class="reveal">
                        <h3 style="color: var(--secondary); margin-bottom: 1.5rem;"><i class="fas fa-link" style="margin-right: 0.75rem;"></i>Quick Access</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 1rem;"><a href="#/about" style="color: var(--primary); font-weight: 600; text-decoration: none;">Mission & Vision</a></li>
                            <li style="margin-bottom: 1rem;"><a href="#/academics" style="color: var(--primary); font-weight: 600; text-decoration: none;">Our Departments</a></li>
                            <li style="margin-bottom: 1rem;"><a href="#/admissions" style="color: var(--primary); font-weight: 600; text-decoration: none;">How to Apply</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `
};
