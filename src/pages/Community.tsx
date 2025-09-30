import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Community = () => {
  const members = [
    {
      id: 1,
      name: "Иван Петров",
      role: "Офицер полиции",
      department: "LSPD",
      level: 15,
      avatar: "/placeholder.svg",
      status: "online"
    },
    {
      id: 2,
      name: "Мария Соколова",
      role: "Врач-хирург",
      department: "EMS",
      level: 12,
      avatar: "/placeholder.svg",
      status: "online"
    },
    {
      id: 3,
      name: "Дмитрий Волков",
      role: "Бизнесмен",
      department: "Civilian",
      level: 8,
      avatar: "/placeholder.svg",
      status: "offline"
    },
    {
      id: 4,
      name: "Анна Кузнецова",
      role: "Механик",
      department: "Government",
      level: 10,
      avatar: "/placeholder.svg",
      status: "online"
    }
  ];

  const stats = [
    { label: "Активных игроков", value: "1,234", icon: "Users" },
    { label: "Департаментов", value: "12", icon: "Building2" },
    { label: "Онлайн сейчас", value: "456", icon: "Activity" },
    { label: "Всего персонажей", value: "3,890", icon: "User" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Сообщество</h1>
        <p className="text-muted-foreground mb-8">Познакомьтесь с участниками проекта</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 border-border bg-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon name={stat.icon as any} size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Активные участники</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member) => (
            <Card key={member.id} className="p-6 border-border bg-card hover:border-accent/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  {member.status === "online" && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
                  )}
                </div>
                
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                
                <Badge variant="outline" className="border-accent text-accent mb-3">
                  {member.department}
                </Badge>
                
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Star" size={16} className="text-accent" />
                  <span className="text-muted-foreground">Уровень {member.level}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
