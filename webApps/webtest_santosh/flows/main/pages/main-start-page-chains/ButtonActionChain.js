define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class ButtonActionChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {object} params.event
     * @param {any} params.originalEvent
     * @param {string} params.name
     */
    async run(context, { event, originalEvent, name = '$variables.name' }) {
      const { $page, $flow, $application, $constants, $variables } = context;

      const toMainStart1 = await Actions.navigateToPage(context, {
        page: 'main-start-1',
  params: {
    name: $variables.name
  }
      });
    }
  }

  return ButtonActionChain;
});
