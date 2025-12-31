
export enum ContestType {
  IKMC = 'IKMC',
  IKSC = 'IKSC',
  IKLC = 'IKLC'
}

export interface DetailedContestInfo {
  dates: {
    registration: string;
    contest: string;
    results: string;
  };
  mainLinks: {
    registration: string;
    results: string;
    poster: string;
  };
  history?: string;
  intro?: string;
  overview?: string[];
  generalInfo: string[];
  courseOverview?: string[];
  courseOutline?: Array<{
    level: string;
    duration: string;
    problems: string;
    tools: string;
    scope: string[];
  }>;
  forms: Array<{
    title: string;
    description: string;
    word: string;
    pdf: string;
  }>;
  answerSheets: Array<{
    label: string;
    url: string;
  }>;
  pastPapers: Record<string, {
    links: Array<{ label: string; url: string }>;
    answerKey: string;
  }>;
  resultsByYear: Record<string, Array<{
    label: string;
    url: string;
    icon?: string;
  }>>;
  prizeWinners?: {
    districtLevel?: Array<{ name: string; url: string }>;
    institutionLevel?: Array<{ name: string; url: string }>;
    nationalLevel?: Array<{ name: string; url: string }>;
  };
  educationistAwards?: Array<{ name: string; url: string }>;
  faqs?: Array<{
    q: string;
    a: string;
  }>;
}

export interface ContestData {
  id: ContestType;
  name: string;
  fullName: string;
  description: string;
  color: string;
  icon: string;
  logoUrl: string;
  bgGradient: string;
  detailedData?: DetailedContestInfo;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ResultEntry {
  id: string;
  name: string;
  rollNumber: string;
  contest: ContestType;
  year: number;
  category: string;
  award: string;
}
