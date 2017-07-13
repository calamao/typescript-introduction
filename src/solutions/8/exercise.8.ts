// Space Age
// Given an age in seconds, calculate how old someone would be on:
//
//      Earth: orbital period 365.25 Earth days, or 31557600 seconds
//      Mercury: orbital period 0.2408467 Earth years
//      Venus: orbital period 0.61519726 Earth years
//      Mars: orbital period 1.8808158 Earth years
//      Jupiter: orbital period 11.862615 Earth years
//      Saturn: orbital period 29.447498 Earth years
//      Uranus: orbital period 84.016846 Earth years
//      Neptune: orbital period 164.79132 Earth years
//
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.
//
// If you're wondering why Pluto didn't make the cut, go watch this youtube video: http://www.youtube.com/watch?v=Z_2gbGXzFbs

const orbitalPeriodFactors = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

export class SpaceAge {
    constructor(public seconds: number) {
    }

    public onEarth = (): number => this.calculateAge(orbitalPeriodFactors.earth);
    public onMercury = (): number => this.calculateAge(orbitalPeriodFactors.mercury);
    public onVenus = (): number => this.calculateAge(orbitalPeriodFactors.venus);
    public onMars = (): number => this.calculateAge(orbitalPeriodFactors.mars);
    public onJupiter = (): number => this.calculateAge(orbitalPeriodFactors.jupiter);
    public onSaturn = (): number => this.calculateAge(orbitalPeriodFactors.saturn);
    public onUranus = (): number => this.calculateAge(orbitalPeriodFactors.uranus);
    public onNeptune = (): number => this.calculateAge(orbitalPeriodFactors.neptune);

    private calculateAge = (factor: number): number => parseFloat(((this.seconds / 31557600) / factor).toFixed(2));
}