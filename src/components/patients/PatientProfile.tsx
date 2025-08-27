import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  FileText, 
  Activity,
  Heart,
  User,
  Edit
} from "lucide-react";

const PatientProfile = () => {
  const patient = {
    name: "Maria Santos",
    initials: "MS",
    email: "maria.santos@email.com",
    phone: "(11) 99999-9999",
    address: "Rua das Flores, 123 - São Paulo, SP",
    birthDate: "15/03/1985",
    cpf: "123.456.789-00",
    plan: "Unimed Premium",
    lastVisit: "15/12/2024",
    nextAppointment: "22/12/2024 - 09:30",
    specialty: "Cardiologia - Dr. João Carvalho"
  };

  const interactions = [
    {
      date: "20/12/2024 - 14:30",
      channel: "WhatsApp",
      type: "Reagendamento",
      status: "Resolvido",
      agent: "Ana Silva"
    },
    {
      date: "18/12/2024 - 10:15", 
      channel: "Telefone",
      type: "Consulta",
      status: "Finalizado",
      agent: "Carlos Santos"
    },
    {
      date: "15/12/2024 - 09:30",
      channel: "Presencial",
      type: "Consulta Médica",
      status: "Realizada",
      agent: "Dr. João Carvalho"
    }
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Perfil do Paciente</CardTitle>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Editar
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Basic Info */}
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="" />
            <AvatarFallback className="bg-medical-primary/10 text-medical-primary text-lg">
              {patient.initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{patient.name}</h3>
            <div className="space-y-1 mt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                {patient.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                {patient.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {patient.address}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Medical Info */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <Heart className="h-4 w-4 text-medical-urgent" />
            Informações Médicas
          </h4>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Data Nascimento:</span>
              <p className="font-medium">{patient.birthDate}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Plano:</span>
              <p className="font-medium">{patient.plan}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Última Consulta:</span>
              <p className="font-medium">{patient.lastVisit}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Próxima Consulta:</span>
              <p className="font-medium text-medical-primary">{patient.nextAppointment}</p>
            </div>
          </div>
          
          <div>
            <span className="text-muted-foreground text-sm">Especialidade:</span>
            <p className="font-medium">{patient.specialty}</p>
          </div>
        </div>

        <Separator />

        {/* Interaction History */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <Activity className="h-4 w-4 text-medical-primary" />
            Histórico de Interações
          </h4>
          
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {interactions.map((interaction, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {interaction.channel}
                    </Badge>
                    <Badge 
                      className={`text-xs ${
                        interaction.status === "Resolvido" || interaction.status === "Realizada" 
                          ? "bg-medical-success/10 text-medical-success border-medical-success/20"
                          : "bg-medical-primary/10 text-medical-primary border-medical-primary/20"
                      }`}
                    >
                      {interaction.status}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium">{interaction.type}</p>
                  <p className="text-xs text-muted-foreground">
                    {interaction.date} • {interaction.agent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientProfile;