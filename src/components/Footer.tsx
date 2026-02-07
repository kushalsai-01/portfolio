export default function Footer() {
  return (
    <footer className="px-6 lg:px-8 py-6 border-t border-surface-border bg-background" aria-label="Footer">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <span>© {new Date().getFullYear()} Kushal Sai</span>
        <span>
          Built with <span className="text-text-secondary">Next.js</span> &amp;{' '}
          <span className="text-text-secondary">Tailwind CSS</span>
        </span>
      </div>
    </footer>
  )
}
