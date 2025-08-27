import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Paperclip, 
  Smile, 
  Phone, 
  Video, 
  MoreVertical,
  MessageCircle,
  Clock
} from "lucide-react";

const ChatInterface = () => {
  const messages = [
    {
      id: "1",
      sender: "patient",
      content: "Olá! Gostaria de remarcar minha consulta para próxima semana.",
      timestamp: "14:30",
      channel: "whatsapp"
    },
    {
      id: "2", 
      sender: "agent",
      content: "Olá Maria! Claro, vou verificar nossa agenda. Qual seria o melhor dia e horário para você?",
      timestamp: "14:32",
      channel: "whatsapp"
    },
    {
      id: "3",
      sender: "patient", 
      content: "Teria vaga na terça-feira pela manhã?",
      timestamp: "14:35",
      channel: "whatsapp"
    },
    {
      id: "4",
      sender: "agent",
      content: "Vou consultar... Temos disponibilidade terça às 09:30. Confirmo para você?",
      timestamp: "14:37",
      channel: "whatsapp"
    }
  ];

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-medical-primary/10 text-medical-primary">MS</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">Maria Santos</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4 text-medical-success" />
                <span>WhatsApp</span>
                <span>•</span>
                <Badge variant="outline" className="text-xs bg-medical-success/10 text-medical-success">
                  Online
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-96">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.sender === "agent" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === "agent" 
                  ? "bg-medical-primary text-white ml-auto" 
                  : "bg-muted"
              }`}>
                <p className="text-sm">{message.content}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <Clock className="h-3 w-3 opacity-70" />
                  <span className="text-xs opacity-70">{message.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Paperclip className="h-4 w-4" />
            </Button>
            <div className="flex-1 relative">
              <Input 
                placeholder="Digite sua mensagem..." 
                className="pr-12"
              />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6">
                <Smile className="h-4 w-4" />
              </Button>
            </div>
            <Button size="icon" className="bg-medical-primary hover:bg-medical-primary/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;