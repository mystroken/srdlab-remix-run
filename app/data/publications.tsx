import type { PublicationType } from "~/types";
import { PUB1, PUB2, PUB3, PUB4 } from "~/data/images";

export const publications: PublicationType[] = [
  {
    slug: "1",
    image: PUB2,
    date: "pz-1",
    delay: "pd-1",
    title: "pt-1",
    header: "ph-1",
    content1: "pc-11",
    content2: "pc-12",
    content3: "pc-13",
    content4: [],
  },
  {
    slug: "2",
    image: PUB1,
    date: "pz-2",
    delay: "pd-2",
    title: "pt-2",
    header: "ph-2",
    content1: "pc-21",
    content2: "pc-22",
    content3: "pc-23",
    content4: ["pc-241", "pc-242"],
  },
  {
    slug: "3",
    image: PUB3,
    date: "pz-3",
    delay: "pd-3",
    title: "pt-3",
    header: "ph-3",
    content1: "pc-31",
    content2: "pc-32",
    content3: "pc-33",
    content4: ["pc-341", "pc-342"],
  },
  {
    slug: "4",
    image: PUB4,
    date: "pz-4",
    delay: "pd-4",
    title: "pt-4",
    header: "ph-4",
    content1: "pc-41",
    content2: "pc-42",
    content3: "pc-43",
    content4: ["pc-441", "pc-442"],
  },
];

