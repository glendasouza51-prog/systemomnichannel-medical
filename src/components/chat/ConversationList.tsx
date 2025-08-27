import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  MoreVertical,
  Star,
  AlertCircle 
} from "lucide-react";

interface Conversation {
  id: string;
  patient: {
    name: string;
    avatar?: string;
    initials: string;
  };
  lastMessage: string;
  timestamp: string;
  channel: "whatsapp" | "email" | "phone" | "facebook";
  status: "active" | "pending" | "resolved" | "urgent";
  unreadCount: number;
  priority: "low" | "medium" | "high";
}

const ConversationList = () => {
  const conversations: Conversation[] = [
    {
      id: "1",
      patient: { name: "Maria Santos", initials: "MS" },
      lastMessage: "Gostaria de remarcar minha consulta para próxima semana",
      timestamp: "2 min",
      channel: "whatsapp",
      status: "active",
      unreadCount: 2,
      priority: "medium"
    },
    {
      id: "2", 
      patient: { name: "João Silva", initials: "JS" },
      lastMessage: "Preciso dos resultados do exame com urgência",
      timestamp: "5 min",
      channel: "phone",
      status: "urgent",
      unreadCount: 1,
      priority: "high"
    },
    {
      id: "3",
      patient: { name: "Ana Costa", initials: "AC" },
      lastMessage: "Obrigada pelo atendimento. Consulta confirmada.",
      timestamp: "15 min",
      channel: "email",
      status: "resolved",
      unreadCount: 0,
      priority: "low"
    },
    {
      id: "4",
      patient: { name: "Pedro Oliveira", initials: "PO" },
      lastMessage: "Qual o horário de funcionamento da clínica?",
      timestamp: "1h",
      channel: "facebook",
      status: "pending",
      unreadCount: 1,
      priority: "medium"
    },
    {
      id: "5",
      patient: { name: "Carla Ferreira", initials: "CF" },
      lastMessage: "Gostaria de agendar uma consulta de retorno",
      timestamp: "2h",
      channel: "whatsapp",
      status: "active",
      unreadCount: 3,
      priority: "medium"
    }
  ];

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "whatsapp": return <MessageCircle className="h-4 w-4 text-medical-success" />;
      case "email": return <Mail className="h-4 w-4 text-medical-primary" />;
      case "phone": return <Phone className="h-4 w-4 text-medical-warning" />;
      case "facebook": return <MessageCircle className="h-4 w-4 text-medical-primary" />;
      default: return <MessageCircle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent": return "bg-medical-urgent text-white";
      case "active": return "bg-medical-primary text-white";
      case "pending": return "bg-medical-warning text-white";
      case "resolved": return "bg-medical-success text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Conversas Recentes</CardTitle>
          <Badge variant="outline" className="text-xs">
            {conversations.filter(c => c.status === "active" || c.status === "pending").length} ativas
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 max-h-96 overflow-y-auto">
        {conversations.map((conversation) => (
          <div 
            key={conversation.id}
            className="flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 hover:bg-muted/50 hover:shadow-sm cursor-pointer"
          >
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={conversation.patient.avatar} />
                <AvatarFallback className="bg-medical-primary/10 text-medical-primary">
                  {conversation.patient.initials}
                </AvatarFallback>
              </Avatar>
              {conversation.priority === "high" && (
                <div className="absolute -top-1 -right-1">
                  <AlertCircle className="h-4 w-4 text-medical-urgent" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium truncate">{conversation.patient.name}</h4>
                <div className="flex items-center gap-2">
                  {getChannelIcon(conversation.channel)}
                  <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground truncate mb-2">
                {conversation.lastMessage}
              </p>
              
              <div className="flex items-center justify-between">
                <Badge 
                  className={`text-xs ${getStatusColor(conversation.status)}`}
                  variant="secondary"
                >
                  {conversation.status}
                </Badge>
                
                <div className="flex items-center gap-2">
                  {conversation.unreadCount > 0 && (
                    <Badge className="bg-medical-urgent text-white text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center">
                      {conversation.unreadCount}
                    </Badge>
                  )}
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreVertical className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ConversationList;