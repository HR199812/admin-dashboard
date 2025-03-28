import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { LucideCirclePlus, LucideColumns2 } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="flex items-center gap-4 py-4">
      {/* Search Input */}
      <div className="flex gap-2 max-w-sm">
        <Input
          className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground"
          placeholder="Search users..."
        />
        
        {/* Popover Buttons */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <LucideCirclePlus className="h-4 w-4" /> Status
            </Button>
          </PopoverTrigger>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <LucideCirclePlus className="h-4 w-4" /> Plan
            </Button>
          </PopoverTrigger>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <LucideCirclePlus className="h-4 w-4" /> Role
            </Button>
          </PopoverTrigger>
        </Popover>
      </div>
      
      {/* Column Layout Button */}
      <Button variant="outline" className="ml-auto size-9">
        <LucideColumns2 className="h-5 w-5" />
      </Button>
    </div>
  );
}
