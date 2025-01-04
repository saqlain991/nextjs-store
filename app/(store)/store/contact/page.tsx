'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <Phone className="w-6 h-6 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </Card>
          <Card className="p-6 text-center">
            <Mail className="w-6 h-6 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-muted-foreground">support@example.com</p>
          </Card>
          <Card className="p-6 text-center">
            <MapPin className="w-6 h-6 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Address</h3>
            <p className="text-muted-foreground">123 Store St, City, Country</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Your email" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input placeholder="Message subject" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea placeholder="Your message" rows={6} />
            </div>
            <Button type="submit" className="w-full md:w-auto">Send Message</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}