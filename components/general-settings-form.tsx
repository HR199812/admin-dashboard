"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().optional(),
  bio: z.string().optional(),
  avatarUrl: z.string().optional(),
  urls: z.array(z.string()).optional(),
});

export function GeneralSettingsForm() {
  // Initialize the form using useForm
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      avatarUrl: "",
      urls: [""],
    },
  });

  // Handle form submission
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-8 w-[40%]"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                You can manage verified email addresses in your email settings.
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Write something about yourself..."
                  className="flex max-h-32 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can @mention other users and organizations to link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URLs</FormLabel>
              <FormDescription>
                Add links to your website, blog, or social media profiles.
              </FormDescription>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
