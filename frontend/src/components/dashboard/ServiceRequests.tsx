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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileText, Send, Loader } from 'lucide-react';
import { serviceRequestTypes } from '@/lib/data';
import type { ServiceRequest, ServiceRequestStatus } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '../ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const requestFormSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  type: z.string({ required_error: 'Please select a service type.' }),
});

type RequestFormValues = z.infer<typeof requestFormSchema>;

const statusVariant: {
  [key in ServiceRequestStatus]:
    | 'default'
    | 'secondary'
    | 'outline'
    | 'destructive';
} = {
  Submitted: 'secondary',
  'In Review': 'default',
  Approved: 'outline',
  Rejected: 'destructive',
};

export default function ServiceRequests() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<RequestFormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      name: '',
    },
  });

  async function onSubmit(data: RequestFormValues) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newRequest: ServiceRequest = {
      id: `req-${Date.now()}`,
      name: data.name,
      type: data.type,
      status: 'Submitted',
      date: new Date().toISOString(),
    };

    setRequests((prev) => [newRequest, ...prev]);
    toast({
      title: 'Request Submitted',
      description: 'Your service request has been received.',
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <FileText className="h-8 w-8 text-accent" />
        <div>
          <CardTitle>Service Requests</CardTitle>
          <CardDescription>
            Apply for municipal certificates and services.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold">New Request</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceRequestTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />{' '}
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Submit Request
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Your Requests</h3>
            {requests.length > 0 ? (
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((req) => (
                      <TableRow key={req.id}>
                        <TableCell className="font-medium">{req.type}</TableCell>
                        <TableCell>
                          {new Date(req.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge
                            variant={statusVariant[req.status]}
                            className={
                              req.status === 'Approved'
                                ? 'border-green-600 text-green-600'
                                : ''
                            }
                          >
                            {req.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed p-8">
                <p className="text-muted-foreground">
                  You have no submitted requests.
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
