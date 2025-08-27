import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar,
  FileText,
  Send,
  Paperclip,
  Clock,
  User,
  Star
} from "lucide-react";

const AgentWorkspace = () => {
  const quickReplies = [
    "Olá! Como posso ajudá-lo hoje?",
    "Vou verificar sua agenda e retorno em breve.",
    "Consulta confirmada para {data} às {hora}.",
    "Preciso de alguns dados para prosseguir com o agendamento.",
    "Obrigado pelo contato! Tenha um ótimo dia!"
  ];

  const scheduledTasks = [
    {
      time: "15:30",
      task: "Ligar para Maria Santos - Confirmação consulta",
      priority: "high"
    },
    {
      time: "16:00", 
      task: "Enviar resultados exame - João Silva",
      priority: "medium"
    },
    {
      time: "16:30",
      task: "Follow-up agendamento - Ana Costa",
      priority: "low"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Chat Area */}
      <div className="lg:col-span-2 space-y-4">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <span>Conversa Ativa</span>
              <Badge className="bg-medical-success/10 text-medical-success">
                WhatsApp
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Chat messages would go here - reusing ChatInterface component */}
            <div className="h-64 bg-muted/20 rounded-lg p-4 mb-4">
              <div className="text-center text-muted-foreground">
                Área de conversa principal
              </div>
            </div>
            
            {/* Enhanced input area */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {quickReplies.slice(0, 3).map((reply, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="sm"
                    className="text-xs"
                  >
                    {reply.substring(0, 25)}...
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Textarea 
                  placeholder="Digite sua resposta..."
                  className="min-h-[80px] resize-none"
                />
                <Button size="icon" className="bg-medical-primary">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar Tools */}
      <div className="space-y-4">
        {/* Patient Quick Info */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Informações do Paciente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-medical-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-medical-primary" />
              </div>
              <div>
                <p className="font-medium">Maria Santos</p>
                <p className="text-xs text-muted-foreground">Paciente Premium</p>
              </div>
            </div>
            
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Última consulta:</span>
                <span>15/12/2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Especialidade:</span>
                <span>Cardiologia</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Plano:</span>
                <span>Unimed Premium</span>
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full">
              Ver Perfil Completo
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar Consulta
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Solicitar Exames
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Phone className="h-4 w-4 mr-2" />
              Iniciar Ligação
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Mail className="h-4 w-4 mr-2" />
              Enviar E-mail
            </Button>
          </CardContent>
        </Card>

        {/* Scheduled Tasks */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Tarefas Agendadas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {scheduledTasks.map((task, index) => (
              <div key={index} className="flex items-start gap-3 p-2 rounded border">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {task.time}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{task.task}</p>
                  <Badge 
                    variant="outline" 
                    className={`text-xs mt-1 ${
                      task.priority === "high" 
                        ? "border-medical-urgent/50 text-medical-urgent" 
                        : task.priority === "medium"
                        ? "border-medical-warning/50 text-medical-warning"
                        : "border-muted-foreground/50"
                    }`}
                  >
                    {task.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* My Performance */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Minha Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-medical-primary">23</div>
              <div className="text-xs text-muted-foreground">Atendimentos hoje</div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Tempo médio resposta:</span>
              <span className="font-medium">1:45</span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Satisfação:</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-medical-warning fill-medical-warning" />
                <span className="font-medium">4.8</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgentWorkspace;