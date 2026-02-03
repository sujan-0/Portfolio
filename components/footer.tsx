export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© {currentYear} Sujan Khatiwoda. All rights reserved.</p>
      </div>
    </footer>
  )
}

