/**
 * Centralized Configuration for Praveen's Portfolio
 * Updated with verified real contact details.
 */

export const CONTACT_CONFIG = {
  // WhatsApp Number in international format (digits only: 91 + 8610808937)
  whatsappNumber: '918610808937',
  displayPhone: '+91 86108 08937',

  // Email Address
  email: 'balapraveen246@gmail.com',

  // Location & Availability
  location: 'Tamil Nadu, India',
  statusText: 'Available for Freelance Projects',
  isAvailableForWork: true,

  // Social Profile URLs
  socials: {
    github: 'https://github.com/balapraveen246-dot',
    linkedin: 'https://www.linkedin.com/in/praveenrdsafs',
    twitter: null,
  },

  // Default pre-filled message for WhatsApp inquiries
  defaultWhatsAppMessage: 'Hi Praveen! I found your portfolio and would like to discuss a website project. My requirements are:',

  // Helper function to build a safe WhatsApp click-to-chat URL
  getWhatsAppUrl: (customMessage) => {
    const number = CONTACT_CONFIG.whatsappNumber;
    const message = customMessage || CONTACT_CONFIG.defaultWhatsAppMessage;
    const encoded = encodeURIComponent(message);
    
    if (!number || number === 'YOUR_WHATSAPP_NUMBER') {
      return `https://wa.me/?text=${encoded}`;
    }
    return `https://wa.me/${number}?text=${encoded}`;
  },

  // Helper function to build a mailto URL
  getMailtoUrl: (subject, body) => {
    const email = CONTACT_CONFIG.email;
    const sub = encodeURIComponent(subject || 'Website Development Inquiry');
    const b = encodeURIComponent(body || CONTACT_CONFIG.defaultWhatsAppMessage);
    return `mailto:${email}?subject=${sub}&body=${b}`;
  }
};
