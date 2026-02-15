<template>
  <div class="bm-home">
    <div
      class="bm-float-btn"
      aria-hidden="true"
      tabindex="-1"
      :style="{ left: floatX + 'px', top: floatY + 'px' }"
      @click.prevent="onFloatClick"
    >I don't trust you</div>

    <div v-if="showJokeToast" class="bm-joke-toast" role="status" aria-live="polite">
      <p class="bm-joke-toast-text">{{ jokeMessage }}</p>
      <button type="button" class="bm-joke-toast-dismiss" @click="showJokeToast = false" aria-label="Close">×</button>
    </div>

    <main class="bm-main">
      <section class="bm-hero">
        <h1 class="bm-hero-title">Senior software engineer.<br>I build systems that hold up.</h1>
        <p class="bm-hero-lead">
          Since 2018 I've worked across the stack with all kinds of teams. I help with AI integration, architecture, and making systems that last, without the hype.
        </p>
        <a class="bm-hero-cta" href="https://www.linkedin.com/in/birajmainali/" target="_blank" rel="noopener noreferrer">More about me on LinkedIn</a>
      </section>

      <section class="bm-section" id="offer">
        <h2 class="bm-section-title">What I offer</h2>
        <p class="bm-section-desc">Where AI fits, how to ship it, and how to keep systems sane.</p>
        <ul class="bm-card-list bm-grid-services">
          <li v-for="(item, i) in services" :key="i" class="bm-card">
            <span class="bm-card-num">{{ i + 1 }}</span>
            <h3 class="bm-card-title">{{ item.title }}</h3>
            <p class="bm-card-desc">{{ item.desc }}</p>
          </li>
        </ul>
      </section>

      <section class="bm-section" id="learn">
        <h2 class="bm-section-title">Learn with me</h2>
        <p class="bm-section-desc">Configuration-first design, platform architecture, and the fundamentals that don't go out of style.</p>
        <ul class="bm-card-list bm-grid-learn">
          <li v-for="(item, i) in learnTopics" :key="i" class="bm-card">
            <span class="bm-card-num">{{ i + 1 }}</span>
            <h3 class="bm-card-title">{{ item.title }}</h3>
            <p class="bm-card-desc">{{ item.desc }}</p>
          </li>
        </ul>
      </section>

      <section class="bm-section bm-section-cta">
        <div class="bm-cta">
          <h2 class="bm-cta-title">Let's talk</h2>
          <p class="bm-cta-text">Exploring AI, untangling legacy, or want another set of eyes? I'm happy to hear you out.</p>
          <a class="bm-btn" href="https://www.linkedin.com/in/birajmainali/" target="_blank" rel="noopener noreferrer">Say hi on LinkedIn</a>
        </div>
      </section>
    </main>

    <footer class="bm-footer">
      <nav class="bm-footer-links">
        <a href="/">Home</a>
        <a href="https://github.com/birajmainali" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/birajmainali/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
      <p class="bm-footer-credit">Biraj Mainali · Senior software engineer</p>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      floatX: 80,
      floatY: 80,
      floatShouldMove: true,
      showJokeToast: false,
      jokeMessage: '',
      jokeLines: [
        "You really tried hard! 😄 (Smart people trust others. Haha.)",
        "You're either really persistent or really smart. Either way: the button still doesn't trust you. 😄",
        "Caught! Hard-working and smart people trust others. You're both. 😄",
      ],
      services: [
        { title: 'Gen AI possibilities for your product', desc: 'Where generative AI adds real value and how to implement it without overpromising.' },
        { title: 'AI agents in your products', desc: 'Design, build, and integrate agents with clear boundaries so they fit your workflows.' },
        { title: 'Workflow automation with AI', desc: 'Observable, maintainable pipelines for repetitive or decision-heavy workflows.' },
        { title: 'Configuration-first design', desc: 'Systems driven by config so you adapt quickly and give AI a clear role.' },
        { title: 'Idea validation and experiments', desc: 'Sounding board and hands-on help: spikes, prototypes, technical direction.' },
        { title: 'AI in existing codebases', desc: 'Incremental, low-risk paths to integrate AI into legacy or older systems.' },
      ],
      learnTopics: [
        { title: 'Configuration-first software', desc: "Behavior from config and data: fewer deploys, clearer behavior, easier to evolve." },
        { title: 'SaaS platform architecture', desc: 'Multi-tenant design, auth, billing, and patterns that keep platforms stable as they grow.' },
        { title: 'Deep programming fundamentals', desc: 'Memory, concurrency, race conditions, I/O: the base for reliable systems.' },
      ],
    }
  },
  methods: {
    onFloatClick() {
      this.jokeMessage = this.jokeLines[Math.floor(Math.random() * this.jokeLines.length)]
      this.showJokeToast = true
      setTimeout(() => { this.showJokeToast = false }, 8000)
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('I-agree-that-i-am-idot', 'true')
        this.floatShouldMove = false
      }
    },
  },
  mounted() {
    const STORAGE_KEY = 'I-agree-that-i-am-idot'
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      this.floatShouldMove = stored !== 'true'
    }

    const el = this.$el
    if (!el) return
    const btnW = 180
    const btnH = 44
    const runAwayDist = 120

    const moveAway = () => {
      if (!this.floatShouldMove) return
      this.floatX = 20 + Math.random() * (typeof window !== 'undefined' ? window.innerWidth - btnW - 40 : 400)
      this.floatY = 20 + Math.random() * (typeof window !== 'undefined' ? window.innerHeight - btnH - 40 : 300)
    }

    const onMove = (e) => {
      if (!this.floatShouldMove) return
      const cx = e.clientX
      const cy = e.clientY
      const bx = this.floatX + btnW / 2
      const by = this.floatY + btnH / 2
      const dist = Math.hypot(cx - bx, cy - by)
      if (dist < runAwayDist) moveAway()
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', onMove)
      this._floatBtnCleanup = () => window.removeEventListener('mousemove', onMove)
    }
  },
  beforeUnmount() {
    if (this._floatBtnCleanup) this._floatBtnCleanup()
  },
}
</script>

<style scoped>
.bm-home {
  min-height: 100vh;
  background: var(--bm-bg);
  font-family: var(--bm-font-body);
  display: flex;
  flex-direction: column;
}

.bm-float-btn {
  position: fixed;
  width: 180px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--bm-text-soft);
  background: var(--bm-bg-elevated);
  border: 1px solid var(--bm-border);
  border-radius: var(--bm-radius);
  pointer-events: auto;
  cursor: default;
  z-index: 9999;
  transition: left 0.15s ease-out, top 0.15s ease-out;
  user-select: none;
  outline: none;
}
.bm-float-btn:focus {
  outline: none;
}

.bm-joke-toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 90%;
  width: 360px;
  padding: 1rem 1.25rem;
  background: var(--bm-bg);
  border: 2px solid var(--bm-border);
  border-radius: var(--bm-radius);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 10000;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}
.bm-joke-toast-text {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--bm-text);
  flex: 1;
}
.bm-joke-toast-dismiss {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: var(--bm-bg-soft);
  border-radius: 4px;
  font-size: 1.25rem;
  line-height: 1;
  color: var(--bm-text-muted);
  cursor: pointer;
}
.bm-joke-toast-dismiss:hover {
  color: var(--bm-text);
  background: var(--bm-border);
}

.bm-main {
  flex: 1;
}

.bm-hero {
  padding: 4rem 1.5rem 3rem;
  max-width: 720px;
  margin: 0 auto;
  text-align: left;
}
.bm-hero-title {
  font-family: var(--bm-font-heading);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--bm-text);
  margin: 0 0 1.25rem;
}
.bm-hero-lead {
  font-size: 1.125rem;
  line-height: 1.65;
  color: var(--bm-text-muted);
  margin: 0 0 1.5rem;
  max-width: 52ch;
}
.bm-hero-cta {
  font-size: 1rem;
  font-weight: 600;
  color: var(--bm-accent);
  text-decoration: none;
}
.bm-hero-cta:hover {
  text-decoration: underline;
}

.bm-section {
  padding: 3rem 1.5rem;
  max-width: 720px;
  margin: 0 auto;
}
.bm-section-cta {
  padding-bottom: 4rem;
}

.bm-card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media (max-width: 768px) {
  .bm-card-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .bm-card-list {
    grid-template-columns: 1fr;
  }
}
.bm-card {
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  margin: 0;
}
.bm-card-num {
  font-family: var(--bm-font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--bm-text-soft);
  margin-bottom: 0.5rem;
}
.bm-card-title {
  font-family: var(--bm-font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: var(--bm-text);
  margin: 0 0 0.5rem;
  line-height: 1.3;
}
.bm-card-desc {
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--bm-text-muted);
  margin: 0;
  flex: 1;
}

.bm-cta {
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: var(--bm-bg-elevated);
  border: 1px solid var(--bm-border);
  border-radius: var(--bm-radius);
}
.bm-cta-title {
  font-family: var(--bm-font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--bm-text);
  margin: 0 0 0.5rem;
}
.bm-cta-text {
  font-size: 1rem;
  color: var(--bm-text-muted);
  line-height: 1.6;
  margin: 0 0 1.5rem;
  max-width: 40ch;
  margin-left: auto;
  margin-right: auto;
}
.bm-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: var(--bm-accent);
  border: none;
  border-radius: var(--bm-radius);
  text-decoration: none;
  transition: opacity 0.2s;
}
.bm-btn:hover {
  opacity: 0.9;
  text-decoration: none;
}
.dark .bm-btn {
  color: var(--bm-bg);
}

.bm-footer {
  padding: 2rem 1.5rem;
  border-top: 1px solid var(--bm-border);
  background: var(--bm-bg-soft);
  text-align: center;
}
.bm-footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.75rem;
}
.bm-footer-links a {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--bm-accent);
  text-decoration: none;
}
.bm-footer-links a:hover {
  text-decoration: underline;
}
.bm-footer-credit {
  font-size: 0.8125rem;
  color: var(--bm-text-soft);
  margin: 0;
}
</style>
