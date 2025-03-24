export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground">© {currentYear} Sujan Khatiwoda. All rights reserved.</p>
      </div>
    </footer>
  )
}

