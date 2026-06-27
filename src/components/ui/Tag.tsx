interface TagProps {
  children: string;
}

/** Small mono pill used for tech-stack labels on project/experience cards. */
export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block font-mono text-[11px] px-2 py-1 border border-signal/30 text-signal bg-signal/5 rounded-sm">
      {children}
    </span>
  );
}
