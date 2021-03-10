import{ store } from '@risingstack/react-easy-state';
import moment from 'moment';

const clock = store({

    tick : 0,
    start() {
        clock.intervalId = setInterval(() => clock.tick++,10);
    },
    stop(){
        clock.intervalId = clearInterval(clock.intervalId);
    },
    get time(){
        const time = moment(0).millisecond(clock.tick *10);
    
    return {
        seconds : time.format('mm:ss:'),
        fraction : time.format('SS'),
     };
    },
    get isTicking() {
        return clock.intervalId !== undefined;
    },
    toggle() {
        clock.isTicking ? clock.stop() : clock.start();
    },
    reset(){
        clock.tick = 0;
        clock.stop();
    }

});

export default clock;