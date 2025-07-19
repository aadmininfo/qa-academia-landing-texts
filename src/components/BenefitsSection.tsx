import { Card } from "@/components/ui/card";
import { Gift, User, Briefcase, Award, Shield, Code } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Профессию, которая кормит",
      description: "Востребованная специальность с зарплатой от 100 000 ₽"
    },
    {
      icon: User,
      title: "Поддержку ментора — индивидуально",
      description: "Персональный наставник ведёт тебя от начала до трудоустройства"
    },
    {
      icon: Code,
      title: "Реальный опыт и портфолио",
      description: "Работаешь на живых проектах, создаёшь кейсы для резюме"
    },
    {
      icon: Award,
      title: "Навыки, нужные работодателям",
      description: "Только актуальные инструменты и методы тестирования"
    },
    {
      icon: Shield,
      title: "Полную уверенность перед собеседованиями",
      description: "Тренируем навыки прохождения технических интервью"
    },
    {
      icon: Gift,
      title: "Настоящий баг на боевом проекте",
      description: "Находишь и документируешь реальные ошибки в продакшне"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🎁 Что ты получишь на курсе
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            ⚙️ Ты не просто учишься — ты начинаешь работать уже на курсе.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-smooth hover:scale-105 gradient-card">
              <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto shadow-card gradient-card border-2 border-accent/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
                  Результат гарантирован
                </h3>
                <p className="text-muted-foreground">
                  Более 95% наших выпускников находят работу в IT в течение 2 месяцев после окончания курса
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <div className="text-sm text-muted-foreground">
                  успешное трудоустройство
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;