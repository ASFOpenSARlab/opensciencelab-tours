import { addTourNavigation } from './tour_helpers';
import { CommandRegistry } from '@lumino/commands';
import { ITourManager } from 'jupyterlab-tour';
import { infoIcon } from '@jupyterlab/ui-components';
import * as React from 'react';

export const OPENSCIENCELABINTROID = 'opensciencelab-tours:intro';

export function createOpenScienceLabIntroTour(
  tourManager: ITourManager,
  commands: CommandRegistry
) {
  // When editing a tour, increment its version
  // Version format is YYYYMMDD

  const tour = tourManager.createTour({
    id: OPENSCIENCELABINTROID,
    label: 'OpenScienceLab Intro',
    hasHelpEntry: true,
    icon: infoIcon,
    version: 20260519
  });

  if (!tour) {
    console.error(`Error initializing tour ${OPENSCIENCELABINTROID}`);
    return;
  }

  tour.addStep({
    content: 'Welcome to OpenScienceLab',
    target: '#main',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'center',
    showProgress: false
  });

  tour.addStep({
    content:
      'The JupyterLab top bar contains helpful menus, tools, and information for your OpenScienceLab session.',
    target: '#jp-top-panel',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'top',
    showProgress: false
  });

  tour.addStep({
    content: (
      <p>
        The latest changes for your notebooks and other repositories can be
        pulled here.
        <br />
        <br />
        <b>
          Click the update button to continue the tour and pull your git
          repositories.
        </b>
      </p>
    ),
    target: '#nbgitpuller-jl-interface-update-btn',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'top',
    spotlightClicks: true,
    showProgress: false,
    data: {
      clickBlocked: true,
      clickTargetElement:
        '.nbgitpuller-jl-interface-update-btn.jp-ToolbarButtonComponent',
      clickType: 'click'
    }
  });

  tour.addStep({
    content:
      'This will continue downloading in the background as we continue the tour.',
    target: '#nbgitpuller-jl-interface-update-btn',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'top',
    showProgress: false
  });

  tour.addStep({
    content:
      'This shows how much storage space has been used on your server. If this reaches 100%, your server may become inoperable.',
    target: '#opensarlab-diskspace-widget',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'top',
    showProgress: false
  });

  tour.addStep({
    content:
      'You can logout and shutdown your server here. Shutting down your server when not in use reduces OpenScienceLab spending and allows us to support more users.',
    target: '#opensarlab-controlbtn',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'top',
    showProgress: false
  });

  tour.addStep({
    content:
      'This allows you to capture a GIF of your screen. Use this tool to record an issue when submitting a support request to the OpenScienceLab admin.',
    target: '#opensarlab-frontend-gitcap-btn',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'top',
    showProgress: false
  });

  tour.addStep({
    content: 'You can find further documentation here.',
    target: '#opensarlab-doc-link-widget',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'top',
    showProgress: false,
    data: {
      nextCommand: 'filebrowser:activate'
    }
  });

  // tour.addStep({
  //   content:
  //     'You can navigate your Jupyter Notebooks through the file browser. We will explore some of the provided notebooks.',
  //   target: '#main',
  //   disableBeacon: false,
  //   disableOverlay: false,
  //   disableOverlayClose: true,
  //   locale: {},
  //   placement: 'center',
  //   showProgress: false,
  //   data: {
  //     nextCommand: 'filebrowser:activate'
  //   }
  // });

  tour.addStep({
    content:
      'This is your file browser. The next few steps will go over some of the OpenScienceLab provided folders present in your file system.',
    target: '.lm-Widget.lm-Panel.jp-FileBrowser-Panel',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'right',
    showProgress: false,
    spotlightClicks: true
  });

  tour.addStep({
    content:
      'Click here now to go to your home directory and continue the tour',
    target: '[data-path="/"]',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'right',
    showProgress: false,
    spotlightClicks: true,
    data: {
      clickBlocked: true,
      clickTargetElement: '[data-icon="ui-components:folder"][width="16"]',
      clickType: 'click'
    }
  });

  tour.addStep({
    content: 'Double click here to open notebooks.',
    target: "[title^='Name: notebooks']",
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'right',
    showProgress: false,
    spotlightClicks: true,
    data: {
      clickBlocked: true,
      clickTargetElement: "[title^='Name: notebooks']",
      clickType: 'dblclick'
    }
  });

  tour.addStep({
    content: 'Explore the folders to find available notebooks.',
    target: '.lm-Widget.lm-Panel.jp-FileBrowser-Panel',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'right',
    showProgress: false,
    spotlightClicks: false
  });

  tour.addStep({
    content: 'Go back to your home directory.',
    target: '[data-path="/"]',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'right',
    showProgress: false,
    spotlightClicks: true,
    data: {
      clickBlocked: true,
      clickTargetElement: '[data-icon="ui-components:folder"][width="16"]',
      clickType: 'click'
    }
  });

  tour.addStep({
    content: (
      <div>
        <p>
          There are cookbooks of data recipes located within the{' '}
          <code>
            <b>Data_Recipe_Jupyter_Books</b>
          </code>{' '}
          directory.
        </p>
        <p>Navigate to that directory.</p>
      </div>
    ),
    target: "[title^='Name: Data_Recipe_Jupyter_Books']",
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'right',
    showProgress: false,
    spotlightClicks: true,
    data: {
      clickBlocked: true,
      clickTargetElement: "[title^='Name: Data_Recipe_Jupyter_Books']",
      clickType: 'dblclick'
    }
  });

  tour.addStep({
    content: (
      <div>
        <p>
          Here you can find data recipe cookbooks, open a cookbook such as{' '}
          <code>
            <b>opensarlab_MintPy_Recipe_Book</b>
          </code>{' '}
          by double clicking on it before moving on to the next step
        </p>
      </div>
    ),
    target: '.lm-Widget.lm-Panel.jp-FileBrowser-Panel',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'right',
    showProgress: false,
    spotlightClicks: true,
    data: {
      clickBlocked: true,
      clickTargetElement: '.jp-DirListing-item',
      clickType: 'dblclick'
    }
  });

  tour.addStep({
    content: (
      <p>
        You can explore a data recipe cookbook more easily using{' '}
        <code>
          <b>Jupyter-Book Table of Contents</b>
        </code>
        . Click here to explore.
      </p>
    ),
    target: '[title="Jupyter-Book Table of Contents"]',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'right',
    showProgress: false,
    spotlightClicks: true,
    data: {
      clickBlocked: true,
      clickTargetElement: '[title="Jupyter-Book Table of Contents"]',
      clickType: 'click'
    }
  });

  tour.addStep({
    content: (
      <div>
        <p>
          Here you can see the contents of the cookbook, you can click around to
          open the data recipes.
        </p>
        <br />
        <br />
        <p>
          Note that if you have not navigated to a Cookbook in the file browser,
          this will display an error stating that this is "Not a Jupyter-Book".
        </p>
      </div>
    ),
    target: "[id='@jupyterlab-sidepanel/jb-toc'",
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'right',
    showProgress: false,
    spotlightClicks: true,
    data: {
      nextCommand: 'terminal:create-new'
    }
  });

  // tour.addStep({
  //   content: (
  //     <p>To delete a folder that is not empty, in a terminal run <code><b>rm -rf <Your Folder Path></b></code></p>
  //   ),
  //   target: '.lm-Widget.jp-Terminal',
  //   disableBeacon: false,
  //   disableOverlay: false,
  //   disableOverlayClose: true,
  //   locale: {},
  //   placement: 'top',
  //   showProgress: false,
  //   spotlightClicks: true,
  //   data: {
  //     nextCommand: 'helpmenu:open'
  //   }
  // });

  tour.addStep({
    content: (
      <p>
        You can replay this tour from the Help menu under{' '}
        <code>
          <b>OpenScienceLab Intro</b>
        </code>
      </p>
    ),
    target: '#jp-mainmenu-help',
    disableBeacon: false,
    disableOverlay: false,
    disableOverlayClose: true,
    locale: {},
    placement: 'top',
    showProgress: false
  });

  addTourNavigation(tour, commands);
}
