import ContactForm from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear from you. Fill out the form or reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info & Form */}
          <div>
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">+91 22 1234 5678</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">info@brightspark.com</p>
                  <p className="text-sm text-muted-foreground">support@brightspark.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className="text-sm text-muted-foreground">123 Tech Park, Andheri East,</p>
                  <p className="text-sm text-muted-foreground">Mumbai, Maharashtra 400093</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon - Fri: 9am - 6pm</p>
                  <p className="text-sm text-muted-foreground">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-muted rounded-xl overflow-hidden shadow-sm border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "400px" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How much does a website cost?</AccordionTrigger>
              <AccordionContent>
                The cost of a website depends on its complexity, features, and number of pages. We offer custom quotes based on your specific needs, starting from budget-friendly options for small businesses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does it take to build a website?</AccordionTrigger>
              <AccordionContent>
                A standard brochure website typically takes 2-4 weeks. More complex projects like e-commerce sites or custom web applications may take 6-12 weeks depending on requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer ongoing maintenance?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer monthly maintenance packages that include security updates, backups, content updates, and technical support to keep your site running smoothly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can you help with SEO and marketing?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We are a full-service agency. We can help you not just build your website, but also drive traffic to it through SEO, Google Ads, and social media marketing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
