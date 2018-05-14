import { connect } from '../store';
import Home from '../components/Home';

export const HomeContainer = connect(state => (
  {
    data: state.data,
    loading: state.loading,
    ...state

  }
))(Home)
