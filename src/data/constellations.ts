export type Constellation = {
  id: string;
  name: string;
  brief: string;
  description: string;
  story: string;
};

export const constellations: Constellation[] = [
  {
    id: 'orion',
    name: 'Orion',
    brief: 'The Hunter constellation',
    description: 'Orion is one of the most recognizable constellations in the night sky.',
    story: 'In Greek mythology, Orion was a giant hunter who was placed among the stars by Zeus after his death.'
  },
  {
    id: 'ursa-major',
    name: 'Ursa Major',
    brief: 'The Great Bear',
    description: 'Ursa Major contains the famous Big Dipper asterism.',
    story: 'Various cultures view the bear as a powerful animal; the Greek myth tells of Callisto, turned into a bear by Hera.'
  },
  {
    id: 'cassiopeia',
    name: 'Cassiopeia',
    brief: 'The Queen of Ethiopia',
    description: 'Cassiopeia is a distinctive W-shaped constellation.',
    story: 'Greek legend says Cassiopeia boasted about her beauty, leading to her placement in the heavens as a reminder of hubris.'
  }
];
