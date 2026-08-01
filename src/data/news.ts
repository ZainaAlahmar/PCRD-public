import { News } from "@/types";

export const newsItems: News[] = [
  {
    id: "1",
    title: "PCRD Concludes Successful Training Program with Union of Charitable Societies",
    date: "2026-07-30",
    excerpt:
      "PCRD successfully concluded a capacity-building consultancy focused on enhancing CSO operational space, monitoring, evaluation, and advocacy skills.",
    content: `The Palestinian Center for Research and Cultural Dialogue (PCRD) successfully concluded its consultancy program titled "Enhancing CSO Operational Space Through Strategic Dialogue, Toolkit Development and Capacity Building."

The program, conducted in cooperation with the Union of Charitable Societies - Jerusalem, comprised six in-person training sessions totaling 24 hours.

The initiative followed the European Union Results-Oriented Monitoring methodology and aimed to strengthen civil society organizations' capacities in key areas including monitoring, evaluation, learning, advocacy, and organizational resilience.`,
  },
  {
    id: "2",
    title: "PCRD Participates in Regional Dialogue Webinar on Peace and Coexistence",
    date: "2026-07-09",
    excerpt:
      "Dr. Walid Shomaly and PCRD researchers joined an important regional webinar organized by the Dialogue Network in the Arab Region.",
    content: `The Palestinian Center for Research and Cultural Dialogue (PCRD) participated in a seminar organized by the Dialogue Network in the Arab Region titled "Peace and Coexistence in the Arab Region: Challenges of the Present Moment."

Dr. Walid Shomaly, Executive Director, led the center's delegation in this important online event held via Zoom on July 9, 2026.

The seminar brought together researchers and academics from across the Arab world to discuss challenges and opportunities for peace and coexistence.`,
  },
  {
    id: "3",
    title: "PCRD Celebrates 23 Years of Promoting Dialogue and Research",
    date: "2026-08-25",
    excerpt:
      "The Palestinian Center for Research and Cultural Dialogue marks another year of dedicated service to promoting intercultural understanding and peace.",
    content: `Founded on August 25, 2003, the Palestinian Center for Research and Cultural Dialogue (PCRD) commemorates 23 years of dedicated work in promoting dialogue between civilizations, supporting civil society, and advancing research on Palestinian society.

Over the past two decades, PCRD has conducted numerous research studies, hosted international delegations, organized training programs, and participated in regional and global forums promoting peace, democracy, and human rights.

The center remains committed to its founding mission of bridging cultures and contributing to a just and lasting peace in the region.`,
  },
];

export function getNewsBySlug(id: string): News | undefined {
  return newsItems.find((n) => n.id === id);
}

export function getLatestNews(count: number = 3): News[] {
  return [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
