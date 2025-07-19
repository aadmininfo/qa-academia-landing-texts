import { Card } from "@/components/ui/card";
import { Target, FileText, Users, Handshake } from "lucide-react";

const EmploymentSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Резюме и портфолио",
      description: "Помогаем составить профессиональное резюме и портфолио"
    },
    {
      icon: Target,
      title: "Поиск вакансий",
      description: "Находим подходящие вакансии в проверенных компаниях"
    },
    {
      icon: Users,
      title: "Подготовка к собеседованиям",
      description: "Тренируем навыки прохождения технических интервью"
    },
    {
      icon: Handshake,
      title: "Сопровождение до оффера",
      description: "Поддерживаем до подписания трудового договора"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            💼 Работа найдётся.{' '}
            <span className="gradient-accent bg-clip-text text-transparent">
              Или ты ничего не платишь.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Поиск работы вместе — до 2 месяцев. Поддержка до подписания оффера.
          </p>
          <div className="inline-flex items-center px-6 py-3 gradient-primary rounded-full text-primary-foreground font-medium">
            🎯 Доходим с тобой до результата. Без компромиссов.
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover:shadow-glow transition-smooth hover:scale-105 gradient-card">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto shadow-card gradient-card">
            <h3 className="text-2xl font-bold mb-6 text-primary">Что входит в пакет трудоустройства:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Помощь с резюме и собеседованиями
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Рекомендации в реальные компании
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Поддержка до подписания оффера
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Доступ к закрытым вакансиям
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmploymentSection;