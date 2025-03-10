import { useState } from "react"
import { useToast } from "../hooks/use-toast"

const ContactForm = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vamos conversar sobre seu projeto
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-[#0f4c81] shadow-sm 
                focus:border-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81] focus:ring-opacity-50 
                transition-all duration-200 ease-in-out
                hover:border-[#0f4c81] hover:shadow-md
                bg-white/50 backdrop-blur-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-[#0f4c81] shadow-sm 
                focus:border-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81] focus:ring-opacity-50 
                transition-all duration-200 ease-in-out
                hover:border-[#0f4c81] hover:shadow-md
                bg-white/50 backdrop-blur-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-[#0f4c81] shadow-sm 
                focus:border-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81] focus:ring-opacity-50 
                transition-all duration-200 ease-in-out
                hover:border-[#0f4c81] hover:shadow-md
                bg-white/50 backdrop-blur-sm"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#0f4c81] text-white px-6 py-3 rounded-lg text-lg font-medium 
                hover:bg-[#0d4473] transition-colors duration-200 
                focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:ring-offset-2"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
