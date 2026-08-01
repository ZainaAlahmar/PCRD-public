import { Activity } from "@/types";

export const activities: Activity[] = [
  {
    id: "1",
    slug: "peace-coexistence-arab-region-webinar",
    title: "Peace and Coexistence in the Arab Region: Challenges of the Present Moment",
    category: "Webinar",
    date: "2026-07-09",
    description:
      "Dr. Walid Shomaly, Executive Director of the Center, along with PCRD researchers, participated in a seminar organized by the Dialogue Network in the Arab Region titled 'Peace and Coexistence in the Arab Region: Challenges of the Present Moment.'",
    image: "/images/activities/webinar-cover.jpg",
    images: ["/images/activities/webinar-cover.jpg"],
    content: `Dr. Walid Shomaly, Executive Director of the Palestinian Center for Research and Cultural Dialogue (PCRD), along with PCRD researchers, participated in a seminar organized by the Dialogue Network in the Arab Region titled:

"Peace and Coexistence in the Arab Region: Challenges of the Present Moment."

The event took place on Thursday, July 9, 2026, via Zoom.

The seminar brought together researchers and academics from across the Arab world to discuss the challenges facing peace and coexistence in the region during this critical moment, exploring pathways to dialogue and conflict resolution.

PCRD's participation reflects the center's ongoing commitment to engaging with regional and international platforms dedicated to promoting dialogue, peace, and mutual understanding among peoples and civilizations.`,
    contentHtml: `
      <p class="text-slate-700 leading-relaxed mb-4">Dr. Walid Shomaly, Executive Director of the Palestinian Center for Research and Cultural Dialogue (PCRD), along with PCRD researchers, participated in a seminar organized by the Dialogue Network in the Arab Region titled:</p>
      <p class="text-slate-700 leading-relaxed mb-4 font-bold">"Peace and Coexistence in the Arab Region: Challenges of the Present Moment."</p>
      <p class="text-slate-700 leading-relaxed mb-4">The event took place on Thursday, July 9, 2026, via Zoom.</p>
      <p class="text-slate-700 leading-relaxed mb-4">The seminar brought together researchers and academics from across the Arab world to discuss the challenges facing peace and coexistence in the region during this critical moment, exploring pathways to dialogue and conflict resolution.</p>
      <p class="text-slate-700 leading-relaxed">PCRD's participation reflects the center's ongoing commitment to engaging with regional and international platforms dedicated to promoting dialogue, peace, and mutual understanding among peoples and civilizations.</p>
    `,
  },
  {
    id: "2",
    slug: "cso-capacity-building-training",
    title: "Enhancing CSO Operational Space Through Strategic Dialogue, Toolkit Development and Capacity Building",
    category: "Training Program",
    date: "2026-07-30",
    description:
      "PCRD concluded a consultancy entitled 'Enhancing CSO Operational Space Through Strategic Dialogue, Toolkit Development and Capacity Building,' carried out in cooperation with the Union of Charitable Societies - Jerusalem.",
    image: "/images/activities/cso-training-1.jpg",
    images: [
      "/images/activities/cso-training-1.jpg",
      "/images/activities/cso-training-photo2.jpg",
    ],
    content: `On Thursday, July 30, 2026, the Palestinian Center for Research and Cultural Dialogue (PCRD) successfully concluded a consultancy entitled:

"Enhancing CSO Operational Space Through Strategic Dialogue, Toolkit Development and Capacity Building"

The consultancy was carried out in cooperation with the Union of Charitable Societies - Jerusalem.

Program Details

The capacity-building program includes six in-person training sessions with a total duration of 24 hours.

The program strengthens civil society organizations' capacities in:
- Monitoring
- Evaluation
- Learning (MEL)
- Advocacy
- Organizational resilience

Methodology

The program follows the European Union Results-Oriented Monitoring methodology.

It focuses on:
- Measuring outputs and outcomes
- Improving participants' knowledge and skills
- Enhancing collaboration among CSOs
- Monitoring implementation quality
- Ensuring sustainable impact

This initiative reflects PCRD's commitment to empowering civil society organizations in Palestine and strengthening their role in building a more just and democratic society.`,
    contentHtml: `
      <p class="text-slate-700 leading-relaxed mb-6">On Thursday, July 30, 2026, the Palestinian Center for Research and Cultural Dialogue (PCRD) successfully concluded a consultancy entitled:</p>
      
      <p class="text-slate-700 leading-relaxed font-semibold mb-6">"Enhancing CSO Operational Space Through Strategic Dialogue, Toolkit Development and Capacity Building"</p>
      
      <p class="text-slate-700 leading-relaxed mb-10">The consultancy was carried out in cooperation with the Union of Charitable Societies - Jerusalem.</p>
      
      <div class="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 mb-8 shadow-sm">
        <h3 class="text-lg font-bold text-[#0D0D0D] mb-4">Program Details</h3>
        <p class="text-slate-700 leading-relaxed mb-4">The capacity-building program includes six in-person training sessions with a total duration of 24 hours.</p>
        <p class="text-slate-700 leading-relaxed mb-2">The program strengthens civil society organizations' capacities in:</p>
        <ul class="list-disc pl-5 text-slate-700 space-y-1 mb-0">
          <li>Monitoring</li>
          <li>Evaluation</li>
          <li>Learning (MEL)</li>
          <li>Advocacy</li>
          <li>Organizational resilience</li>
        </ul>
      </div>

      <div class="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 mb-10 shadow-sm">
        <h3 class="text-lg font-bold text-[#0D0D0D] mb-4">Methodology</h3>
        <p class="text-slate-700 leading-relaxed mb-4">The program follows the European Union Results-Oriented Monitoring methodology.</p>
        <p class="text-slate-700 leading-relaxed mb-2">It focuses on:</p>
        <ul class="list-disc pl-5 text-slate-700 space-y-1 mb-0">
          <li>Measuring outputs and outcomes</li>
          <li>Improving participants' knowledge and skills</li>
          <li>Enhancing collaboration among CSOs</li>
          <li>Monitoring implementation quality</li>
          <li>Ensuring sustainable impact</li>
        </ul>
      </div>

      <p class="text-slate-700 leading-relaxed">This initiative reflects PCRD's commitment to empowering civil society organizations in Palestine and strengthening their role in building a more just and democratic society.</p>
    `,
  },
];

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug);
}

export function getLatestActivities(count: number = 3): Activity[] {
  return [...activities]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
