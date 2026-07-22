export default function RagPipeline() {
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
        <p className="text-[#4F8EF7] font-mono text-sm mb-4">Project 03</p>
        <h1 className="text-5xl font-bold mb-4">RAG Pipeline for Document Q&A</h1>
        <p className="text-white/50 text-xl leading-relaxed mb-8">
          A retrieval augmented generation pipeline that grounds LLM outputs 
          in real document content, reducing hallucination through semantic 
          search and context aware generation.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["LangChain", "FAISS", "HuggingFace", "OpenAI", "Python", "RAG"].map(tag => (
            <span key={tag} className="text-xs font-mono px-3 py-1 bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-white/60 leading-relaxed">
            Built for CSC380 Foundations of AI at DePaul University, this pipeline 
            tackles one of the core problems with LLMs, hallucination. Instead of 
            letting the model answer from training memory alone, it first retrieves 
            the most relevant passages from a document collection, then generates 
            answers grounded in that real content.
          </p>
        </div>

        {/* How it works */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <div className="space-y-6">

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">01</span>
              <div>
                <h3 className="font-semibold mb-1">Document Ingestion</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Documents are loaded and split into chunks using LangChain's 
                  RecursiveCharacterTextSplitter with overlap to prevent context 
                  from being lost at chunk boundaries.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">02</span>
              <div>
                <h3 className="font-semibold mb-1">Embedding & Vector Storage</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Each chunk is converted into a dense vector embedding using 
                  HuggingFace's sentence transformers, then stored in a FAISS 
                  vector index for fast similarity search.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] shrink-0 font-mono text-sm mt-1">03</span>
              <div>
                <h3 className="font-semibold mb-1">Semantic Retrieval</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  When a question is asked, it's embedded using the same model 
                  and compared against all stored vectors. FAISS returns the 
                  most semantically similar chunks, not just keyword matches.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#4F8EF7] font-mono text-sm mt-1 shrink-0">04</span>
              <div>
                <h3 className="font-semibold mb-1">Grounded Generation</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  The retrieved chunks are injected into the prompt alongside 
                  the question. GPT-4o-mini generates an answer using only 
                  that context, dramatically reducing hallucination.
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
              How embeddings represent semantic meaning as vectors and why similar meanings produce similar vectors
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              The difference between keyword search and semantic similarity search
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              How chunk size and overlap affect retrieval quality
            </li>
            <li className="flex gap-3">
              <span className="text-[#4F8EF7] shrink-0">→</span>
              Why grounding LLM outputs in real sources is critical for production AI systems
            </li>
          </ul>
        </div>

      </div>
    </main>
  )
}