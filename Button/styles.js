import { StyleSheet } from 'react-native';

const Base = StyleSheet.create({
  main: {
    padding: 10,
    borderRadius: 3,
  },
  label: {
    color: 'white',
  },
  rounded: {
    borderRadius: 20,
  },
});

const Danger = StyleSheet.create({
  main: {
    backgroundColor: '#1c7da5',
  },
});

const Info = StyleSheet.create({
  main: {
    backgroundColor: '#1c7da5',
  },
});

const Success = StyleSheet.create({
  main: {
    backgroundColor: '#1c7da5',
  },
});

const Default = StyleSheet.create({
  main: {
    backgroundColor: '#1c7da5',
  },
  label: {
    color: 'white',
  },
});

export {
  Base,
  Danger,
  Info,
  Success,
  Default,
};