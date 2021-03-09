export default interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
}
