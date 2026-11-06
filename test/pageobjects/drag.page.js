import menuPage from './menu.page.js';

/**
 * Page/Screen Object para a tela Drag and Drop (quebra-cabeça).
 */
class DragPage {
    get screenTitle() {
        return $('//android.widget.TextView[@text="Drag and Drop"]');
    }

    get congratulationsTitle() {
        return $('//android.widget.TextView[@text="Congratulations"]');
    }

    get congratulationsMessage() {
        return $('//android.widget.TextView[@text="You made it, click retry if you want to try it again."]');
    }

    get btnRetry() {
        return $('~button-Retry');
    }

    dragPiece(position) {
        return $(`~drag-${position}`);
    }

    dropTarget(position) {
        return $(`~drop-${position}`);
    }

    async navigate() {
        await menuPage.openDrag();
        await this.screenTitle.waitForDisplayed();
    }

    async dragPieceToTarget(position) {
        const source = this.dragPiece(position);
        const target = this.dropTarget(position);

        await source.waitForDisplayed();
        await target.waitForDisplayed();

        const sourceLocation = await source.getLocation();
        const sourceSize = await source.getSize();
        const targetLocation = await target.getLocation();
        const targetSize = await target.getSize();

        const startX = Math.round(sourceLocation.x + sourceSize.width / 2);
        const startY = Math.round(sourceLocation.y + sourceSize.height / 2);
        const endX = Math.round(targetLocation.x + targetSize.width / 2);
        const endY = Math.round(targetLocation.y + targetSize.height / 2);

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 250 },
                    { type: 'pointerMove', duration: 550, x: endX, y: endY },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
        await driver.releaseActions();
    }

    async solvePuzzle() {
        const positions = ['l1', 'c1', 'r1', 'l2', 'c2', 'r2', 'l3', 'c3', 'r3'];
        for (const pos of positions) {
            await this.dragPieceToTarget(pos);
        }
    }
}

export default new DragPage();

