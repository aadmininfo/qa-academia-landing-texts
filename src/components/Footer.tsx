import { MessageCircle, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              QA Academia
            </h3>
            <p className="text-muted-foreground mb-4">
              Профессиональное обучение QA-тестированию с гарантированным трудоустройством
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/QAAcademia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">
              Обучение
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Основы QA-тестирования</li>
              <li>Инструменты тестирования</li>
              <li>Автоматизация тестов</li>
              <li>Подготовка к собеседованию</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">
              Контакты
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <a 
                  href="https://t.me/QAAcademia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  @QAAcademia
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@qa-academia.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+7 (999) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 QA Academia. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}