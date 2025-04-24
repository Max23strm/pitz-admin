import EventTabs from "@/components/custom/home/EventTabs";
import PlayersState from "@/components/custom/home/PlayersState";


export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen p-5 align-">
      <div className="flex flex-col md:flex-row gap-5 h-fit">
        <EventTabs />
        <PlayersState/>
      </div>
    </main>
  );
}
