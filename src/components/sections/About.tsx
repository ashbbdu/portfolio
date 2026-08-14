import { TerminalWindow } from '../TerminalWindow';
import { profile } from '../../data/profile';

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <TerminalWindow id="about" title="~/about.md">
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            <span className="text-term-green-l dark:text-term-green">$</span>{' '}
            <span className="text-term-muted-l dark:text-term-muted">cat about.md</span>
          </p>
          <p className="text-term-text-l dark:text-term-text">{profile.bio}</p>
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm">
            <div>
              <span className="text-term-cyan-l dark:text-term-cyan">location</span>
              <span className="text-term-muted-l dark:text-term-muted"> = </span>
              <span>&quot;{profile.location}&quot;</span>
            </div>
            <div>
              <span className="text-term-cyan-l dark:text-term-cyan">experience</span>
              <span className="text-term-muted-l dark:text-term-muted"> = </span>
              <span>&quot;{profile.yearsOfExperience} years&quot;</span>
            </div>
            <div>
              <span className="text-term-cyan-l dark:text-term-cyan">focus</span>
              <span className="text-term-muted-l dark:text-term-muted"> = </span>
              <span>&quot;backend / APIs / microservices&quot;</span>
            </div>
            <div>
              <span className="text-term-cyan-l dark:text-term-cyan">stack</span>
              <span className="text-term-muted-l dark:text-term-muted"> = </span>
              <span className="text-term-green-l dark:text-term-green">&quot;Node.js + Spring Boot&quot;</span>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}
