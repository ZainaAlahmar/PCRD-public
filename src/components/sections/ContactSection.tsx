import { Send, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/constants/site";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: siteConfig.address,
    },
  ];

  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D0D0D] mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-[#0D0D0D]/60 max-w-2xl mx-auto font-medium">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => (
            <div key={method.title} className="bg-white border border-[#0D0D0D]/15 rounded-sm p-10 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#0D0D0D]/5 rounded-xl flex items-center justify-center mx-auto mb-6">
                <method.icon size={26} className="text-[#0D0D0D]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">{method.title}</h3>
              {method.href ? (
                <a href={method.href} className="text-sm text-[#0D0D0D]/70 hover:text-[#0D0D0D] transition-colors font-medium">
                  {method.value}
                </a>
              ) : (
                <p className="text-sm text-[#0D0D0D]/70 font-medium">{method.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Conversation CTA */}
        <div className="bg-white border border-[#0D0D0D]/10 rounded-xl p-12 text-center shadow-sm max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-[#0D0D0D] text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={28} className="ml-1" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4 tracking-tight">
            Ready to Start a Conversation?
          </h2>
          <p className="text-lg text-[#0D0D0D]/60 max-w-2xl mx-auto mb-10">
            Reach out to us today and let's discuss how we can help you achieve your goals, explore partnerships, or collaborate on future initiatives.
          </p>
          
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 bg-[#0D0D0D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-black/80 transition-colors shadow-sm hover:shadow-md"
          >
            <Send size={18} />
            Send us an Email
          </a>
        </div>

      </div>
    </section>
  );
}
