// home hero slider data
export interface HeroSliderType {
  id:number,
  bgImg:string,
  title:string,
  subtitle:string
}
// home two hero slider data 
export interface HeroSliderTypeTwo {
  id:number,
  isDark?:boolean,
  bgImg:string,
  title:string,
  subtitle:string
}

// home 7 slider data type
export interface HeroSliderTypeThree {
  id:number,
  bgImg:string,
  sm_title:string,
  meta?:boolean,
  title:string,
  subtitle:string
}