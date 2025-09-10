import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, Send, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSearchParams } from "react-router-dom";
import { trackContact } from "../lib/analytics";

export default function ZoomBooking() {
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-normal text-foreground mb-4 font-rocaone tracking-tight">
            Contact Ange
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Zoom classes and reflexology bookings are handled directly by Ange. Choose your preferred contact method below to get started with your booking or to ask any questions.
          </p>
        </div>
        {/* Contact Options */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Facebook Messenger */}
            <Card className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-white/20 rounded-full w-fit">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold">Facebook Messenger</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 mb-6 leading-relaxed">
                  Send a quick message to book your Zoom class, reflexology session, or ask any questions.
                </p>
                <Button 
                  asChild
                  className="bg-white text-blue-600 hover:bg-blue-50 w-full"
                >
                  <a 
                    href="https://m.me/yoga71withange" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Message on Facebook
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105 transform">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-white/20 rounded-full w-fit">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 mb-6 leading-relaxed">
                  Chat directly with Ange to arrange your Zoom yoga session or reflexology appointment.
                </p>
                <Button 
                  asChild
                  className="bg-white text-green-600 hover:bg-green-50 w-full"
                >
                  <a 
                    href="https://wa.me/447814487281" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Phone Call */}
            <Card className="bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 transform">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-white/20 rounded-full w-fit">
                  <Phone className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold">Phone Call</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 mb-4 leading-relaxed">
                  Speak directly with Ange to discuss your Zoom class or reflexology booking.
                </p>
                <p className="text-white/80 text-sm mb-6">
                  07814 487281
                </p>
                <Button 
                  asChild
                  className="bg-white text-purple-600 hover:bg-purple-50 w-full"
                >
                  <a href="tel:+447814487281">
                    Call Ange
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-8 text-center font-rocaone tracking-tight">
            Or Send a Message
          </h2>
          
          {/* Success Message */}
          {isSuccess && (
            <div className="max-w-2xl mx-auto mb-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 mr-2" />
                    <h3 className="text-xl font-semibold text-green-800">Message Sent Successfully!</h3>
                  </div>
                  <p className="text-green-700">
                    Thank you for your message. Ange will get back to you within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-foreground">
                  Contact Form
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Fill out the form below and Ange will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form 
                  action="https://formspree.io/f/xdklbyze" 
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="hidden" name="_next" value="?success=true" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name *
                      </Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Your full name" 
                        className="border-purple-200 focus:border-purple-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address *
                      </Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="border-purple-200 focus:border-purple-400"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      placeholder="Your phone number" 
                      className="border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell Ange about your yoga experience, any injuries or limitations, and your preferred class times..."
                      className="min-h-[120px] border-purple-200 focus:border-purple-400"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-medium"
                    onClick={() => trackContact('Contact Form Submit', 'Contact Page')}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
}
