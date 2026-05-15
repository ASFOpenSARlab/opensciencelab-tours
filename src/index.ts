import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ITourManager } from 'jupyterlab-tour';
import { Notification } from '@jupyterlab/apputils';
// import type { ITourHandler } from 'jupyterlab-tour';
// import { oslIcon } from './icons';
import { infoIcon } from '@jupyterlab/ui-components';
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

        const tour = tourManager.createTour({
            id: 'opensciencelab-tours:intro',
            label: 'OpenScienceLab Intro',
            hasHelpEntry: true,
            icon: infoIcon,
            version: 20260513,
        });

        if(!tour){
            console.error("Error initializing tour in opensciencelab-tours");
            return
        }

        tour.addStep({
            "content": "Welcome to OpenSARLab",
            "target": "#main",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "center",
            "showProgress": false
        });

        tour.addStep({
            "content": "The JupyterLab top bar contains helpful menus, tools, and information for your OpenSARLab session.",
            "target": "#jp-top-panel",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "top",
            "showProgress": false
        });

        tour.addStep({
            "content": "The latest changes for your notebooks and other repositories can be pulled here.",
            "target": "#nbgitpuller-jl-interface-update-btn",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "top",
            "showProgress": false
        });

        tour.addStep({
            "content": "This shows how much storage space has been used on your server. If this reaches 100%, your server may become inoperable.",
            "target": "#opensarlab-diskspace-widget",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "top",
            "showProgress": false
        });

        tour.addStep({
            "content": "You can logout and shutdown your server here. Shutting down your server when not in use reduces OpenSARLab spending and allows us to support more users.",
            "target": "#opensarlab-controlbtn",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "top",
            "showProgress": false
        });

        tour.addStep({
            "content": "This allows you to capture a GIF of your screen. Use this tool to record an issue when submitting a support request to the OpenScienceLab admin.",
            "target": "#opensarlab-frontend-gitcap-btn",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "top",
            "showProgress": false
        });

        tour.addStep({
            "content": "You can find further documentation here.",
            "target": "#opensarlab-doc-link-widget",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "top",
            "showProgress": false
        });

        tour.addStep({
            "content": "You can navigate your Jupyter Notebooks through the file browser. Follow the navigation directions to continue the tour.",
            "target": "#main",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "center",
            "showProgress": false,
                "data":{
                    "nextCommand": "filebrowser:activate"
                }
        });

        tour.addStep({
            "content": "This is your file browser. The next few steps will go over some of the folders present in your file system.",
            "target": ".lm-Widget.lm-Panel.jp-FileBrowser-Panel",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "right",
            "showProgress": false,
            "spotlightClicks": true
        });

        tour.addStep({
            "content": "Click here to go to your root directory.",
            "target": "[data-path=\"/\"]",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "right",
            "showProgress": false,
            "spotlightClicks": true,
            "data":{
                "clickBlocked": true,
                "clickTargetElement": "[data-icon=\"ui-components:folder\"][width=\"16\"]",
                "clickType": "click"
            }
        });

        tour.addStep({
            "content": "Double click here to open notebooks.",
            "target": "[title^='Name: notebooks']",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "right",
            "showProgress": false,
            "spotlightClicks": true,
            "data":{
                "clickBlocked": true,
                "clickTargetElement": "[title^='Name: notebooks']",
                "clickType": "dblclick"
            }
        });

        tour.addStep({
            "content": "Here you can find assorted notebooks. Explore the folders to find available notebooks.",
            "target": ".lm-Widget.lm-Panel.jp-FileBrowser-Panel",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "right",
            "showProgress": false,
            "spotlightClicks": false
        });

        tour.addStep({
            "content": "Go back to your root directory.",
            "target": "[data-path=\"/\"]",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "right",
            "showProgress": false,
            "spotlightClicks": true,
            "data":{
                "clickBlocked": true,
                "clickTargetElement": "[data-icon=\"ui-components:folder\"][width=\"16\"]",
                "clickType": "click"
            }
        });

        tour.addStep({
            "content": "There are cookbooks of data recipes located within the Data_Recipe_Jupyter_Books directory. Navigate to that directory.",
            "target": "[title^='Name: Data_Recipe_Jupyter_Books']",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "right",
            "showProgress": false,
            "spotlightClicks": true,
            "data":{
                "clickBlocked": true,
                "clickTargetElement": "[title^='Name: Data_Recipe_Jupyter_Books']",
                "clickType": "dblclick"
            }
        });

        tour.addStep({
            "content": "Here you can find data recipe cookbooks, open a cookbook such as opensarlab_MintPy_Recipe_Book by double clicking on one before moving on to the next step",
            "target": ".lm-Widget.lm-Panel.jp-FileBrowser-Panel",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "right",
            "showProgress": false,
            "spotlightClicks": true,
            "data":{
                "clickBlocked": true,
                "clickTargetElement": ".jp-DirListing-item",
                "clickType": "dblclick"
            }
        });

        tour.addStep({
            "content": "You can explore a data recipe cookbook more easily using Jupyter-Book Table of Contents. Click here to explore.",
            "target": "[title=\"Jupyter-Book Table of Contents\"]",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "right",
            "showProgress": false,
            "spotlightClicks": true,
            "data":{
                "clickBlocked": true,
                "clickTargetElement": "[title=\"Jupyter-Book Table of Contents\"]",
                "clickType": "click"
            }
        });

        tour.addStep({
            "content": "Here you can see the contents of the cookbook, you can click around to open the data recipes. Note that if you have not navigated to a Cookbook in the file browser, this will display an error stating that this is \"Not a Jupyter-Book\".",
            "target": "[id='@jupyterlab-sidepanel/jb-toc'",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "right",
            "showProgress": false,
            "spotlightClicks": true,
            "data":{
                "nextCommand": "terminal:create-new"
            }
        });

        tour.addStep({
            "content": "To delete a folder that is not empty, in a terminal run `rm -rf <Your Folder Path>`",
            // "target": "#main",
            "target": ".lm-Widget.jp-Terminal",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "top",
            "showProgress": false,
            "spotlightClicks": true,
            "data":{
                "nextCommand": "helpmenu:open"
            }
        });

        // const helpMenuEntry = Array.from(document.querySelectorAll('div')).find(el => el.textContent.trim() === 'Your Text')?.parentElement;
        tour.addStep({
            "content": "You can replay this tour from the Help menu under 'OpenScienceLab Intro'",
            "target": "#jp-mainmenu-help",
            "disableBeacon": false,
            "disableOverlay": false,
            "disableOverlayClose": true,
            "locale": {},
            "placement": "top",
            "showProgress": false
        });

        const waitForElement = (selector: string, timeout = 5000): Promise<Element | null> => {
            return new Promise(resolve => {
                const elem = document.querySelector(selector);
                if (elem) return resolve(elem);

                const observer = new MutationObserver(() => {
                    const el = document.querySelector(selector);
                    if (el) {
                        observer.disconnect();
                        resolve(el);
                    }
                });

                observer.observe(document.body, { childList: true, subtree: true });

                setTimeout(() => {
                    observer.disconnect();
                    resolve(null);
                }, timeout);
            });
        };


        tour.stepChanged.connect((_, data) => {
            console.log(data)
            // Execute requested command
            // https://jupyterlab.readthedocs.io/en/4.4.x/user/commands.html
            const stepData = data.step.data as any;
            if (stepData?.command){
                // commands.execute(stepData.command)

                // hide the tooltip while command runs
                const tooltip = document.querySelector('.react-joyride-portal') as HTMLElement;
                if (tooltip) tooltip.style.visibility = 'hidden';

                commands.execute(stepData.command).then(async () => {
                    await waitForElement(String(data.step.target), 5000);
                    if (tooltip) tooltip.style.visibility = 'visible';
                });
            }

            // Handle step changing
            switch (data.type) {
                case 'step:before':
                    // Wait for required elements
                    // const nextStep = tour.steps[data.index+1] ?? null;
                    (async()=>{
                        await waitForElement(String(data.step.target), 5000);
                    })();

                    // // Open required elements
                    // if (data.step.target === `[title^='File Browser']`) {
                    //     commands.execute('filebrowser:activate');
                    // }

                    // Get the Next button

                    const nextBtn = document.querySelector(
                        '[aria-label="Next"][data-action="primary"]'
                    ) as HTMLElement;
                    //// Automatic navigation
                    // Requires step data
                    // - clickBlocked
                    // - clickTargetElement
                    // - clickType (Optional)

                    if (stepData?.clickBlocked && stepData?.clickTargetElement) {
                        const target = document.querySelector(stepData.clickTargetElement);
                        console.log("Opensciencelab-tours TARGET", target)
                        if (!target) return;

                        // Hide next button
                        if(nextBtn){
                            nextBtn.style.display = 'none';
                        }

                        // Create click listener
                        const handler = async (e: Event) => {
                            const el = e.target as HTMLElement;
                            if (!el.closest(stepData.clickTargetElement)){
                                e.stopPropagation();
                                e.preventDefault();
                                return;
                            }

                            // Remove listener
                            // Must remove on tour exit as well
                            document.removeEventListener(stepData["clickType"] ?? 'click', handler, true);

                            // Execute nextCommand
                            if(stepData["nextCommand"]){
                                await commands.execute(stepData.nextCommand)
                            }

                            // Wait for required elements to populate or timeout
                            const nextStep = tour.steps[data.index+1] ?? null;
                            if(nextStep){
                                const nextSelector = nextStep.target;
                                await waitForElement(String(nextSelector), 5000)
                            }

                            // Go to next step
                            nextBtn.click();
                        };

                        document.addEventListener(stepData["clickType"] ?? 'click', handler, true);
                        
                    }else if(stepData?.nextCommand){
                        // Execute nextCommand on next button press
                        
                        // Create click listener
                        const handler = async (e: Event) => {
                            const el = e.target as HTMLElement;
                            if (el !== nextBtn){
                                return;
                            }

                            e.stopPropagation();
                            e.preventDefault();

                            // Remove listener
                            // Must remove on tour exit as well
                            document.removeEventListener('click', handler, true);

                            // Execute nextCommand
                            await commands.execute(stepData.nextCommand)

                            // Wait for required elements to populate or timeout
                            const nextStep = tour.steps[data.index+1] ?? null;
                            if(nextStep){
                                const nextSelector = nextStep.target;
                                console.log(nextSelector)
                                const el = await waitForElement(String(nextSelector), 5000)
                                console.log('found', el);
                            }
                            // await new Promise(res => setTimeout(res, 300));
                            nextBtn.click();
                        };

                        document.addEventListener('click', handler, true);

                    }
                break;
            }
        });



        Notification.info('New to OpenScienceLab? Take a quick tour!', {
        autoClose: 3000,
        actions: [
            {
                label: 'Start Tour',
                caption: 'Launch the welcome tour',
                callback: () => {
                    app.commands.execute('jupyterlab-tour:launch', {
                        id: 'opensciencelab-tours:intro',
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

        if (tour) {
        app.commands.execute('jupyterlab-tour:launch', {
            id: 'opensciencelab-tours:intro',
            force: false
        });
        }


    }
};

export default plugin;
