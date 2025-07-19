import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="gradient-hero text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Готов стать QA-инженером?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Присоединяйся к сотням успешных выпускников QA Academia
          </p>
          <Button variant="accent" size="lg" className="text-lg px-8 py-4 h-auto">
            Записаться на курс прямо сейчас
          </Button>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="text-2xl font-bold mb-4">QA Academia</div>
          <p className="text-white/70 text-sm max-w-2xl mx-auto">
            Мы помогаем людям войти в IT через профессию QA-тестировщика. 
            Наша миссия — дать каждому возможность изменить свою жизнь к лучшему.
          </p>
          <div className="mt-8 text-white/50 text-sm">
            © 2024 QA Academia. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;