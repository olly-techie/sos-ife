const Components = {
    Home: () => `
        <section id="home" class="hero">
            <div class="container hero-content reveal">
                <p class="reveal" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-bottom: 1rem;">Osun State Ministry of Education</p>
                <h1>School of Science <br><span style="color: var(--secondary);">Ile-Ife</span></h1>
                <p>Empowering the next generation of scientific leaders through moral and academic excellence.</p>
                <div class="hero-btns">
                    <a href="#/about" class="btn btn-primary">Discover More</a>
                    <a href="#/contact" class="btn" style="border: 2px solid var(--white); margin-left: 1rem;">Contact Us</a>
                </div>
            </div>
        </section>

        <section class="latest-news">
            <div class="container">
                <div class="text-center reveal">
                    <h2 class="section-title">Latest Updates</h2>
                </div>
                <div class="grid-3">
                    <div class="card reveal">
                        <span style="color: var(--secondary); font-weight: 600;">May 15, 2026</span>
                        <h3 style="margin-top: 0.5rem;">2026 Entrance Examination Results</h3>
                        <p>Results for the first batch of entrance examinations are out. Check the administrative notice board.</p>
                    </div>
                    <div class="card reveal">
                        <span style="color: var(--secondary); font-weight: 600;">May 10, 2026</span>
                        <h3 style="margin-top: 0.5rem;">Science Fair 2026</h3>
                        <p>Our students will be showcasing innovative projects at the upcoming State Science Fair.</p>
                    </div>
                    <div class="card reveal">
                        <span style="color: var(--secondary); font-weight: 600;">May 01, 2026</span>
                        <h3 style="margin-top: 0.5rem;">New Laboratory Equipment</h3>
                        <p>We've received state-of-the-art Physics and Chemistry equipment to enhance practical learning.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    About: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 8rem 0 4rem; text-align: center;">
            <div class="container">
                <h1 style="color: var(--white);">About Our Citadel</h1>
                <p>A tradition of excellence since 1990.</p>
            </div>
        </section>

        <section id="about-detail">
            <div class="container">
                <div class="grid-3" style="align-items: start;">
                    <div class="reveal">
                        <img src="assets/images/gate2.jpg" alt="School Gate" style="border-radius: 1rem; margin-bottom: 2rem;">
                        <h3 style="color: var(--secondary);">Our History</h3>
                        <p>Founded in the heart of Ile-Ife, the School of Science was established to address the growing need for specialized science education in Osun State. Over the decades, it has evolved into a powerhouse of academic merit.</p>
                    </div>
                    <div class="reveal">
                        <h3 style="color: var(--secondary);">Our Mission</h3>
                        <p>To provide a conducive environment for rigorous scientific study, fostering critical thinking, ethical conduct, and a passion for discovery in every student.</p>
                        <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid #eee;">
                        <h3 style="color: var(--secondary);">Our Vision</h3>
                        <p>To be the leading center for science education in West Africa, producing graduates who pioneer technological advancements and social progress.</p>
                    </div>
                    <div class="reveal">
                        <h3 style="color: var(--secondary);">Core Values</h3>
                        <ul style="list-style: disc; padding-left: 1.5rem; color: var(--text-muted);">
                            <li style="margin-bottom: 0.5rem;">Academic Integrity</li>
                            <li style="margin-bottom: 0.5rem;">Scientific Curiosity</li>
                            <li style="margin-bottom: 0.5rem;">Moral Uprightness</li>
                            <li style="margin-bottom: 0.5rem;">Community Leadership</li>
                            <li style="margin-bottom: 0.5rem;">Excellence in Research</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section style="background: var(--bg-light);">
            <div class="container">
                <div class="text-center reveal">
                    <h2 class="section-title">Leadership</h2>
                    <p style="margin-bottom: 3rem;">Guided by experienced administrators and visionary educators.</p>
                </div>
                <div class="grid-3">
                    <div class="card text-center reveal">
                        <div style="width: 100px; height: 100px; background: #eee; border-radius: 50%; margin: 0 auto 1.5rem;"></div>
                        <h3>The Principal</h3>
                        <p>Committed to maintaining the highest standards of science education.</p>
                    </div>
                    <div class="card text-center reveal">
                        <div style="width: 100px; height: 100px; background: #eee; border-radius: 50%; margin: 0 auto 1.5rem;"></div>
                        <h3>VP Academics</h3>
                        <p>Ensuring curriculum excellence and student performance.</p>
                    </div>
                    <div class="card text-center reveal">
                        <div style="width: 100px; height: 100px; background: #eee; border-radius: 50%; margin: 0 auto 1.5rem;"></div>
                        <h3>VP Admin</h3>
                        <p>Driving operational efficiency and student welfare.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    Academics: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 8rem 0 4rem; text-align: center;">
            <div class="container">
                <h1 style="color: var(--white);">Academic Programs</h1>
                <p>Nurturing the scientific minds of tomorrow.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="text-center reveal">
                    <h2 class="section-title">Our Curriculum</h2>
                    <p style="max-width: 700px; margin: 0 auto 3rem; color: var(--text-muted);">We offer a specialized curriculum focused on STEM (Science, Technology, Engineering, and Mathematics) alongside essential core subjects.</p>
                </div>
                <div class="grid-3">
                    <div class="card reveal">
                        <i class="fas fa-atom"></i>
                        <h3>Physics Department</h3>
                        <p>From classical mechanics to modern astrophysics, we provide hands-on laboratory experiences that make complex theories tangible.</p>
                    </div>
                    <div class="card reveal">
                        <i class="fas fa-flask"></i>
                        <h3>Chemistry Department</h3>
                        <p>Our well-equipped labs allow students to explore organic, inorganic, and physical chemistry through safe and insightful experimentation.</p>
                    </div>
                    <div class="card reveal">
                        <i class="fas fa-dna"></i>
                        <h3>Biology Department</h3>
                        <p>Students study the intricacies of life, genetics, and ecology, preparing them for medical and biotechnological careers.</p>
                    </div>
                    <div class="card reveal">
                        <i class="fas fa-square-root-alt"></i>
                        <h3>Mathematics Department</h3>
                        <p>We focus on building strong analytical foundations, including Calculus, Statistics, and Further Mathematics.</p>
                    </div>
                    <div class="card reveal">
                        <i class="fas fa-laptop-code"></i>
                        <h3>Tech & Computing</h3>
                        <p>Mastering programming (Python/C++), web technologies, and digital literacy in our modern computer suites.</p>
                    </div>
                    <div class="card reveal">
                        <i class="fas fa-book"></i>
                        <h3>Core Studies</h3>
                        <p>Comprehensive English Language, Literature, and Economics to ensure a well-rounded academic profile.</p>
                    </div>
                </div>
            </div>
        </section>

        <section style="background: var(--bg-light);">
            <div class="container">
                <div class="grid-3" style="align-items: center;">
                    <div class="reveal" style="grid-column: span 2;">
                        <h2>Laboratory Facilities</h2>
                        <p style="margin-bottom: 1.5rem;">At School of Science, Ile-Ife, we believe that science is learned by doing. Our facilities are designed to support advanced secondary research.</p>
                        <ul style="list-style: none;">
                            <li style="margin-bottom: 0.75rem;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 0.5rem;"></i> Modern Physics Apparatus for Waves & Optics</li>
                            <li style="margin-bottom: 0.75rem;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 0.5rem;"></i> Dedicated Chemical Reagent Stores</li>
                            <li style="margin-bottom: 0.75rem;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 0.5rem;"></i> Biological Specimen Collection & Microscopes</li>
                        </ul>
                    </div>
                    <div class="reveal">
                        <img src="assets/images/class.jpg" alt="Science Class" style="border-radius: 1rem;">
                    </div>
                </div>
            </div>
        </section>
    `,

    Admissions: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 8rem 0 4rem; text-align: center;">
            <div class="container">
                <h1 style="color: var(--white);">Admissions</h1>
                <p>Begin your journey with us.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="grid-3">
                    <div class="reveal" style="grid-column: span 2;">
                        <h2 class="section-title">Admission Process</h2>
                        <div style="margin-top: 2rem;">
                            <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                                <div style="background: var(--secondary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: bold;">1</div>
                                <div>
                                    <h3>Purchase Application Form</h3>
                                    <p>Forms are available at the school administrative office during working hours (8:00 AM - 3:00 PM).</p>
                                </div>
                            </div>
                            <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                                <div style="background: var(--secondary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: bold;">2</div>
                                <div>
                                    <h3>Document Submission</h3>
                                    <p>Submit completed forms along with birth certificates, passport photographs, and previous school results.</p>
                                </div>
                            </div>
                            <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                                <div style="background: var(--secondary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: bold;">3</div>
                                <div>
                                    <h3>Entrance Examination</h3>
                                    <p>Sit for the competitive entrance exam covering Mathematics, English, and General Science.</p>
                                </div>
                            </div>
                            <div style="display: flex; gap: 1.5rem;">
                                <div style="background: var(--secondary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: bold;">4</div>
                                <div>
                                    <h3>Interview & Enrollment</h3>
                                    <p>Successful candidates will be invited for a brief interview before final admission is granted.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="reveal">
                        <div class="card" style="background: var(--bg-light); border: 2px dashed var(--secondary);">
                            <h3>Required Documents</h3>
                            <ul style="margin-top: 1rem; color: var(--text-muted);">
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-file-alt" style="margin-right: 0.5rem;"></i> Birth Certificate</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-file-alt" style="margin-right: 0.5rem;"></i> Primary School Certificate</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-file-alt" style="margin-right: 0.5rem;"></i> 4 Passport Photographs</li>
                                <li style="margin-bottom: 0.5rem;"><i class="fas fa-file-alt" style="margin-right: 0.5rem;"></i> Transfer Certificate (if applicable)</li>
                            </ul>
                            <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;">Download Prospectus</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    Gallery: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 8rem 0 4rem; text-align: center;">
            <div class="container">
                <h1 style="color: var(--white);">Gallery</h1>
                <p>Visual moments from our campus life.</p>
            </div>
        </section>

        <section id="gallery">
            <div class="container">
                <div class="gallery-grid">
                    <div class="gallery-item reveal"><img src="assets/images/b1.jpg" alt="Sports Day"></div>
                    <div class="gallery-item reveal"><img src="assets/images/b2.jpg" alt="Library Session"></div>
                    <div class="gallery-item reveal"><img src="assets/images/b3.jpg" alt="Laboratory Work"></div>
                    <div class="gallery-item reveal"><img src="assets/images/b4.jpg" alt="School Compound"></div>
                    <div class="gallery-item reveal"><img src="assets/images/class.jpg" alt="Classroom Discussion"></div>
                    <div class="gallery-item reveal"><img src="assets/images/gate.jpg" alt="Main Entrance"></div>
                    <div class="gallery-item reveal"><img src="assets/images/IMG-20250725-WA0012.jpg" alt="Event Image"></div>
                    <div class="gallery-item reveal"><img src="assets/images/IMG-20250725-WA0013.jpg" alt="Event Image"></div>
                    <div class="gallery-item reveal"><img src="assets/images/IMG-20250725-WA0014.jpg" alt="Event Image"></div>
                </div>
            </div>
        </section>
    `,

    Contact: () => `
        <section class="page-header" style="background: var(--primary); color: var(--white); padding: 8rem 0 4rem; text-align: center;">
            <div class="container">
                <h1 style="color: var(--white);">Contact Us</h1>
                <p>We are always ready to hear from you.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="grid-3">
                    <div class="reveal">
                        <h2 class="section-title" style="display: block; text-align: left;">Inquiries</h2>
                        <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                            <i class="fas fa-map-marker-alt" style="color: var(--secondary); font-size: 1.5rem;"></i>
                            <div>
                                <h3>Location</h3>
                                <p>Ondo Road, Ile-Ife, Osun State, Nigeria</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                            <i class="fas fa-envelope" style="color: var(--secondary); font-size: 1.5rem;"></i>
                            <div>
                                <h3>Email Address</h3>
                                <p>info@sosife.edu.ng</p>
                                <p>schoolofscience@gmail.com</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <i class="fab fa-telegram" style="color: var(--secondary); font-size: 1.5rem;"></i>
                            <div>
                                <h3>Social Media</h3>
                                <p>Telegram: @SOSFE_Official</p>
                            </div>
                        </div>
                    </div>
                    <div class="reveal" style="grid-column: span 2;">
                        <div class="card">
                            <h3>Send a Message</h3>
                            <form id="contact-form" style="margin-top: 1.5rem;">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                                    <input type="text" placeholder="Full Name" style="padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #ddd;">
                                    <input type="email" placeholder="Email Address" style="padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #ddd;">
                                </div>
                                <input type="text" placeholder="Subject" style="width: 100%; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #ddd; margin-bottom: 1rem;">
                                <textarea placeholder="Your Message" rows="5" style="width: 100%; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #ddd; margin-bottom: 1rem;"></textarea>
                                <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="reveal">
            <div class="container">
                <div style="border-radius: 1rem; overflow: hidden; box-shadow: 0 10px 15px rgba(0,0,0,0.1); border: 1px solid #eee; height: 450px;">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.897441589139!2d4.532394574763878!3d7.476536092535033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103831165d666d9b%3A0x1d1d1d1d1d1d1d1d!2sSchool%20of%20Science%2C%20Ile-Ife!5e0!3m2!1sen!2sng!4v1715850000000!5m2!1sen!2sng" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    `
};
