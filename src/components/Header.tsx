import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={24} className="text-accent-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CODE6 RP</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Главная
            </Link>
            <Link to="/forums" className="text-foreground hover:text-accent transition-colors">
              Форумы
            </Link>
            <Link to="/community" className="text-foreground hover:text-accent transition-colors">
              Сообщество
            </Link>
            <Link to="/departments" className="text-foreground hover:text-accent transition-colors">
              Департаменты
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">
                <Icon name="LogIn" size={16} className="mr-2" />
                Вход
              </Link>
            </Button>
            <Button size="sm" asChild className="bg-accent hover:bg-accent/90">
              <Link to="/register">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
