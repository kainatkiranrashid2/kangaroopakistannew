
import { ContestType, ContestData, TeamMember, ResultEntry } from './types';

export const COLORS = {
  primary: '#4F46E5',
  ikmc: '#3B82F6', // Blue
  iksc: '#F1863D', // Orange
  iklc: '#11D869', // Green
  accent: '#F43F5E', // Rose
};

export const CONTESTS: Record<ContestType, ContestData> = {
  [ContestType.IKMC]: {
    id: ContestType.IKMC,
    name: 'IKMC',
    fullName: 'International Kangaroo Mathematics Contest',
    description: 'The world\'s most prestigious mathematics competition fostering critical thinking and logical reasoning.',
    color: 'blue-500',
    icon: '📐',
    logoUrl: 'https://kangaroopakistan-prod.s3.amazonaws.com/IKMC_1706604401253.png',
    bgGradient: 'from-blue-500 to-indigo-600',
    detailedData: {
      dates: {
        registration: '5th Dec 2025 to 6th Feb 2026',
        contest: '26th March 2026',
        results: '26th May 2025',
      },
      mainLinks: {
        registration: 'https://enrollments.kangaroopakistan.org/',
        results: 'https://enrollments.kangaroopakistan.org/',
        poster: 'https://drive.google.com/file/d/1jbcz6jYPID1K-a_uZSDqjNCk_rYPtTru/view?usp=sharing',
      },
      intro: 'The primary aim of the contest is to foster mathematical thinking and cultivate an interest in mathematics, providing students with a platform to expand their minds and compare their abilities with peers worldwide. In 2023, the contest attracted participation of over 6 million students across 120 countries.',
      history: 'In the early 80\'s, Peter O\'Holloran invented a new kind of game in Australian schools. In 1991, French teachers André Deledicq and Jean Pierre Boudine started the competition in France under the name "Kangaroo" to pay tribute to their Australian friends. In 1995, the International Association "Kangourou Sans Frontières" was created.',
      detailedHistory: `In the early 80's, Peter O'Holloran, a mathematics teacher at Sydney, invented a new kind of game in Australian schools, a multiple choice questionnaire, corrected by computer, which meant that thousands of students could participate at the same time. It was a tremendous success for the Australian Mathematical National Contest.

In 1991, two French teachers (André Deledicq and Jean Pierre Boudine) decided to start the same competition in France under the name "Kangaroo" to pay tribute to their Australian friends. In the first edition 120000 juniors took part. Ever since the competition has been opened to junior as well as to senior students, followed by the large number of European countries forming altogether "Kangourou Sans Frontières".

In June 1993, the Board of the French Kangourou convened a meeting of organizers of mathematical competitions in European countries. The meeting took place in Paris. The European delegates were impressed by the steadily increasing number of participants in the French Kangourou competition, 120000 in 1991, 300000 in 1992 and 500000 in 1993 and so on….

In June 1994, in Strasbourg, at the European Council, The General Assembly of the delegates of 10 European countries decided to create the International Association "Kangourou Sans Frontières" with an elected Board of 6 members and with legal statuses registered in Paris, on January 17th 1995.

In 1994, Kangaroo Contest has been given the D'Alembert Prize by the French Mathematical Society for the best work of mathematics generalization and diffusion. Besides, the Kangaroo has been distinguished for its important contribution to mathematics pedagogy, during the International Symposium for Mathematics teaching, held in Copenhagen in July 2004.`,
      inPakistan: `The foundation of the International Kangaroo Mathematics Contest occurred in France in 1991, rapidly gaining popularity among students globally. Subsequently, the International Association "Kangourou Sans Frontières" was established, now overseeing the coordination of the worldwide event known as the "International Kangaroo Mathematics Contest" (IKMC). 

The primary aim of the contest is to foster mathematical thinking and cultivate an interest in mathematics, providing students with a platform to expand their minds and compare their abilities with peers worldwide. In 2023, the contest attracted participation of over 6 million students across 120 countries. In Pakistan, Innovative Learning is responsible for organizing the competition.

The contest serves as a bridge connecting Pakistani students with the global mathematical community, allowing them to showcase their talents on an international stage. Through IKMC, Pakistani students gain exposure to problem-solving techniques and mathematical reasoning that extends beyond traditional curriculum boundaries.`,
      problemSelection: `Representatives of more than 84 countries meet in autumn (October – November) each year for a 4-5 days workshop to select the problems for the International Kangaroo Mathematics Contest (IKMC). Several months before this annual meeting each country proposes a good number of original problems for each level of the contest. The representatives of each country have an access to the collections of all proposed problems. Before going to the annual meeting in autumn, all the members study these problems carefully, they make comments and suggest corrections wherever needed. In the workshop best and the most original problems are chosen. During the workshop the experts make sure that each problem is an original problem and did not appear in any book or any contest before. Participating countries all over the world use these selected problems for the IKMC on the third Thursday of March every year.`,
      overview: [
        "The contest is composed of just one test, no selection, no preliminary, no final test.",
        "The contest takes place in the month of March every year on the same day in all the participating countries",
        "The contest consists of Multiple Choice Questionnaire of twenty four to thirty problems, depending upon the level (grade) of the student. For each problem a choice of five answers is provided.",
        "Contest contents are covered in the mathematics curriculum.",
        "Solution of the problems requires creativity, logical thinking or a different perspective. Here in lies the challenge.",
        "Language of the contest in Pakistan is English.",
        "The use of calculator, mobile phone or any other electronic device is not permitted.",
        "Contest problems for each level are divided into three parts. Each problem in first, second and third part is worth 3 points, 4 points and 5 points respectively.",
        "There is a penalty of one point for each incorrect answer. If the question is left unanswered, it is worth 0 points. To avoid negative scores, each student begins with a credit of 24 to 30 points. Hence, the minimum score attainable is 0 points.",
        "Each year, several International Summer Camps are organized for national winners of the contest. The locations, dates, duration, age of participants, and availability varies from year to year.",
        "Innovative Learning (Kangourou Sans Frontières – Pakistan) determines and coordinates the participation of the Pakistani students in the International Summer Camp."
      ],
      generalInfo: [
        "All students from class 1 - 12 are invited to participate in IKMC.",
        "The IKMC will be held in all participating institutions all over the country at the same time.",
        "Each participating school must register a minimum of 10 students to be eligible. Unfortunately, entries below this number cannnot be processed.",
        "Schools should not refuse any student to participate in the contest who is willing to pay the fee.",
        "Registration includes a fee of Rs.1100 per student which covers the costs of organizing the contest. There is no registration fee for institution.",
        "All schools and colleges in Pakistan are welcome to host IKMC by registering their students in the contest.",
        "Contest will be held in your own institution under the supervision of the Principal.",
        "The competition questions are selected by the International Committee that is composed by KSF members and include representatives from all participating countries. The representatives meet at an annual conference every year in fall in a different country.",
        "Students participate at their grade level or at a higher level (if they attend accelerated math programs at their schools).",
        "The competition has a form of a multiple choice test. You may see past Kangaroo questions in the download section of this site.",
        "At each level of participation the first prize is awarded at the country level to the students who earn the largest sum of points at their level. Likewise the first prize at district and school levels are also awarded. In addition several other prizes are awarded at each level of participation.",
        "All participating students receive a certificate.",
        "Students compete in six grade categories."
      ],
      courseOutline: [
        {
          level: "Class 1-2",
          duration: "2 hours",
          problems: "24 problems: eight – 3 points each, eight- 4 points each and eight- 5 points each",
          tools: "Calculators are not allowed. You may use basic geometric tools.",
          scope: [
            "simple arithmetic operations with 1 digit and 2 digit numbers",
            "distinguishing simple figures",
            "time, clock.",
            "number of days in a week, number of months in a year."
          ]
        },
        {
          level: "Class 3-4",
          duration: "2 hours",
          problems: "24 problems: eight – 3 points each, eight- 4 points each and eight- 5 points each",
          tools: "Calculators are not allowed. You may use basic geometric tools.",
          scope: [
            "simple arithmetic operations with 1, 2, 3 and 4 digit numbers.",
            "recognizing geometric figures.",
            "a magic square with a sum of 15.",
            "time, clock.",
            "number of days in a week, number of months in a year.",
            "addition, subtraction, multiplication, division.",
            "intersection of sets.",
            "perimeter and area of a square, a rectangle."
          ]
        },
        {
          level: "Class 5-6",
          duration: "3 hours",
          problems: "30 problems: ten – 3 points each, ten- 4 points each and ten- 5 points each",
          tools: "Calculators are not allowed. You may use basic geometric tools.",
          scope: [
            "addition, subtraction, multiplication, division.",
            "magic squares.",
            "clock, a calendar.",
            "perimeter of a polygon.",
            "area of a rectangle and a triangle.",
            "lines and rays on a surface.",
            "a cube, a rectangular solid.",
            "acute, right, and obtuse angles.",
            "mathematical logic."
          ]
        },
        {
          level: "Class 7-8",
          duration: "3 hours",
          problems: "30 problems: ten – 3 points each, ten- 4 points each and ten- 5 points each",
          tools: "Calculators are not allowed. You may use basic geometric tools.",
          scope: [
            "operations on rational numbers.",
            "powers of natural numbers.",
            "equations, inequalities and systems of linear equations.",
            "area of a rectangle, a triangle and a circle.",
            "lines and rays on a surface.",
            "volume and surface area of geometric figures.",
            "angles: acute, right, and obtuse.",
            "supplementary angles, sum of angles in a triangle and in a quadrilateral.",
            "mathematical logic."
          ]
        },
        {
          level: "Class 9-10",
          duration: "3 hours",
          problems: "30 problems: ten – 3 points each, ten- 4 points each and ten- 5 points each",
          tools: "Calculators are not allowed. You may use basic geometric tools.",
          scope: [
            "operations on real numbers.",
            "functions, polynomials, equations, inequalities.",
            "sequences of numbers.",
            "elements of combinatorics.",
            "synthetic plane geometry.",
            "analytic plane geometry."
          ]
        },
        {
          level: "Class 11-12",
          duration: "3 hours",
          problems: "30 problems: ten – 3 points each, ten- 4 points each and ten- 5 points each",
          tools: "Calculators are not allowed. You may use basic geometric tools.",
          scope: [
            "operations on real numbers.",
            "functions, polynomials, equations, inequalities.",
            "sequences of numbers.",
            "elements of combinatorics.",
            "synthetic plane geometry.",
            "analytic plane geometry.",
            "synthetic space geometry.",
            "analytic space geometry."
          ]
        }
      ],
      forms: [
        {
          title: 'Registration Form',
          description: 'Official form for institutional registration.',
          word: 'https://docs.google.com/document/d/1ahOm8nyMkWac8DS924ZB5EGSIxcVnCvH/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1uPBYr6tKk-ndd0AQ-M4ZiHtqNTDpdAbT/view?usp=sharing'
        },
        {
          title: 'Correction & Replacement Form',
          description: 'For data correction after registration.',
          word: 'https://docs.google.com/document/d/188dhx02GSCG4-tNCvcCWrYB88tnPaNkG/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1JOz499o1rzDamSPk3Y4r6p3zv5-kQ9y6/view?usp=sharing'
        },
        {
          title: 'Additional Student Form',
          description: 'For adding students after initial registration.',
          word: 'https://docs.google.com/document/d/1StpKmyNJ3dxsC8EYh8b26izr2r4fDM-0/edit?usp=drive_link&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1BLIpBIVRop-K168SqaMtV8veYULGsSw6/view?usp=sharing'
        },
        {
          title: 'Student Migration Form',
          description: 'For student transfers between institutions.',
          word: 'https://docs.google.com/document/d/1mEbtqRWPqYQTPv-AVo-TiptdECHYQl_X/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1QxUdlE70FsPRHQCQEEKT-CyLB4lZZeDj/view?usp=sharing'
        }
      ],
      answerSheets: [
        { label: 'Blank Answer Sheet', url: 'https://drive.google.com/file/d/1dKO-_S3v7EM1NT6C0NjMchC2KYBWHH8c/view?usp=sharing' },
        { label: 'Sample Answer Sheet', url: 'https://drive.google.com/file/d/1PNGZOT_9e8Hc9Jn_SJ1kV1B3gan9Vn2z/view?usp=sharing' }
      ],
      pastPapers: {
        '2025': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1Psfe0YACxEvjHOF7qA_7mrFzCP-BF8pO/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1w1-U80YqKQANZq4i63OSVH7FCsBvvxgT/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1o5oxrPfNm2eBEept4FZBuuP2UnaLOTZN/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/12TgVyB8iiNqRdK79YzvnSJCy3ngpes2E/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1Hs2kliNFcXEodm_AWp-mu_BWbrk1VFL5/view?usp=sharing' },
            { label: 'Class 11,12&13', url: 'https://drive.google.com/file/d/1qBN3j9BFY47tqgvTimAEsxzlJZeO8ecW/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1Uv5DLKGJzUWlUamUzHTlyyCCPgQRiv0I/view?usp=sharing'
        },
        '2024': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1y7TxqvhjIm-muBeDsyzJLdKmFESvLkeY/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1gdG4sTGUwh2VfJjt7xHzFceRFgnkCoRu/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1n8EQiU8-yP9xhfHAPMqqqN0mzQh5-ih7/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1htYlsdjo5kLz0qhearHPwyWwCKAZNv5m/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1cePyFfsySi3XdgDgSb27LeWCMqlTR6HX/view?usp=sharing' },
            { label: 'Class 11,12&13', url: 'https://drive.google.com/file/d/1YFl8wdozvl3OnBUHRu-vriUgsRx2lOBv/view?usp=sharing' }
          ],
          answerKey: 'https://docs.google.com/spreadsheets/d/1VJxhyWnYILrrLI2SYisfRq9ibHmnGTWe/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true'
        },
        '2023': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1g3tOoYAzlYkjgkS0r_8hwDb83jQmMsta/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1Nz8SRcOx8K4nyUDsYIbCg0w-zoKPjn5o/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1DUDLgLCDJ1vkp4HUdUkW1fcdioRZU9SB/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1IoyLM84erqhm874riKs0HP9UEgFMCReA/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1eHqN_kDrK8G1X03OgHPCYyLCMN3ASlYv/view?usp=sharing' },
            { label: 'Class 11,12&13', url: 'https://drive.google.com/file/d/1bO5tn5F5Ouq2luhNUAG-1r9WRH_30HB-/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1dTmgUKboslubMDRmcJMMi5pu5d_A3xkM/view?usp=sharing'
        },
        '2022': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1IU-agW544L-d7cvLtJrJ_xU36eMtxAP1/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1-64v_4mH5wtl_Mxf4X5jFR5oiAiYKO7P/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1fHOEObbO6Vb7n0LAYDbwpOYLse38Nm1X/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1cRD-kofIyo7NgDRHwIJqKKNm_EtXvQiR/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1ejhoC19vbOqVj6OY-RdFIx7nW7TwvJAQ/view?usp=sharing' },
            { label: 'Class 11,12&13', url: 'https://drive.google.com/file/d/1mDiISkedXf1BaI_EMdIDW6Y3nNZKG459/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1DsY9lYfkq41Y7HCTyqnheBS7QPpuR6JC/view?usp=sharing'
        },
        '2021': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1fZDUyGjIJr_0hF_uTdwoXvh9WTXQu_FQ/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1Tt_vai9OlxubbI6KDBe1YJADVCfzGZml/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1x-qlxXRgtzd_CfWRUeQMnG4MpoEoGnOw/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/19EYAV2nHX6X7Ll1_YJfVKFZcEeQDabGE/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1Fxhi5fSZZz3ODDwzfnyy6W5XW9C0kZIq/view?usp=sharing' },
            { label: 'Class 11-12', url: 'https://drive.google.com/file/d/1GeCci6himkN-8CnUtSn9bxT8h5GLb0G8/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1lZGQYPbgNIApDgcTo6_l8hqaEL9OIHB_/view?usp=sharing'
        }
      },
      resultsByYear: {
        '2025': [
          { label: 'Gold Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikmcresults_2025/GoldWinners.pdf', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikmcresults_2025/SilverWinners.pdf', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikmcresults_2025/BronzeWinners.pdf', icon: '🥉' },
          { label: 'Participation Prizes', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikmcresults_2025/ParticipationWinners.pdf', icon: '🎁' },
          { label: '3 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikmcresults_2025/ThreeStarWinners.pdf', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikmcresults_2025/TwoStarWinners.pdf', icon: '⭐' },
          { label: '1 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikmcresults_2025/OneStarWinners.pdf', icon: '⭐' }
        ],
        '2024': [
          { label: 'Gold Medalists', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Gold_Medal.pdf', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Silver_Medal.pdf', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Bronze_Medal.pdf', icon: '🥉' },
          { label: '3 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/3_Star_Badage.pdf', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/2_Star_Badage.pdf', icon: '⭐' },
          { label: '1 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/1_Star_Badage.pdf', icon: '⭐' },
          { label: 'Award of Honor', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Cert.+of+Honour.pdf', icon: '🏆' },
          { label: 'Certificate of Recognition', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Cert.+of+Recognition.pdf', icon: '📜' },
          { label: 'Abu Nasr Mansur Award', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Abu+Nasr+Mansur+Award.pdf', icon: '🏆' },
          { label: 'Abu Kamil Award', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Abu+Kamil+Award.pdf', icon: '🏆' },
          { label: 'Abu Bakr Al-Karaji Award', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Abu+Bakr+Al-Karaji+Award.pdf', icon: '🏆' },
          { label: 'Ibn Rushd Honorable Mention Award', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Ibn+Rushd+Honorable+Mention+Award.pdf', icon: '🏆' },
          { label: 'Special Recognition Award', url: 'https://kangaroopakistan-prod.s3.amazonaws.com/Results/Coordinators+and+Principals.pdf', icon: '🏆' }
        ],
        '2023': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1zzwqn5d4G1gN0MUcprLlRHvFD34U_8dX/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/1XBJLQO5cXYmqtyTlCJgOJdFQIoPZnqfh/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/12toUiAS6-5nDNyrNAEv3oRYKe9R-8cSP/view?usp=sharing', icon: '🥉' }
        ],
        '2022': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1E-tHzBEmhYXm15G-cC7KNvLNKM_T9Y5D/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/1k1joMNXWGdYzpDJt_pCWDofMrZRMBOdI/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/1Szl5MUleCYPbtmXTrouBudktX219-Z2k/view?usp=sharing', icon: '🥉' }
        ],
        '2021': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1r7yeja7fS4102QElHAtmWyRjb8m_zS_3/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/160wwKINZy0jozzFZlnw34GLx2OsZVeJ2/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/1UlkI5CgS1owLxjL0rY6YdWWJO6o3Iqpd/view?usp=sharing', icon: '🥉' }
        ]
      },
      prizeWinners: {
        districtLevel: [
          { name: 'Power Bank 2021', url: 'https://drive.google.com/file/d/13G9a0CzwjST7XXfohhMbFsJAA9kUiYQx/view?usp=sharing' },
          { name: 'E-Writing Board 2021', url: 'https://drive.google.com/file/d/19moiyf_BQJNgAEtcAmSXlF8ehu9BXgiT/view?usp=sharing' },
          { name: 'Digital Kangaroo Logo Bottle 2022', url: 'https://drive.google.com/file/d/1kV4j4YeLJsGlWKoG71ZrsXMlJSKhqsZa/view?usp=sharing' },
          { name: 'Digital Kangaroo Logo Bottle 2023', url: 'https://drive.google.com/file/d/1r3f7ttgetdeYklf-qnimYj0OLXjfsXIJ/view?usp=sharing' }
        ],
        institutionLevel: [
          { name: '3 in 1 USB Cable 2021', url: 'https://drive.google.com/file/d/1uYqTWA6Pz92bdFEsMkOoaZl11IcG3LoM/view?usp=sharing' },
          { name: '3 in 1 USB Cable 2022', url: 'https://drive.google.com/file/d/1-r_R_E_Tdafsyy3hNrLSwtSPN6n0WRMm/view?usp=sharing' },
          { name: '3 in 1 USB Cable 2023', url: 'https://drive.google.com/file/d/1o8-v7HRZXWnEvLnhZV2N0KWpeZxnELUZ/view?usp=sharing' },
          { name: 'Digital Watch 2021', url: 'https://drive.google.com/file/d/1tEz878tokDNdgOlpE3O5D0-Jx5_jcsVk/view?usp=sharing' }
        ],
        nationalLevel: [
          { name: 'Fitness Smart Watch Winners 2021', url: 'https://drive.google.com/file/d/1e8ghOy7x3R2umVrDbVnRfhmjYgdSXUwv/view?usp=sharing' },
          { name: 'Fitness Smart Watch Winners 2022', url: 'https://drive.google.com/file/d/1H_GJ6KOIFIPx2uA_F5w7a1eQpqkHCR1g/view?usp=sharing' },
          { name: 'Fitness Smart Watch Winners 2023', url: 'https://drive.google.com/file/d/1_SqIkg6Z6ovdHGsYsDpi-YfzY0YL17lQ/view?usp=sharing' },
          { name: 'Wireless PowerBank Winners 2021', url: 'https://drive.google.com/file/d/18O2B0kd37rI8KeYgp-ftjRJx9LyFCM5f/view?usp=sharing' }
        ]
      },
      educationistAwards: [
        { name: 'Award of Honor 2021', url: 'https://drive.google.com/file/d/1f2E19LgUIagL6oJgnUZU7SDrRohnhwvy/view?usp=sharing' },
        { name: 'Award of Honor 2022', url: 'https://drive.google.com/file/d/124PuT5OvCbY8buBVEEfpKX-8XwND9-_D/view?usp=sharing' },
        { name: 'Award of Honor 2023', url: 'https://drive.google.com/file/d/1yNSUssZHmw1KEqk8MhZaVTlwknh4KWe6/view?usp=sharing' },
        { name: 'Certificate of Appreciation 2022', url: 'https://drive.google.com/file/d/1h2etCgeKILgsGkizsRKreFXAmKknRPjC/view?usp=sharing' },
        { name: 'Certificate of Appreciation 2023', url: 'https://drive.google.com/file/d/1x10IY6fMpe8TDKa_KPBL0xVWNuBGvjnN/view?usp=sharing' },
        { name: 'Outstanding Leadership Award 2021', url: 'https://drive.google.com/file/d/1kTm1IFlfXOFa-Vjmv0VIC_IB6Q--bteh/view?usp=sharing' },
        { name: 'Outstanding Leadership Award 2022', url: 'https://drive.google.com/file/d/1RR1Ehqu-TU1Wj0aQo43yT5hV5y-y7Xpw/view?usp=sharing' },
        { name: 'Outstanding Leadership Award 2023', url: 'https://drive.google.com/file/d/1Vl94FCHhpY1JbZs8KmUVPxe_xw1NKLuF/view?usp=sharing' },
        { name: 'Paul Edros Gold Award 2021', url: 'https://drive.google.com/file/d/1yfVDChNwqfZ__EWrlfiGhXcrRoKsSHzH/view?usp=sharing' },
        { name: 'Paul Edros Gold Award 2022', url: 'https://drive.google.com/file/d/1C3aAQUGOtYXGxJklCvSe8mzJiTip6TGn/view?usp=sharing' },
        { name: 'Paul Edros Gold Award 2023', url: 'https://drive.google.com/file/d/1uoyCrfbl08vem4NaVeLco9oIC_EYJr73/view?usp=sharing' },
        { name: 'Paul Edros Silver Award 2021', url: 'https://drive.google.com/file/d/1QDac-cETc4BjK1u3h5VIt9JaNYZZJIUo/view?usp=sharing' },
        { name: 'Paul Edros Silver Award 2022', url: 'https://drive.google.com/file/d/1Uw0mQLe51nptKCm8tM6cha6gbRUGbgau/view?usp=sharing' },
        { name: 'Paul Edros Silver Award 2023', url: 'https://drive.google.com/file/d/1wsI9SihArtc-8-krPTLnC5LIEbYJc721/view?usp=sharing' },
        { name: 'Special Recognition Award 2021', url: 'https://drive.google.com/file/d/14h4brI4ADT-3EuSSFOjYtRiDVyCzxsNp/view?usp=sharing' },
        { name: 'Special Recognition Award 2022', url: 'https://drive.google.com/file/d/1zuuxWAQ9CuenPAQ7VHBQUCYchA394Z-O/view?usp=sharing' },
        { name: 'Special Recognition Award 2023', url: 'https://drive.google.com/file/d/1-wxeEwRM4h2zJ3eX7fPCLyyzYGQO_a_J/view?usp=sharing' }
      ]
    }
  },
  [ContestType.IKSC]: {
    id: ContestType.IKSC,
    name: 'IKSC',
    fullName: 'International Kangaroo Science Contest',
    description: 'Igniting curiosity and scientific inquiry through engaging challenges for young innovators.',
    color: 'orange-500',
    icon: '🔬',
    logoUrl: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/IKSC%20Logo3_1715338214377.png',
    bgGradient: 'from-[#f1863d] to-orange-600',
    detailedData: {
      dates: {
        registration: '14th April 2025 to 15th Sep 2025',
        contest: '16th Oct 2025',
        results: '16th Dec 2025'
      },
      mainLinks: {
        registration: 'https://enrollments.kangaroopakistan.org/',
        results: 'https://enrollments.kangaroopakistan.org/',
        poster: '#'
      },
      detailedHistory: `The International Kangaroo Science Contest (IKSC) emerged as part of the broader Kangaroo educational movement that began with mathematics in France in 1991. Following the success of the International Kangaroo Mathematics Contest, educators recognized the need to extend this innovative approach to other subjects, particularly science.

The science contest was developed to address the growing importance of scientific literacy in the modern world and to provide students with an engaging way to explore scientific concepts. Like its mathematics counterpart, IKSC was designed to be accessible to students of all levels while challenging them to think beyond traditional textbook approaches.

The contest format was carefully developed to ensure that it would be both educational and engaging, using multiple-choice questions that test understanding rather than mere recall. The problems are designed to encourage students to apply scientific principles to real-world situations and to think critically about scientific phenomena.

The development of IKSC reflects the global recognition that science education needs to be more engaging and thought-provoking. By providing students with challenging yet accessible problems, the contest helps to develop the kind of scientific thinking that is essential for success in the 21st century.`,
      inPakistan: `The International Kangaroo Science Contest (IKSC) is organized by Inventive Learning in Pakistan as part of the global Kangaroo educational initiative. This contest is designed to promote scientific thinking and foster a deeper understanding of science concepts among Pakistani students from grades 1 through 12.

IKSC serves as a platform for students to explore scientific concepts beyond the traditional classroom curriculum, encouraging them to think critically and apply scientific reasoning to solve problems. The contest aims to identify and nurture scientific talent among Pakistani youth, providing them with opportunities to compete on an international level.

Through IKSC, Pakistani students gain exposure to international standards of science education and have the opportunity to compare their abilities with peers from around the world. The contest serves as a stepping stone for students interested in pursuing careers in science, technology, engineering, and related fields.`,
      overview: [
        "The contest is composed of just one test, no selection, no preliminary, no final test.",
        "The contest consists of Multiple Choice Questionnaire of twenty four to thirty questions, depending upon the level (grade) of the student. For each question a choice of five answers is provided.",
        "Use of mobile phone or any other electronic device is not permitted.",
        "The Contest questions for each level are divided into three parts. Each question in first, second and third part is worth 3 points, 4 points and 5 points respectively.",
        "There is a penalty of one point for each incorrect answer. If the question is left unanswered, it is worth 0 points. To avoid negative scores, each student begins with a credit of 24 to 30 points. Hence, the minimum score attainable is 0 points."
      ],
      generalInfo: [
        "All students from class 1 - 10 are invited to participate in IKSC.",
        "The IKSC will be held in all participating institutions all over the country at the same time.",
        "We encourage participation of maximum number of students from public & private schools.",
        "Schools should not refuse any student to participate in the contest who is willing to pay the fee.",
        "Registration includes a fee of Rs. 1000 per student which covers the costs of organizing the contest. There is no registration fee for institution.",
        "All schools and colleges in Pakistan are welcome to host IKSC by registering their students in the contest.",
        "Contest will be held in your own institution under the supervision of Principal.",
        "The competition has a form of a multiple choice test. You may see past Kangaroo questions in the download section of this site.",
        "At each level of participation the first prize is awarded at the country level to the students who earn the largest sum of points at their level. Likewise the first prize at district and school levels are also awarded. In addition several other prizes are awarded at each level of participation.",
        "All participating students receive a certificate.",
        "Students compete in five grade categories."
      ],
      courseOutline: [
        {
          level: "Class 1-2",
          duration: "Variable",
          problems: "24-30 questions: 3, 4, and 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Plants, Animals, Human Body, Food, Housing and Clothing, Family and Festivals, Occupations, Good Habits and Safety Rules, Transport and Communication, Air, Water, Patterns, Measuring Units, Geometrical Shapes, Analogy, Living and Non-living Things."
          ]
        },
        {
          level: "Class 3-4",
          duration: "Variable",
          problems: "24-30 questions: 3, 4, and 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Patterns, Geometrical Shapes and Solids, Comparison, Direction Sense Test, Matter and Materials, Our Environment, Days and Dates & Possible Combinations, Analogy and Classification, Plants, Animals, Food, Clothing."
          ]
        },
        {
          level: "Class 5-6",
          duration: "Variable",
          problems: "24-30 questions: 3, 4, and 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Animals, Human Body and Health, Plants and Food, Natural Resources, Pollution and Calamities, Earth and Universe, Matter, Force, Work and Energy, Verbal and Non-Verbal Reasoning, Motion and Measurement of Distances, Light, Electricity, Patterns, Analogy and Classification, Coding-Decoding, Geometrical Shapes, Mirror Images, Embedded Figures, Living Organisms and Their Surroundings, Food and its Components, Fiber and Fabrics, Direction Sense, Comparison, Fun with Magnets, Air and Water, Sorting and Separation of Materials, Changes around us, Thermal Phenomena, Sound."
          ]
        },
        {
          level: "Class 7-8",
          duration: "Variable",
          problems: "24-30 questions: 3, 4, and 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Reactions, Neutralization, Periodicity, Metal, Non Metal, Combustion, Force, Charges, Waves, Conservation of Plants and Animals, Cell, Reproduction in Animals, Force and Pressure, Friction, Sound, Verbal and Non-Verbal Reasoning, Crop Production and Management, Microorganisms, Synthetic Fibers and Plastics, Metals and Non-metals, Electricity, Some Natural Phenomena, Light, Stars and Solar System, Pollution of Air and Water, Thermal Phenomena, Optics, Electricity and Magnetism, Mechanical Equilibrium of Bodies, Work and Energy, Elementary Knowledge about Mechanics of Fluids, Thermodynamics, Molecules and Atoms."
          ]
        },
        {
          level: "Class 9-10",
          duration: "Variable",
          problems: "24-30 questions: 3, 4, and 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "PHYSICS: Physical Quantities and Measurement, Kinematics (Rest and motion, Types of motion, Speed and Velocity, Acceleration, Graphical analysis), Dynamics (Momentum, Newton's laws, Friction, Circular motion), Gravitation, Work and Energy, Heat and Thermal Properties, Oscillations and Waves, Sound, Geometrical Optics, Electricity & Magnetism, Atomic and Nuclear Physics",
            "CHEMISTRY: Elements, Compounds and Mixtures, Atomic Structure, Periodic Table, Chemical Bonds, Physical States of Matter, Solutions, Chemical Reactivity, Acids and Bases, Organic Compounds, Atmosphere and Water, Chemical Industries, Petroleum"
          ]
        }
      ],
      forms: [
        {
          title: 'Registration Form',
          description: 'Official form for institutional registration.',
          word: 'https://docs.google.com/document/d/14Q2KAPiSjyBVmK_ltYXdJWJL98eEO7Ao/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1B7_O0oplUQxEwv_eqX2oIeM7M1_snG6_/view?usp=sharing'
        },
        {
          title: 'Correction & Replacement Form',
          description: 'For data correction after registration.',
          word: 'https://docs.google.com/document/d/1BlLkPRMLj5QY-gy0ZgX9YARt1rlevkT-/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1J_tB5xRv6LUO6LvcHf5jPpFAEf-XIPUC/view?usp=sharing'
        },
        {
          title: 'Additional Student Form',
          description: 'For adding students after initial registration.',
          word: 'https://docs.google.com/document/d/1CifZPSUBu48bd4sZ1ZvKZfflaVfdvL4d/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1JybS_gSD2oBLNiU7hQ1n-eFDp6ghcEpq/view?usp=sharing'
        },
        {
          title: 'Migration Form',
          description: 'For student transfers between institutions.',
          word: 'https://docs.google.com/document/d/1e_jlD9Qd0ISkwLat1SpL6BNGCG1QSYHt/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1djOLmab9Gtsc-rZAGf0X8xk0cvykJioY/view?usp=sharing'
        }
      ],
      answerSheets: [
        { label: 'Blank Answer sheet for Grade 1-4', url: 'https://drive.google.com/file/d/1RxqK6xbobz9CkINMfBjAkt3s_Y9Gmp6g/view?usp=sharing' },
        { label: 'Blank Answer sheet for Grade 5-12', url: 'https://drive.google.com/file/d/1t1MLT8vi3HK2MjfUkWEgbW4tEcP94vjx/view?usp=sharing' }
      ],
      pastPapers: {
        '2024': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1nuSxBXKbkc64_nvWpKIVnkDbGRnPITxz/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1XdT7-QgJilQi9zGIZH-zZwEeEIfliLv4/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1svdhn9QNLy2QWvT_A3lr5ZCcrKFcVJGc/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1EHMWgbsoWsHbct8RiViVJYRkQJTPXsLi/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1h5WhEX80ZE6QcdbNNLwgAjFq__zvrks4/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1vwdLYmJTVWtrfRN-UQXpR0yDxLmKX56b/view?usp=sharing'
        },
        '2023': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1RjbiDv5mOHaVIWgBsYWzENV3OTs42w09/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1sXqid74YnOs1MEDGBRdDVzs27UY0TeAh/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1gnSJionk_0AdryKgImhUVnOc_WQut-Gn/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1_YDzGm8NBStw1vKwuGXrQnKPka3C2uA9/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1U-D9D2bX9dWsvB31tsHu7NflVWw--WLa/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1h2FCXj4T1apAS-f-AR1nqURjizCWakwU/view?usp=sharing'
        },
        '2022': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1hsB6vNPI6tv7Nhe-b0zIIYpmyvgicSJR/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1Qlx2RL7cP9v9DKvnQcoTZtOYxLHaOT-Z/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1c7l-BevlH70iimdKXewNMDJId9yDq9qL/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1AGMQXJkeCNdFUhURRVWn6YVblSe3PIJK/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1ZuOumYAgBd0-FbqyzjaEFiN6LjlvUr2I/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1Q7tLYhhOQ1Z8sgM2NAhlXJZawoNeB6O9/view?usp=sharing'
        }
      },
      resultsByYear: {
        '2025': [
          { label: 'Gold Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/GoldWinners.pdf', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/SilverWinners.pdf', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/BronzeWinners.pdf', icon: '🥉' },
          { label: '3 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/ThreeStarWinners.pdf', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/TwoStarWinners.pdf', icon: '⭐' },
          { label: '1 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/OneStarWinners.pdf', icon: '⭐' },
          { label: 'Participation Prizes', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/ParticipationWinners.pdf', icon: '🎁' },
          { label: 'Cash Prize Winners List', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/CashPrizeWinnersList.pdf', icon: '💸' },
          { label: 'Principal Awards List', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/PrincipalAwardsList.pdf', icon: '📜' },
          { label: 'Coordinator Awards List', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2025/CoordinatorAwardsList.pdf', icon: '📜' }
        ],
        '2024': [
          { label: 'Gold Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2024/GoldWinners.pdf', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2024/SilverWinners.pdf', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2024/BronzeWinners.pdf', icon: '🥉' },
          { label: '3 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2024/ThreeStarWinners.pdf', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2024/TwoStarWinners.pdf', icon: '⭐' },
          { label: '1 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2024/OneStarWinners.pdf', icon: '⭐' },
          { label: 'Participation Prizes', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/ikscresults_2024/ParticipationWinners.pdf', icon: '🎁' }
        ],
        '2023': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1geNZyy4_08_T84y_qh2ktcQL8m8M8IwR/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/1xE1tZZv2jZCjMReyJXb2YtYIZMUcza4H/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/1o5FamTgEmzE4OX3WjOac5MZcbnvY2Ruh/view?usp=sharing', icon: '🥉' },
          { label: '3 Star Badge Winners', url: 'https://drive.google.com/file/d/14Oj3wFCmalyCZcnrIBo22nnqVolatssq/view?usp=sharing', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://drive.google.com/file/d/1DwDvdeIiQUeJE9CfjFrPMtMMY2-KbKhC/view?usp=sharing', icon: '⭐' },
          { label: '1 Star Badge Winners', url: 'https://drive.google.com/file/d/10oBWaGnKge8_6PGI32aflTa7hTe2MB0m/view?usp=sharing', icon: '⭐' },
          { label: 'Special Ballpoint Winners', url: 'https://drive.google.com/file/d/16iIUt2oQ50lSD7lT02BUXmi9QXOI0NwA/view?usp=sharing', icon: '🖊️' }
        ],
        '2022': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1FR8v5bwdYOz5uPy2_k0mDfEso9O7e2S0/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/1e5Iv6YzW1S_ckq_Woth_K2llI9fht6_p/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/1v6-OLYLJxbnHmedTAh-HqPGrznuYEXQd/view?usp=sharing', icon: '🥉' },
          { label: '3 Star Badge Winners', url: 'https://drive.google.com/file/d/1E-tlPT8dXpNPdZI2Fr55Owmvn101TNYb/view?usp=sharing', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://drive.google.com/file/d/1sAsa3dPWesfPrw3sOQAEADVVs1Psskd6/view?usp=sharing', icon: '⭐' },
          { label: '1 Star Badge Winners', url: 'https://drive.google.com/file/d/1ZBbtKuWZmPMgJc3EE26ccuhECbBKJRdC/view?usp=sharing', icon: '⭐' },
          { label: 'Special Ballpoint Winners', url: 'https://drive.google.com/file/d/1QNOlVchzNCYHSWm5s__7A1NcV0-rI2VC/view?usp=sharing', icon: '🖊️' }
        ],
        '2021': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1GPjlRpI5WtLSxMa0jjUlHkvsz9gZ8zs9/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/1cCDTjrO7jnSmSmQ4NTBj6kIo7vOBnOZF/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/1Cg3W1KBvsZLRFZ5xZl_9viK4OQSde9_d/view?usp=sharing', icon: '🥉' },
          { label: '3 Star Badge Winners', url: 'https://drive.google.com/file/d/1e2ot4bZtCWqTjGdhtnv0Oxo-lyHjX_bh/view?usp=sharing', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://drive.google.com/file/d/1yREqtsFt8WT4eQJ-tx-zHS50pV5MMMDi/view?usp=sharing', icon: '⭐' },
          { label: '1 Star Badge Winners', url: 'https://drive.google.com/file/d/1GqUMOaNhcCWv5FJMToaz8jVNNcKMh0Z1/view?usp=sharing', icon: '⭐' },
          { label: 'Special Ballpoint Winners', url: 'https://drive.google.com/file/d/1yTSm1FhkSGGVf2rofggJOqRgt_9-K43U/view?usp=sharing', icon: '🖊️' }
        ],
        '2020': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1_p_PQWVp314B8XIIBXpvh5lO8bg-l6Vm/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/1e9Xwk71cjAej2ff-plukFByapr_ly8nq/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/1TR5C2CL11naORX_CUbwR5sKNv6H3FLZH/view?usp=sharing', icon: '🥉' },
          { label: '3 Star Badge Winners', url: 'https://drive.google.com/file/d/1-ck3x3hKP93m1lwunrVWaeCN_bvKrNnu/view?usp=sharing', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://drive.google.com/file/d/1wJ56OJK8tekIlRskmReso11euy_plFp4/view?usp=sharing', icon: '⭐' },
          { label: '1 Star Badge Winners', url: 'https://drive.google.com/file/d/1qCax1gy64VOzvJ2FxmegEksHkEDw1W4U/view?usp=sharing', icon: '⭐' },
          { label: 'Special Ballpoint Winners', url: 'https://drive.google.com/file/d/1KpSCbUlJnuLfw9TNYUXxfrQQcfewbC7W/view?usp=sharing', icon: '🖊️' }
        ]
      },
      prizeWinners: {
        districtLevel: [
          { name: 'LED Power Bank 2020', url: 'https://drive.google.com/file/d/10PSwJTRSBkeV6kVQmqf0EKOLDHJW2pDH/view?usp=sharing' },
          { name: 'LED Power Bank 2021', url: 'https://drive.google.com/file/d/15Z9LvC_FKafsEpnpyDGv0prRgLNrJs3F/view?usp=sharing' },
          { name: 'Wallet Card Micro Flip USB 2022', url: 'https://drive.google.com/file/d/1iUSG429O3imW_NazCfj4-3ou0doX4v90/view?usp=sharing' },
          { name: 'Wallet Card Micro Flip USB 2023', url: 'https://drive.google.com/file/d/1TVuuT8MV4FDEoXqLvg2mIrbWdb5fRsq5/view?usp=sharing' }
        ],
        institutionLevel: [
          { name: 'Touch Screen Lightup Logo Ball Pen 2020', url: 'https://drive.google.com/file/d/1IYJ_Fdy-5lYp7cube-KyGJwadS27Kkdr/view?usp=sharing' },
          { name: 'Touch Screen Lightup Logo Ball Pen 2021', url: 'https://drive.google.com/file/d/1TCCiewjXE7Ly23ryZfye6MIcIe6-kAQx/view?usp=sharing' },
          { name: '3 in 1 Zinc Alloy Data Cable 2022', url: 'https://drive.google.com/file/d/17IGFYTLJCEXHgRxbnDy9DdQWnI4nAr4k/view?usp=sharing' },
          { name: '3 in 1 Zinc Alloy Data Cable 2023', url: 'https://drive.google.com/file/d/1bImNkAPizs2fXljJifpc_MbAvzZ_dWt3/view?usp=sharing' }
        ],
        nationalLevel: [
          { name: 'Bluetooth Speaker 2020', url: 'https://drive.google.com/file/d/18l0jTjKcZVMByv33skwVFIDyHyk3Sflo/view?usp=sharing' },
          { name: 'Bluetooth Speaker 2021', url: 'https://drive.google.com/file/d/1unyeD7Ys61GEemfEk3UhhmAXulm2RF0u/view?usp=sharing' },
          { name: 'Luxury Wooden Ballpoint 2022', url: 'https://drive.google.com/file/d/11BAsglPQRl9qXtgpwNdbAzkOz6BLFiUV/view?usp=sharing' },
          { name: 'Executive USB Key Chain 2023', url: 'https://drive.google.com/file/d/16gCveKSZzxjqnynfA14U6iOnzWr4HRtY/view?usp=sharing' }
        ]
      },
      educationistAwards: [
        { name: 'Award of Honor 2020', url: 'https://drive.google.com/file/d/1K52BTsIFdubLzYI7VVeKa3xNEBFkj9aP/view?usp=sharing' },
        { name: 'Award of Honor 2021', url: 'https://drive.google.com/file/d/1euGhJmMEAVpmqAlKmL6YRPRDi0O62Ljr/view?usp=sharing' },
        { name: 'Certificate of Accomplishment 2022', url: 'https://drive.google.com/file/d/1TbzMtz_vu3Z4RgczGh3Us4C2jNskrK7Y/view?usp=sharing' },
        { name: 'Certificate of Accomplishment 2023', url: 'https://drive.google.com/file/d/1pOvNCSmmRAbtUXkAJUDedys1Gwdnbm12/view?usp=sharing' },
        { name: 'Certificate of Achievement 2022', url: 'https://drive.google.com/file/d/1K4Z_dBN7y59xq8KhyD4I3KpV1KI0ZSHQ/view?usp=sharing' },
        { name: 'Certificate of Achievement 2023', url: 'https://drive.google.com/file/d/1lkPAj7dv9PIY4akqzdlwe11DLvqDz6Nc/view?usp=sharing' },
        { name: 'Certificate of Appreciation 2022', url: 'https://drive.google.com/file/d/1f0a_NMCMyivJ8R1Tlkt1VRt-P0GnuI1S/view?usp=sharing' },
        { name: 'Certificate of Appreciation 2023', url: 'https://drive.google.com/file/d/15iaZEurnX5MM5sLEuDgC-Adxs_WVq4G1/view?usp=sharing' },
        { name: 'Certificate of Recognition 2021', url: 'https://drive.google.com/file/d/1_j9ctkw093fsmjIRIgvvFGBKpT9itXc-/view?usp=sharing' },
        { name: 'Pride of Educational Excellence Award 2022', url: 'https://drive.google.com/file/d/140BljwWkgxOPjm9e6yztgT_1Ef28Tche/view?usp=sharing' },
        { name: 'Pride of Educational Excellence Award 2023', url: 'https://drive.google.com/file/d/1nTgMuuaXauFeXzbZ7XP8CY-AV5TU9X4A/view?usp=sharing' },
        { name: 'Special Recognition Award 2020', url: 'https://drive.google.com/file/d/1HHXmHTXNnPFRazwzhFsibET1FCyWOd_P/view?usp=sharing' },
        { name: 'Special Recognition Award 2021', url: 'https://drive.google.com/file/d/1aiQJ1VDtLKF9L4PZK5zKuKvaV1vnVl8v/view?usp=sharing' },
        { name: 'Special Recognition Award 2022', url: 'https://drive.google.com/file/d/1Pr_C6krA11gf3DV4u49vz0pOW-ugPMr9/view?usp=sharing' },
        { name: 'Special Recognition Award 2023', url: 'https://drive.google.com/file/d/1xKXOrlBIlI2HBzrmBDKej-DCSDK-VMSL/view?usp=sharing' },
        { name: 'Thomas Edison Gold Award 2021', url: 'https://drive.google.com/file/d/1KgmPe_soqxKNY3mDP-Lj7sRCyaYAWVgK/view?usp=sharing' },
        { name: 'Thomas Edison Gold Award 2022', url: 'https://drive.google.com/file/d/1RcdZZdCw2cB_MmxJdEcGe7ZlfUk3kqa7/view?usp=sharing' },
        { name: 'Thomas Edison Gold Award 2023', url: 'https://drive.google.com/file/d/1jypZDGwr0B9vtJbe49rdjQqLvhDCQAF9/view?usp=sharing' },
        { name: 'Thomas Edison Gold Medal 2020', url: 'https://drive.google.com/file/d/1hsQGOGcKgTM8ocaMI5KUrce0hy2hDXwc/view?usp=sharing' },
        { name: 'Thomas Edison Silver Award 2021', url: 'https://drive.google.com/file/d/1ct5oGIo9NK31I49a_f_02j8rVQffeDo0/view?usp=sharing' },
        { name: 'Thomas Edison Silver Award 2023', url: 'https://drive.google.com/file/d/1SSa7zsjEuL5XAYmpLaOHxZQiPwbfAdSF/view?usp=sharing' },
        { name: 'Thomas Edison Silver Medal 2020', url: 'https://drive.google.com/file/d/13k9WQCypsCAoKAve3jPPqR7ondEdAVcG/view?usp=sharing' },
        { name: 'Traveller Mug 2023', url: 'https://drive.google.com/file/d/168O7B36dpwxdN4-WkmrA_hhFwqwpEpTC/view?usp=sharing' }
      ],
      faqs: [
        {
          q: 'What is the date of 16th International Kangaroo Science Contest (IKSC) in Pakistan for the year 2023',
          a: 'International Kangaroo Science Contest will be held in Pakistan on September 21, 2023.'
        },
        {
          q: 'What is the last date of registration for the International Kangaroo Science Contest 2023 in Pakistan?',
          a: 'The last date of submitting registration for the contest is August 19, 2023.'
        },
        {
          q: 'Can our institution get registered for the International Science Contest after the deadline?',
          a: 'Yes! Registration with late fee of Rs. 5,000 per institution till August 21, 2023. Registration with late fee of Rs. 10,000 per institution till August 23, 2023.'
        },
        {
          q: 'What happens if my institution sends registration application before the application deadline but it is received Late at Innovative learning due to postal delays?',
          a: 'Registration can be denied in this case. Please, make sure that your application must reach Innovative learning office well in time and before the closing date.'
        },
        {
          q: 'Can we send the registration fee in cash ?',
          a: 'The registration fee can only be sent through the institution to Innovative learning in the form of Bank Draft / Pay Order/Online.'
        },
        {
          q: 'Can we send the registration fee through Cross Cheque/Money Order/Postal Order etc?',
          a: 'The registration fee cannot be accepted in any form other than Pay Order / Demand Draft/Online.'
        },
        {
          q: 'Where can we get the Pay Order/Bank Draft?',
          a: 'You can get it from any scheduled bank of Pakistan in favour of \'Innovative learning\'.'
        },
        {
          q: 'What should be the title of the Pay Order/Bank Draft or to whom is it payable?',
          a: 'Please get your Pay Order/Bank Draft prepared in favour of \'Innovative learning\'.'
        },
        {
          q: 'Our Institution is not interested in hosting IKSC. Can we still participate in the contest?',
          a: 'Participation in the contest is possible through the institution only. Individual participation is not possible in the IKSC.'
        },
        {
          q: 'What is the participation fee for participating in the 16th IKSC in Pakistan?',
          a: 'The participation fee for 16th IKSC 2023 in Pakistan is Rs. 1000 per student, which is collected by the participating institution and is forwarded to Innovative learning.'
        }
      ]
    }
  },
  [ContestType.IKLC]: {
    id: ContestType.IKLC,
    name: 'IKLC',
    fullName: 'International Kangaroo Linguistics Contest',
    description: 'Celebrating language diversity and communication skills in an international context.',
    color: 'green-500',
    icon: '📚',
    logoUrl: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/iklc_1717585139021.webp',
    bgGradient: 'from-[#11d869] to-emerald-600',
    detailedData: {
      dates: {
        registration: 'Sep 26, 2025 to Oct 23rd, 2025',
        contest: 'Nov 20, 2025',
        results: 'Jan 20, 2026'
      },
      mainLinks: {
        registration: 'https://enrollments.kangaroopakistan.org/',
        results: 'https://enrollments.kangaroopakistan.org/',
        poster: '#'
      },
      detailedHistory: `The International Kangaroo Linguistic Contest developed as a natural extension of the successful Kangaroo educational model that began with mathematics in France in 1991. Recognizing the critical importance of language skills in global education, educators sought to apply the innovative Kangaroo approach to linguistic education.

The linguistic contest was conceived to address the growing need for effective communication skills in an increasingly interconnected world. As English became the lingua franca of international business, science, and technology, the importance of developing strong English language skills became paramount for students worldwide.

The contest format was carefully designed to be both challenging and accessible, using multiple-choice questions that test deep understanding of language rather than superficial knowledge. The problems are crafted to encourage students to think about language in context, understand nuances of meaning, and apply linguistic principles to solve communication challenges.

The contest has evolved to incorporate various aspects of language learning, including reading comprehension, vocabulary in context, grammar application, and understanding of linguistic patterns. This comprehensive approach ensures that students develop well-rounded language skills rather than focusing on isolated grammatical rules or vocabulary lists.`,
      inPakistan: `The International Kangaroo Linguistic Contest (IKLC) is organized by Inventive Learning in Pakistan as part of the comprehensive Kangaroo educational initiative. This contest specifically focuses on enhancing English communication skills and linguistic competency among Pakistani students from grades 1 through 12.

IKLC recognizes the pivotal role of English communication skills in modern education and global connectivity. The contest is designed to foster a deeper appreciation for language arts while developing critical thinking skills through linguistic challenges. It provides Pakistani students with an opportunity to demonstrate their English language proficiency on an international platform.

Through IKLC, Pakistani students gain exposure to international standards of English language education and have the opportunity to compare their linguistic abilities with peers from around the world. The contest serves as a valuable tool for identifying and nurturing linguistic talent, particularly important in Pakistan where English proficiency opens doors to higher education and career opportunities.`,
      overview: [
        "The Contest is composed of just one test, no selection, no preliminary, no final test.",
        "The Contest consists of Multiple Choice Questionnaire of twenty four to thirty questions, depending upon the level (grade) of the student. For each question a choice of five answers is provided.",
        "The Contest contents are covered in the English Curriculum.",
        "Use of mobile phone or any other electronic device is not permitted.",
        "The Contest questions for each level are divided into three parts. Each question in first, second and third part is worth 3 points, 4 points and 5 points respectively.",
        "There is a penalty of one point for each incorrect answer. If the question is left unanswered, it is worth 0 points. To avoid negative scores, each student begins with a credit of 24 to 30 points. Hence, the minimum score attainable is 0 points.",
        "Each year, several International Summer Camps are organized for national winners of the contest. The locations, dates, duration, age of participants and availability vary from year to year.",
        "Innovative learning determines and coordinates the participation of the Pakistani students in the International Summer Camp."
      ],
      generalInfo: [
        "All students from class 1 - 13 are invited to participate in IKLC.",
        "The IKLC will be held in all participating institutions all over the country at the same time.",
        "Each participating school must register a minimum of 10 students to be eligible. Unfortunately, entries below this number cannnot be processed.",
        "Schools should not refuse any student to participate in the contest who is willing to pay the fee.",
        "Registration includes a fee of Rs. 1000 per student which covers the costs of organizing the contest. There is no registration fee for institution.",
        "All schools and colleges in Pakistan are welcome to host IKLC by registering their students in the contest.",
        "Contest will be held in your own institution under the supervision of Principal.",
        "The competition has a form of a multiple choice test. You may see past Kangaroo questions in the download section of this site.",
        "At each level of participation the first prize is awarded at the country level to the students who earn the largest sum of points at their level. Likewise the first prize at district and school levels are also awarded. In addition several other prizes are awarded at each level of participation.",
        "All participating students receive a certificate.",
        "Students compete in six grade categories."
      ],
      courseOutline: [
        {
          level: "Class 1-2",
          duration: "60 minutes",
          problems: "24 questions: eight – 3 points each, eight- 4 points each and eight- 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Word and Structure Knowledge: adverbs, prepositions, pronouns (possessive, demonstrative, etc.), simple tenses, irregular verbs, modals (of ability and permission, etc.), basic questions, etc. collocations, spellings, words related to household things, clothes, basic emotions, food, animals and pets, comprehension,etc.",
            "Reading: search for and retrieve information from various text types like stories, anecdotes, etc. understand information through pictures, time-table format, etc., acquire broad understanding of and look for specific information in short texts like messages, invitations, etc.",
            "Spoken and Written Expression: ability to understand situation-based variations in functions like apology, greeting, introduction, request, etc."
          ]
        },
        {
          level: "Class 3-4",
          duration: "60 minutes",
          problems: "24 questions: eight – 3 points each, eight- 4 points each and eight- 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Word and Structure Knowledge: adverbs, prepositions, pronouns (possessive, demonstrative, etc.), simple tenses, irregular verbs, modals (of ability and permission, etc.), basic questions, etc. collocations, spellings, words related to household things, clothes, basic emotions, food, animals and pets, etc",
            "Reading: search for and retrieve information from various text types like stories, anecdotes, etc. understand information through pictures, time-table format, etc., acquire broad understanding of and look for specific information in short texts like messages, invitations, etc.",
            "Spoken and Written Expression: ability to understand situation-based variations in functions like apology, greeting, introduction, request, etc."
          ]
        },
        {
          level: "Class 5-6",
          duration: "60 minutes",
          problems: "30 questions: ten – 3 points each, ten- 4 points each and ten- 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Word and Structure Knowledge: prepositions, tenses, irregular verbs, pronouns, modals quantifiers, etc. , spellings, collocations, phrasal verbs, idioms, homonyms and homophones, words related to feelings, travel, food, health, appearance, character, etc.",
            "Reading: search for and retrieve information from various text types like news headlines, messages, letters, etc., understand information given in news reports, time tables, messages, etc., acquire broad understanding of and look for specific information in short texts like messages, menu card dialogues, etc.",
            "Spoken and Written Expression: ability to understand situation-based variations in functions like requests, refusals, apologies, etc. and the use of conjunctions."
          ]
        },
        {
          level: "Class 7-8",
          duration: "60 minutes",
          problems: "30 questions: ten – 3 points each, ten- 4 points each and ten- 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Word and Structure Knowledge: perfect tenses, prepositions, modals, adjectives, and adverbs, conjunctions, direct indirect speech, word order, phrasal verbs, etc. spellings, general knowledge, collocations, phrasal verbs, idioms, and words related to travel, locations, activities, homonyms and homophones, etc.",
            "Reading: search for and retrieve information from various text types like news stories, brochures and advertisements. understand information given in news reports, brochures, itinerary, etc., acquire broad understanding of and look for specific information in short narratives, advertisements, biographies, etc.",
            "Spoken and Written Expression: ability to understand situation-based variations in functions like requesting and refusing, apologies and stating of preferences and expression of intent, etc."
          ]
        },
        {
          level: "Class 9-10",
          duration: "60 minutes",
          problems: "30 questions: ten – 3 points each, ten- 4 points each and ten- 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Word and Structure Knowledge: concord, question forms, tenses, conditionals, modals, reported speech, collocations, phrasal verbs, idioms, homonyms and homophones, words related to social cause, travel, workplace, etc.",
            "Reading: search for and retrieve information from various text types like flyers, classifieds, dictionaries, etc., understand information presented in instruction manual format, message format and others, acquire broad understanding of and look for specific information in longer texts like editorials, essays, etc.",
            "Spoken and Written Expression: ability to understand situation-based variations in functions like giving advice, stating preferences, discussing probability, making an offer, etc."
          ]
        },
        {
          level: "Class 11-12",
          duration: "60 minutes",
          problems: "30 questions: ten – 3 points each, ten- 4 points each and ten- 5 points each",
          tools: "No electronic devices permitted",
          scope: [
            "Word and Structure Knowledge: concord, question forms, tenses, conditionals, modals, collocations, phrasal verbs, idioms, homonyms and homophones, words related to weather, countries, language and people, global problems, etc.",
            "Reading: search for and retrieve information from various text types like encyclopedias, dictionaries, etc., understand information presented in instruction manual format, message format and others, acquire broad understanding of and look for specific information in longer texts like editorials, essays, etc., make inferences from advanced texts.",
            "Spoken and Written Expression: ability to understand situation-based variations in functions like giving/accepting compliments, agreeing, disagreeing, requesting, seeking information, etc."
          ]
        }
      ],
      forms: [
        {
          title: 'Registration Form',
          description: 'Official form for institutional registration.',
          word: 'https://docs.google.com/document/d/1-0FFK7Z3_x_8UyVpf-PSF7UR7IhJ7jQ1/edit?usp=sharing&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1GWwd8cwwdsBplz1XjfJIBtx__1Fwa9N8/view?usp=sharing'
        },
        {
          title: 'Correction & Replacement Form',
          description: 'For data correction after registration.',
          word: 'https://docs.google.com/document/d/1yys7fEDUixvOnydwoPsArSNLQ5mFZbte/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/13-ctcUD0PaLq2wBoZ_rKuR4ZT3jJo2qN/view?usp=sharing'
        },
        {
          title: 'Additional Student Form',
          description: 'For adding students after initial registration.',
          word: 'https://docs.google.com/document/d/1nIynMqfkfh_G8Zlxd9Xp_JsUOiY3ya_f/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/1FPZ4RSkZeHyyION5mRQCw5V-adxjj-l8/view?usp=sharing'
        },
        {
          title: 'Migration Form',
          description: 'For student transfers between institutions.',
          word: 'https://docs.google.com/document/d/1frpi8ZSZnxMHRcWK2QdX5lqB-FB9Q668/edit?usp=sharing&ouid=100155003670788686545&rtpof=true&sd=true',
          pdf: 'https://drive.google.com/file/d/127MAoe8rLlbOVPL41ZmHRyzztOKFPz4A/view?usp=sharing'
        }
      ],
      answerSheets: [
        { label: 'Blank Answer sheet for Grade 1-4', url: 'https://drive.google.com/file/d/1G64TsGePz51rfH76MWXQnv17HrY2bAU6/view?usp=sharing' },
        { label: 'Blank Answer sheet for Grade 5-12', url: 'https://drive.google.com/file/d/1bO8lMxoiw9rSVvdXN2QlEpvGC3RpWQlp/view?usp=sharing' }
      ],
      pastPapers: {
        '2024': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1vw50ZwHfTlXH7aOronx78mRUTkkguCLe/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1y_YIDmqaskAEt3t_9qDuVxr2gJpKjjUZ/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1DS8VYvnZT73PBM9tfW2EyWBe12N_De7S/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1wrFYRejjy7fJ7fzyNirOJqkT2ebxh9Tx/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/10AMZ-T1wsFGduYrR4V2MuwrE0upo7Ruo/view?usp=sharing' },
            { label: 'Class 11-12', url: 'https://drive.google.com/file/d/1ee8TNc7X-eVewii9z_DR5VykGq41QwWO/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1pE-RCWrtFY2WbuyQrSlpNI6SmNv9EW4x/view?usp=sharing'
        },
        '2023': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1ekHDabSf_h2n1iClVd32CrSaqUI4XZlD/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1DubKU2ZCPtEV7zCZiSny5MkboLEc0p-k/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1LGxcRXwwM830sNzWeY3l06vx6Yuz7ANz/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1NrkbjYpoYdx_yzP-SQYSa0u-XDRWYVin/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/17c0jp7bBhv1jWrF3Kqgu-VdnbwIAV6Bi/view?usp=sharing' },
            { label: 'Class 11-12', url: 'https://drive.google.com/file/d/12mZNvTJVNvjgpE5yUx0ZcimB-bHw6Ed0/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1OFaoqjOIVni8fGrkEyk9zhAcOoPmwjCN/view?usp=sharing'
        },
        '2022': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/12LCG-E3L6SN6rm5WX51nwibUtyppXQFq/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1Fkz5AKz_dy3RKRxYQzeGjQycOutyvldx/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1EXnyxbkKm_JGHzhD0bJ_YPYXbKoW0C0v/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1D2Fac3FfyO8T6JVMnFXG6-cG10wteJZj/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1ZHvf9xarKJSmVagwMQA5ckSlt42SEa-I/view?usp=sharing' },
            { label: 'Class 11-12', url: 'https://drive.google.com/file/d/1EHLsccN7E1ZF9AnULinYeL2p3D_kSxpZ/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/10cKZK1kEI1_6weoS8V9fZRZ2sWF0lFXs/view?usp=sharing'
        },
        'Sample Papers': {
          links: [
            { label: 'Class 1-2', url: 'https://drive.google.com/file/d/1VktnoXM9ApmfmWi_ZorNFD2AckkuAvSx/view?usp=sharing' },
            { label: 'Class 3-4', url: 'https://drive.google.com/file/d/1gHN5LlKRRipE6XUyg6YWXZR6ggeZHQQD/view?usp=sharing' },
            { label: 'Class 5-6', url: 'https://drive.google.com/file/d/1-TRR3KANrBGKFNrTAlrSQJPEa5F2Dsbi/view?usp=sharing' },
            { label: 'Class 7-8', url: 'https://drive.google.com/file/d/1-du9EeWpkE5_hJj2Fw1xchg7gZVo58Zw/view?usp=sharing' },
            { label: 'Class 9-10', url: 'https://drive.google.com/file/d/1Og8rvWEUPzJIcVupQVCucD5UEYL06jde/view?usp=sharing' },
            { label: 'Class 11,12&13', url: 'https://drive.google.com/file/d/1ArsRzH0aKnXgW81D0dLhmfoigPRm1OIg/view?usp=sharing' }
          ],
          answerKey: 'https://drive.google.com/file/d/1z4_E95cfB5fYXbut1cUKCCdJ5Ne3mggo/view?usp=sharing'
        }
      },
      resultsByYear: {
        '2024': [
          { label: 'Gold Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/iklc_results2024/GoldWinners.pdf', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/iklc_results2024/SilverWinners.pdf', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/iklc_results2024/BronzeWinners.pdf', icon: '🥉' },
          { label: '3 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/iklc_results2024/ThreeStarWinners.pdf', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/iklc_results2024/TwoStarWinners.pdf', icon: '⭐' },
          { label: '1 Star Badge Winners', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/iklc_results2024/OneStarWinners.pdf', icon: '⭐' },
          { label: 'Participation Prizes', url: 'https://kangaroopakistan-prod.s3.us-east-1.amazonaws.com/iklc_results2024/ParticipationWinners.pdf', icon: '🎁' }
        ],
        '2022': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1V9u5WKIq43tN4DvIldzCqTipPz-yPKrt/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/17jMx6w7yw6RUsXY7gsmG3bEVBfqQ2HNX/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/1PZzy8Wf83KpNL5E7Ugb4smW5POOp_PX-/view?usp=sharing', icon: '🥉' },
          { label: 'USB Data Traveller', url: 'https://drive.google.com/file/d/1QTI1wVdxXzreS1eKHZShNi7w7bQY_Dv8/view?usp=sharing', icon: '💾' },
          { label: 'Wireless Mouse', url: 'https://drive.google.com/file/d/1VKmJSPg6JHO62jJRvCXdr9HEfUlZ7hsq/view?usp=sharing', icon: '🖱️' },
          { label: 'USB Ballpoint Winners', url: 'https://drive.google.com/file/d/1AzYBkTzqgDYNuhfMHixRvl8n0k2PCw9F/view?usp=sharing', icon: '🖊️' },
          { label: 'Mark Twain Gold Award', url: 'https://drive.google.com/file/d/1ZvjsmskN5TS3H6LGzCBw_Q1Pf7tW1FXb/view?usp=sharing', icon: '🏆' },
          { label: 'Mark Twain Silver Award', url: 'https://drive.google.com/file/d/17-ydhAhLtKMPBjOLFMewGPvLv-pTNqg4/view?usp=sharing', icon: '🏆' },
          { label: '1 Star Badge Winners', url: 'https://drive.google.com/file/d/1Fz0NpgGQqdBgtQZmJNlFGpK1MBe1ut6u/view?usp=sharing', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://drive.google.com/file/d/1AeQIQEAyDddDVzgaeZoqnn6_d9JWN1L8/view?usp=sharing', icon: '⭐' },
          { label: '3 Star Badge Winners', url: 'https://drive.google.com/file/d/1fFPw80Los8mXKSYhhHGggnIQkDyP4lxC/view?usp=sharing', icon: '⭐' }
        ],
        '2021': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1BG-gLkfEWczmuje1Rt8cWpIikDHmHfYo/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/1EaQpuM7dS9DDIUnvOzjNu0slQTTbF2iT/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/1X4EPDOGBmbMarrRBcmWtWxRs-fMpi2jw/view?usp=sharing', icon: '🥉' },
          { label: 'Power Bank', url: 'https://drive.google.com/file/d/1928yprX_w5JbRJW0druTQAsY3pJRXL0j/view?usp=sharing', icon: '🔋' },
          { label: 'Multi Functional USB Data Cable', url: 'https://drive.google.com/file/d/1C1McuXtC_ZgUJWeYogosGASPA4SDQ01g/view?usp=sharing', icon: '🔌' },
          { label: 'Bluetooth Speaker Winners', url: 'https://drive.google.com/file/d/10IUiwfn9dWgZNmDXLjT155ooQqTLqwI8/view?usp=sharing', icon: '🔊' },
          { label: 'USB Ballpoint Winners', url: 'https://drive.google.com/file/d/1fRqLq6IH2JzOPAcofADC57eMQV3qR1qS/view?usp=sharing', icon: '🖊️' },
          { label: 'Mark Twain Gold Medal', url: 'https://drive.google.com/file/d/1hveMb7GQR4SbnTsa1En_HVuQEmQOpIE4/view?usp=sharing', icon: '🏆' },
          { label: 'Mark Twain Silver Medal', url: 'https://drive.google.com/file/d/1x4z7sSVhaT5Ih-StK5TILG9ov1gHsdH-/view?usp=sharing', icon: '🏆' },
          { label: '1 Star Badge Winners', url: 'https://drive.google.com/file/d/1zxOoHn2t2BUiUnTGvuaXbI6xtVvlJHXI/view?usp=sharing', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://drive.google.com/file/d/1I1qFfIQMpg37iqXFqhEfNDHyhAFFqxEd/view?usp=sharing', icon: '⭐' },
          { label: '3 Star Badge Winners', url: 'https://drive.google.com/file/d/1YXU4O3AzNKpG-cp9hNstJss8cIOkzuDN/view?usp=sharing', icon: '⭐' }
        ],
        '2020': [
          { label: 'Gold Medalists', url: 'https://drive.google.com/file/d/1UmXE_rwhEgeAoh89-mdnMlPB2VZt6490/view?usp=sharing', icon: '🥇' },
          { label: 'Silver Medalists', url: 'https://drive.google.com/file/d/1G0rT6Sgd3FUsXQvWbXpGYcYbXiSceug9/view?usp=sharing', icon: '🥈' },
          { label: 'Bronze Medalists', url: 'https://drive.google.com/file/d/1ROeIeSuV3lnG-HNXp2wXwxuHEeRxltWL/view?usp=sharing', icon: '🥉' },
          { label: 'Power Bank', url: 'https://drive.google.com/file/d/1yApgeqL15UHYa8Qs4oif5p1HpkM1xnDd/view?usp=sharing', icon: '🔋' },
          { label: 'Multi Functional USB Data Cable', url: 'https://drive.google.com/file/d/18-KHBQlAr4XD-J9NXmWF73lKltTEkdi5/view?usp=sharing', icon: '🔌' },
          { label: 'USB Ballpoint Winners', url: 'https://drive.google.com/file/d/12XUJ3D19iWRCw0GzRoAZ2uTER021Zqh5/view?usp=sharing', icon: '🖊️' },
          { label: '1 Star Badge Winners', url: 'https://drive.google.com/file/d/17CTijPuGQVsNaBP_LZ2rYl3ugKEKWIm7/view?usp=sharing', icon: '⭐' },
          { label: '2 Star Badge Winners', url: 'https://drive.google.com/file/d/1jyRW6Z-HLuPBhGMG3gDQZCzeRVJAj3Pf/view?usp=sharing', icon: '⭐' },
          { label: '3 Star Badge Winners', url: 'https://drive.google.com/file/d/19oUK9kq4IRI5X6GdUd8--dt2P9U2SM0I/view?usp=sharing', icon: '⭐' }
        ]
      },
      prizeWinners: {
        districtLevel: [
          { name: 'Power Bank 2020', url: 'https://drive.google.com/file/d/1yApgeqL15UHYa8Qs4oif5p1HpkM1xnDd/view?usp=sharing' },
          { name: 'Power Bank 2021', url: 'https://drive.google.com/file/d/1928yprX_w5JbRJW0druTQAsY3pJRXL0j/view?usp=sharing' }
        ],
        institutionLevel: [
          { name: 'Multi Functional USB Data Cable 2020', url: 'https://drive.google.com/file/d/18-KHBQlAr4XD-J9NXmWF73lKltTEkdi5/view?usp=sharing' },
          { name: 'Multi Functional USB Data Cable 2021', url: 'https://drive.google.com/file/d/1C1McuXtC_ZgUJWeYogosGASPA4SDQ01g/view?usp=sharing' },
          { name: 'Wireless Mouse 2022', url: 'https://drive.google.com/file/d/1VKmJSPg6JHO62jJRvCXdr9HEfUlZ7hsq/view?usp=sharing' }
        ],
        nationalLevel: [
          { name: 'Bluetooth Speaker Winners 2021', url: 'https://drive.google.com/file/d/10IUiwfn9dWgZNmDXLjT155ooQqTLqwI8/view?usp=sharing' },
          { name: 'USB Ballpoint Winners 2020', url: 'https://drive.google.com/file/d/12XUJ3D19iWRCw0GzRoAZ2uTER021Zqh5/view?usp=sharing' },
          { name: 'USB Ballpoint Winners 2021', url: 'https://drive.google.com/file/d/1fRqLq6IH2JzOPAcofADC57eMQV3qR1qS/view?usp=sharing' },
          { name: 'USB Ballpoint Winners 2022', url: 'https://drive.google.com/file/d/1AzYBkTzqgDYNuhfMHixRvl8n0k2PCw9F/view?usp=sharing' }
        ]
      },
      educationistAwards: [
        { name: 'Certificate of Accolade 2022', url: 'https://drive.google.com/file/d/1Xm_mM06GBxhF75AS7e4BHWnvt3fheRin/view?usp=sharing' },
        { name: 'Certificate of Appreciation 2021', url: 'https://drive.google.com/file/d/1Z4IlHmA8JLSY3zQ5J6-hPWdTWWjaavL0/view?usp=sharing' },
        { name: 'Certificate of Commendable Contribution 2022', url: 'https://drive.google.com/file/d/16F4aoqyqX1aH3LY8wF7DZE8np9pKljuz/view?usp=sharing' },
        { name: 'Certificate of Honor 2020', url: 'https://drive.google.com/file/d/1aqWPy5ZWYFmILo6X1Aoj4D-2qXm2RdaQ/view?usp=sharing' },
        { name: 'Certificate of Honor 2021', url: 'https://drive.google.com/file/d/10e2o1UFAsSzRztfjH1eSRw4RiOJl8QVY/view?usp=sharing' },
        { name: 'Certificate of Recognition 2021', url: 'https://drive.google.com/file/d/1SwOll-Ds0eHVGmnD6pZIw7AQoT8H2Jmc/view?usp=sharing' },
        { name: 'Certificate of Successful Efforts 2022', url: 'https://drive.google.com/file/d/1Pc89YT70VAC43ifhpV-lTH6wLNSvyDUx/view?usp=sharing' },
        { name: 'IKLC Traveller Mug 2022', url: 'https://drive.google.com/file/d/1hobt57KUZBuebZj1z1cD3Adt2VS35W_o/view?usp=sharing' },
        { name: 'Most Inspiring Educator Award 2022', url: 'https://drive.google.com/file/d/1j5-PE13tK_3jSsDOVV2U52NyCfCjnoaG/view?usp=sharing' },
        { name: 'Outstanding Leadership Award 2021', url: 'https://drive.google.com/file/d/14P0MSmSvqXFoA0krwBQKlV3eZsKT888j/view?usp=sharing' },
        { name: 'Plaque of Appreciation 2020', url: 'https://drive.google.com/file/d/14P0MSmSvqXFoA0krwBQKlV3eZsKT888j/view?usp=sharing' },
        { name: 'Special Recognition Award 2020', url: 'https://drive.google.com/file/d/1iYx2sMMUZUxHG3w9-WEOG7mKWtGZOeiy/view?usp=sharing' },
        { name: 'Special Recognition Award 2021', url: 'https://drive.google.com/file/d/14GyPWYKhZFr_ambjhQ-4ZhPu-nEXuOy9/view?usp=sharing' },
        { name: 'Special Recognition Award 2022', url: 'https://drive.google.com/file/d/1C8D-3RvsQe9a7TJL3hlVoDSJI8XlbIPM/view?usp=sharing' }
      ],
      faqs: [
        {
          q: 'What is the last date of registration for the 20th International Kangaroo Linguistic Contest 2023 in Pakistan?',
          a: 'The last date of submitting registration for the contest is Ocober 10, 2023.'
        },
        {
          q: 'Can our institution get registered for the International Kangaroo Linguistic Contest after the deadline?',
          a: 'Yes! Registration with late fee of Rs. 5,000 per institution till October 12, 2023. Registration with late fee of Rs. 10,000 per institution till October 14, 2023.'
        },
        {
          q: 'What happens if my institution sends registration application before the application deadline but it is received Late at Innovative learning office due to postal delays?',
          a: 'Registration can be denied in this case. Please, make sure that your application must reach Innovative learning office well in time and before the closing date.'
        },
        {
          q: 'Can we send the registration fee in cash ?',
          a: 'The registration fee can only be sent through the institution to INNOVATIVE LEARNING (KSF-Pakistan) in the form of Bank Draft/Pay Order/Online transfer'
        },
        {
          q: 'Can we send the registration fee through Cross Cheque/Money Order/Postal Order etc?',
          a: 'The registration fee cannot be accepted in any form other than Pay Order/Demand Draft/Online Transfer.'
        },
        {
          q: 'Where can we get the Pay Order/Bank Draft?',
          a: 'Please get your Pay Order/Bank Draft prepared in favour of \'Innovative learning\'.'
        },
        {
          q: 'What should be the title of the Pay Order/Bank Draft or to whom is it payable?',
          a: 'Please get your Pay Order/Bank Draft prepared in favour of \'Innovative learning\'.'
        },
        {
          q: 'Our Institution is not interested in hosting iklc. Can we still participate in the competition?',
          a: 'Participation in the contest is possible through the institution only. Individual participation is not possible in the IKLC.'
        },
        {
          q: 'What is the participation fee for participating in the IKLC in Pakistan?',
          a: 'The participation fee for IKLC 2023 in Pakistan is Rs. 1000 per student, which is collected by the participating institution and is forwarded to Innovative Learning.'
        },
        {
          q: 'What is the date of International Kangaroo Mathematics Contest in Pakistan every year?',
          a: 'International Kangaroo Mathematics Contest will be held in Pakistan on third Thursday of March, every year.'
        },
        {
          q: 'Can our institution get registered for the International Kangaroo Mathematics Contest after the deadline?',
          a: 'Yes! Registration with late fee of Rs. 5,000 (per institution) till February 06, 2023 and by paying double late fee of Rs. 10,000 (per institution) till February 08, 2023.'
        },
        {
          q: 'What happens if my institution sends registration application before the application deadline but it is received late at INNOVATIVE LEARNING due to postal delays?',
          a: 'Registration can be denied in this case. Please, make sure that your application must reach INNOVATIVE LEARNING (KSF-Pakistan) office before the closing date.'
        },
        {
          q: 'Can we send the registration fee in cash?',
          a: 'The registration fee can only be sent through the institution to INNOVATIVE LEARNING (KSF-Pakistan) in the form of Bank Draft / Pay Order / Online Transfer'
        },
        {
          q: 'What should be the title of the Pay Order / Bank Draft or to whom is it payable?',
          a: 'Please get your Pay Order/Bank Draft prepared in favour of \'Innovative Learning\'.'
        },
        {
          q: 'Our institution is not interested in hosting IKMC. Can we still participate in the contest?',
          a: 'Participation in the contest is possible through the institution only. Individual participation is not possible in the IKMC.'
        },
        {
          q: 'What is the minimum number of students required for an institution to participate?',
          a: 'Each participating school must register a minimum of 10 students to be eligible. Unfortunately, entries below this number cannot be processed.'
        },
        {
          q: 'Are calculators allowed during the contest?',
          a: 'No, the use of calculator, mobile phone or any other electronic device is not permitted.'
        },
        {
          q: 'What is the duration of the contest for different levels?',
          a: 'The duration varies by level - 2 hours for Pre Ecolier and Ecolier levels (Class I-IV), and 3 hours for Benjamin, Cadet, Junior, and Student levels (Class V-XII).'
        },
        {
          q: 'How is the scoring system structured?',
          a: 'Contest problems for each level are divided into three parts. Each problem in first, second and third part is worth 3 points, 4 points and 5 points respectively. There is a penalty of one point for each incorrect answer. If the question is left unanswered, it is worth 0 points. To avoid negative scores, each student begins with a credit of 24 to 30 points.'
        },
        {
          q: 'What language is used for the contest in Pakistan?',
          a: 'The language of the contest in Pakistan is English.'
        },
        {
          q: 'Are there international opportunities for winners?',
          a: 'Yes, each year, several International Summer Camps are organized for national winners of the contest. The locations, dates, duration, age of participants, and availability varies from year to year. Innovative Learning (Kangourou Sans Frontières – Pakistan) determines and coordinates the participation of the Pakistani students in the International Summer Camp.'
        },
        {
          q: 'Do all participants receive certificates?',
          a: 'Yes, all participating students receive a certificate.'
        },
        {
          q: 'Can students participate at a higher level than their current grade?',
          a: 'Yes, students participate at their grade level or at a higher level (if they attend accelerated math programs at their schools).'
        },
        {
          q: 'What type of problems can students expect?',
          a: 'The contest contents are covered in the mathematics curriculum. Solution of the problems requires creativity, logical thinking or a different perspective. Here lies the challenge.'
        },
        {
          q: 'How are the contest questions selected?',
          a: 'The competition questions are selected by International Committee that is composed by KSF members and include representatives from all participating countries. The representatives meet at an annual conference each fall, every year in a different country.'
        }
      ]
    }
  },
};

export const TEAM: TeamMember[] = [
  { name: 'Valiantsina Mamayeva', role: 'Chief Executive Officer (CEO)', image: 'https://picsum.photos/seed/ceo/400/400' },
  { name: 'Khalid Awan', role: 'Chief Operating Officer (COO)', image: 'https://picsum.photos/seed/coo/400/400' },
  
];

export const MOCK_RESULTS: ResultEntry[] = [
  { id: '1', name: 'Ahmed Khan', rollNumber: '2024-IKMC-001', contest: ContestType.IKMC, year: 2024, category: 'Junior', award: 'Gold Medal' },
  { id: '2', name: 'Sara Ahmed', rollNumber: '2024-IKSC-042', contest: ContestType.IKSC, year: 2024, category: 'Cadet', award: 'Silver Medal' },
  { id: '3', name: 'Zainab Fatima', rollNumber: '2023-IKLC-112', contest: ContestType.IKLC, year: 2023, category: 'Ecolier', award: 'Participation' },
];
