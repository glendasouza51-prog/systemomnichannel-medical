import Header from "@/components/layout/Header";
import MetricsCards from "@/components/dashboard/MetricsCards";
import ConversationList from "@/components/chat/ConversationList";
import ChatInterface from "@/components/chat/ChatInterface";
import PatientProfile from "@/components/patients/PatientProfile";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto p-6 space-y-6">
        {/* Metrics Overview */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Dashboard Omnichannel</h2>
            <p className="text-muted-foreground">
              Visão geral dos atendimentos em tempo real da sua clínica médica
            </p>
          </div>
          <MetricsCards />
        </section>

        {/* Main Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations */}
          <div className="lg:col-span-1">
            <ConversationList />
          </div>
          
          {/* Chat Interface */}
          <div className="lg:col-span-1">
            <ChatInterface />
          </div>
          
          {/* Patient Profile */}
          <div className="lg:col-span-1">
            <PatientProfile />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
