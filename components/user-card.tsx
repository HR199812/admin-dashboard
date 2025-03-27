import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserCardProps {
  name: string;
  email: string;
  avatarUrl: string;
  amount: string;
  key: number;
}

export default function UserCard({
  name,
  email,
  avatarUrl,
  amount,
  key,
}: UserCardProps) {
  return (
    <div className="flex items-center" key={key}>
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div className="ml-auto font-medium">{amount}</div>
    </div>
  );
}
