import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PE2"],
  pin2: ["PE3"],
  pin3: ["PE4"],
  pin4: ["PE5"],
  pin5: ["PE6"],
  pin6: ["VBAT"],
  pin7: ["PC13-TAMPER-RTC"],
  pin8: ["PC14-OSC32_IN"],
  pin9: ["PC15-OSC32_OUT"],
  pin10: ["PF0"],
  pin11: ["PF1"],
  pin12: ["PF2"],
  pin13: ["PF3"],
  pin14: ["PF4"],
  pin15: ["PF5"],
  pin16: ["VSS_5"],
  pin17: ["VDD_5"],
  pin18: ["PF6"],
  pin19: ["PF7"],
  pin20: ["PF8"],
  pin21: ["PF9"],
  pin22: ["PF10"],
  pin23: ["OSC_IN"],
  pin24: ["OSC_OUT"],
  pin25: ["NRST"],
  pin26: ["PC0"],
  pin27: ["PC1"],
  pin28: ["PC2"],
  pin29: ["PC3"],
  pin30: ["VSSA"],
  pin31: ["VREF_NEG"],
  pin32: ["VREF_POS"],
  pin33: ["VDDA"],
  pin34: ["PA0-WKUP"],
  pin35: ["PA1"],
  pin36: ["PA2"],
  pin37: ["PA3"],
  pin38: ["VSS_4"],
  pin39: ["VDD_4"],
  pin40: ["PA4"],
  pin41: ["PA5"],
  pin42: ["PA6"],
  pin43: ["PA7"],
  pin44: ["PC4"],
  pin45: ["PC5"],
  pin46: ["PB0"],
  pin47: ["PB1"],
  pin48: ["PB2"],
  pin49: ["PF11"],
  pin50: ["PF12"],
  pin51: ["VSS_6"],
  pin52: ["VDD_6"],
  pin53: ["PF13"],
  pin54: ["PF14"],
  pin55: ["PF15"],
  pin56: ["PG0"],
  pin57: ["PG1"],
  pin58: ["PE7"],
  pin59: ["PE8"],
  pin60: ["PE9"],
  pin61: ["VSS_7"],
  pin62: ["VDD_7"],
  pin63: ["PE10"],
  pin64: ["PE11"],
  pin65: ["PE12"],
  pin66: ["PE13"],
  pin67: ["PE14"],
  pin68: ["PE15"],
  pin69: ["PB10"],
  pin70: ["PB11"],
  pin71: ["VSS_1"],
  pin72: ["VDD_1"],
  pin73: ["PB12"],
  pin74: ["PB13"],
  pin75: ["PB14"],
  pin76: ["PB15"],
  pin77: ["PD8"],
  pin78: ["PD9"],
  pin79: ["PD10"],
  pin80: ["PD11"],
  pin81: ["PD12"],
  pin82: ["PD13"],
  pin83: ["VSS_8"],
  pin84: ["VDD_8"],
  pin85: ["PD14"],
  pin86: ["PD15"],
  pin87: ["PG2"],
  pin88: ["PG3"],
  pin89: ["PG4"],
  pin90: ["PG5"],
  pin91: ["PG6"],
  pin92: ["PG7"],
  pin93: ["PG8"],
  pin94: ["VSS_9"],
  pin95: ["VDD_9"],
  pin96: ["PC6"],
  pin97: ["PC7"],
  pin98: ["PC8"],
  pin99: ["PC9"],
  pin100: ["PA8"],
  pin101: ["PA9"],
  pin102: ["PA10"],
  pin103: ["PA11"],
  pin104: ["PA12"],
  pin105: ["PA13"],
  pin106: ["NC"],
  pin107: ["VSS_2"],
  pin108: ["VDD_2"],
  pin109: ["PA14"],
  pin110: ["PA15"],
  pin111: ["PC10"],
  pin112: ["PC11"],
  pin113: ["PC12"],
  pin114: ["PD0"],
  pin115: ["PD1"],
  pin116: ["PD2"],
  pin117: ["PD3"],
  pin118: ["PD4"],
  pin119: ["PD5"],
  pin120: ["VSS_10"],
  pin121: ["VDD_10"],
  pin122: ["PD6"],
  pin123: ["PD7"],
  pin124: ["PG9"],
  pin125: ["PG10"],
  pin126: ["PG11"],
  pin127: ["PG12"],
  pin128: ["PG13"],
  pin129: ["PG14"],
  pin130: ["VSS_11"],
  pin131: ["VDD_11"],
  pin132: ["PG15"],
  pin133: ["PB3"],
  pin134: ["PB4"],
  pin135: ["PB5"],
  pin136: ["PB6"],
  pin137: ["PB7"],
  pin138: ["BOOT0"],
  pin139: ["PB8"],
  pin140: ["PB9"],
  pin141: ["PE0"],
  pin142: ["PE1"],
  pin143: ["VSS_3"],
  pin144: ["VDD_3"]
} as const

export const STM32F103ZET6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C8287"
  ]
}}
      manufacturerPartNumber="STM32F103ZET6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-8.750045999999884mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-8.249919999999975mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-7.7500479999999925mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-7.24992199999997mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-6.7500499999999874mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-6.249924000000078mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-5.750051999999869mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-5.2499259999999595mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-4.750053999999977mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-4.249927999999954mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-3.7500559999999723mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-3.2499299999998357mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-2.750058000000081mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-2.2499319999999443mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.7500599999999622mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.2499339999999393mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.7500619999999572mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-0.24993599999982052mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.2499359999999342mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.7500620000000708mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="1.249934000000053mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="1.7500600000000759mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="2.249932000000058mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="2.7500580000001946mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="3.2499299999999494mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="3.750056000000086mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="4.249928000000068mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="4.750054000000091mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="5.249926000000073mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="5.750051999999982mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="6.249924000000192mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="6.7500499999999874mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="7.249922000000083mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="7.750048000000106mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="8.249920000000088mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="8.750045999999884mm" pcbY="-10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="10.80007999999998mm" pcbY="-8.750045999999998mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="10.80007999999998mm" pcbY="-8.249919999999975mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="10.80007999999998mm" pcbY="-7.750048000000106mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="10.80007999999998mm" pcbY="-7.24992199999997mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="10.80007999999998mm" pcbY="-6.7500499999999874mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="10.80007999999998mm" pcbY="-6.2499239999999645mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="10.80007999999998mm" pcbY="-5.750051999999869mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="10.80007999999998mm" pcbY="-5.2499259999999595mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="10.80007999999998mm" pcbY="-4.750054000000091mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="10.80007999999998mm" pcbY="-4.249927999999954mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="10.80007999999998mm" pcbY="-3.7500559999999723mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="10.80007999999998mm" pcbY="-3.2499299999999494mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="10.80007999999998mm" pcbY="-2.750058000000081mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="10.80007999999998mm" pcbY="-2.249932000000058mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="10.80007999999998mm" pcbY="-1.7500599999999622mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="10.80007999999998mm" pcbY="-1.2499339999999393mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin53"]} pcbX="10.80007999999998mm" pcbY="-0.7500619999999572mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin54"]} pcbX="10.80007999999998mm" pcbY="-0.2499359999999342mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin55"]} pcbX="10.80007999999998mm" pcbY="0.2499360000000479mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin56"]} pcbX="10.80007999999998mm" pcbY="0.7500619999999572mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin57"]} pcbX="10.80007999999998mm" pcbY="1.2499339999999393mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin58"]} pcbX="10.80007999999998mm" pcbY="1.7500599999999622mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin59"]} pcbX="10.80007999999998mm" pcbY="2.249932000000058mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin60"]} pcbX="10.80007999999998mm" pcbY="2.750058000000081mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin61"]} pcbX="10.80007999999998mm" pcbY="3.249930000000063mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin62"]} pcbX="10.80007999999998mm" pcbY="3.7500559999999723mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin63"]} pcbX="10.80007999999998mm" pcbY="4.249927999999954mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin64"]} pcbX="10.80007999999998mm" pcbY="4.750054000000091mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin65"]} pcbX="10.80007999999998mm" pcbY="5.2499259999999595mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin66"]} pcbX="10.80007999999998mm" pcbY="5.750051999999982mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin67"]} pcbX="10.80007999999998mm" pcbY="6.249924000000078mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin68"]} pcbX="10.80007999999998mm" pcbY="6.7500499999999874mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin69"]} pcbX="10.80007999999998mm" pcbY="7.24992199999997mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin70"]} pcbX="10.80007999999998mm" pcbY="7.750048000000106mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin71"]} pcbX="10.80007999999998mm" pcbY="8.249919999999975mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin72"]} pcbX="10.80007999999998mm" pcbY="8.750045999999998mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin73"]} pcbX="8.750045999999884mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin74"]} pcbX="8.249920000000088mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin75"]} pcbX="7.750048000000106mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin76"]} pcbX="7.249922000000083mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin77"]} pcbX="6.7500499999999874mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin78"]} pcbX="6.249924000000192mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin79"]} pcbX="5.750051999999982mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin80"]} pcbX="5.249926000000073mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin81"]} pcbX="4.750054000000091mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin82"]} pcbX="4.249928000000068mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin83"]} pcbX="3.750056000000086mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin84"]} pcbX="3.2499299999999494mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin85"]} pcbX="2.7500580000001946mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin86"]} pcbX="2.249932000000058mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin87"]} pcbX="1.7500600000000759mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin88"]} pcbX="1.249934000000053mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin89"]} pcbX="0.7500620000000708mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin90"]} pcbX="0.2499359999999342mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin91"]} pcbX="-0.24993599999982052mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin92"]} pcbX="-0.7500619999999572mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin93"]} pcbX="-1.2499339999999393mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin94"]} pcbX="-1.7500599999999622mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin95"]} pcbX="-2.2499319999999443mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin96"]} pcbX="-2.750058000000081mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin97"]} pcbX="-3.2499299999998357mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin98"]} pcbX="-3.7500559999999723mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin99"]} pcbX="-4.249927999999954mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin100"]} pcbX="-4.750053999999977mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin101"]} pcbX="-5.2499259999999595mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin102"]} pcbX="-5.750051999999869mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin103"]} pcbX="-6.249924000000078mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin104"]} pcbX="-6.7500499999999874mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin105"]} pcbX="-7.24992199999997mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin106"]} pcbX="-7.7500479999999925mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin107"]} pcbX="-8.249919999999975mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin108"]} pcbX="-8.750045999999884mm" pcbY="10.80007999999998mm" width="0.2800096mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin109"]} pcbX="-10.800079999999866mm" pcbY="8.750045999999998mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin110"]} pcbX="-10.800079999999866mm" pcbY="8.249919999999975mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin111"]} pcbX="-10.800079999999866mm" pcbY="7.750048000000106mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin112"]} pcbX="-10.800079999999866mm" pcbY="7.24992199999997mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin113"]} pcbX="-10.800079999999866mm" pcbY="6.7500499999999874mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin114"]} pcbX="-10.800079999999866mm" pcbY="6.249924000000078mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin115"]} pcbX="-10.800079999999866mm" pcbY="5.750051999999982mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin116"]} pcbX="-10.800079999999866mm" pcbY="5.2499259999999595mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin117"]} pcbX="-10.800079999999866mm" pcbY="4.750054000000091mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin118"]} pcbX="-10.800079999999866mm" pcbY="4.249927999999954mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin119"]} pcbX="-10.800079999999866mm" pcbY="3.7500559999999723mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin120"]} pcbX="-10.800079999999866mm" pcbY="3.249930000000063mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin121"]} pcbX="-10.800079999999866mm" pcbY="2.750058000000081mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin122"]} pcbX="-10.800079999999866mm" pcbY="2.249932000000058mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin123"]} pcbX="-10.800079999999866mm" pcbY="1.7500599999999622mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin124"]} pcbX="-10.800079999999866mm" pcbY="1.2499339999999393mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin125"]} pcbX="-10.800079999999866mm" pcbY="0.7500619999999572mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin126"]} pcbX="-10.800079999999866mm" pcbY="0.2499360000000479mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin127"]} pcbX="-10.800079999999866mm" pcbY="-0.2499359999999342mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin128"]} pcbX="-10.800079999999866mm" pcbY="-0.7500619999999572mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin129"]} pcbX="-10.800079999999866mm" pcbY="-1.2499339999999393mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin130"]} pcbX="-10.800079999999866mm" pcbY="-1.7500599999999622mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin131"]} pcbX="-10.800079999999866mm" pcbY="-2.249932000000058mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin132"]} pcbX="-10.800079999999866mm" pcbY="-2.750058000000081mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin133"]} pcbX="-10.800079999999866mm" pcbY="-3.2499299999999494mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin134"]} pcbX="-10.800079999999866mm" pcbY="-3.7500559999999723mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin135"]} pcbX="-10.800079999999866mm" pcbY="-4.249927999999954mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin136"]} pcbX="-10.800079999999866mm" pcbY="-4.750054000000091mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin137"]} pcbX="-10.800079999999866mm" pcbY="-5.2499259999999595mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin138"]} pcbX="-10.800079999999866mm" pcbY="-5.750051999999869mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin139"]} pcbX="-10.800079999999866mm" pcbY="-6.2499239999999645mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin140"]} pcbX="-10.800079999999866mm" pcbY="-6.7500499999999874mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin141"]} pcbX="-10.800079999999866mm" pcbY="-7.24992199999997mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin142"]} pcbX="-10.800079999999866mm" pcbY="-7.750048000000106mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin143"]} pcbX="-10.800079999999866mm" pcbY="-8.249919999999975mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin144"]} pcbX="-10.800079999999866mm" pcbY="-8.750045999999998mm" width="1.9999959999999999mm" height="0.2800096mm" shape="rect" />
<silkscreenpath route={[{"x":-10.413949199999934,"y":-9.144025399999919},{"x":-10.413949199999934,"y":-10.414025400000128},{"x":-9.143949200000066,"y":-10.414025400000128}]} />
<silkscreenpath route={[{"x":-9.671354799999904,"y":-9.671430999999984},{"x":-9.671354799999904,"y":9.671380200000044},{"x":9.671405600000071,"y":9.671380200000044},{"x":9.671405600000071,"y":-9.671430999999984},{"x":-9.671354799999904,"y":-9.671430999999984}]} />
<silkscreenpath route={[{"x":-10.076179999999908,"y":9.080474599999889},{"x":-10.076179999999908,"y":10.076205399999935},{"x":-9.080449199999975,"y":10.076205399999935}]} />
<silkscreenpath route={[{"x":10.076332400000183,"y":9.080474599999889},{"x":10.076332400000183,"y":10.076205399999935},{"x":9.080550800000083,"y":10.076205399999935}]} />
<silkscreenpath route={[{"x":-10.076179999999908,"y":-9.080525399999942},{"x":-10.076179999999908,"y":-10.076256199999989},{"x":-9.080449199999975,"y":-10.076256199999989}]} />
<silkscreenpath route={[{"x":10.076332400000183,"y":-9.080525399999942},{"x":10.076332400000183,"y":-10.076256199999989},{"x":9.080550800000083,"y":-10.076256199999989}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=050cbb9408dc48c4b7a10f3d7752432f&pn=C8287",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -11.000077999999984 },
      }}
      {...props}
    />
  )
}