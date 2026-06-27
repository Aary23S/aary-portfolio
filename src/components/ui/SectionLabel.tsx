interface SectionLabelProps {
  children: string;
  className?: string;
}

/**
 * Renders a small uppercase mono label used as a "field name" throughout
 * the site — e.g. STACK, STATUS, LOCATION — reinforcing the spec-sheet /
 * dossier visual language described in PROJECT_CONTEXT.md §4.
 */
export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-widest text-brass ${className}`}
    >
      {children}
    </span>
  );
}
