import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-slate-50 text-gray-800" style={{ fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}>
      <Head>
        <title>Tran Huu Tri — Front-End Developer</title>
        <meta name="description" content="Professional portfolio of Tran Huu Tri — Front-End Developer (React, TypeScript, Tailwind)." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur-sm bg-white/60 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow">T</div>
            <div>
              <div className="text-sm font-semibold">Tran Huu Tri</div>
              <div className="text-xs text-gray-500">Front-End Developer</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="https://github.com/hocdethanhdev" target="_blank" rel="noreferrer" className="px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">GitHub</a>
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-blue-600 font-medium">Hi, I'm Tran — Front-End Developer</p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">I build fast, accessible and maintainable web applications.</h1>
            <p className="text-gray-700 max-w-xl">I transform Figma designs into production-ready React + TypeScript code. I have experience building e-commerce platforms, affiliate marketing dashboards, SAP-integrated systems and mobile apps. I focus on performance, usability and clean code.</p>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">Contact Me</a>
              <a href="https://github.com/hocdethanhdev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">View GitHub</a>
              <a href="mailto:tritrann03@gmail.com?subject=CV%20Request" className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">Request CV</a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'ABAP', 'SAP BTP', 'Node.js'].map((t) => (
                <span key={t} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
                <div className="text-xs text-gray-500">Email</div>
                <div className="font-medium"><a href="mailto:tritrann03@gmail.com" className="text-blue-600">tritrann03@gmail.com</a></div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
                <div className="text-xs text-gray-500">Location</div>
                <div className="font-medium">Tan Phu, Ho Chi Minh City</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center mb-4">
                <img src="/globe.svg" alt="avatar" className="w-20 h-20" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Tran Huu Tri</h3>
                <p className="text-sm text-gray-500">Front-End Developer Intern</p>
                <p className="mt-3 text-sm text-gray-700">Specialized in React, TypeScript and Tailwind CSS. Experienced with SAP integrations and building production-grade front-end systems.</p>
              </div>

              <div className="mt-6 w-full">
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:0348216719" className="px-3 py-2 bg-gray-50 rounded-lg text-center text-sm hover:bg-gray-100">Call</a>
                  <a href="mailto:tritrann03@gmail.com" className="px-3 py-2 bg-blue-600 text-white rounded-lg text-center text-sm hover:bg-blue-700">Email</a>
                </div>

                <a href="https://github.com/hocdethanhdev" target="_blank" rel="noreferrer" className="mt-4 inline-block w-full px-4 py-3 text-center bg-gray-100 rounded-lg hover:bg-gray-200">Github Profile</a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <p className="text-sm text-gray-600">Highlighting a few projects that demonstrate front-end skills, system integration and product thinking.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white rounded-2xl p-5 shadow border border-gray-100 hover:shadow-xl transition">
              <img src="/file.svg" alt="Purchase Order" className="w-full h-28 object-contain mb-4" />
              <h3 className="font-bold">Purchase Order Management</h3>
              <p className="text-sm text-gray-600 mt-2">Capstone project bridging SAP On-Premise & SAP BTP. ABAP RAP backend with OData; front-end + mobile integration.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">ABAP</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">OData</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">React Native</span>
              </div>
            </article>

            <article className="bg-white rounded-2xl p-5 shadow border border-gray-100 hover:shadow-xl transition">
              <img src="/window.svg" alt="ClickFlow" className="w-full h-28 object-contain mb-4" />
              <h3 className="font-bold">ClickFlow</h3>
              <p className="text-sm text-gray-600 mt-2">A real-time advertiser & publisher platform: dashboards, analytics and tracking. Front-end in React + TypeScript.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">TypeScript</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Tailwind</span>
              </div>
            </article>

            <article className="bg-white rounded-2xl p-5 shadow border border-gray-100 hover:shadow-xl transition">
              <img src="/next.svg" alt="Hello Milky" className="w-full h-28 object-contain mb-4" />
              <h3 className="font-bold">Hello Milky Shop</h3>
              <p className="text-sm text-gray-600 mt-2">E-commerce platform with product catalog, cart & order tracking, authentication and smooth UX.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Node.js</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">SQL</span>
              </div>
            </article>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-6">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <ol className="relative border-l border-gray-200 ml-4">
              <li className="mb-6 ml-6">
                <span className="absolute -left-6 flex items-center justify-center w-9 h-9 bg-blue-600 rounded-full text-white">1</span>
                <div className="mb-1 text-sm text-gray-500">Sep 2025 – Dec 2025</div>
                <h3 className="font-bold">Full-Stack Developer — Capstone</h3>
                <p className="text-sm text-gray-600 mt-2">Built Purchase Order Management system integrating SAP On-Premise with SAP BTP. Implemented ABAP RAP backend and OData services; connected with a React Native app.</p>
              </li>

              <li className="mb-6 ml-6">
                <span className="absolute -left-6 flex items-center justify-center w-9 h-9 bg-blue-600 rounded-full text-white">2</span>
                <div className="mb-1 text-sm text-gray-500">Jun 2025 – Aug 2025</div>
                <h3 className="font-bold">Front-End Developer — ClickFlow</h3>
                <p className="text-sm text-gray-600 mt-2">Built responsive dashboards and analytics UIs with React, TypeScript and Tailwind; integrated with ASP.NET Web APIs and SQL Server.</p>
              </li>

              <li className="mb-6 ml-6">
                <span className="absolute -left-6 flex items-center justify-center w-9 h-9 bg-blue-600 rounded-full text-white">3</span>
                <div className="mb-1 text-sm text-gray-500">May 2024 – Jul 2024</div>
                <h3 className="font-bold">Front-End Developer — Hello Milky Shop</h3>
                <p className="text-sm text-gray-600 mt-2">Implemented product catalog, cart/checkout flows, authentication and order tracking to improve user experience and conversions.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills & Tools</h2>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'React', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'ABAP', level: 70 },
                { name: 'Node.js', level: 70 },
                { name: 'SQL Server', level: 70 },
                { name: 'Figma', level: 65 },
                { name: 'SAP BTP', level: 60 },
              ].map((s) => (
                <div key={s.name} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.level}%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-blue-600 rounded-full" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-medium">Professional & Tools</h4>
              <p className="text-sm text-gray-700 mt-2">Problem-solving, self-learning, teamwork, using AI tools for productivity. Office tools: Word, Excel, PowerPoint, Teams.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white rounded-2xl p-8 shadow border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold">Let's work together</h2>
          <p className="text-gray-600 mt-2">Available for front-end roles, internships and freelance projects. Reach out to discuss your project or request my CV.</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="mailto:tritrann03@gmail.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">Email me</a>
            <a href="tel:0348216719" className="px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">Call</a>
            <a href="https://github.com/hocdethanhdev" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-200 rounded-lg">GitHub</a>
          </div>

          <div className="mt-6 text-sm text-gray-500">Phone: 034 821 6719 • Email: <a href="mailto:tritrann03@gmail.com" className="text-blue-600">tritrann03@gmail.com</a></div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-8">© {new Date().getFullYear()} Tran Huu Tri — Built with Next.js & Tailwind CSS</footer>
    </div>
  );
}
