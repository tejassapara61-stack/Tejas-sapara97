import fs from 'fs';
import path from 'path';

const SKILLS_DIR = 'd:\\my website\\skills';
const OUTPUT_FILE = 'd:\\my website\\ai-automation-studio\\src\\data\\claudeSkills.json';

// Map of folder names to categories
const CATEGORY_MAP = {
  "Code Quality & Standards": ["coding-standards", "java-coding-standards", "cpp-coding-standards", "plankton-code-quality"],
  "Python": ["python-patterns", "python-testing", "pytorch-patterns"],
  "Rust": ["rust-patterns", "rust-testing"],
  "Go": ["golang-patterns", "golang-testing"],
  "Java / Spring Boot": ["springboot-patterns", "springboot-tdd", "springboot-security", "springboot-verification", "jpa-patterns"],
  "Kotlin": ["kotlin-patterns", "kotlin-testing", "kotlin-coroutines-flows", "kotlin-ktor-patterns", "kotlin-exposed-patterns"],
  "Laravel / PHP": ["laravel-patterns", "laravel-tdd", "laravel-security", "laravel-verification", "laravel-plugin-discovery"],
  "Django / Python Web": ["django-patterns", "django-tdd", "django-security", "django-verification"],
  ".NET / C#": ["dotnet-patterns", "csharp-testing"],
  "Perl": ["perl-patterns", "perl-testing", "perl-security"],
  "C++": ["cpp-testing"],
  "Swift / iOS": ["swiftui-patterns", "swift-concurrency-6-2", "swift-protocol-di-testing", "swift-actor-persistence", "liquid-glass-design", "foundation-models-on-device"],
  "Flutter / Dart": ["dart-flutter-patterns", "flutter-dart-code-review"],
  "Android / KMP": ["android-clean-architecture", "compose-multiplatform-patterns"],
  "Frontend / Web": ["frontend-patterns", "frontend-slides", "nuxt4-patterns", "nextjs-turbopack", "accessibility", "design-system", "seo"],
  "Backend": ["backend-patterns", "api-design", "api-connector-builder", "hexagonal-architecture", "nestjs-patterns"],
  "Databases": ["postgres-patterns", "clickhouse-io", "database-migrations"],
  "DevOps / CI/CD": ["docker-patterns", "deployment-patterns", "git-workflow", "github-ops", "canary-watch", "benchmark"],
  "Testing": ["tdd-workflow", "e2e-testing", "ai-regression-testing", "browser-qa"],
  "Security": ["security-review", "security-scan", "security-bounty-hunter", "llm-trading-agent-security", "defi-amm-security", "evm-token-decimals", "nodejs-keccak256"],
  "Healthcare / Compliance": ["healthcare-phi-compliance", "hipaa-compliance", "healthcare-emr-patterns", "healthcare-cdss-patterns", "healthcare-eval-harness"],
  "AI / Agents": ["autonomous-loops", "continuous-agent-loop", "enterprise-agent-ops", "agent-eval", "gan-style-harness", "agentic-engineering", "agent-harness-construction", "agent-introspection-debugging", "agent-sort", "agent-payment-x402", "autonomous-agent-harness", "team-builder", "dmux-workflows", "nanoclaw-repl", "council", "eval-harness", "ai-first-engineering"],
  "LLM / AI Pipelines": ["cost-aware-llm-pipeline", "regex-vs-llm-structured-text", "content-hash-cache-pattern", "iterative-retrieval"],
  "Project Management": ["blueprint", "project-flow-ops", "ralphinho-rfc-pipeline", "product-lens", "product-capability", "architecture-decision-records", "code-tour", "codebase-onboarding", "jira-integration"],
  "Content / Writing": ["content-engine", "brand-voice", "article-writing", "crosspost"],
  "Business / Marketing": ["market-research", "investor-materials", "investor-outreach", "lead-intelligence"],
  "Communications / Ops": ["email-ops", "messages-ops", "google-workspace-ops", "unified-notifications-ops"],
  "Supply Chain / Operations": ["inventory-demand-planning", "production-scheduling", "returns-reverse-logistics", "customs-trade-compliance", "carrier-relationship-management", "quality-nonconformance", "energy-procurement", "logistics-exception-management"],
  "Finance / Billing": ["finance-billing-ops", "customer-billing-ops"],
  "Media / Video": ["video-editing", "remotion-video-creation", "manim-video", "videodb", "fal-ai-media", "ui-demo"],
  "Developer Tooling": ["mcp-server-patterns", "documentation-lookup", "exa-search", "search-first", "repo-scan", "workspace-surface-audit", "terminal-ops", "safety-guard", "strategic-compact", "context-budget", "bun-runtime", "claude-devfleet", "click-path-audit", "configure-ecc", "connections-optimizer", "deep-research", "hookify-rules", "visa-doc-translate", "x-api", "research-ops", "nutrient-document-processing"],
  "Memory / Knowledge": ["continuous-learning", "continuous-learning-v2", "knowledge-ops", "ck"],
  "Workflow / Meta Skills": ["prompt-optimizer", "skill-stocktake", "skill-comply", "rules-distill", "hermes-imports", "opensource-pipeline", "token-budget-advisor", "gateguard", "santa-method", "verification-loop", "dashboard-builder", "data-scraper-agent"],
  "Special / Fun": ["openclaw-persona-forge", "social-graph-ranker", "ecc-tools-cost-audit", "automation-audit-ops"]
};

// Build reverse map for fast lookup
const folderToCategory = {};
for (const [category, folders] of Object.entries(CATEGORY_MAP)) {
  for (const folder of folders) {
    folderToCategory[folder] = category;
  }
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const metadata = {};
  let bodyContent = content;
  
  if (match) {
    const yaml = match[1];
    bodyContent = content.slice(match[0].length).trim();
    
    const lines = yaml.split(/\r?\n/);
    let currentKey = null;
    let currentValue = "";

    for (const line of lines) {
      const keyMatch = line.match(/^(\w+):\s*(.*)$/);
      if (keyMatch) {
        if (currentKey) {
          metadata[currentKey] = currentValue.trim();
        }
        currentKey = keyMatch[1];
        currentValue = keyMatch[2];
      } else if (currentKey) {
        // Continuation of a multiline value (like a long description)
        currentValue += " " + line.trim();
      }
    }
    
    if (currentKey) {
      metadata[currentKey] = currentValue.trim();
    }
  }
  
  return { metadata, bodyContent };
}

async function main() {
  const dataDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const skills = [];
  const directories = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const dirName of directories) {
    const skillMdPath = path.join(SKILLS_DIR, dirName, 'SKILL.md');
    if (!fs.existsSync(skillMdPath)) continue;

    const fileContent = fs.readFileSync(skillMdPath, 'utf8');
    const { metadata, bodyContent } = parseFrontmatter(fileContent);
    
    if (metadata && metadata.name) {
      let cat = folderToCategory[dirName] || "Uncategorized";
      
      // Some folders might have slightly different names than in the map
      if (cat === "Uncategorized") {
        console.warn(`Uncategorized skill found: ${dirName}`);
      }

      skills.push({
        id: dirName,
        name: metadata.name,
        description: metadata.description || '',
        category: cat,
        content: bodyContent
      });
    }
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(skills, null, 2));
  console.log(`Successfully extracted ${skills.length} skills to ${OUTPUT_FILE}`);
}

main().catch(console.error);
