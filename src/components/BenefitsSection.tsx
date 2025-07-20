import { Code, Users, Clock, TrendingUp, Shield, Zap } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Code,
      title: "Практические навыки",
      description: "Изучение реальных инструментов: Postman, Jira, TestRail, SQL"
    },
    {
      icon: Users,
      title: "Менторская поддержка",
      description: "Персональные консультации и code review от опытных QA"
    },
    {
      icon: Clock,
      title: "Гибкий график",
      description: "Обучение в удобное время, записи всех занятий"
    },
    {
      icon: TrendingUp,
      title: "Карьерный рост",
      description: "Помощь в составлении резюме и подготовке к собеседованиям"
    },
    {
      icon: Shield,
      title: "Гарантия результата",
      description: "Возврат средств, если не найдете работу в течение 6 месяцев"
    },
    {
      icon: Zap,
      title: "Быстрый старт",
      description: "Начните применять знания уже через 2 недели обучения"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Преимущества курса
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Почему стоит выбрать именно наш курс QA-тестирования
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="text-primary h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
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