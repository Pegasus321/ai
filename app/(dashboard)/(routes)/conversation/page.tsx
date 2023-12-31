"use client";

import * as z from "zod";
import Heading from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";

import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ConversationPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Out most advanced conversation model"
        icon={ChatBubbleIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg
              border
              w-full
              p-4
              px-3
              mx:px-6
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2"
            >
              <FormField
                name="prompt"
                render={(field) => (
                  <FormItem
                    className="col-span-12 
                  lg:col-span-10
                  "
                  >
                    <FormControl className="m-0 p-0"></FormControl>
                    <Input
                      className="border-0 outline-none
                       focus-visible:ring-0 
                       focus-visible:ring-transparent shadow-none"
                      disabled={isLoading}
                      placeholder="anything"
                      {...field}
                    />
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generat
              </Button>
            </form>
          </Form>
        </div>
        <div className=" space-y-4 mt-4">Messages Content</div>
      </div>
    </div>
  );
}
