import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ITourManager } from 'jupyterlab-tour';
import { Notification } from '@jupyterlab/apputils';
import { createOpenScienceLabIntroTour, OPENSCIENCELABINTROID } from './tours'
/**
 * Initialization data for the opensciencelab-tours extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
    id: 'opensciencelab-tours:plugin',
    description: 'Tours for OpenScienceLab',
    autoStart: true,
    requires: [ITourManager],
    activate: async (app: JupyterFrontEnd, tourManager: ITourManager) => {
        console.log('JupyterLab extension opensciencelab-tours is activated!');

        const { commands } = app

        createOpenScienceLabIntroTour(tourManager, commands);

        // Add Notifcation for OpenScienceLab Tour
        Notification.info('New to OpenScienceLab? Take a quick tour!', {
            autoClose: 30000,
            actions: [
                {
                    label: 'Start Tour',
                    caption: 'Launch the welcome tour',
                    callback: () => {
                        app.commands.execute('jupyterlab-tour:launch', {
                            id: OPENSCIENCELABINTROID,
                            force: true
                        });
                    }
                },
                {
                    label: 'Dismiss',
                    callback: () => {}
                }
            ]
        });

        // Launch intro tour if user has not seen it
        app.commands.execute('jupyterlab-tour:launch', {
            id: OPENSCIENCELABINTROID,
            force: false
        });


    }
};

export default plugin;
