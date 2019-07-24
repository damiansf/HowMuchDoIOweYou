import Main from './main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionDefs from './actions/actionDefs';

function mapStateToProps(state) {
  return {
    emails: state.emails,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionDefs, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
