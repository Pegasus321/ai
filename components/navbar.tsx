import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button>
        <HamburgerMenuIcon />
      </Button>
    </div>
  );
}
