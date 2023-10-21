import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DasshboardPage() {
  return (
    <div>
      <Button>Click Me</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
