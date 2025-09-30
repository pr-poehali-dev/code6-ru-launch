import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Вход в систему</CardTitle>
              <CardDescription className="text-muted-foreground">
                Войдите в свой аккаунт CODE6 RolePlay
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground">Логин</Label>
                <Input 
                  id="username" 
                  placeholder="Введите логин"
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Пароль</Label>
                <Input 
                  id="password" 
                  type="password"
                  placeholder="Введите пароль"
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <a href="#" className="text-accent hover:underline">
                  Забыли пароль?
                </a>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Нет аккаунта?{' '}
                <Link to="/register" className="text-accent hover:underline">
                  Зарегистрироваться
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-2 text-muted-foreground">или</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Войти через Discord
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

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
