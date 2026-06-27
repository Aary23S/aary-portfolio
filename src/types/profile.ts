// Core identity + contact data shown in the Hero section, page <head> metadata,
// and the Contact page. This is the single place to update name/contact info.

export interface SocialLink {
  label: string;
  url: string;
  /** Used to render the correct icon in <SocialLinks /> */
  platform: "github" | "linkedin" | "leetcode" | "codeforces" | "codechef" | "instagram" | "email" | "phone";
}

export interface ResearchInterest {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  tagline: string;
  avatarUrl?: string;
  avatarAlt?: string;
  /** Short bio used on the Home hero. Keep to 2-3 sentences. */
  bioShort: string;
  /** Longer bio for an About section, if/when one is added. */
  bioLong: string;
  location: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  researchInterests: ResearchInterest[];
  /**
   * Web3Forms access key — get a free key at https://web3forms.com
   * Placeholder until the user provides their real key. Contact form will not
   * function until this is set.
   */
  contactFormAccessKey: string;
}
