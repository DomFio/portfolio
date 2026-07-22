export default function PromptInjection() {
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
        <p className="text-[#4F8EF7] font-mono text-sm mb-4">Project 02</p>
        <h1 className="text-5xl font-bold mb-4">Multi-Agent Prompt Injection Detection</h1>
        <p className="text-white/50 text-xl leading-relaxed mb-8">
          A 3-agent parallel LangGraph system that detects adversarial prompt 
          injection attacks, achieving 83.3% accuracy and 0.789 Macro F1 score.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["LangGraph", "OpenAI API", "Python", "Multi-Agent", "NLP", "Security"].map(tag => (
            <span key={tag} className="text-xs font-mono px-3 py-1 bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            Built for CSC380 Foundations of AI at DePaul University, this system 
            uses a parallel fan-out/fan-in LangGraph architecture to detect prompt 
            injection attacks; attempts by malicious inputs to hijack an AI system's 
            behavior. Two specialized agents analyze the input simultaneously, and a 
            third synthesizes their findings into a final verdict.
          </p>
        </div>

        {/* Architecture */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-8">Architecture</h2>
          <div className="space-y-6">

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">01</span>
              <div>
                <h3 className="font-semibold mb-1">Intent Analysis Agent</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Analyzes the semantic intent of the input. Is it trying to 
                  override instructions, extract system prompts, or manipulate 
                  the model's behavior?
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">02</span>
              <div>
                <h3 className="font-semibold mb-1">Instruction Hierarchy Agent</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Runs in parallel with the Intent agent. Checks whether the input 
                  attempts to violate the instruction hierarchy. places user 
                  instructions above system-level constraints.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">03</span>
              <div>
                <h3 className="font-semibold mb-1">Risk Classification Agent</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Waits for both agents to complete (fan-in), then synthesizes 
                  their outputs into a final verdict: Benign, Suspicious, or 
                  Injection. Returns structured JSON output for downstream processing.
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
              <div className="text-4xl font-bold font-mono text-[#4F8EF7] mb-2">83.3%</div>
              <div className="text-white/40 text-sm uppercase tracking-widest">Accuracy</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold font-mono text-[#4F8EF7] mb-2">0.789</div>
              <div className="text-white/40 text-sm uppercase tracking-widest">Macro F1 Score</div>
            </div>
          </div>
        </div>

        {/* What I learned */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Designing parallel agent architectures in LangGraph using fan-out/fan-in patterns
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Structured JSON output parsing to ensure consistent agent communication
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Systematic error analysis to identify and correct misclassification patterns
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Real-world application of AI security concepts to protect LLM systems
            </li>
          </ul>
        </div>

      </div>
    </main>
  )
}