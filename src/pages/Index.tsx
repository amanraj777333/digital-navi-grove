
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const handleShowToast = () => {
    toast({
      title: "Toast Example",
      description: "This is a toast notification example",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Create Software Solutions</h1>
        <p className="text-xl text-gray-600 mb-8">Transform Your Business with Cutting-Edge Technology Solutions</p>
        <Button 
          onClick={handleShowToast}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Show Toast
        </Button>
      </div>
    </div>
  );
};

export default Index;
