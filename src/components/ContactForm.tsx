import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в течение 24 часов",
    });
    
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Готов начать?{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Оставь заявку
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            и стартуй в профессию QA уже сегодня.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8 shadow-card gradient-card">
              <h3 className="text-2xl font-bold mb-6">Запишись на курс</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 999-99-99"
                    required
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправляем..." : "Записаться на курс"}
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 shadow-card gradient-card">
              <h4 className="text-xl font-semibold mb-4 text-primary">Что будет дальше?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>Я свяжусь с тобой в течение 24 часов</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>Проведём консультацию и ответим на все вопросы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>Подберём удобный график и дату старта</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 shadow-card gradient-card">
              <div className="text-center">
                <div className="text-4xl mb-3">📞</div>
                <p className="font-medium text-muted-foreground">
                  Я свяжусь с тобой в течение 24 часов и отвечу на все вопросы.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;