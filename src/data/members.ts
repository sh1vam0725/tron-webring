export interface Member {
  name: string;
  url: string;
  grad_year?: number;
  program?: string;
  year?: string;
}

// Load members from the JSON file so PRs that edit `src/data/members.json`
// are reflected automatically in the site.
import membersData from '../../members.json';

export const members: Member[] = membersData as Member[];
