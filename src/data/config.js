/**
 * Centralized Configuration for Praveen's Portfolio
 * 
 * INSTRUCTIONS FOR USER:
 * 1. Replace 'YOUR_WHATSAPP_NUMBER' with your real phone number in international format,
 *    digits only, no '+' sign or spaces (e.g., '919876543210' for India).
 * 2. Replace 'YOUR_EMAIL@example.com' with your actual contact email address.
 * 3. Update GitHub or social profile URLs as desired.
 */

export const CONTACT_CONFIG = {
  // Configurable WhatsApp Number (international format, digits only)
  // E.g. '919876543210'
  whatsappNumber: 'YOUR_WHATSAPP_NUMBER',

  // Configurable Email Address
  email: 'YOUR_EMAIL@example.com',

  // Configurable Location/Availability
  location: 'Tamil Nadu, India',
  statusText: 'Available for Freelance Projects',
  isAvailableForWork: true,

  // Social Profile URLs (Real public URLs only)
  socials: {
    github: 'https://github.com/balapraveen246-dot',
    // Add LinkedIn, Twitter, etc., here when ready
    linkedin: null,
    twitter: null,
  },

  // Default pre-filled message for WhatsApp inquiries
  defaultWhatsAppMessage: 'Hi Praveen! I found your portfolio and would like to discuss a website project. My requirements are:',

  // Helper function to build a safe WhatsApp click-to-chat URL
  getWhatsAppUrl: (customMessage) => {
    const number = CONTACT_CONFIG.whatsappNumber;
    const message = customMessage || CONTACT_CONFIG.defaultWhatsAppMessage;
    const encoded = encodeURIComponent(message);
    
    // If the placeholder hasn't been replaced yet, warn or provide fallback
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
