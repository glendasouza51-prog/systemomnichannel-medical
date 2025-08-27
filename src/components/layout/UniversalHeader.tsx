import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bell, 
  Settings, 
  Search,
  ChevronDown,
  Shield,
  Users,
  BarChart3,
  MessageSquare
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type UserRole = "manager" | "agent" | "patient";

interface HeaderProps {
  userRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const UniversalHeader = ({ userRole, onRoleChange }: HeaderProps) => {
  const getUserInfo = () => {
    switch (userRole) {
      case "manager":
        return { name: "Dr. Roberto Silva", title: "Gerente Médico", avatar: "RS" };
      case "agent":
        return { name: "Ana Silva", title: "Atendente", avatar: "AS" };
      case "patient":
        return { name: "Maria Santos", title: "Paciente", avatar: "MS" };
    }
  };

  const userInfo = getUserInfo();

  const getNavItems = () => {
    switch (userRole) {
      case "manager":
        return [
          { icon: BarChart3, label: "Dashboard", active: true },
          { icon: Users, label: "Equipe" },
          { icon: MessageSquare, label: "Supervisão" },
          { icon: Settings, label: "Configurações" }
        ];
      case "agent":
        return [
          { icon: MessageSquare, label: "Conversas", active: true },
          { icon: Users, label: "Pacientes" },
          { icon: BarChart3, label: "Meu Desempenho" }
        ];
      case "patient":
        return [
          { icon: MessageSquare, label: "Conversas", active: true },
          { icon: Users, label: "Consultas" },
          { icon: Settings, label: "Perfil" }
        ];
    }
  };

  const navItems = getNavItems();

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant={item.active ? "default" : "ghost"}
                  size="sm"
                  className={item.active ? "bg-medical-primary hover:bg-medical-primary/90" : ""}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Search - only for agents and managers */}
          {userRole !== "patient" && (
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar pacientes, conversas..." 
                className="pl-10 bg-muted/50"
              />
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-medical-urgent text-xs">
                {userRole === "manager" ? "5" : userRole === "agent" ? "3" : "1"}
              </Badge>
            </Button>
            
            {/* Role Switcher - Demo only */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Shield className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onRoleChange("manager")}>
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Visão Gerente
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("agent")}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Visão Atendente  
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("patient")}>
                  <Users className="h-4 w-4 mr-2" />
                  Visão Paciente
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="flex items-center gap-3 ml-4 pl-4 border-l">
              <div className="text-right">
                <p className="text-sm font-medium">{userInfo.name}</p>
                <p className="text-xs text-muted-foreground">{userInfo.title}</p>
              </div>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-medical-primary text-white">
                  {userInfo.avatar}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UniversalHeader;