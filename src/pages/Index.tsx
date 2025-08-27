import { useState } from "react";
import UniversalHeader from "@/components/layout/UniversalHeader";
import MetricsCards from "@/components/dashboard/MetricsCards";
import ConversationList from "@/components/chat/ConversationList";
import ChatInterface from "@/components/chat/ChatInterface";
import PatientProfile from "@/components/patients/PatientProfile";
import ManagerDashboard from "@/components/manager/ManagerDashboard";
import AgentWorkspace from "@/components/agent/AgentWorkspace";
import PatientPortal from "@/components/patient/PatientPortal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type UserRole = "manager" | "agent" | "patient";

const Index = () => {
  const [userRole, setUserRole] = useState<UserRole>("manager");

  const renderContent = () => {
    switch (userRole) {
      case "manager":
        return (
          <div className="space-y-6">
            <section>
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Dashboard Gerencial</h2>
                    <p className="text-muted-foreground">
                      Visão completa do desempenho da equipe e métricas operacionais
                    </p>
                  </div>
                  <Badge className="bg-medical-primary/10 text-medical-primary border-medical-primary/20">
                    Acesso Gerencial
                  </Badge>
                </div>
              </div>
              <MetricsCards />
            </section>
            <ManagerDashboard />
          </div>
        );
      
      case "agent":
        return (
          <div className="space-y-6">
            <section>
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Área de Trabalho do Atendente</h2>
                    <p className="text-muted-foreground">
                      Gerencie suas conversas e atenda pacientes de forma eficiente
                    </p>
                  </div>
                  <Badge className="bg-medical-success/10 text-medical-success border-medical-success/20">
                    8 conversas ativas
                  </Badge>
                </div>
              </div>
            </section>
            <AgentWorkspace />
          </div>
        );
      
      case "patient":
        return <PatientPortal />;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <UniversalHeader userRole={userRole} onRoleChange={setUserRole} />
      
      <main className="container mx-auto p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;