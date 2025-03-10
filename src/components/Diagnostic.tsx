import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Close,
} from "@radix-ui/react-dialog"

const Diagnostic = () => (
  <section id="diagnostic" className="py-20 bg-white">
    <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
          Diagnóstico de Marketing Digital
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Descubra como melhorar sua presença online com estratégias
          personalizadas
        </p>
      </div>
      <div className="text-center">
        <h2 className="mt-8 text-2xl font-semibold text-gray-800 mb-4">
          Solicite seu Diagnóstico
        </h2>
      </div>
      <Root>
        <Trigger asChild>
          <div className="text-center">
            <button className="bg-[#0f4c81] text-white py-2 px-4 rounded-md shadow hover:bg-[#0e3f6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f4c81]">
              Abrir Diagnóstico
            </button>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="mt-12 text-lg text-gray-600">
                  O Diagnóstico de Marketing Digital consiste em uma análise
                  completa da situação atual da sua empresa em termos de
                  comunicação digital, que ajuda a identificar os pontos fortes
                  e fracos, as ameaças e oportunidades, e as melhores ações para
                  melhorar os seus resultados.
                </p>
                <p className="mt-12 text-lg text-gray-600">
                  Nossos passos: 1.Definir os objetivos do diagnóstico; 2.Coleta
                  de dados relevantes; 3.Análise da presença online; 4.Análise
                  das estratégias de marketing.
                </p>
              </div>
            </div>
          </div>
        </Trigger>
        <Portal>
          <Overlay className="bg-black bg-opacity-50 fixed inset-0" />
          <Content className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
            <Title className="mt-4 text-xl font-semibold text-gray-800 mb-4">
              Formulário de Diagnóstico
            </Title>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0f4c81] focus:border-[#0f4c81]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0f4c81] focus:border-[#0f4c81]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0f4c81] focus:border-[#0f4c81]"
                />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website (opcional)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0f4c81] focus:border-[#0f4c81]"
                />
              </div>
              <div>
                <label
                  htmlFor="goals"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quais são seus principais objetivos?
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0f4c81] focus:border-[#0f4c81]"
                  placeholder="Ex.: Aumentar vendas, melhorar SEO, expandir nas redes sociais..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0f4c81] text-white py-2 px-4 rounded-md shadow hover:bg-[#0e3f6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f4c81]"
              >
                Enviar Diagnóstico
              </button>
            </form>
            <Close asChild>
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                ✕
              </button>
            </Close>
          </Content>
        </Portal>
      </Root>
    </div>
  </section>
)

export default Diagnostic
