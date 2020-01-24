import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, addTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addTags: tags => dispatch(addTags((tags))),
  removeTags: tags => dispatch(addTags((tags))),
  changeDuration: (type, value) => dispatch(changeDuration({type,value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
