import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, TrafficCone } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen p-5">
      <section className="w-full md:w-fit flex flex-col items-center justify-center">
        <Tabs defaultValue="matches" className="w-full md:w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="matches">Partidos</TabsTrigger>
            <TabsTrigger value="trainings">Entrenamientos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="matches">
            <Card>
              <CardHeader>
                <CardDescription>
                  Próximos partidos agendados
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-row gap-3 items-center">
                  <Calendar className="text-primary"/>
                  <div>
                    <p className="text-lg">Torneo de sevens<small className="text-sm"> - Cancun</small></p>
                    <p className="text-sm text-foreground">15/7/2025</p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <Calendar className="text-primary"/>
                  <div>
                    <p className="text-lg">Torneo de 10's <small className="text-sm"> - Cancun</small></p>
                    <p className="text-sm text-foreground">20/9/2025</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Nuevo partido</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="trainings">
          <Card>
              <CardHeader>
                <CardDescription>
                  Próximos entrenamientos organizados
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-row gap-3 items-center">
                  <TrafficCone className="text-primary"/>
                  <div>
                    <p className="text-lg">Tackle<small className="text-sm"> - Toro Valenzuela</small></p>
                    <p className="text-sm text-foreground">29/04/2025</p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <TrafficCone className="text-primary"/>
                  <div>
                    <p className="text-lg">Torneo de 10's<small className="text-sm"> - CEDAR</small></p>
                    <p className="text-sm text-foreground">01/05/2025</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Agendar entrenamientos</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
