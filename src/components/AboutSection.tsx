import { User, Award, BookOpen, Target } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Обо мне
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Я помогаю людям освоить профессию QA-тестировщика и найти работу в IT
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <User className="text-primary h-8 w-8 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Опытный ментор
                  </h3>
                  <p className="text-muted-foreground">
                    Более 5 лет в сфере QA-тестирования, работал в крупных IT-компаниях
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Award className="text-primary h-8 w-8 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Успешные выпускники
                  </h3>
                  <p className="text-muted-foreground">
                    Более 200 студентов успешно трудоустроились после прохождения курса
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <BookOpen className="text-primary h-8 w-8 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Практический подход
                  </h3>
                  <p className="text-muted-foreground">
                    Обучение на реальных проектах, актуальные инструменты и методики
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Target className="text-primary h-8 w-8 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Индивидуальный подход
                  </h3>
                  <p className="text-muted-foreground">
                    Персональное сопровождение каждого студента до трудоустройства
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}