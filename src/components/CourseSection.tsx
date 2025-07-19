import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const CourseSection = () => {
  const features = [
    "Старт с нуля — без технической подготовки",
    "Обучение: всего 3 месяца",
    "Наставник один на один",
    "Работа на реальном проекте",
    "Первый баг — в боевой системе",
    "Освоение баг-трекеров, документации, кейсов"
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            📚 Практика с первого дня.{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Результат — выход в профессию.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            🔍 Мы не учим теории. Мы готовим к реальной работе.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8 shadow-card gradient-card">
              <h3 className="text-2xl font-bold mb-6 text-primary">Что ты изучишь:</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 shadow-card hover:shadow-glow transition-smooth gradient-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold">Месяц 1: Основы</h4>
              </div>
              <p className="text-muted-foreground">
                Теория тестирования, виды тестирования, работа с документацией
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-glow transition-smooth gradient-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold">Месяц 2: Практика</h4>
              </div>
              <p className="text-muted-foreground">
                Реальные проекты, баг-трекеры, автоматизация тестирования
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-glow transition-smooth gradient-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold">Месяц 3: Портфолио</h4>
              </div>
              <p className="text-muted-foreground">
                Создание портфолио, подготовка к собеседованиям
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;