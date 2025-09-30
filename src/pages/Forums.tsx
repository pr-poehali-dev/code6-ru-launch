import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Forums = () => {
  const forumPosts = [
    {
      id: 1,
      author: "Иван Петров",
      avatar: "/placeholder.svg",
      title: "Обсуждение новых правил департамента",
      content: "Коллеги, предлагаю обсудить изменения в регламенте работы департамента полиции. Ваше мнение важно для всех нас.",
      replies: 24,
      views: 156,
      category: "Департаменты"
    },
    {
      id: 2,
      author: "Мария Соколова",
      avatar: "/placeholder.svg",
      title: "Организация мероприятия в городе",
      content: "Планируем провести масштабное мероприятие в центре города. Нужны волонтеры и идеи!",
      replies: 18,
      views: 98,
      category: "Сообщество"
    },
    {
      id: 3,
      author: "Дмитрий Волков",
      avatar: "/placeholder.svg",
      title: "Вопросы по созданию персонажа",
      content: "Подскажите, как правильно оформить биографию персонажа для департамента медиков?",
      replies: 12,
      views: 67,
      category: "Помощь"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Форумы</h1>
            <p className="text-muted-foreground">Общайтесь с участниками проекта</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Plus" size={20} className="mr-2" />
            Создать тему
          </Button>
        </div>

        <div className="space-y-4">
          {forumPosts.map((post) => (
            <Card key={post.id} className="p-6 border-border bg-card hover:border-accent/50 transition-all">
              <div className="flex gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Автор: <span className="text-foreground">{post.author}</span>
                      </p>
                    </div>
                    <Badge variant="outline" className="border-accent text-accent">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{post.content}</p>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="MessageSquare" size={16} />
                      <span>{post.replies} ответов</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Eye" size={16} />
                      <span>{post.views} просмотров</span>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto text-accent hover:text-accent hover:bg-accent/10">
                      Ответить
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;
