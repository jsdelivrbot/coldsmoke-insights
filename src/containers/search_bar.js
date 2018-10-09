import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {fetchSearch} from '../actions/index';
import {bindActionCreators } from "redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      search: '',
    };
  this.handleChange=this.handleChange.bind(this);
  this.handleFormSubmit=this.handleFormSubmit.bind(this);
}

  handleChange(term) {
    this.setState({
      search: term,
    });
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
      <div>
        <TextField
          id="search"
          label="Search"
          className={classes.textField}
          value={this.state.search}
          onChange={event => this.handleChange(event.target.value)}
          margin="normal"
        />
         <Button type="submit" variant="text" color="primary" >Search</Button>
       </div>
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
