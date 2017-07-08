/**
 * Most usually interfaces are created to be implemented by classes
 */

export interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

interface TimeGetter {
    getTime(): Date;
}

// Implements both interfaces
class Clock implements ClockInterface, TimeGetter {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    getTime() {
        return this.currentTime;
    }
}