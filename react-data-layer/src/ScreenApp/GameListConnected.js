import { connect } from 'react-redux';
import { pick } from 'lodash-es';

import {
  addGame,
} from 'store/games/actions';
import GameList from 'components/GameList';

function mapStateToProps(state) {
  return pick(state.games, [
    'games',
  ]);
}
const mapDispatchToProps = {
  addGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);