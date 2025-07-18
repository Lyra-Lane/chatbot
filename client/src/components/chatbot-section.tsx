import { useLanguage } from './language-context';

export function ChatbotSection() {
  const { t } = useLanguage();

  return (
    <section id="chatbot" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold academic-blue mb-4">
            {t("AI Chatbot", "AI 聊天机器人")}
          </h2>
          <p className="text-lg slate-gray max-w-2xl mx-auto">
            {t(
              "Interact with my AI-powered chatbot to learn more about my research and experience.",
              "与我的AI驱动聊天机器人互动，了解更多关于我的研究和经验。"
            )}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/dgxbknfkAGEsLEN5xY6M9"
              width="100%"
              style={{ height: '100%', minHeight: '700px' }}
              frameBorder="0"
              title="AI Chatbot"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}