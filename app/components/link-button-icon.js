import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  altTag: '',
  href: '',
  iconName: '',

  attributeBindings: ['href', 'role', 'target'],
  classNames: ['btn', 'btn-secondary'],
  role: 'button',
  tagName: 'a',
  target: '_blank',

  iconSrc: computed('iconName', function() {
    let iconName = this.get('iconName');

    return `assets/icons/${iconName}`;
  })
});
