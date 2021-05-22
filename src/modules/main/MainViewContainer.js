import { compose, withState } from 'recompose';

import MainScreen from './MainView';

export default compose(
  withState('radioGroupsState', 'setRadioGroupsState', [0, 0]),
)(MainScreen);
