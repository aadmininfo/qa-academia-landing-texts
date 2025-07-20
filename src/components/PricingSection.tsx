import { Check, Star } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      name: "Базовый",
      price: "25,000₽",
      period: "за курс",
      features: [
        "3 месяца обучения",
        "Все материалы курса",
        "Домашние задания",
        "Общий чат поддержки",
        "Сертификат об окончании"
      ],
      popular: false
    },
    {
      name: "Премиум",
      price: "45,000₽", 
      period: "за курс",
      features: [
        "Все из базового тарифа",
        "Персональный ментор",
        "1-на-1 консультации",
        "Помощь в трудоустройстве",
        "Гарантия возврата средств",
        "Доступ к материалам на год"
      ],
      popular: true
    },
    {
      name: "VIP",
      price: "65,000₽",
      period: "за курс", 
      features: [
        "Все из премиум тарифа",
        "Приоритетная поддержка",
        "Подготовка к собеседованиям",
        "Реальные проекты в портфолио",
        "Рекомендации работодателям",
        "Пожизненный доступ к материалам"
      ],
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Выберите свой тариф
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Инвестиция в ваше IT-будущее с гарантией результата
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card border rounded-lg p-8 ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Популярный</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">{plan.period}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="text-primary h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://t.me/QAAcademia"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-semibold transition-colors text-center block ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border text-foreground hover:bg-accent'
                }`}
              >
                Записаться на курс
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}