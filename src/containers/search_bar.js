import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchSearch} from '../actions/index';
import { bindActionCreators } from "redux";
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

class SearchBar extends Component {
constructor(props){
  super(props);
  this.state = {
      search: 'Type Address',
    };
  this.handleChange=this.handleChange.bind(this);
  this.handleFormSubmit=this.handleFormSubmit.bind(this);
}

  handleChange = search => event => {
    this.setState({
      search: event.target.value,
    });
    console.log(this.state.search);
  }

  handleFormSubmit(event) {
      event.preventDefault();
      this.props.fetchSearch(this.state.search);
      this.setState({
        search: ""
      });
    }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} onSubmit={this.handleFormSubmit} noValidate autoComplete="off">
        <TextField
          id="search"
          label="Search"
          className={classes.textField}
          value={this.state.search}
          onChange={this.handleChange('search')}
          margin="normal"
        />
        <span className="input-group-btn">
         <button type="submit" className="btn btn-secondary">Submit</button>
       </span>
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBar));
