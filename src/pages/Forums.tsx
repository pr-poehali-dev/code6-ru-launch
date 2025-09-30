import Header from '@/components/Header';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Forums = () => {
  const categories = [
    {
      name: 'Новости и обновления',
      icon: 'Megaphone',
      topics: 156,
      posts: 1243,
      lastPost: 'Новый сезон стартовал!',
      lastUser: 'Admin',
      lastTime: '2 часа назад'
    },
    {
      name: 'Правила сервера',
      icon: 'Scale',
      topics: 12,
      posts: 89,
      lastPost: 'Обновление правил департаментов',
      lastUser: 'Moderator',
      lastTime: '1 день назад'
    },
    {
      name: 'Общее обсуждение',
      icon: 'MessageSquare',
      topics: 2341,
      posts: 18567,
      lastPost: 'Как вам новая локация?',
      lastUser: 'Player123',
      lastTime: '15 минут назад'
    },
    {
      name: 'Департаменты',
      icon: 'Building2',
      topics: 567,
      posts: 4521,
      lastPost: 'Набор в полицию открыт',
      lastUser: 'ChiefPolice',
      lastTime: '1 час назад'
    },
    {
      name: 'Помощь новичкам',
      icon: 'HelpCircle',
      topics: 892,
      posts: 6234,
      lastPost: 'Как начать играть?',
      lastUser: 'Newbie99',
      lastTime: '30 минут назад'
    },
    {
      name: 'Жалобы и баны',
      icon: 'AlertTriangle',
      topics: 234,
      posts: 1456,
      lastPost: 'Жалоба на читера',
      lastUser: 'Player456',
      lastTime: '3 часа назад'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Форумы</h1>
            <p className="text-muted-foreground">Обсуждай игровые вопросы с сообществом</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Plus" size={20} className="mr-2" />
            Создать тему
          </Button>
        </div>

        <div className="mb-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">4,202</div>
                    <div className="text-sm text-muted-foreground">Тем</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">32,110</div>
                    <div className="text-sm text-muted-foreground">Сообщений</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">1,456</div>
                    <div className="text-sm text-muted-foreground">Пользователей</div>
                  </div>
                </div>
                <Badge variant="secondary" className="text-sm">
                  <Icon name="Users" size={16} className="mr-1" />
                  234 онлайн
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {categories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={category.icon as any} size={28} className="text-accent" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {category.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Icon name="FileText" size={14} className="mr-1" />
                        {category.topics} тем
                      </span>
                      <span className="flex items-center">
                        <Icon name="MessageCircle" size={14} className="mr-1" />
                        {category.posts} сообщений
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:block text-right flex-shrink-0">
                    <div className="text-sm text-foreground font-medium mb-1 truncate max-w-xs">
                      {category.lastPost}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      от <span className="text-accent">{category.lastUser}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {category.lastTime}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="bg-card border-t border-border py-8 mt-16">
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
};

export default Forums;