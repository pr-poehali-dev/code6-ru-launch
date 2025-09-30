import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Register() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">Регистрация персонажа</h1>
            <p className="text-muted-foreground">Создай своего уникального героя</p>
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}>
                1
              </div>
              <div className={`h-1 w-16 ${step >= 2 ? 'bg-accent' : 'bg-muted'}`} />
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}>
                2
              </div>
              <div className={`h-1 w-16 ${step >= 3 ? 'bg-accent' : 'bg-muted'}`} />
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}`}>
                3
              </div>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">
                {step === 1 && 'Основная информация'}
                {step === 2 && 'Биография персонажа'}
                {step === 3 && 'Выбор департамента'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {step === 1 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">Имя персонажа</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Иван"
                      className="bg-input border-border text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Фамилия персонажа</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Петров"
                      className="bg-input border-border text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-foreground">Возраст</Label>
                    <Input 
                      id="age" 
                      type="number"
                      min="18"
                      max="80"
                      placeholder="25"
                      className="bg-input border-border text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-foreground">Пол</Label>
                    <Select>
                      <SelectTrigger className="bg-input border-border text-foreground">
                        <SelectValue placeholder="Выберите пол" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Мужской</SelectItem>
                        <SelectItem value="female">Женский</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={() => setStep(2)}
                  >
                    Далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="backstory" className="text-foreground">
                      Биография персонажа
                    </Label>
                    <Textarea 
                      id="backstory"
                      placeholder="Расскажите историю вашего персонажа: откуда он, чем занимался, почему приехал в город..."
                      className="bg-input border-border text-foreground min-h-[200px]"
                    />
                    <p className="text-xs text-muted-foreground">Минимум 100 символов</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appearance" className="text-foreground">
                      Внешность
                    </Label>
                    <Textarea 
                      id="appearance"
                      placeholder="Опишите внешность персонажа: рост, телосложение, особые приметы..."
                      className="bg-input border-border text-foreground min-h-[100px]"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Назад
                    </Button>
                    <Button 
                      className="flex-1 bg-accent hover:bg-accent/90"
                      onClick={() => setStep(3)}
                    >
                      Далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-foreground">
                      Выбор департамента
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-input border-border text-foreground">
                        <SelectValue placeholder="Выберите департамент" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="civilian">
                          <div className="flex items-center">
                            <Icon name="User" size={16} className="mr-2" />
                            Гражданский
                          </div>
                        </SelectItem>
                        <SelectItem value="lspd">
                          <div className="flex items-center">
                            <Icon name="Shield" size={16} className="mr-2" />
                            LSPD
                          </div>
                        </SelectItem>
                        <SelectItem value="ems">
                          <div className="flex items-center">
                            <Icon name="Heart" size={16} className="mr-2" />
                            EMS
                          </div>
                        </SelectItem>
                        <SelectItem value="government">
                          <div className="flex items-center">
                            <Icon name="Landmark" size={16} className="mr-2" />
                            Government
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Можно начать как гражданский и подать заявку в департамент позже
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="text-foreground">
                      Почему вы хотите играть на сервере?
                    </Label>
                    <Textarea 
                      id="motivation"
                      placeholder="Расскажите о своих ожиданиях от игры..."
                      className="bg-input border-border text-foreground min-h-[100px]"
                    />
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Icon name="Info" size={16} className="mr-2 text-accent" />
                      Важная информация
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ваша заявка будет рассмотрена администрацией в течение 24 часов</li>
                      <li>• Убедитесь, что биография соответствует правилам сервера</li>
                      <li>• После одобрения вы получите доступ к игре</li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep(2)}
                    >
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Назад
                    </Button>
                    <Button 
                      className="flex-1 bg-accent hover:bg-accent/90"
                    >
                      <Icon name="Check" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
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
