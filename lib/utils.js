import confetti from 'canvas-confetti'

export const runFireworks = () => {
    let end = Date.now() + (3 * 1000);

    // go Buckeyes!
    let colors = ['#bb0000', '#ffffff'];

    (function frame() {
    confetti({
        particleCount: 1,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 1,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
}