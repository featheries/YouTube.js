import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ContinuationItemView extends YTNode {
  static type = 'ContinuationItemView';

  trigger: string;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.trigger = data.trigger;
    this.endpoint = new NavigationEndpoint(data.continuationCommand);
  }
}