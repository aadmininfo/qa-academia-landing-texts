import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent-glow/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 animate-fade-in">
            🎯 Профессия будущего
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.2s' }}>
            Освой профессию{' '}
            <span className="text-transparent bg-clip-text gradient-accent">
              QA-тестировщика
            </span>{' '}
            с нуля
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            🚀 Обучение — 3 месяца. Работаем с тобой до первого оффера.
          </h2>
          
          {/* Benefits list */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <li className="flex items-center justify-center md:justify-start gap-2 text-white/90">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Индивидуальный ментор
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 text-white/90">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Реальный проект
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 text-white/90">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Гарантия трудоустройства
            </li>
          </ul>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 h-auto">
              👉 Записаться на курс
            </Button>
          </div>
          
          {/* Additional info */}
          <p className="text-white/70 text-sm mt-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            или возврат денег
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;