import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, BrainCircuit, X, ExternalLink, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import skillsDataRaw from '../data/playbook.json';

// Ensure the imported data matches the expected type
interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  content?: string;
}

const skillsData = skillsDataRaw as Skill[];

// Extract all unique categories
const ALL_CATEGORIES = Array.from(new Set(skillsData.map((s) => s.category))).sort();

const ClaudeSkills = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Filter skills based on search query and selected category
  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="playbook" className="py-24 relative bg-gray-50 dark:bg-background overflow-hidden">
      {/* Background Cyberpunk Grid & Glows */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
            <Terminal size={14} /> Playbook
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            My Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500 dark:from-teal-400 dark:to-purple-400">Playbook</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A curated set of production-ready prompts and workflow templates I use on client projects.
          </p>
        </div>

        {/* Master Prompt / Stats Box */}
        <div className="relative mb-12 p-1 rounded-2xl bg-gradient-to-b from-gray-200 dark:from-white/10 to-transparent">
          <div className="bg-white dark:bg-card rounded-xl p-6 md:p-8 border border-gray-200 dark:border-white/5 relative overflow-hidden shadow-sm dark:shadow-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-mono text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <BrainCircuit className="text-purple-600 dark:text-purple-400" size={20} />
                  MY_AUTOMATION_PLAYBOOK
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  These {skillsData.length} prompts and templates are my go-to, production-tested workflows for real-world automation and agent deployments.
                </p>
              </div>
              <div className="flex flex-row gap-8 shrink-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    {skillsData.length}
                  </div>
                  <div className="text-xs text-gray-500 font-mono uppercase mt-1">Playbook Items</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {ALL_CATEGORIES.length}
                  </div>
                  <div className="text-xs text-gray-500 font-mono uppercase mt-1">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-10 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-teal-500" />
            </div>
            <input
              type="text"
              placeholder="Search skills, technologies, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-card border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all font-mono text-sm shadow-sm dark:shadow-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-teal-500/20 text-teal-600 dark:text-teal-400 border border-teal-500/50 shadow-[0_0_10px_rgba(20,184,166,0.3)]"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              All
            </button>
            {ALL_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                    : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 hover:bg-gray-200 dark:hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
          <div className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-6 text-center">
          Showing {filteredSkills.length} matching items
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedSkill(skill)}
                className="group relative bg-white dark:bg-card cursor-pointer rounded-xl p-6 border border-gray-200 dark:border-white/5 hover:border-teal-500/30 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-sm dark:shadow-none"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-px bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
                
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-mono">
                    {skill.category}
                  </span>
                  <ExternalLink size={14} className="text-teal-500/50 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors" />
                </div>

                {/* Skill Name */}
                <h4 className="text-base text-gray-900 dark:text-white font-mono font-medium mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors flex items-center gap-2">
                  {skill.name}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow line-clamp-3">
                  {skill.description}
                </p>
                
                {/* ID Tag at bottom */}
                <div className="mt-5 pt-4 border-t border-gray-200 dark:border-white/5 flex items-center justify-between">
                  <code className="text-[10px] text-purple-500 dark:text-purple-400/70 font-mono">
                    <span className="text-gray-500 dark:text-gray-600">ID:</span> {skill.id}
                  </code>
                  <span className="text-[10px] uppercase font-mono text-teal-600 dark:text-teal-500/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Prompt
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredSkills.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-white/5 mb-4">
                <Search className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl text-gray-900 dark:text-white font-medium mb-2">No active skills found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search criteria or selecting a different category.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Selected Skill Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-white/90 dark:bg-background/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-card border border-gray-200 dark:border-white/10 rounded-2xl shadow-[0_0_50px_rgba(20,184,166,0.15)] flex flex-col overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/20 text-[10px] text-teal-600 dark:text-teal-400 uppercase tracking-wider font-mono">
                      {selectedSkill.category}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">ID: {selectedSkill.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-mono">{selectedSkill.name}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleCopy(selectedSkill.content || '')}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {isCopied ? <Check size={14} className="text-teal-500 dark:text-teal-400" /> : <Copy size={14} />}
                    {isCopied ? "Copied!" : "Copy Prompt"}
                  </button>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
                <div className="prose prose-teal dark:prose-invert max-w-none prose-pre:bg-gray-50 dark:prose-pre:bg-background prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-white/10 prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-teal-600 dark:prose-a:text-teal-400">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedSkill.content || '*No detailed prompt available.*'}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClaudeSkills;
