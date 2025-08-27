import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Users, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  AlertCircle 
} from "lucide-react";

const MetricsCards = () => {
  const metrics = [
    {
      title: "Conversas Ativas",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: MessageCircle,
      color: "medical-primary",
      description: "Últimas 24h"
    },
    {
      title: "Tempo Médio Resposta",
      value: "2:35",
      change: "-8%",
      trend: "down",
      icon: Clock,
      color: "medical-success",
      description: "minutos"
    },
    {
      title: "Pacientes Atendidos",
      value: "156",
      change: "+23%",
      trend: "up",
      icon: Users,
      color: "medical-primary",
      description: "Hoje"
    },
    {
      title: "Taxa de Resolução",
      value: "94%",
      change: "+5%",
      trend: "up",
      icon: CheckCircle,
      color: "medical-success",
      description: "Este mês"
    },
    {
      title: "WhatsApp",
      value: "89",
      change: "+18%",
      trend: "up",
      icon: MessageCircle,
      color: "medical-success",
      description: "mensagens hoje"
    },
    {
      title: "Ligações",
      value: "34",
      change: "+7%",
      trend: "up",
      icon: Phone,
      color: "medical-primary",
      description: "atendidas hoje"
    },
    {
      title: "E-mails",
      value: "67",
      change: "-3%",
      trend: "down",
      icon: Mail,
      color: "medical-warning",
      description: "respondidos hoje"
    },
    {
      title: "Urgentes",
      value: "5",
      change: "0%",
      trend: "neutral",
      icon: AlertCircle,
      color: "medical-urgent",
      description: "aguardando"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-card to-muted/20" />
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-${metric.color}/10`}>
                <Icon className={`h-4 w-4 text-${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-muted-foreground">
                  {metric.description}
                </p>
                <Badge 
                  variant={metric.trend === "up" ? "default" : metric.trend === "down" ? "secondary" : "outline"}
                  className={`text-xs ${
                    metric.trend === "up" 
                      ? "bg-medical-success/10 text-medical-success border-medical-success/20" 
                      : metric.trend === "down" 
                      ? "bg-medical-warning/10 text-medical-warning border-medical-warning/20"
                      : ""
                  }`}
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsCards;