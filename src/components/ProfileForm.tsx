import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import * as z from "zod";

const formSchema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z.string().min(2).max(50).email(),
  phoneNumber: z.number().min(8).max(13),
});

export default function ProfileForm() {
  const form = useForm()

  function onSubmit() {
    return
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name:</FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormLabel>Last name:</FormLabel>
              <FormControl>
                <Input placeholder="last name" {...field} />
              </FormControl>
              <FormLabel>email:</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormLabel>phone number:</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}