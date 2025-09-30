import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative bg-gradient-to-b from-card to-background py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Добро пожаловать в CODE6 RolePlay
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Погрузись в увлекательный мир ролевых игр. Создай своего персонажа, вступи в департамент и начни свою историю.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/register">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Начать играть
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/forums">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Перейти на форум
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Возможности проекта
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Активное сообщество
                </h3>
                <p className="text-muted-foreground">
                  Тысячи игроков онлайн. Общайся, заводи друзей и участвуй в событиях.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building2" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Департаменты
                </h3>
                <p className="text-muted-foreground">
                  Выбери свою фракцию: полиция, медики, банды или бизнес. Развивай карьеру.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  События и конкурсы
                </h3>
                <p className="text-muted-foreground">
                  Участвуй в регулярных событиях, турнирах и получай награды.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Последние новости
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Открытие нового сезона',
                  date: '25 сентября 2025',
                  description: 'Начался новый сезон с обновлённой системой рангов и новыми локациями.'
                },
                {
                  title: 'Обновление системы департаментов',
                  date: '20 сентября 2025',
                  description: 'Добавлены новые должности и улучшена система продвижения по службе.'
                },
                {
                  title: 'Турнир "Лучший игрок"',
                  date: '15 сентября 2025',
                  description: 'Участвуй в турнире и получи эксклюзивные награды!'
                }
              ].map((news, index) => (
                <Card key={index} className="bg-background border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {news.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{news.date}</p>
                        <p className="text-foreground">{news.description}</p>
                      </div>
                      <Icon name="ChevronRight" size={24} className="text-muted-foreground flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2025 CODE6 RolePlay. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Правила
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Discord
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                VK
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
