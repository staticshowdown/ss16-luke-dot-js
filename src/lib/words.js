import {shuffle, uniq} from 'lodash';
import buzzwords from 'buzzwords';
import weasels from 'weasels';
import dc from 'dale-chall';
import spache from 'spache';
import fillers from 'fillers';
import hedges from 'hedges';
import common from 'most-common-words';
import yes from 'yes-no-words/yes';
import no from 'yes-no-words/no';
import superb from 'superb/words';
import cats from 'cat-names/cat-names';
import three from './3000Words';
import commonWords from './commonWords';

export default shuffle(uniq([
  ...three,
  ...commonWords,
  ...superb,
  ...cats,
  ...yes,
  ...no,
  ...common,
  ...buzzwords,
  ...weasels,
  ...dc,
  ...spache,
  ...fillers,
  ...hedges
]).map((word) => ({word})));
