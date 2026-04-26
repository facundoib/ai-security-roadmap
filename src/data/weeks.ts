export type ResourceType = 'reading' | 'video' | 'docs' | 'blog' | 'paper' | 'lab' | 'podcast';

export interface Resource {
  type: ResourceType;
  title: string;
  source: string;
  url: string;
  note: string;
  paywalled?: boolean;
}

export interface Week {
  n: number;
  title: string;
  goal: string;
  resources: Resource[];
  supplementaryResources?: Resource[];
  exercise: string;
  checkpoint: string;
  prerequisites?: string[];
}

export const weeks: Week[] = [
  {
    n: 1,
    title: 'LLM Foundations I — Tokens, Prompts, Determinism',
    goal: 'Build an accurate mental model of what an LLM is and how inputs shape outputs. Without this, everything downstream becomes cargo-culting.',
    resources: [
      {
        type: 'reading',
        title: 'Hands-On Large Language Models — Chapters 1-2',
        source: 'Alammar & Grootendorst (O\'Reilly, 2024)',
        url: 'https://www.oreilly.com/library/view/hands-on-large-language/9781098150952/',
        note: 'The clearest chapter-1 framing in print. Skip appendices.',
        paywalled: true,
      },
      {
        type: 'video',
        title: 'Intro to Large Language Models (1h)',
        source: 'Andrej Karpathy',
        url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g',
        note: 'Non-negotiable. Watch once at 1x, take notes.',
      },
      {
        type: 'blog',
        title: 'Things we learned about LLMs in 2024',
        source: 'Simon Willison',
        url: 'https://simonwillison.net/2024/Dec/31/llms-in-2024/',
        note: 'State-of-the-field annual summary. Orients everything else.',
      },
    ],
    supplementaryResources: [
      {
        type: 'video',
        title: '¿Qué es un TRANSFORMER? La Red Neuronal que lo cambió TODO',
        source: 'Dot CSV',
        url: 'https://www.youtube.com/watch?v=aL-EmKuB078',
        note: 'Spanish-language walkthrough of the 2017 paper. Pairs cleanly with Alammar Ch. 1.',
      },
      {
        type: 'video',
        title: 'RNN and attention — visual reinforcement',
        source: 'YouTube',
        url: 'https://www.youtube.com/watch?v=RkYuH_K7Fx4',
        note: 'Use as a refresher on RNNs and the attention intuition before moving on.',
      },
      {
        type: 'blog',
        title: 'Mecanismos de Atención',
        source: 'Juan Sensio',
        url: 'https://www.juansensio.com/blog/060_attention',
        note: 'Spanish technical blog covering hard, soft, and self-attention.',
      },
    ],
    exercise: 'Install Ollama. Pull a small model (llama3.2:3b or similar). Send the same question 5 times at temperature 0 and 5 times at temperature 1. Save outputs.',
    checkpoint: 'In 2 sentences: what is a token, and why does rewording a prompt change the output?',
    prerequisites: [
      'What a token is and how it differs from a character or a word',
      'Why rewording the same prompt changes the output',
      'What `temperature` controls and how determinism trades off against variety',
      'The conceptual difference between an LLM, a search engine, and a rule-based system',
      'When you would reach for an encoder-only, decoder-only, or encoder-decoder model',
    ],
  },
  {
    n: 2,
    title: 'LLM Foundations II — Attention, Context, Sampling',
    goal: 'Understand the internals well enough to reason about attack surfaces. You do not need to implement a transformer — you need to know why injection works at the attention level.',
    resources: [
      {
        type: 'reading',
        title: 'Hands-On Large Language Models — Chapter 3',
        source: 'Alammar & Grootendorst (O\'Reilly, 2024)',
        url: 'https://www.oreilly.com/library/view/hands-on-large-language/9781098150952/',
        note: 'Attention and transformer mechanics without the math overhead.',
        paywalled: true,
      },
      {
        type: 'video',
        title: 'Attention in transformers, visually explained',
        source: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=eMlx5fFNoYc',
        note: 'Best visual intuition for attention. Pair with Karpathy from Week 1.',
      },
      {
        type: 'blog',
        title: 'The Illustrated Transformer',
        source: 'Jay Alammar',
        url: 'https://jalammar.github.io/illustrated-transformer/',
        note: 'Canonical reference. Free version of Hands-On LLMs Ch. 3 intuitions.',
      },
      {
        type: 'docs',
        title: 'Sampling parameters — temperature, top_p, top_k',
        source: 'OpenAI Platform docs',
        url: 'https://platform.openai.com/docs/guides/text-generation',
        note: 'Skim the sampling section. Same concepts apply across vendors.',
      },
    ],
    exercise: 'With Ollama, run the same prompt 10 times at temperature 0 and 10 times at temperature 1. Count how many outputs are byte-identical in each group. Explain the result.',
    checkpoint: 'Explain attention to a backend engineer who has never seen it, in 3 sentences.',
    prerequisites: [
      'How self-attention lets every token see every other token in the input',
      'Why pure attention is permutation-invariant and needs positional encoding',
      'The roles of Q, K, V vectors at a high level',
      'Why multi-head attention works better than single-head',
      'The architectural reason prompt injection works: no separation between instruction and data tokens',
    ],
  },
  {
    n: 3,
    title: 'OWASP LLM Top 10 — The Attack Surface',
    goal: 'Map the attack surface as industry has agreed on it. This is the taxonomy every other AI Security document in 2026 builds on.',
    resources: [
      {
        type: 'docs',
        title: 'OWASP Top 10 for Large Language Model Applications 2025',
        source: 'OWASP GenAI Security Project',
        url: 'https://genai.owasp.org/llm-top-10/',
        note: 'Read end-to-end. Every LLM01-LLM10 page matters.',
      },
      {
        type: 'reading',
        title: 'The Developer\'s Playbook for LLM Security — Chapters 1-2',
        source: 'Steve Wilson (O\'Reilly, 2024)',
        url: 'https://www.oreilly.com/library/view/the-developers-playbook/9781098162191/',
        note: 'Wilson co-leads OWASP LLM Top 10. Book = extended commentary on the spec.',
        paywalled: true,
      },
      {
        type: 'video',
        title: 'OWASP LLM Top 10 v1.1 launch talk',
        source: 'Steve Wilson — OWASP Global AppSec',
        url: 'https://www.youtube.com/watch?v=uGWoQvXwHBM',
        note: 'Author explains the rationale behind each risk class. 45 min.',
      },
      {
        type: 'docs',
        title: 'MITRE ATLAS — AI threat matrix',
        source: 'MITRE',
        url: 'https://atlas.mitre.org/',
        note: 'Browse all tactics once. ATLAS is to AI what ATT&CK is to classic security.',
      },
    ],
    exercise: 'Pick a public LLM application (any chatbot, Copilot, search assistant). Write a 1-page threat model naming which of LLM01-LLM10 apply and why. No solutions yet — just enumerate.',
    checkpoint: 'Recite LLM01-LLM10 from memory with a 1-line description each.',
    prerequisites: [
      'All ten OWASP LLM Top 10 categories with a one-line description each',
      'The difference between LLM01 (prompt injection) and LLM02 (sensitive info disclosure)',
      'How MITRE ATLAS complements OWASP LLM Top 10 instead of duplicating it',
      'Why the threat model of an LLM application is structurally different from a classic web app',
    ],
  },
  {
    n: 4,
    title: 'Prompt Injection — Direct and Indirect',
    goal: 'Understand LLM01 at research-paper depth. It is the most exploited and least defended class in production.',
    resources: [
      {
        type: 'paper',
        title: 'Not what you\'ve signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection',
        source: 'Greshake, Abdelnabi, Mishra et al. (arXiv 2023)',
        url: 'https://arxiv.org/abs/2302.12173',
        note: 'The paper that named indirect injection. Required reading.',
      },
      {
        type: 'blog',
        title: 'Prompt injection archive',
        source: 'Simon Willison',
        url: 'https://simonwillison.net/tags/prompt-injection/',
        note: 'The single best running log of real-world injections. Sort by date.',
      },
      {
        type: 'reading',
        title: 'Adversarial AI Attacks, Mitigations, and Defense Strategies — prompt injection chapters',
        source: 'John Sotiropoulos (Packt, 2024)',
        url: 'https://www.packtpub.com/en-us/product/adversarial-ai-attacks-mitigations-and-defense-strategies-9781835087985',
        note: 'Most practical attacker-lens chapters available in book form.',
        paywalled: true,
      },
      {
        type: 'video',
        title: 'Prompt Injection: What\'s the worst that can happen?',
        source: 'Simon Willison — AI Engineer Summit',
        url: 'https://www.youtube.com/watch?v=zP_SHRdPZ4Y',
        note: '30 min. The plain-English version of the paper.',
      },
    ],
    exercise: 'Against a free-tier consumer chatbot, attempt 5 direct injection variants (role hijack, delimiter break, instruction override, Unicode smuggling, tool-call manipulation). Document what worked and what was blocked. Do nothing harmful.',
    checkpoint: 'Explain direct vs indirect prompt injection with one concrete example of each.',
    prerequisites: [
      'Direct vs indirect prompt injection with one concrete example of each',
      'Why no current architecture can fully distinguish instruction tokens from data tokens',
      'The classic injection families: role hijack, delimiter break, instruction override, Unicode smuggling',
      'The link between RAG architecture and indirect injection as a delivery vector',
    ],
  },
  {
    n: 5,
    title: 'Sensitive Information Disclosure — LLM02',
    goal: 'Understand where PII and secrets leak in an LLM pipeline and why generic DLP tools miss most of it.',
    resources: [
      {
        type: 'reading',
        title: 'The Developer\'s Playbook for LLM Security — Chapter on data leaks',
        source: 'Steve Wilson (O\'Reilly, 2024)',
        url: 'https://www.oreilly.com/library/view/the-developers-playbook/9781098162191/',
        note: 'Wilson\'s chapter on LLM02 is the cleanest short treatment available.',
        paywalled: true,
      },
      {
        type: 'docs',
        title: 'LLM02: Sensitive Information Disclosure',
        source: 'OWASP GenAI Security Project',
        url: 'https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/',
        note: 'Official spec page. Short. Read.',
      },
      {
        type: 'docs',
        title: 'Microsoft Presidio — PII detection engine',
        source: 'Microsoft',
        url: 'https://microsoft.github.io/presidio/',
        note: 'Most widely used open-source PII detector. Read the recognizers list.',
      },
      {
        type: 'blog',
        title: 'Preventing data leakage with LLM pipelines',
        source: 'AWS Machine Learning Blog',
        url: 'https://aws.amazon.com/blogs/machine-learning/architect-defense-in-depth-security-for-generative-ai-applications-using-the-owasp-top-10-for-llms/',
        note: 'Reference architecture mapped to OWASP LLM Top 10.',
      },
    ],
    exercise: 'Write a TypeScript (or Python) function that detects one government ID from your country using regex + checksum. Test it against 10 synthetic inputs (5 valid, 5 invalid). Do not use real data.',
    checkpoint: 'List the 3 points in an LLM pipeline where PII can leak, in order of occurrence.',
    prerequisites: [
      'The three points in an LLM pipeline where PII can leak (input, system prompt, output)',
      'Why generic DLP tools fail on LATAM identifiers (DNI, CPF, CURP, RFC, RUT)',
      'The difference between PII in training data and PII in runtime traffic',
      'What a deterministic recognizer is and why it scales better than ML-based PII detection',
    ],
  },
  {
    n: 6,
    title: 'Supply Chain and Model Risks — LLM03, LLM05',
    goal: 'Understand the non-input attack surface. Most AppSec engineers underweight this because classic web apps don\'t have it.',
    resources: [
      {
        type: 'reading',
        title: 'The Developer\'s Playbook for LLM Security — Chapters 4-5',
        source: 'Steve Wilson (O\'Reilly, 2024)',
        url: 'https://www.oreilly.com/library/view/the-developers-playbook/9781098162191/',
        note: 'Supply chain + insecure output handling, from the spec co-author.',
        paywalled: true,
      },
      {
        type: 'docs',
        title: 'MITRE ATLAS — Supply Chain Compromise tactics',
        source: 'MITRE',
        url: 'https://atlas.mitre.org/tactics/AML.TA0010',
        note: 'Focus on "ML Supply Chain Compromise" and linked techniques.',
      },
      {
        type: 'blog',
        title: 'Securing the ML supply chain',
        source: 'Hugging Face',
        url: 'https://huggingface.co/blog/securing-llm-supply-chain',
        note: 'Practical guidance on model provenance and malicious models.',
      },
      {
        type: 'paper',
        title: 'Poisoning Web-Scale Training Datasets is Practical',
        source: 'Carlini et al. (IEEE S&P 2024)',
        url: 'https://arxiv.org/abs/2302.10149',
        note: 'Foundational paper on data poisoning. Section 1-3 is enough.',
      },
    ],
    exercise: 'Pick 3 random models from Hugging Face trending. For each, write a 5-line risk assessment: license, training data claim, author reputation, download count, license compatibility with commercial use.',
    checkpoint: 'Name 3 supply-chain risks unique to LLM deployments that do not exist in classic web apps.',
    prerequisites: [
      'Three supply-chain risks unique to LLM deployments that do not exist in classic web apps',
      'What model poisoning is and why the Carlini et al. paper matters',
      'The metadata a security review should require for any third-party model (license, training data, author, downloads)',
      'Why "I trust the Hugging Face badge" is not a risk assessment',
    ],
  },
  {
    n: 7,
    title: 'Evals and Guardrails — Tooling',
    goal: 'Move from theory to tools. You cannot call yourself an AI Security engineer without having run at least one eval harness against a model.',
    resources: [
      {
        type: 'docs',
        title: 'Promptfoo — Getting Started',
        source: 'Promptfoo',
        url: 'https://www.promptfoo.dev/docs/getting-started/',
        note: 'Most practical eval harness. Works with any model. Install and use.',
      },
      {
        type: 'docs',
        title: 'Garak — LLM vulnerability scanner',
        source: 'NVIDIA',
        url: 'https://github.com/NVIDIA/garak',
        note: 'The closest thing to "nmap for LLMs". Ships with injection, jailbreak, toxicity probes.',
      },
      {
        type: 'blog',
        title: 'A statistical approach to model evaluations',
        source: 'Anthropic',
        url: 'https://www.anthropic.com/research/statistical-approach-to-model-evals',
        note: 'Why naive eval scores are misleading. Short and necessary.',
      },
      {
        type: 'docs',
        title: 'NVIDIA NeMo Guardrails — Introduction',
        source: 'NVIDIA',
        url: 'https://docs.nvidia.com/nemo/guardrails/',
        note: 'Read the intro and architecture overview. Do not install — just understand the model.',
      },
    ],
    exercise: 'Install Promptfoo. Write a YAML config that runs 5 prompt injection probes against a local Ollama model. Run it. Commit the config and the output report to a personal repo.',
    checkpoint: 'Explain the difference between static and adversarial evals in 2 sentences.',
    prerequisites: [
      'The difference between static and adversarial evals',
      'When to reach for an eval harness (Promptfoo) vs a vulnerability scanner (Garak)',
      'Why naive eval pass-rates are misleading without statistical framing',
      'What a guardrail is at the architectural level, independent of any specific framework',
    ],
  },
  {
    n: 8,
    title: 'Fuzzing, Red-Teaming Basics, First Public Output',
    goal: 'Consolidate the 8 weeks and ship your first public artifact. Public output is how this plan becomes visible.',
    resources: [
      {
        type: 'paper',
        title: 'An Empirical Study of the Reliability of UNIX Utilities (1990)',
        source: 'Miller, Fredriksen, So — Communications of the ACM',
        url: 'https://pages.cs.wisc.edu/~bart/fuzz/fuzz.html',
        note: 'The fuzzing foundational paper. Short. Every security engineer should have read it once.',
      },
      {
        type: 'blog',
        title: 'Red teaming language models with language models',
        source: 'Perez et al. — DeepMind / arXiv',
        url: 'https://arxiv.org/abs/2202.03286',
        note: 'The paper that started automated LLM red-teaming. Abstract + Section 3 is enough.',
      },
      {
        type: 'docs',
        title: 'Garak probes reference',
        source: 'NVIDIA Garak docs',
        url: 'https://reference.garak.ai/en/latest/garak.probes.html',
        note: 'Run at least one probe class against a model you have locally.',
      },
      {
        type: 'blog',
        title: 'OWASP LLM AI Security & Governance Checklist',
        source: 'OWASP GenAI',
        url: 'https://genai.owasp.org/resource/llm-ai-security-and-governance-checklist/',
        note: 'Capstone reference document. Use it to audit what you now know vs what you don\'t.',
      },
    ],
    exercise: 'Run Garak against a local Ollama model with 1 probe class (suggested: "promptinject" or "dan"). Save the report. Fork or star one open-source LLM security project that was useful during these 8 weeks.',
    checkpoint: 'Publish one public artifact: a blog post, LinkedIn post, or GitHub README summarizing the most surprising thing you learned across these 8 weeks. This is the first public output of your AI Security pivot. Link it in this checkpoint.',
    prerequisites: [
      'How fuzzing applied to LLMs differs from fuzzing classical software',
      'The difference between manual red-teaming and automated red-teaming',
      'What a probe is in Garak and how probes compose into a scan',
      'How success against an LLM is actually measured beyond "did the jailbreak work"',
    ],
  },
];
