// app/page.tsx
// Main portfolio page - single scrollable page with all sections

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1117] text-white">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0F1117]/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm text-white/60">dominic fiorelli</span>
          <div className="flex gap-8 text-sm text-white/60">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-32">
        <p className="text-[#4F8EF7] font-mono text-sm mb-4">Hey, I'm</p>
        <h1 className="text-6xl font-bold tracking-tight mb-4">
          Dominic Fiorelli
        </h1>
        <h2 className="text-2xl text-white/60 font-light mb-8">
          CS Student & AI/ML Engineer
        </h2>
        {/* <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
          Building intelligent systems at the intersection of agentic AI, 
          RAG pipelines, and real world software engineering. 
          Graduating December 2026 from DePaul University.
        </p> */}
        <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-[#4F8EF7] text-white rounded-lg font-medium hover:bg-[#3A7AE4] transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-white/20 text-white/70 rounded-lg font-medium hover:border-white/40 hover:text-white transition-colors">
              Get in Touch
            </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
        <p className="text-[#4F8EF7] font-mono text-sm mb-3">01 — About</p>
        <h3 className="text-3xl font-bold mb-8">Who I Am</h3>
        <div className="max-w-2xl text-white/60 text-lg leading-relaxed space-y-4">
          <p>
            I'm a Computer Science student at DePaul University, 
            expected to graduate in December 2026. I specialize in AI/ML engineering 
            with a focus on agentic systems, RAG pipelines, and multi-agent architectures.
          </p>
          <p>
            I Love building practical tools. In attempt to help me find a job, 
            a 4-agent LangGraph pipeline that automates cold emails for job applications. 
            I am currently working on Study Buddy. A RAG powered 'Study buddy' that reads
            your links, or textbooks and helps you learn the material faster. 
            With summaries, Q&A, and quizzes grounded directly
            in the source content.
          </p>
          <p>
            I am actively looking for AI/ML engineering roles!
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
        <p className="text-[#4F8EF7] font-mono text-sm mb-3">02 — Projects</p>
        <h3 className="text-3xl font-bold mb-12">What I've Built</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ColdIQ */}
          <a href="/projects/coldiq" className="group block p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#4F8EF7]/50 hover:bg-white/8 transition-all">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-mono text-[#4F8EF7] bg-[#4F8EF7]/10 px-2 py-1 rounded">LangGraph · RAG · OpenAI</span>
              <span className="text-white/30 group-hover:text-white/60 transition-colors">↗</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">ColdIQ</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              4-agent LangGraph pipeline that qualifies job fit, finds hiring managers, 
              and drafts personalized cold outreach emails grounded in a RAG knowledge base.
            </p>
          </a>

          {/* Prompt Injection */}
          <a href="/projects/prompt-injection" className="group block p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#4F8EF7]/50 hover:bg-white/8 transition-all">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-mono text-[#4F8EF7] bg-[#4F8EF7]/10 px-2 py-1 rounded">LangGraph · OpenAI · Python</span>
              <span className="text-white/30 group-hover:text-white/60 transition-colors">↗</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">Multi-Agent Prompt Injection Detection</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              3-agent parallel fan-out/fan-in architecture achieving 83.3% accuracy 
              and 0.789 Macro F1 detecting adversarial prompt injection attempts.
            </p>
          </a>

          {/* RAG Pipeline */}
          <a href="/projects/rag-pipeline" className="group block p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#4F8EF7]/50 hover:bg-white/8 transition-all">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-mono text-[#4F8EF7] bg-[#4F8EF7]/10 px-2 py-1 rounded">LangChain · FAISS · HuggingFace</span>
              <span className="text-white/30 group-hover:text-white/60 transition-colors">↗</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">RAG Pipeline for Document Q&A</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Retrieval-augmented generation pipeline using LangChain and FAISS for 
              vector storage, grounding LLM outputs in domain-specific document data.
            </p>
          </a>

          {/* MCP Testing */}
          <a href="/projects/mcp-testing" className="group block p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#4F8EF7]/50 hover:bg-white/8 transition-all">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-mono text-[#4F8EF7] bg-[#4F8EF7]/10 px-2 py-1 rounded">FastMCP · JUnit · Playwright</span>
              <span className="text-white/30 group-hover:text-white/60 transition-colors">↗</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">MCP-Based Automated Testing Agent</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Autonomous testing agent achieving 98.3% JaCoCo instruction coverage 
              through 33 JUnit tests with CI/CD pipeline and Playwright UI testing.
            </p>
          </a>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
        <p className="text-[#4F8EF7] font-mono text-sm mb-3">03 — Skills</p>
        <h3 className="text-3xl font-bold mb-12">What I Work With</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">AI/ML</h4>
            <div className="flex flex-wrap gap-2">
              {["LangChain", "LangGraph", "FAISS", "HuggingFace", "RAG Pipelines", "OpenAI API", "Prompt Engineering", "Multi-Agent Systems"].map(skill => (
                <span key={skill} className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "SQL", "TypeScript", "JavaScript", "Scala", "C", "R"].map(skill => (
                <span key={skill} className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">Tools & Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Flask", "Git", "PostgreSQL", "JUnit", "FastMCP", "CI/CD", "Playwright"].map(skill => (
                <span key={skill} className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
        <p className="text-[#4F8EF7] font-mono text-sm mb-3">04 — Contact</p>
        <h3 className="text-3xl font-bold mb-4">Let's Talk</h3>
        <p className="text-white/50 text-lg max-w-xl mb-10">
          I'm actively looking for AI/ML engineering Internship 
          to have during my last quarter at DePaul. 
          If you're building something interesting, let's connect.
        </p>
        <div className="flex gap-6">
          <a href="mailto:DominicFiorelli@gmail.com" className="text-white/60 hover:text-white transition-colors">
            Email ↗
          </a>
          <a href="https://github.com/DomFIo" target="_blank" className="text-white/60 hover:text-white transition-colors">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/dominic-fiorelli-13794a238" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-white/30 text-sm">
          <span>Dominic Fiorelli © 2026</span>
          <span className="font-mono">Built with Next.js</span>
        </div>
      </footer>

    </main>
  );
}