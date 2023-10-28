"use client";

import * as z from "zod";
import Heading from "@/components/heading";
import { Form } from "@/components/ui/form";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

export default function ConversationPage() {
  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  return (
    <div>
      <Heading
        title="Conversation"
        description="Out most advanced conversation model"
        icon={ChatBubbleIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">{/* <Form /> */}</div>
    </div>
  );
}
