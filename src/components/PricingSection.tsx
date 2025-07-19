import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            💸 Доступно каждому.{' '}
            <span className="gradient-accent bg-clip-text text-transparent">
              Платишь за результат.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Выбирай удобный формат оплаты
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {/* Main pricing card */}
          <Card className="p-8 shadow-card hover:shadow-glow transition-smooth relative overflow-hidden gradient-card">
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                Популярный
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Полный пакет обучения</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                  25 000 ₽
                </span>
                <span className="text-muted-foreground">сразу</span>
              </div>
              <div className="text-lg font-medium text-accent mb-2">
                + 50% от первой зарплаты после трудоустройства
              </div>
              <p className="text-muted-foreground text-sm">
                Единоразовый платёж после получения работы
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Что включено:</h4>
              <ul className="space-y-3">
                {[
                  "3 месяца обучения с ментором",
                  "Реальная практика на проектах",
                  "Создание портфолио",
                  "Помощь с трудоустройством до 2 месяцев",
                  "Гарантия результата или возврат денег",
                  "Доступ к материалам навсегда"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button variant="hero" size="lg" className="w-full text-lg">
              Записаться на курс
            </Button>
          </Card>
          
          {/* Guarantee card */}
          <Card className="p-6 shadow-card gradient-card border-2 border-accent/20">
            <div className="text-center">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Гарантия результата</h3>
              <p className="text-muted-foreground">
                Если не найдём работу в течение 2 месяцев после окончания курса — 
                возвращаем 100% стоимости обучения
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;