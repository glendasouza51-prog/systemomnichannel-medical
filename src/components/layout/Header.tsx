import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-medical-primary to-medical-primary/80 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-medical-primary to-medical-primary/80 bg-clip-text text-transparent">
                MediBridge
              </h1>
              <p className="text-xs text-muted-foreground">Sistema Omnichannel</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Buscar pacientes, conversas..." 
              className="pl-10 bg-muted/50"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-medical-urgent text-xs">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-3 ml-4 pl-4 border-l">
              <div className="text-right">
                <p className="text-sm font-medium">Dr. Ana Silva</p>
                <p className="text-xs text-muted-foreground">Recepcionista</p>
              </div>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-medical-primary text-white">AS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;