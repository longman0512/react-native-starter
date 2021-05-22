import { compose, withState } from 'recompose';

import AboutScreen from './AboutView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(AboutScreen);
