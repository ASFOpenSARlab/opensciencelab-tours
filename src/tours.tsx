// import type { ILabShell, JupyterFrontEnd } from '@jupyterlab/application';

// import * as React from 'react';



// export async function addToolsTour():void{
//     const { commands } = app;
// // Add a Tour - returns the Tour or null if something went wrong
// const tour = (await app.commands.execute('jupyterlab-tour:add', {
//   tour: {
//     // Tour must be of type ITour - see src/tokens.ts
//     id: 'test-jupyterlab-tour:welcome',
//     label: 'Welcome Tour',
//     hasHelpEntry: true,
//     steps: [
//       // Step must be of type IStep - see src/tokens.ts
//       {
//         content:
//           'The following tutorial will point out some of the main UI components within JupyterLab.',
//         placement: 'center',
//         target: '#jp-main-dock-panel',
//         title: 'Welcome to Jupyter Lab!'
//       },
//       {
//         content:
//           'This is the main content area where notebooks and other content can be viewed and edited.',
//         placement: 'left-end',
//         target: '#jp-main-dock-panel',
//         title: 'Main Content'
//       }
//     ]
//     // can also define `options`
//   }
// })) as ITourHandler;
// if (tour) {
//   app.commands.execute('jupyterlab-tour:launch', {
//     id: 'test-jupyterlab-tour:welcome',
//     force: false // Optional, if false the Tour will start only if the user have not seen or skipped it
//   });
// }
// }

// // namespace OSLTours{
// //     export namespace JupyterLab{
// //         export function addToolsTour(
// //             manager: ITourManager,
// //             commands: CommandRegistry
// //         ): void{
            
// //         }
// //     }
// // }

// // export function addTours(
// //   manager: ITourManager,
// //   app: JupyterFrontEnd,
// //   nbTracker?: INotebookTracker
// // ): void {
// //   const { commands, shell } = app;
// //   switch (app.name) {
// //     case 'Jupyter Notebook':
// //       OSLTours.Notebook.addWelcomeTour(manager, commands);
// //       OSLTours.JupyterLab.addNotebookTour(
// //         manager,
// //         commands,
// //         shell as ILabShell,
// //         nbTracker,
// //         'Jupyter Notebook'
// //       );
// //       break;
// //     default:
// //       OSLTours.JupyterLab.addWelcomeTour(manager, commands);
// //       OSLTours.JupyterLab.addNotebookTour(
// //         manager,
// //         commands,
// //         shell as ILabShell,
// //         nbTracker
// //       );
// //   }
// // }


// export const managerTour = {
//   id: 'jupyterlab-conda:tour',
//   label: 'Conda Packages Manager Tour',
//   hasHelpEntry: true,
//   steps: [
//     {
//       content: (
//         <p>
//           Thanks for installing <em>Gator</em>.<br />
//           Let&apos;s have a tour of the UI.
//         </p>
//       ),
//       placement: 'center',
//       target: `.${CONDA_WIDGET_CLASS}`,
//       title: 'Conda Packages Manager'
//     }
//   ]
// };