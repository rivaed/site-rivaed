import './App.css'

// Componente do Card de Projeto
function ProjectCard({ title, repoName, description }) {
  const repoUrl = `https://github.com/rivaed/${repoName}`;
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        Ver no GitHub: {repoName}
      </a>
    </div>
  )
}

// Componente Principal do App
function App() {
  return (
    <>
      <header className="header">
        <h1>Eduardo Riva</h1>
        <p>Especialista em Cibersegurança | Engenheiro DevSecOps</p>
      </header>

      <main>
        <section className="section">
          <h2>Sobre Mim</h2>
          <p>
            Sou um profissional de Segurança da Informação focado em automatizar
            e proteger infraestruturas. Atualmente, estou focado em construir
            pipelines de CI/CD seguros, implementar Infraestrutura como Código (IaC)
            e garantir a observabilidade de sistemas em produção.
          </p>
          <p>
            Este site é um projeto vivo que demonstra essas habilidades: ele passa por
            um pipeline de CI/CD (Projeto 1), é implantado via Ansible (Projeto 2)
            e é monitorado 24/7 (Projeto 3).
          </p>
        </section>

        <section className="section">
          <h2>Meu Laboratório DevSecOps</h2>
          <div className="project-list">
            <ProjectCard
              title="Projeto 1: O Pipeline Guardião (CI/CD)"
              repoName="site-rivaed" // ATUALIZE SE O NOME DO REPO FOR OUTRO
              description="Pipeline de CI/CD com GitHub Actions que analisa código (SAST com CodeQL) e dependências (SCA com Snyk)."
            />
            <ProjectCard
              title="Projeto 2: A Fortaleza Automatizada (IaC/CD)"
              repoName="devsecops-ansible-hardening"
              description="Playbooks Ansible que configuram uma VPS (Hardening, UFW, Nginx, SSL) e fazem o deploy desta aplicação."
            />
            <ProjectCard
              title="Projeto 3: A Torre de Vigia (Monitoramento)"
              repoName="devsecops-ansible-hardening" // É o mesmo repo
              description="Stack de monitoramento (Prometheus, Grafana, Node Exporter) implantada via Ansible e Docker Compose."
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2025 {new Date().getFullYear()} - Construído com React, Ansible e muito café.
      </footer>
    </>
  )
}

export default App