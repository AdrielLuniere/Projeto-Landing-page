import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import emailjs from "emailjs-com";

export default function App() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState("");
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kfyk5jl", 
        "template_7mu6zrr", 
        form,
        "JW3L9h16D1W4OwKGD" 
      )
      .then(
        () => {
          setStatus("✅ Orçamento enviado com sucesso!");
          setForm({ nome: "", email: "", mensagem: "" });
        },
        () => {
          setStatus("❌ Erro ao enviar. Tente novamente.");
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Lusystech</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#empresa" className="hover:underline">Empresa</a></li>
          <li><a href="#fornecedores" className="hover:underline">Fornecedores</a></li>
          <li><a href="#projetos" className="hover:underline">Projetos</a></li>
          <li><a href="#orcamentos" className="hover:underline">Orçamentos</a></li>
        </ul>
      </nav>

      {/* Home */}
      <section id="home" className="flex-1 flex items-center justify-center text-center p-10">
        <h2 className="text-3xl font-bold">Bem-vindo à Lusystech</h2>
      </section>

      {/* Empresa */}
      <section id="empresa" className="bg-gray-100 p-8">
        <h3 className="text-2xl font-semibold mb-4">Sobre a Lusystech</h3>
        <p className="text-gray-700 leading-relaxed">
          A Lusystech foi criada com o intuito de fazer com que pequenos, médios e grandes negócios alcancem seus objetivos por meio de soluções tecnológicas e inovadoras...
        </p>
      </section>

      {/* Fornecedores */}
      <section id="fornecedores" className="p-8 text-center">
        <h3 className="text-2xl font-semibold mb-6">Nossos Fornecedores</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <img src="/fornecedor1.png" alt="Fornecedor 1" className="mx-auto h-16" />
          <img src="/fornecedor2.png" alt="Fornecedor 2" className="mx-auto h-16" />
          <img src="/fornecedor3.png" alt="Fornecedor 3" className="mx-auto h-16" />
          <img src="/fornecedor4.png" alt="Fornecedor 4" className="mx-auto h-16" />
          <img src="/fornecedor5.png" alt="Fornecedor 5" className="mx-auto h-16" />
          <img src="/fornecedor6.png" alt="Fornecedor 6" className="mx-auto h-16" />
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="bg-gray-100 p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Projetos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/projeto1.jpg" alt="Projeto 1" className="rounded-lg shadow" />
          <img src="/projeto2.jpg" alt="Projeto 2" className="rounded-lg shadow" />
          <img src="/projeto3.jpg" alt="Projeto 3" className="rounded-lg shadow" />
        </div>
      </section>

      {/* Orçamentos */}
      <section id="orcamentos" className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Solicite um Orçamento</h3>
        <form 
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="nome"
            placeholder="Seu Nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="mensagem"
            placeholder="Descreva sua necessidade"
            value={form.mensagem}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border p-2 rounded"
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
            Enviar
          </button>
        </form>
        {status && <p className="text-center mt-3">{status}</p>}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4">
        <button
          onClick={() => setShowPrivacy(!showPrivacy)}
          className="flex items-center justify-center mx-auto"
        >
          <span>Política de Privacidade</span>
          {showPrivacy ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
        </button>
        {showPrivacy && (
          <p className="text-gray-300 mt-4 text-sm max-w-3xl mx-auto">
            Política de Privacidade da Lusystech: A Lusystech está comprometida em proteger a privacidade de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações que coletamos dos nossos usuários. Ao usar nossos serviços, você concorda com esta Política de Privacidade. Coleta de Informações A Lusystech coleta informações pessoais que você fornece, tais como nome, endereço de e-mail, telefone, endereço e informações de pagamento, quando você se registra em nossos serviços ou realiza uma transação conosco. Também podemos coletar informações sobre como você usa nossos serviços, incluindo seu endereço IP, tipo de navegador, páginas acessadas e duração de uso. Uso de Informações A Lusystech usa as informações coletadas para fornecer nossos serviços, processar transações, enviar comunicações sobre nossos serviços e responder a solicitações de suporte. Também podemos usar essas informações para melhorar nossos serviços e personalizar sua experiência com base em suas preferências.
            Compartilhamento de Informações A Lusystech não vende nem aluga suas informações pessoais para terceiros. Podemos compartilhar informações com terceiros, como fornecedores de serviços, para fornecer nossos serviços, processar transações ou fornecer suporte ao cliente. Também podemos compartilhar informações para cumprir requisitos legais, proteger nossos direitos ou os direitos de nossos usuários, ou para investigar fraudes. Proteção de Informações A Lusystech adota medidas de segurança razoáveis para proteger as informações coletadas contra perda, uso indevido, acesso não autorizado, divulgação, alteração ou destruição. No entanto, nenhuma medida de segurança é completamente infalível e não podemos garantir a segurança absoluta das informações coletadas.  Alterações a esta Política de Privacidade A Lusystech reserva-se o direito de atualizar ou alterar esta Política de Privacidade a qualquer momento, sem aviso prévio. As alterações entrarão em vigor assim que forem publicadas nesta página. Contato Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como a Lusystech usa suas informações, entre em contato conosco através do e-mail: lusystech@hotmail.com
          </p>
        )}
        <p className="text-center text-xs mt-4">&copy; {new Date().getFullYear()} Lusystech</p>
      </footer>
    </div>
  );
}
