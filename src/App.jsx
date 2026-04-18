import { useState, useEffect } from 'react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    title: 'The Librarian Agent',
    description: 'An AI Agent that discovers, downloads, catalogues, and organises public domain books around the clock.',
    tags: ['Python 3', 'SQLite', 'n8n', 'Discord', 'Ollama/Claude',  ],
    url: 'https://librarian-agent-omega.vercel.app/',
    accent: '#c4006e',
    emoji: '📚👨‍🏫',
    image: "/screenshots/project-one.png", // set to e.g. '/screenshots/project-one.png' to show a preview
  },
  {
    id: 2,
    title: 'Open Brain',
    description: 'Open Brain is a portable memory OS I built using Slack, Supabase, a custom MCP server, and Claude — so I can own my memory and carry it to any AI rather than starting from scratch.',
    tags: ['Slack' , 'Supabase', 'MCP Server', 'Claude', 'No-code'],
    url: 'https://open-brain-mu.vercel.app/',
    accent: '#007a68',
    emoji: '🧠',
    image: "/screenshots/project-two.png"
  },
  {
    id: 3,
    title: 'Zendesk Ticket AI Agent',
    description: 'AI Agent that handles IT support triage with users through historical ticket context and a 7-step response architecture. It notifies me when a ticket needs my attnetion, a user is C-suite or is disgruntled. This helps me in my Desktop Support duties.',
    tags: ['Zendesk', 'Claude', 'Slack/Discord', 'Notion', 'Python', 'Markdown' ],
    url: 'https://zd-portfolio-page.vercel.app/',
    accent: '#8a6500',
    emoji: '🧑‍🔧💻',
    image: "/screenshots/project-three.png"
  },
  // {
  //   id: 4,
  //   title: 'Project Four',
  //   description: 'A short description of what this app does and what makes it interesting.',
  //   tags: ['Automation', 'Node'],
  //   url: 'https://your-project-url.vercel.app',
  //   accent: '#6930c3',
  //   emoji: '🔮',
  // },
  // {
  //   id: 5,
  //   title: 'Project Five',
  //   description: 'A short description of what this app does and what makes it interesting.',
  //   tags: ['LLM', 'Vercel'],
  //   url: 'https://your-project-url.vercel.app',
  //   accent: '#b84500',
  //   emoji: '🚀',
  // },
  // {
  //   id: 6,
  //   title: 'Project Six',
  //   description: 'A short description of what this app does and what makes it interesting.',
  //   tags: ['API', 'TypeScript'],
  //   url: 'https://your-project-url.vercel.app',
  //   accent: '#c4006e',
  //   emoji: '🌐',
  // },
]

const LINKS = [
  { label: 'GitHub', url: 'https://github.com/stolenwise', icon: '🐙' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/lewisrstone', icon: '💼' },
  { label: 'Email', url: 'mailto:lewis.r.stone@gmail.com', icon: '📬' },
]

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Noise() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      opacity: 0.025,
      pointerEvents: 'none',
      zIndex: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }} />
  )
}

function GradientOrb({ x, y, color, size = 400 }) {
  return (
    <div style={{
      position: 'fixed',
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      filter: 'blur(120px)',
      opacity: 0.12,
      pointerEvents: 'none',
      zIndex: 0,
      transform: 'translate(-50%, -50%)',
    }} />
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 2rem',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(248,248,252,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontWeight: 700,
        fontSize: '1rem',
        background: 'linear-gradient(90deg, #c4006e, #6930c3)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        lewis.stone
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {['about', 'projects', 'contact'].map(s => (
          <a
            key={s}
            href={`#${s}`}
            style={{
              fontSize: '0.875rem',
              color: 'rgba(10,10,15,0.5)',
              transition: 'color 0.2s',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={e => e.target.style.color = '#0a0a0f'}
            onMouseLeave={e => e.target.style.color = 'rgba(10,10,15,0.5)'}
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  )
}

function Hero() {
  const [tick, setTick] = useState(0)
  const words = ['apps', 'agents', 'tools', 'ideas']

  useEffect(() => {
    const t = setInterval(() => setTick(n => n + 1), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '6rem 2rem 4rem',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'rgba(105,48,195,0.08)',
        border: '1px solid rgba(105,48,195,0.25)',
        borderRadius: 100,
        padding: '0.35rem 1rem',
        fontSize: '0.8rem',
        color: '#6930c3',
        fontFamily: "'Space Mono', monospace",
        marginBottom: '2rem',
        letterSpacing: '0.05em',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#007a68', display: 'inline-block', animation: 'pulse 2s infinite' }} />
        available for projects
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(0.75rem, 2vw, 1.5rem)',
        marginBottom: '0.5rem',
        flexWrap: 'wrap',
      }}>
        <img
          src="/logo.png"
          alt="Lewis Stone"
          style={{
            width: 'clamp(56px, 8vw, 96px)',
            height: 'clamp(56px, 8vw, 96px)',
            objectFit: 'contain',
            flexShrink: 0,
          }}
        />
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#0a0a0f',
        }}>
          Lewis Stone
        </h1>
      </div>

      <h2 style={{
        fontSize: 'clamp(1.25rem, 3vw, 2rem)',
        fontWeight: 500,
        color: 'rgba(10,10,15,0.5)',
        marginBottom: '1rem',
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        I build
        <span style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #c4006e, #6930c3, #007a68)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 900,
          minWidth: '4ch',
          transition: 'opacity 0.3s',
        }}>
          {words[tick % words.length]}
        </span>
      </h2>

      <p style={{
        maxWidth: 520,
        color: 'rgba(10,10,15,0.55)',
        fontSize: '1.05rem',
        lineHeight: 1.75,
        marginBottom: '3rem',
      }}>
        A builder obsessed with AI agents and useful software.
        Below is a collection of things I've shipped.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects" style={{
          padding: '0.75rem 2rem',
          borderRadius: 100,
          background: 'linear-gradient(135deg, #c4006e, #6930c3)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.9rem',
          letterSpacing: '0.03em',
          boxShadow: '0 4px 24px rgba(196,0,110,0.25)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 36px rgba(196,0,110,0.35)' }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 24px rgba(196,0,110,0.25)' }}
        >
          See my work
        </a>
        <a href="#contact" style={{
          padding: '0.75rem 2rem',
          borderRadius: 100,
          background: 'transparent',
          border: '1px solid rgba(0,0,0,0.15)',
          color: 'rgba(10,10,15,0.7)',
          fontWeight: 600,
          fontSize: '0.9rem',
          transition: 'border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.target.style.borderColor = 'rgba(0,0,0,0.35)'; e.target.style.color = '#0a0a0f' }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(0,0,0,0.15)'; e.target.style.color = 'rgba(10,10,15,0.7)' }}
        >
          Get in touch
        </a>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
        opacity: 0.3,
        animation: 'bounce 2s infinite',
        color: '#0a0a0f',
      }}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>scroll</span>
        <span style={{ fontSize: '1.2rem' }}>↓</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" style={{
      padding: '8rem 2rem',
      maxWidth: 900,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            color: '#c4006e',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            01 / about
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            color: '#0a0a0f',
          }}>
            The person<br />
            <span style={{
              background: 'linear-gradient(90deg, #007a68, #6930c3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>behind the projects</span>
          </h2>
          <p style={{
            color: 'rgba(10,10,15,0.65)',
            lineHeight: 1.85,
            fontSize: '1rem',
            marginBottom: '1rem',
          }}>
            {/* ✏️ Replace this with your own bio */}
            I'm Lewis — a builder and tinkerer focused on AI agents, automation, and interfaces that actually make life better.
          </p>
          <p style={{
            color: 'rgba(10,10,15,0.55)',
            lineHeight: 1.85,
            fontSize: '1rem',
          }}>
            {/* ✏️ Add more about yourself here */}
            I spend most of my time experimenting with large language models and shipping things that felt impossible a few years ago.
          </p>
        </div>

        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { label: 'Agents built', value: '3+', color: '#007a68' },
            { label: 'Projects abandoned at 2am — 27', value: '∞', color: '#2564d1ff' },
            { label: 'Agent ideas', value: '∞', color: '#8a6500' },
          
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'rgba(0,0,0,0.03)',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 16,
              padding: '1.25rem 2rem',
              textAlign: 'center',
              minWidth: 160,
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: stat.color,
                fontFamily: "'Space Mono', monospace",
                lineHeight: 1,
              }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(10,10,15,0.45)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        background: hovered ? 'rgba(0,0,0,0.03)' : 'rgba(0,0,0,0.02)',
        border: `1px solid ${hovered ? project.accent + '60' : 'rgba(0,0,0,0.09)'}`,
        borderRadius: 20,
        padding: 0,
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 50px ${project.accent}20` : '0 1px 4px rgba(0,0,0,0.06)',
        cursor: 'pointer',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Screenshot preview or emoji fallback */}
      {project.image ? (
        <div style={{
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
          borderRadius: '20px 20px 0 0',
          background: '#f0f0f4',
          position: 'relative',
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              display: 'block',
            }}
          />
          {/* Subtle overlay on hover */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, transparent 60%, ${project.accent}18)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }} />
        </div>
      ) : (
        <div style={{
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: '20px 20px 0 0',
          background: `linear-gradient(135deg, ${project.accent}12, ${project.accent}04)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3.5rem',
        }}>
          {project.emoji}
        </div>
      )}

      {/* Card body */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '0.6rem',
        }}>
          <h3 style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: hovered ? '#0a0a0f' : 'rgba(10,10,15,0.85)',
            transition: 'color 0.2s',
          }}>
            {project.title}
          </h3>
          <span style={{
            fontSize: '1.1rem',
            opacity: hovered ? 1 : 0.25,
            transition: 'opacity 0.25s, transform 0.25s',
            transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)',
            color: project.accent,
            flexShrink: 0,
            marginLeft: '0.5rem',
          }}>↗</span>
        </div>

      <p style={{
        fontSize: '0.875rem',
        color: 'rgba(10,10,15,0.55)',
        lineHeight: 1.65,
        marginBottom: '1.25rem',
      }}>
        {project.description}
      </p>

        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.65rem',
              borderRadius: 100,
              background: `${project.accent}12`,
              border: `1px solid ${project.accent}35`,
              color: project.accent,
              fontFamily: "'Space Mono', monospace",
              letterSpacing: '0.05em',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

function Projects() {
  return (
    <section id="projects" style={{
      padding: '6rem 2rem',
      maxWidth: 1100,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
    }}>
      <p style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.75rem',
        color: '#6930c3',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        textAlign: 'center',
      }}>
        02 / projects
      </p>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        marginBottom: '0.75rem',
        textAlign: 'center',
        color: '#0a0a0f',
      }}>
        Things I've built
      </h2>
      <p style={{
        color: 'rgba(10,10,15,0.5)',
        textAlign: 'center',
        marginBottom: '3.5rem',
        fontSize: '0.95rem',
      }}>
        Click any card to visit the project
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.25rem',
      }}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" style={{
      padding: '8rem 2rem',
      maxWidth: 700,
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <p style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.75rem',
        color: '#007a68',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}>
        03 / contact
      </p>
      <h2 style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        marginBottom: '1.25rem',
        color: '#0a0a0f',
      }}>
        Let's build something
        <span style={{
          display: 'block',
          background: 'linear-gradient(90deg, #c4006e, #8a6500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>interesting</span>
      </h2>
      <p style={{
        color: 'rgba(10,10,15,0.55)',
        lineHeight: 1.75,
        marginBottom: '3rem',
        fontSize: '1rem',
      }}>
        Whether it's a collab, a question, or just to say hello — my inbox is open.
      </p>

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '4rem',
      }}>
        {LINKS.map(link => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.4rem',
              borderRadius: 100,
              background: 'rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.12)',
              color: 'rgba(10,10,15,0.7)',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'all 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.07)'
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.22)'
              e.currentTarget.style.color = '#0a0a0f'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.04)'
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'
              e.currentTarget.style.color = 'rgba(10,10,15,0.7)'
            }}
          >
            <span>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0,0,0,0.08)',
      padding: '2rem',
      textAlign: 'center',
      color: 'rgba(10,10,15,0.3)',
      fontSize: '0.8rem',
      fontFamily: "'Space Mono', monospace",
      position: 'relative',
      zIndex: 1,
    }}>
      Lewis Stone — {new Date().getFullYear()}
    </footer>
  )
}

// ─── STYLES ──────────────────────────────────────────────────────────────────

const globalStyles = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
  }
`

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <Noise />
      <GradientOrb x="15%" y="20%" color="#ff3cac" size={500} />
      <GradientOrb x="85%" y="10%" color="#9b5de5" size={400} />
      <GradientOrb x="70%" y="60%" color="#00c9b1" size={350} />
      <GradientOrb x="10%" y="80%" color="#ffd000" size={300} />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
