export default function McpTesting() {
  return (
    <main className="min-h-screen bg-[#0F1117] text-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        {/* Back button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-12"
        >
          ← Back to Portfolio
        </a>

        {/* Header */}
        <p className="text-[#4F8EF7] font-mono text-sm mb-4">Project 04</p>
        <h1 className="text-5xl font-bold mb-4">MCP-Based Automated Testing Agent</h1>
        <p className="text-white/50 text-xl leading-relaxed mb-8">
          An autonomous testing agent that achieved 98.3% JaCoCo instruction 
          coverage through 33 JUnit tests, using the Model Context Protocol 
          to iteratively generate and refine test cases.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["FastMCP", "Java", "JUnit", "Playwright", "CI/CD", "Spring Boot"].map(tag => (
            <span key={tag} className="text-xs font-mono px-3 py-1 bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            Built for SE333 Software Testing at DePaul University, this project 
            uses the Model Context Protocol (MCP) to build an autonomous agent 
            that writes, runs, and refines JUnit tests against a Spring Boot 
            LLM-enabled chatbot application. The agent reads JaCoCo coverage 
            reports and iterates until coverage targets are met.
          </p>
        </div>

        {/* How it works */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <div className="space-y-6">

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">01</span>
              <div>
                <h3 className="font-semibold mb-1">MCP Server Setup</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Built a FastMCP server exposing tools the agent can call; 
                  reading source files, running tests, parsing coverage reports, 
                  and writing new test cases to disk.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">02</span>
              <div>
                <h3 className="font-semibold mb-1">Autonomous Test Generation</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  The agent reads the source code, generates JUnit test cases, 
                  writes them to the project, and runs the test suite. All 
                  autonomously without human intervention.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">03</span>
              <div>
                <h3 className="font-semibold mb-1">Coverage Feedback Loop</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  After each test run, the agent parses the JaCoCo coverage 
                  report to identify uncovered lines and methods, then generates 
                  targeted tests to close those gaps.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">04</span>
              <div>
                <h3 className="font-semibold mb-1">CI/CD & UI Testing</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Implemented a CI/CD pipeline with Playwright for automated 
                  UI testing, including engineering workarounds for anti-bot 
                  detection during automated browser sessions.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Results */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-8">Results</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold font-mono text-[#4F8EF7] mb-2">98.3%</div>
              <div className="text-white/40 text-sm uppercase tracking-widest">JaCoCo Coverage</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold font-mono text-[#4F8EF7] mb-2">33</div>
              <div className="text-white/40 text-sm uppercase tracking-widest">JUnit Tests Generated</div>
            </div>
          </div>
        </div>

        {/* What I learned */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              How the Model Context Protocol works and how to build MCP servers with FastMCP
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Using coverage feedback loops to drive autonomous agent behavior
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              CI/CD pipeline setup and automated UI testing with Playwright
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Engineering workarounds for real-world constraints like anti-bot detection
            </li>
          </ul>
        </div>

      </div>
    </main>
  )
}