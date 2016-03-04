import React, {Component} from 'react';

import StoryItemSelect from './StoryItemSelect';
import words from 'l/words';

export default class WordSelect extends Component {
  render() {
    return (
      <StoryItemSelect
        customAllowCreate
        placeholder='Type a word!'
        labelKey='word'
        valueKey='word'
        options={words}
        className='select--word'
        {...this.props}
      />
    );
  }
}
