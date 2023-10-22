import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button>
        <Menu />
      </Button>
    </div>
  );
}
