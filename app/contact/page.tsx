"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Email</h3>
          </div>
          <p className="text-muted-foreground">contact@techinsider.com</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Phone</h3>
          </div>
          <p className="text-muted-foreground">+92 (321) 1234567</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Address</h3>
          </div>
          <p className="text-muted-foreground">F-7 Markaz, Jinnah Super Market, Islamabad, Pakistan</p>
        </Card>
      </div>

      <Card className="mt-12 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <Input
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              required
            />
          </div>
          <Button type="submit" className="w-full md:w-auto">
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
}