interface WarningType {
  [key: string]: string;
}

const warning: WarningType = {
  forbiddenInput: 'this key was not registered by any of functions',
};

export default warning;