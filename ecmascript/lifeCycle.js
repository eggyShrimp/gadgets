// https://developer.chrome.com/blog/page-lifecycle-api/#observing-page-lifecycle-states-in-code

const getState = () => {
    if (document.visibilityState === 'hidden') {
        return 'hidden';
    }
    if ( document.hasFocus() ) {
        return 'active';
    }
    return 'passive';
}

let state = getState();

const logState = nextState => {
    const prevState = state;
    if (nextState !== prevState) {
        console.log(`State change: ${prevState} => ${nextState}`);
        state = nextState;
    }
}

const life = ['focus', 'blur', 'pageshow', 'resume', 'terminated', 'discarded', 'visibilitychange']

const signal = new AbortController();

life.forEach(state => {
    window.addEventListener(state, () => logState( getState() ), {
        capture: true,
        once: false,
        passive: false,
        signal: signal,
    })
})

window.addEventListener('freeze', () => {
    logState('froozen')
}, {
    capture: true,
})

window.addEventListener('pagehide', event => {
    if (event.persisted) {
        logState('frozen');
    } else {
        logState('terminated');
    }
})