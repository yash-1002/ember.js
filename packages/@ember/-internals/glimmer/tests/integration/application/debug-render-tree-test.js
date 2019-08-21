import { moduleFor, ApplicationTestCase } from 'internal-test-helpers';

import { ENV } from '@ember/-internals/environment';
import { captureRenderTree } from '@ember/-internals/glimmer';

moduleFor(
  'Application test: debug render tree',
  class extends ApplicationTestCase {
    constructor() {
      super(...arguments);
      this._DEBUG_RENDER_TREE = ENV._DEBUG_RENDER_TREE;
      ENV._DEBUG_RENDER_TREE = true;
    }

    teardown() {
      super.teardown();
      ENV._DEBUG_RENDER_TREE = this._DEBUG_RENDER_TREE;
    }

    async '@test it returns a render tree'(assert) {
      this.addTemplate('application', 'Hello world!');

      await this.visit('/');

      assert.deepEqual(captureRenderTree(), [
        {
          type: 'route',
          name: 'application',
          instance: this.owner.lookup('controller:application'),
          children: [],
        },
      ]);
    }

    get owner() {
      return this.applicationInstance;
    }
  }
);
