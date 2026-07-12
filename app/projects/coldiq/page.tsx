export default function ColdIQ() {
  return (
    <main className="min-h-screen bg-[#0F1117] text-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        {/* Back button */}
        
         <a href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-12"
        >
          ← Back to Portfolio
        </a>

        {/* Header */}
        <p className="text-[#4F8EF7] font-mono text-sm mb-4">Project 01</p>
        <h1 className="text-5xl font-bold mb-4">ColdID</h1>
        <p className="text-white/50 text-xl leading-relaxed mb-8">
          An AI-powered job application pipeline that qualifies job fit, 
          finds hiring managers, and drafts personalized cold outreach 
          emails grounded in a RAG-based knowledge base.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-16">
          {["LangGraph", "RAG", "FAISS", "OpenAI", "Tavily", "Python", "Streamlit"].map(tag => (
            <span key={tag} className="text-xs font-mono px-3 py-1 bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-16">
          
          <a  href="https://github.com/DomFio/ColdID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 hover:text-white hover:border-white/30 transition-colors text-sm"
          >
            View on GitHub ↗
          </a>
          
          <a  href="https://coldid.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F8EF7] text-white rounded-lg hover:bg-[#3A7AE4] transition-colors text-sm font-medium"
          >
            Live Demo ↗
          </a>
        </div>

        {/* Overview */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            ColdID is a four-agent LangGraph pipeline designed to automate and 
            personalize the job application process. Instead of sending generic 
            cold emails, ColdID qualifies your fit for a role, finds the right 
            person to contact, and drafts a personalized email grounded in your 
            actual experience using RAG then reviews and refines it before sending.
          </p>
        </div>

        {/* How it works */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <div className="space-y-6">

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">01</span>
              <div>
                <h3 className="font-semibold mb-1">Qualifier Agent</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Scores how well you match the job posting on a scale of 0-100 
                  using RAG to retrieve relevant experience from your resume. 
                  If the score is below a configurable threshold, the pipeline stops.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">02</span>
              <div>
                <h3 className="font-semibold mb-1">Finder Agent</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Uses Tavily web search to locate the hiring manager's name, 
                  title, and LinkedIn profile. Includes verification logic to 
                  reject false matches from similarly named companies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">03</span>
              <div>
                <h3 className="font-semibold mb-1">Drafter Agent</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Writes a personalized cold email using the qualifier's reasoning 
                  and RAG-retrieved context from your resume and projects. 
                  References real project names, technologies, and measurable outcomes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">04</span>
              <div>
                <h3 className="font-semibold mb-1">Reviewer Agent</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Critiques the draft against a defined rubric with hard and soft 
                  criteria. Rejects with specific feedback and loops back to the 
                  drafter if needed, with a configurable retry limit to prevent 
                  infinite loops.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* What I learned */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Building conditional graph logic in LangGraph with fan-out/fan-in patterns and revision loops
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Designing RAG systems that retrieve semantically relevant context rather than keyword matches
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Prompt engineering with hard vs soft constraints to control LLM reviewer behavior
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Debugging multi-agent systems by isolating individual nodes and testing them independently
            </li>
          </ul>
        </div>

      </div>
      
    </main>
  )
}