import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  MessageCircle, 
  Phone, 
  Clock, 
  Search,
  Filter,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const PatientPortal = () => {
  const conversations = [
    {
      id: "1",
      subject: "Reagendamento de consulta",
      lastMessage: "Consulta confirmada para terça às 09:30",
      date: "20/12/2024",
      status: "resolved",
      channel: "whatsapp"
    },
    {
      id: "2",
      subject: "Resultados de exames",
      lastMessage: "Aguarde, vou solicitar ao médico...",
      date: "18/12/2024", 
      status: "pending",
      channel: "email"
    },
    {
      id: "3",
      subject: "Dúvida sobre procedimento",
      lastMessage: "Obrigada pelas informações!",
      date: "15/12/2024",
      status: "resolved", 
      channel: "phone"
    }
  ];

  const upcomingAppointments = [
    {
      date: "22/12/2024",
      time: "09:30",
      doctor: "Dr. João Carvalho",
      specialty: "Cardiologia",
      type: "Consulta de retorno"
    },
    {
      date: "28/12/2024", 
      time: "14:00",
      doctor: "Dra. Ana Mendes",
      specialty: "Dermatologia",
      type: "Primeira consulta"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Portal do Paciente</h1>
          <p className="text-muted-foreground">Bem-vinda, Maria Santos</p>
        </div>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-medical-primary/10 text-medical-primary">MS</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="h-20 flex-col gap-2 bg-medical-primary hover:bg-medical-primary/90">
          <Calendar className="h-6 w-6" />
          <span>Agendar Consulta</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col gap-2">
          <MessageCircle className="h-6 w-6" />
          <span>Nova Conversa</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col gap-2">
          <Phone className="h-6 w-6" />
          <span>Emergência</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversations History */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Minhas Conversas</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar..." className="pl-10 w-40" />
                </div>
                <Button variant="ghost" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {conversations.map((conv) => (
              <div key={conv.id} className="p-4 rounded-lg border hover:bg-muted/50 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">{conv.subject}</h4>
                  <div className="flex items-center gap-2">
                    {conv.channel === "whatsapp" && <MessageCircle className="h-4 w-4 text-medical-success" />}
                    {conv.channel === "email" && <MessageCircle className="h-4 w-4 text-medical-primary" />}
                    {conv.channel === "phone" && <Phone className="h-4 w-4 text-medical-warning" />}
                    <span className="text-xs text-muted-foreground">{conv.date}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{conv.lastMessage}</p>
                <div className="flex items-center justify-between">
                  <Badge 
                    className={`text-xs ${
                      conv.status === "resolved" 
                        ? "bg-medical-success/10 text-medical-success border-medical-success/20"
                        : "bg-medical-warning/10 text-medical-warning border-medical-warning/20"
                    }`}
                  >
                    {conv.status === "resolved" ? (
                      <>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Resolvido
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3 mr-1" />
                        Pendente
                      </>
                    )}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    Ver conversa
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Próximas Consultas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="p-4 rounded-lg border bg-gradient-to-r from-medical-primary/5 to-medical-primary/10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{appointment.type}</h4>
                    <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                    <p className="text-xs text-muted-foreground">{appointment.specialty}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {appointment.date}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-medical-primary" />
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Reagendar
                    </Button>
                    <Button size="sm" className="bg-medical-primary">
                      Confirmar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              Ver todas as consultas
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contact */}
      <Card className="bg-medical-urgent/5 border-medical-urgent/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-medical-urgent/10">
              <AlertCircle className="h-5 w-5 text-medical-urgent" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Emergência Médica</h4>
              <p className="text-sm text-muted-foreground">
                Para emergências médicas, ligue imediatamente para (11) 9999-9999
              </p>
            </div>
            <Button variant="outline" className="border-medical-urgent text-medical-urgent hover:bg-medical-urgent hover:text-white">
              Ligar Agora
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientPortal;