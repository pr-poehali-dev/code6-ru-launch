import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Departments() {
  const departments = [
    {
      name: 'Los Santos Police Department',
      shortName: 'LSPD',
      description: 'Защищай город от преступности, патрулируй улицы и поддерживай порядок.',
      icon: 'Shield',
      color: 'bg-blue-500',
      members: 156,
      slots: 200,
      requirements: ['Уровень 5+', 'Без нарушений', 'Знание правил']
    },
    {
      name: 'Emergency Medical Services',
      shortName: 'EMS',
      description: 'Спасай жизни, оказывай медицинскую помощь и работай в больнице.',
      icon: 'Heart',
      color: 'bg-red-500',
      members: 89,
      slots: 120,
      requirements: ['Уровень 3+', 'Ответственность', 'Коммуникабельность']
    },
    {
      name: 'Government',
      shortName: 'GOV',
      description: 'Управляй городом, принимай законы и веди бюрократическую работу.',
      icon: 'Landmark',
      color: 'bg-purple-500',
      members: 45,
      slots: 60,
      requirements: ['Уровень 10+', 'Опыт игры', 'Знание механик']
    },
    {
      name: 'The Families',
      shortName: 'FAM',
      description: 'Развивай криминальный бизнес, контролируй территории и сражайся за влияние.',
      icon: 'Flame',
      color: 'bg-green-500',
      members: 234,
      slots: 300,
      requirements: ['Уровень 1+', 'Активность', 'Лояльность']
    },
    {
      name: 'Los Santos Customs',
      shortName: 'LSC',
      description: 'Ремонтируй автомобили, тюнингуй машины и управляй автосервисом.',
      icon: 'Wrench',
      color: 'bg-orange-500',
      members: 67,
      slots: 100,
      requirements: ['Уровень 2+', 'Знание механик', 'Опыт RP']
    },
    {
      name: 'Weazel News',
      shortName: 'WN',
      description: 'Освещай события города, проводи интервью и создавай новостной контент.',
      icon: 'Newspaper',
      color: 'bg-yellow-500',
      members: 34,
      slots: 50,
      requirements: ['Уровень 3+', 'Грамотность', 'Креативность']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Департаменты</h1>
          <p className="text-muted-foreground">Выбери фракцию и начни свой путь в мире CODE6</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 ${dept.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={dept.icon as any} size={32} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{dept.name}</h3>
                        <Badge variant="secondary" className="mt-1">{dept.shortName}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {dept.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Состав департамента</span>
                    <span className="text-foreground font-medium">{dept.members} / {dept.slots}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`${dept.color} h-2 rounded-full transition-all`}
                      style={{ width: `${(dept.members / dept.slots) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Требования:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.requirements.map((req, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        <Icon name="Check" size={12} className="mr-1 text-accent" />
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Подать заявку
                </Button>
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
}
