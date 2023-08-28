interface FlagsType {
  [key: string]: string;
}

const flags: FlagsType = {
  global: 'g',
  dotAll: 's',
  sticky: 'y',
}

export default flags;