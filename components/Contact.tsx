import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactInfo: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => (
    <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 text-[#FF6700]">{icon}</div>
        <div>
            <p className="text-gray-400 text-sm">{label}</p>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-[#FFA040] transition-colors">{value}</a>
            ) : (
              <p className="text-white text-lg">{value}</p>
            )}
        </div>
    </div>
);

const Contact: React.FC = () => {
    const { ref, controls } = useScrollAnimation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" className="py-20 sm:py-32">
            <div 
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000"
                style={{
                    opacity: controls.opacity,
                    transform: `translateY(${controls.y}px)`,
                }}
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Get in Touch</h2>
                    <div className="mt-4 h-1 w-24 bg-[#FF6700] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <ContactInfo icon={<PhoneIcon />} label="Phone" value="+1 (231) 392-1142" href="tel:+12313921142" />
                        <ContactInfo icon={<EmailIcon />} label="Email" value="thegameboynomi@yahoo.com" href="mailto:thegameboynomi@yahoo.com" />
                        <ContactInfo icon={<LocationIcon />} label="Location" value="Traverse City, MI, United States" />
                        <ContactInfo icon={<FacebookIcon />} label="Facebook" value="The Game Boy on Facebook" href="https://web.facebook.com/profile.php?id=61564444593030" />
                        <ContactInfo icon={<InstagramIcon />} label="Instagram" value="@the_game_boy_231" href="https://www.instagram.com/the_game_boy_231/" />
                        <ContactInfo icon={<PaymentIcon />} label="Payment" value="Venmo.com or Cash" />

                        <div className="pt-8">
                            <a
                                href="https://api.whatsapp.com/send?phone=12313921142"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#FF6700] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FFA040] transition-colors duration-300 shadow-lg transform hover:scale-105"
                            >
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" name="name" id="name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#FF6700] focus:outline-none" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#FF6700] focus:outline-none" placeholder="Your Email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea name="message" id="message" rows={5} required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#FF6700] focus:outline-none" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-[#FF6700] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FFA040] transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z" /></svg>;
const PaymentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;

export default Contact;