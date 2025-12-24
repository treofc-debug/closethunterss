
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <text x="0" y="80" fontSize="120" fontFamily="serif" fontStyle="italic">L</text>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6 block">Join the Circle</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Be the first to know about <br />new drops and exclusive events.</h2>
          
          {isSubscribed ? (
            <div className="bg-emerald-600/20 border border-emerald-600 p-6 rounded-sm inline-block">
              <p className="text-lg font-medium">Thank you! Welcome to LUVIA.</p>
              <p className="text-slate-400 text-sm">A confirmation email is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 px-6 py-4 outline-none focus:border-white transition-colors text-white placeholder:text-slate-500 rounded-sm"
              />
              <button 
                type="submit"
                className="bg-white text-slate-900 px-10 py-4 font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all rounded-sm"
              >
                Join
              </button>
            </form>
          )}
          
          <p className="mt-8 text-slate-500 text-xs uppercase tracking-widest">
            By subscribing, you agree to our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
