import { ArrowUp } from "lucide-react"
import { Button } from "./ui/button"
import Social from "./Social"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Webxnet</h3>
            <p className="mt-4 text-xl text-gray-300">
              Transformando ideias em soluções digitais inteligentes.
            </p>
            <p className="mt-4 text-gray-300">
              Use IA especializada no seu setor para automatizar processos e
              reduzir custos operacionais em 40%.
            </p>
            <div className="mt-6">
              <Social />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>Email: support@webxnet.com.br</p>
              <p>Tel: (11) 94440-6158</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <div className="mt-4 space-y-2">
              <a
                href="#about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Sobre
              </a>
              <a
                href="#diagnostic"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Diagnóstico
              </a>
              <a
                href="#services"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Serviços
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Webxnet.</p>
        </div>
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  )
}

export default Footer
