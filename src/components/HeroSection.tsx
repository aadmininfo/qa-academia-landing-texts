import { CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-float" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            QA Academia
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Освой профессию QA-тестировщика с нуля за 3 месяца
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Гарантированное трудоустройство. Реальная практика с первого дня.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://t.me/QAAcademia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Записаться на курс
            </a>
            <button className="border border-border text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent transition-colors">
              Узнать больше
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="text-primary h-6 w-6" />
              <span className="text-muted-foreground">3 месяца обучения</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="text-primary h-6 w-6" />
              <span className="text-muted-foreground">Гарантия трудоустройства</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="text-primary h-6 w-6" />
              <span className="text-muted-foreground">Практика с первого дня</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}