export function throttle(fn: () => void, ms: number) {
    let timer: number | null = null;

    return function perform() {
        if (timer) return;
        timer = window.setTimeout(() => {
            fn();
            clearTimeout(timer!);
            timer = null;
        }, ms);
    };
}
