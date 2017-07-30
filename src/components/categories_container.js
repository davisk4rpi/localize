import React, { Component } from 'react';
import { Grid, Header, Icon, Segment} from 'semantic-ui-react';

export default class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategories: [],
      categoryList: [
        'Arts and Culture',
        'Budgets',
        'Business',
        'Crime',
        'Environment',
        'Food & Agriculture',
        'Health',
        'Housing',
        'Infrastructure',
        'Parks & Recreation',
        'Social Services',
        'Taxes',
        'Transportation'
      ]
    }
  }

  toggleCategorySelection = (name) => {
    const {categoryList, selectedCategories} = this.state;

    if (selectedCategories.includes(name)) {
      //remove it
      const i = selectedCategories.indexOf(name);
      selectedCategories.splice(i, 1);
    }
    else {
      //add it
      selectedCategories.push(name);
    }

    const currentlySelected = categoryList.filter(itemName => {
      return selectedCategories.includes(itemName);
    });

    this.setState({selectedCategories: currentlySelected});
  }

  render() {
    const {selectedCategories, categoryList} = this.state;

    const list = categoryList.map( name => {
      const selected = selectedCategories.includes(name);
      let plusOrMinus = selected ? <Icon circular name="minus" size="small" /> : <Icon circular name="plus" size="small" />;
      return (
        <Grid.Column
          textAlign='center'
          onClick={() => this.toggleCategorySelection(name)}
          className="category-box"
          key={name}
        >
          <Segment>
            {plusOrMinus}
            <Header>{name}</Header>
          </Segment>
        </Grid.Column>
      );
    });

    return(
      <Grid centered padded id="categories-page" columns={2}>
          {list}
      </Grid>
    );
  }
}
