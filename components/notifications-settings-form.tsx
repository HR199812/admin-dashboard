"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function NotificationsSettingsForm() {
  // Update the schema to include the "items" field
  const formSchema = z.object({
    items: z.array(z.string()).optional(), // Add "items" as an optional array of strings
    type: z.enum(["all", "mentions", "none"]),
  });

  // Initialize the form using useForm
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "all",
      items: [], // Default value for items
    },
  });

  // Handle form submission
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
  };

  const items = [
    {
      title: "Communication emails",
      description: "Receive emails about your account activity.",
      isToggled: false,
    },
    {
      title: "Marketing emails",
      description: "Receive emails about new products, features, and more.",
      isToggled: false,
    },
    {
      title: "Social emails",
      description: "Receive emails for friend requests, follows, and more.",
      isToggled: false,
    },
    {
      title: "Security emails",
      description: "Receive emails about your account activity and security.",
      isToggled: true,
    },
  ] as const;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-8 w-[40%]"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-[100%] space-y-4">
          <label
            htmlFor="terms"
            className="text-md font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Email Notification
          </label>

          {items.map((item) => (
            <div key={item.title} className="space-y-2 mt-4">
              <div className="flex flex-row items-center justify-between rounded-lg border p-4 w-full">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="marketing-emails"
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                  >
                    {item.title}
                  </Label>
                  <p
                    id="marketing-emails-description"
                    className="text-[0.8rem] text-muted-foreground"
                  >
                    {item.description}
                  </p>
                </div>
                <Switch
                  id="marketing-emails"
                  aria-describedby="marketing-emails-description"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Use different settings for my mobile devices.
            </label>
            <p
              className="text-[12px] text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              You can manage your mobile notifications in the mobile settings
              page.
            </p>
          </div>
        </div>
        <Button type="submit">Update Preferences</Button>
      </form>
    </Form>
  );
}
