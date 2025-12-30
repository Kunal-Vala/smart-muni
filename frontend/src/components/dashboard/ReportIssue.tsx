"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Flag,
  Send,
  Clock,
  CheckCircle,
  Loader,
} from 'lucide-react';
import { issueCategories } from '@/lib/data';
import type { Issue, IssueStatus } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';

const issueFormSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  category: z.string({ required_error: 'Please select a category.' }),
  location: z.string().min(5, 'Location must be at least 5 characters.'),
  image: z.any().optional(),
});

type IssueFormValues = z.infer<typeof issueFormSchema>;

const statusConfig: {
  [key in IssueStatus]: { icon: React.ReactNode; color: string };
} = {
  Pending: { icon: <Clock className="h-3 w-3" />, color: 'bg-yellow-500' },
  'In Progress': {
    icon: <Loader className="h-3 w-3 animate-spin" />,
    color: 'bg-blue-500',
  },
  Resolved: {
    icon: <CheckCircle className="h-3 w-3" />,
    color: 'bg-green-500',
  },
};

export default function ReportIssue() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<IssueFormValues>({
    resolver: zodResolver(issueFormSchema),
    defaultValues: {
      title: '',
      description: '',
      location: '',
    },
  });

  async function onSubmit(data: IssueFormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newIssue: Issue = {
      id: `issue-${Date.now()}`,
      ...data,
      status: 'Pending',
      submittedAt: new Date(),
    };

    setIssues((prev) => [newIssue, ...prev]);
    toast({
      title: 'Issue Reported!',
      description:
        'Your issue has been submitted successfully. Thank you for your contribution.',
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Flag className="h-8 w-8 text-accent" />
        <div>
          <CardTitle>Report an Issue</CardTitle>
          <CardDescription>Notice something wrong? Let us know.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Pothole on Main St" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {issueCategories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the issue in detail."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Near 123 Main St" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Image (Optional)</FormLabel>
                    <FormControl>
                      <Input type="file" accept="image/*" className="pt-2 text-sm file:mr-4 file:rounded-full file:border-0 file:bg-primary file:py-2 file:px-4 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary/90" onChange={(e) => field.onChange(e.target.files)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Submit Report
                </>
              )}
            </Button>
          </form>
        </Form>
        {issues.length > 0 && (
          <>
            <Separator className="my-6" />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Your Submitted Issues</h3>
              {issues.map((issue) => (
                <div
                  key={issue.id}
                  className="flex items-start justify-between rounded-lg border bg-background/50 p-4"
                >
                  <div>
                    <p className="font-semibold">{issue.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {issue.category} at {issue.location}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Submitted on {issue.submittedAt.toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        statusConfig[issue.status].color
                      }`}
                    />
                    {issue.status}
                  </Badge>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
