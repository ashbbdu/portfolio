import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { TerminalWindow } from '../TerminalWindow';
import { GithubIcon, LinkedinIcon } from '../BrandIcons';
import { profile } from '../../data/profile';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      from_name: String(formData.get('name') ?? ''),
      reply_to: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Fallback: open mail client if EmailJS keys are not configured
      const subject = encodeURIComponent(`Portfolio contact from ${payload.from_name}`);
      const body = encodeURIComponent(`${payload.message}\n\n— ${payload.from_name} (${payload.reply_to})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      setMessage('Opened your mail app — EmailJS keys not configured yet.');
      form.reset();
      return;
    }

    try {
      setStatus('sending');
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, { publicKey: PUBLIC_KEY });
      setStatus('sent');
      setMessage('Message sent — I will get back to you soon.');
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please email me directly.');
      console.error(err);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <TerminalWindow id="contact" title="~/contact.sh">
        <p className="text-sm mb-6">
          <span className="text-term-green-l dark:text-term-green">$</span>{' '}
          <span className="text-term-muted-l dark:text-term-muted">./contact.sh --send</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3 text-sm">
            <p className="text-term-muted-l dark:text-term-muted mb-4">
              Open to backend, full-stack, and Java/Spring Boot opportunities. Reach out below or
              via any of these channels.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 hover:text-term-cyan-l dark:hover:text-term-cyan transition-colors"
            >
              <Mail size={16} className="text-term-green-l dark:text-term-green" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 hover:text-term-cyan-l dark:hover:text-term-cyan transition-colors"
            >
              <Phone size={16} className="text-term-green-l dark:text-term-green" />
              {profile.phone}
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-term-green-l dark:text-term-green" />
              {profile.location}
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded border border-term-border-l dark:border-term-border hover:border-term-green-l dark:hover:border-term-green transition-colors"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded border border-term-border-l dark:border-term-border hover:border-term-cyan-l dark:hover:border-term-cyan transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <label htmlFor="name" className="block text-xs mb-1 text-term-muted-l dark:text-term-muted">
                <span className="text-term-cyan-l dark:text-term-cyan">const</span> name =
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-md bg-term-bg-l dark:bg-term-bg border border-term-border-l dark:border-term-border focus:border-term-green-l dark:focus:border-term-green outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs mb-1 text-term-muted-l dark:text-term-muted">
                <span className="text-term-cyan-l dark:text-term-cyan">const</span> email =
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-md bg-term-bg-l dark:bg-term-bg border border-term-border-l dark:border-term-border focus:border-term-green-l dark:focus:border-term-green outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs mb-1 text-term-muted-l dark:text-term-muted">
                <span className="text-term-cyan-l dark:text-term-cyan">const</span> message =
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-3 py-2 rounded-md bg-term-bg-l dark:bg-term-bg border border-term-border-l dark:border-term-border focus:border-term-green-l dark:focus:border-term-green outline-none transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-term-green-l dark:bg-term-green text-term-bg-l dark:text-term-bg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              <Send size={14} />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'sent' && (
              <p className="flex items-center gap-2 text-xs text-term-green-l dark:text-term-green">
                <CheckCircle2 size={14} /> {message}
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-xs text-term-red-l dark:text-term-red">
                <AlertCircle size={14} /> {message}
              </p>
            )}
          </form>
        </div>
      </TerminalWindow>
    </div>
  );
}
