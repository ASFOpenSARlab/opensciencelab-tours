import { ITourHandler } from 'jupyterlab-tour';
import { CommandRegistry } from '@lumino/commands';

export function waitForElement(
  selector: string,
  timeout = 5000
): Promise<Element | null> {
  return new Promise(resolve => {
    const elem = document.querySelector(selector);
    if (elem) {
      return resolve(elem);
    }

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
}

export function addTourNavigation(
  tour: ITourHandler,
  commands: CommandRegistry
): void {
  tour.stepChanged.connect((_, data) => {
    // Execute requested command
    // https://jupyterlab.readthedocs.io/en/4.4.x/user/commands.html
    const stepData = data.step.data as any;

    // Handle step changing
    switch (data.type) {
      case 'step:before': {
        // Wait for required elements
        (async () => {
          await waitForElement(String(data.step.target), 5000);
        })();

        // Get the Next button
        const nextBtn = document.querySelector(
          '[aria-label="Next"][data-action="primary"]'
        ) as HTMLElement;

        // Remove Close button
        const closeBtn = document.querySelector(
          '[data-action="close"]'
        ) as HTMLElement;
        closeBtn.style.display = 'none';

        // Automatic navigation
        if (stepData?.clickBlocked && stepData?.clickTargetElement) {
          // Handle clickBlocked steps
          // Requires step data
          // - clickBlocked
          // - clickTargetElement
          // - clickType (Optional)

          // Hide next button
          if (nextBtn) {
            nextBtn.style.display = 'none';
          }

          // Create click listener
          const handler = async (e: Event) => {
            const el = e.target as HTMLElement;
            if (
                !(
                  el.closest(stepData.clickTargetElement)
                  || el.matches("[data-action=\"skip\"]")
                  || el.matches("[data-action=\"back\"]")
                )
              ) {
              e.stopPropagation();
              e.preventDefault();
              return;
            }

            // Remove listener
            // Must remove on tour exit as well
            document.removeEventListener(
              stepData['clickType'] ?? 'click',
              handler,
              true
            );

            // If clicked skip or back button, click again without listener
            if (el.matches("[data-action=\"skip\"]") || el.matches("[data-action=\"back\"]")){
              el.click();
            }

            // Execute nextCommand
            if (stepData['nextCommand']) {
              await commands.execute(stepData.nextCommand);
            }

            // Wait for required elements to populate or timeout
            const nextStep = tour.steps[data.index + 1] ?? null;
            if (nextStep) {
              const nextSelector = nextStep.target;
              await waitForElement(String(nextSelector), 5000);
            }

            // Go to next step
            nextBtn.click();
          };

          document.addEventListener(
            stepData['clickType'] ?? 'click',
            handler,
            true
          );
        } else if (stepData?.nextCommand) {
          // Handle commands for non clickBlocked steps
          // Execute nextCommand on next button press

          // Create click listener
          const handler = async (e: Event) => {
            const el = e.target as HTMLElement;
            if (
                !(
                  el === nextBtn
                  || el.matches("[data-action=\"skip\"]")
                  || el.matches("[data-action=\"back\"]")
                )
              ) {
              return;
            }

            e.stopPropagation();
            e.preventDefault();

            // Remove listener
            // Must remove on tour exit as well
            document.removeEventListener('click', handler, true);

            // If clicked skip or back button, click again without listener
            if (el.matches("[data-action=\"skip\"]") || el.matches("[data-action=\"back\"]")){
              el.click();
            }

            // Execute nextCommand
            await commands.execute(stepData.nextCommand);

            // Wait for required elements to populate or timeout
            const nextStep = tour.steps[data.index + 1] ?? null;
            if (nextStep) {
              const nextSelector = nextStep.target;
              await waitForElement(String(nextSelector), 5000);
            }
            nextBtn.click();
          };

          document.addEventListener('click', handler, true);
        }
        break;
      }
    }
  });
}
