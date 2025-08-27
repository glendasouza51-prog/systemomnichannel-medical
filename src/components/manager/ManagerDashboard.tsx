import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  Timer,
  Target,
  Award
} from "lucide-react";

const ManagerDashboard = () => {
  const teamMetrics = [
    {
      name: "Ana Silva",
      avatar: "AS",
      activeChats: 8,
      avgResponseTime: "1:45",
      todayResolved: 23,
      satisfaction: 4.8,
      status: "online"
    },
    {
      name: "Carlos Santos", 
      avatar: "CS",
      activeChats: 5,
      avgResponseTime: "2:12",
      todayResolved: 18,
      satisfaction: 4.6,
      status: "online"
    },
    {
      name: "Maria Oliveira",
      avatar: "MO", 
      activeChats: 3,
      avgResponseTime: "3:05",
      todayResolved: 12,
      satisfaction: 4.9,
      status: "away"
    }
  ];

  const queueStats = {
    waiting: 12,
    inProgress: 24,
    avgWaitTime: "4:32",
    slaCompliance: 89
  };

  return (
    <div className="space-y-6">
      {/* Queue Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-medical-primary" />
            Gestão de Filas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-medical-warning/10 border border-medical-warning/20">
              <div className="text-2xl font-bold text-medical-warning">{queueStats.waiting}</div>
              <div className="text-sm text-muted-foreground">Na Fila</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-medical-primary/10 border border-medical-primary/20">
              <div className="text-2xl font-bold text-medical-primary">{queueStats.inProgress}</div>
              <div className="text-sm text-muted-foreground">Em Atendimento</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50 border">
              <div className="text-2xl font-bold">{queueStats.avgWaitTime}</div>
              <div className="text-sm text-muted-foreground">Tempo Médio Espera</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-medical-success/10 border border-medical-success/20">
              <div className="text-2xl font-bold text-medical-success">{queueStats.slaCompliance}%</div>
              <div className="text-sm text-muted-foreground">SLA Compliance</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Performance */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-medical-primary" />
              Performance da Equipe
            </CardTitle>
            <Button variant="outline" size="sm">
              Ver Relatório Completo
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMetrics.map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-medical-primary/10 text-medical-primary">
                        {agent.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                      agent.status === "online" ? "bg-medical-success" : "bg-medical-warning"
                    }`} />
                  </div>
                  
                  <div>
                    <h4 className="font-medium">{agent.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{agent.activeChats} chats ativos</span>
                      <span>•</span>
                      <span>Tempo resp: {agent.avgResponseTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold">{agent.todayResolved}</div>
                    <div className="text-xs text-muted-foreground">Resolvidos hoje</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-medical-warning" />
                    <span className="font-medium">{agent.satisfaction}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    Supervisionar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SLA Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-medical-primary" />
            Monitoramento SLA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Resposta em até 5 minutos</span>
              <span className="text-sm text-muted-foreground">89%</span>
            </div>
            <Progress value={89} className="h-2" />
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Resolução em até 30 minutos</span>
              <span className="text-sm text-muted-foreground">76%</span>
            </div>
            <Progress value={76} className="h-2" />
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Satisfação do paciente</span>
              <span className="text-sm text-muted-foreground">94%</span>
            </div>
            <Progress value={94} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagerDashboard;