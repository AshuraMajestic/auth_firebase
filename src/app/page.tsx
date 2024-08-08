import Header from "@/components/Header";
import SlideShow from "@/components/SlideShow";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow p-6 mt-4 shadow-lg border-t">
          <SlideShow />
        </div>
      </div>
    </>
  );
}
