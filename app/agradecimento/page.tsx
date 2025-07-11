import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Obrigado() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center px-6">
            <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg p-10 text-center text-gray-800">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-16 h-16 text-amber-500" />
                </div>

                <h1 className="text-3xl font-bold font-playfair mb-2 text-amber-600">
                    Solicitação enviada com sucesso!
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    Recebemos sua mensagem e em breve entraremos em contato via WhatsApp ou E-mail. 💬💛
                </p>

                <Link href="/">
                    <button className="bg-amber-500 text-white px-6 py-3 rounded-full text-lg hover:bg-amber-600 transition">
                        Voltar para o início
                    </button>
                </Link>

                <p className="mt-8 text-sm text-gray-400">© 2025 Studio Lua Sezio. Todas os direitos reservados.</p>
            </div>
        </main>
    );
}
