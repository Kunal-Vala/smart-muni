import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wrench, Droplet, Trash2, AlertCircle, MapPin, Clock } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'available' | 'maintenance';
  category: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Water Management',
    description: 'Report water issues, view updates, and manage water usage',
    icon: <Droplet className="h-6 w-6" />,
    status: 'available',
    category: 'Utilities',
  },
  {
    id: 2,
    title: 'Waste Management',
    description: 'Schedule garbage pickup and view collection times',
    icon: <Trash2 className="h-6 w-6" />,
    status: 'available',
    category: 'Environment',
  },
  {
    id: 3,
    title: 'Infrastructure',
    description: 'Report road damage, potholes, and infrastructure issues',
    icon: <Wrench className="h-6 w-6" />,
    status: 'available',
    category: 'Maintenance',
  },
  {
    id: 4,
    title: 'Emergency Services',
    description: 'Report emergencies and get quick response',
    icon: <AlertCircle className="h-6 w-6" />,
    status: 'available',
    category: 'Safety',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Municipal Services</h1>
        <p className="text-muted-foreground mt-2">Access all city services and submit requests</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-primary">{service.icon}</div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <Badge variant="outline" className="mt-2">
                      {service.category}
                    </Badge>
                  </div>
                </div>
                <Badge variant={service.status === 'available' ? 'default' : 'secondary'}>
                  {service.status === 'available' ? 'Active' : 'Maintenance'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>{service.description}</CardDescription>
              <Button className="w-full">Access Service</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Service Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Avg Response Time</span>
              </div>
              <p className="text-2xl font-bold">2-4 hours</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Areas Covered</span>
              </div>
              <p className="text-2xl font-bold">Entire City</p>
            </div>
            <div className="space-y-2">
              <div className="text-muted-foreground">
                <span>Requests This Month</span>
              </div>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
