import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export default function QASection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "Нужен ли опыт программирования для изучения QA?",
      answer: "Нет, наш курс разработан для новичков. Мы начинаем с основ и постепенно изучаем все необходимые инструменты и технологии."
    },
    {
      question: "Сколько времени нужно уделять обучению?",
      answer: "Рекомендуем заниматься 10-15 часов в неделю. При таком темпе вы успешно освоите программу за 3 месяца."
    },
    {
      question: "Гарантируете ли вы трудоустройство?",
      answer: "Да, мы предоставляем гарантию трудоустройства в течение 6 месяцев после окончания курса или возвращаем деньги."
    },
    {
      question: "Какие инструменты мы будем изучать?",
      answer: "Postman, Jira, TestRail, SQL, Chrome DevTools, Git, основы автоматизации тестирования и многое другое."
    },
    {
      question: "Есть ли поддержка после окончания курса?",
      answer: "Да, выпускники получают доступ к закрытому сообществу, где можно получить помощь и найти вакансии."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о курсе
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg mb-4 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-card hover:bg-accent transition-colors flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold text-card-foreground">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <Minus className="h-5 w-5 text-primary" />
                ) : (
                  <Plus className="h-5 w-5 text-primary" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 py-4 bg-muted/50 border-t border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://t.me/QAAcademia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </section>
  )
}