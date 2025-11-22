import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Sparkles',
    title: 'Брендинг',
    description: 'Создание уникального образа вашего бренда от логотипа до фирменного стиля'
  },
  {
    icon: 'TrendingUp',
    title: 'SMM',
    description: 'Продвижение в социальных сетях и создание вовлекающего контента'
  },
  {
    icon: 'PenTool',
    title: 'Дизайн',
    description: 'Разработка визуальных решений для digital и печатной продукции'
  },
  {
    icon: 'Target',
    title: 'Контент',
    description: 'Создание текстов, фото и видео контента для ваших задач'
  }
];

const portfolio = [
  {
    id: 1,
    category: 'Брендинг',
    title: 'Ребрендинг IT-компании',
    description: 'Полное обновление фирменного стиля',
    image: 'https://cdn.poehali.dev/projects/1753d29a-ab9c-40a6-a107-1060b8e70de0/files/9679b556-a079-45ce-b6a6-054ef4a05906.jpg'
  },
  {
    id: 2,
    category: 'SMM',
    title: 'SMM для ритейла',
    description: 'Рост подписчиков на 300% за 3 месяца',
    image: 'https://cdn.poehali.dev/projects/1753d29a-ab9c-40a6-a107-1060b8e70de0/files/08f62cfc-7270-45eb-995c-ae3e2d78c7ce.jpg'
  },
  {
    id: 3,
    category: 'Контент',
    title: 'Контент-стратегия финтеха',
    description: 'Увеличение охвата в 5 раз',
    image: 'https://cdn.poehali.dev/projects/1753d29a-ab9c-40a6-a107-1060b8e70de0/files/08e721b0-e532-4e77-ac87-1e6d42ec3c2c.jpg'
  },
  {
    id: 4,
    category: 'Дизайн',
    title: 'Фирменный стиль сети кафе',
    description: 'От логотипа до дизайна упаковки',
    image: 'https://cdn.poehali.dev/projects/1753d29a-ab9c-40a6-a107-1060b8e70de0/files/9679b556-a079-45ce-b6a6-054ef4a05906.jpg'
  },
  {
    id: 5,
    category: 'Брендинг',
    title: 'Стартап в EdTech',
    description: 'Создание бренда с нуля',
    image: 'https://cdn.poehali.dev/projects/1753d29a-ab9c-40a6-a107-1060b8e70de0/files/08e721b0-e532-4e77-ac87-1e6d42ec3c2c.jpg'
  },
  {
    id: 6,
    category: 'SMM',
    title: 'Запуск бренда в Instagram',
    description: 'От 0 до 50К подписчиков',
    image: 'https://cdn.poehali.dev/projects/1753d29a-ab9c-40a6-a107-1060b8e70de0/files/08f62cfc-7270-45eb-995c-ae3e2d78c7ce.jpg'
  }
];

const team = [
  {
    name: 'Анна Сергеева',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Brand Strategist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    name: 'Мария Петрова',
    role: 'SMM Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  },
  {
    name: 'Алексей Иванов',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  }
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('Все');
  const categories = ['Все', 'Брендинг', 'SMM', 'Контент', 'Дизайн'];

  const filteredPortfolio = activeFilter === 'Все' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">АГЕНТСТВО</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
              <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Команда</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:inline-flex">Связаться</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in-up">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
              Создаём бренды,<br />которые работают
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mb-12">
              Маркетинговое агентство полного цикла. Помогаем бизнесу выделиться на рынке и достичь целей через стратегию, креатив и аналитику.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Обсудить проект
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексные решения для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground mb-8">Проекты, которыми мы гордимся</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Профессионалы своего дела</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Обсудим ваш проект</p>
          </div>
          <Card className="border-none shadow-xl animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте" 
                    className="min-h-[150px] resize-none"
                  />
                </div>
                <Button size="lg" className="w-full text-lg py-6">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">АГЕНТСТВО</h3>
              <p className="text-background/80">Маркетинговое агентство полного цикла</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li>Брендинг</li>
                <li>SMM</li>
                <li>Дизайн</li>
                <li>Контент</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>+7 (999) 123-45-67</li>
                <li>hello@agency.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2024 Агентство. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
