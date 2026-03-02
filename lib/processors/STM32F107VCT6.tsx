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
  pin10: ["VSS_5"],
  pin11: ["VDD_5"],
  pin12: ["OSC_IN"],
  pin13: ["OSC_OUT"],
  pin14: ["NRST"],
  pin15: ["PC0"],
  pin16: ["PC1"],
  pin17: ["PC2"],
  pin18: ["PC3"],
  pin19: ["VSSA"],
  pin20: ["VREF_NEG"],
  pin21: ["VREF_POS"],
  pin22: ["VDDA"],
  pin23: ["PA0-WKUP"],
  pin24: ["PA1"],
  pin25: ["PA2"],
  pin26: ["PA3"],
  pin27: ["VSS_4"],
  pin28: ["VDD_4"],
  pin29: ["PA4"],
  pin30: ["PA5"],
  pin31: ["PA6"],
  pin32: ["PA7"],
  pin33: ["PC4"],
  pin34: ["PC5"],
  pin35: ["PB0"],
  pin36: ["PB1"],
  pin37: ["PB2"],
  pin38: ["PE7"],
  pin39: ["PE8"],
  pin40: ["PE9"],
  pin41: ["PE10"],
  pin42: ["PE11"],
  pin43: ["PE12"],
  pin44: ["PE13"],
  pin45: ["PE14"],
  pin46: ["PE15"],
  pin47: ["PB10"],
  pin48: ["PB11"],
  pin49: ["VSS_1"],
  pin50: ["VDD_1"],
  pin51: ["PB12"],
  pin52: ["PB13"],
  pin53: ["PB14"],
  pin54: ["PB15"],
  pin55: ["PD8"],
  pin56: ["PD9"],
  pin57: ["PD10"],
  pin58: ["PD11"],
  pin59: ["PD12"],
  pin60: ["PD13"],
  pin61: ["PD14"],
  pin62: ["PD15"],
  pin63: ["PC6"],
  pin64: ["PC7"],
  pin65: ["PC8"],
  pin66: ["PC9"],
  pin67: ["PA8"],
  pin68: ["PA9"],
  pin69: ["PA10"],
  pin70: ["PA11"],
  pin71: ["PA12"],
  pin72: ["PA13"],
  pin73: ["NC"],
  pin74: ["VSS_2"],
  pin75: ["VDD_2"],
  pin76: ["PA14"],
  pin77: ["PA15"],
  pin78: ["PC10"],
  pin79: ["PC11"],
  pin80: ["PC12"],
  pin81: ["PD0"],
  pin82: ["PD1"],
  pin83: ["PD2"],
  pin84: ["PD3"],
  pin85: ["PD4"],
  pin86: ["PD5"],
  pin87: ["PD6"],
  pin88: ["PD7"],
  pin89: ["PB3"],
  pin90: ["PB4"],
  pin91: ["PB5"],
  pin92: ["PB6"],
  pin93: ["PB7"],
  pin94: ["BOOT0"],
  pin95: ["PB8"],
  pin96: ["PB9"],
  pin97: ["PE0"],
  pin98: ["PE1"],
  pin99: ["VSS_3"],
  pin100: ["VDD_3"]
} as const

export const STM32F107VCT6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C8315"
  ]
}}
      manufacturerPartNumber="STM32F107VCT6"
      footprint={<footprint>
        <smtpad portHints={["pin100"]} pcbX="-7.549895999999997mm" pcbY="-5.999988000000002mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin99"]} pcbX="-7.549895999999997mm" pcbY="-5.500115999999991mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin98"]} pcbX="-7.549895999999997mm" pcbY="-4.999989999999997mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin97"]} pcbX="-7.549895999999997mm" pcbY="-4.5001180000000005mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin96"]} pcbX="-7.549895999999997mm" pcbY="-3.9999919999999918mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin95"]} pcbX="-7.549895999999997mm" pcbY="-3.5001199999999955mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin94"]} pcbX="-7.549895999999997mm" pcbY="-2.9999939999999867mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin93"]} pcbX="-7.549895999999997mm" pcbY="-2.5001220000000046mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin92"]} pcbX="-7.549895999999997mm" pcbY="-1.9999959999999959mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin91"]} pcbX="-7.549895999999997mm" pcbY="-1.5001239999999996mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin90"]} pcbX="-7.549895999999997mm" pcbY="-0.9999979999999908mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin89"]} pcbX="-7.549895999999997mm" pcbY="-0.4998719999999963mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin88"]} pcbX="-7.549895999999997mm" pcbY="0mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin87"]} pcbX="-7.549895999999997mm" pcbY="0.5001260000000087mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin86"]} pcbX="-7.549895999999997mm" pcbY="0.999998000000005mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin85"]} pcbX="-7.549895999999997mm" pcbY="1.5001239999999996mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin84"]} pcbX="-7.549895999999997mm" pcbY="1.99999600000001mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin83"]} pcbX="-7.549895999999997mm" pcbY="2.500122000000019mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin82"]} pcbX="-7.549895999999997mm" pcbY="2.999994000000001mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin81"]} pcbX="-7.549895999999997mm" pcbY="3.5001199999999955mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin80"]} pcbX="-7.549895999999997mm" pcbY="3.999992000000006mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin79"]} pcbX="-7.549895999999997mm" pcbY="4.5001180000000005mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin78"]} pcbX="-7.549895999999997mm" pcbY="4.999989999999997mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin77"]} pcbX="-7.549895999999997mm" pcbY="5.500116000000006mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin76"]} pcbX="-7.549895999999997mm" pcbY="5.999988000000016mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin75"]} pcbX="-5.999988000000009mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin74"]} pcbX="-5.5001159999999985mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin73"]} pcbX="-4.999989999999997mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin72"]} pcbX="-4.5001180000000005mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin71"]} pcbX="-3.999991999999999mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin70"]} pcbX="-3.5001200000000026mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin69"]} pcbX="-2.999994000000001mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin68"]} pcbX="-2.5001219999999975mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin67"]} pcbX="-1.999996000000003mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin66"]} pcbX="-1.5001239999999996mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin65"]} pcbX="-0.999998000000005mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin64"]} pcbX="-0.4998719999999963mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin63"]} pcbX="0mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin62"]} pcbX="0.5001260000000016mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin61"]} pcbX="0.999998000000005mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin60"]} pcbX="1.5001239999999996mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin59"]} pcbX="1.9999959999999959mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin58"]} pcbX="2.5001219999999975mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin57"]} pcbX="2.999994000000001mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin56"]} pcbX="3.5001199999999955mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin55"]} pcbX="3.999991999999999mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin54"]} pcbX="4.5001180000000005mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin53"]} pcbX="4.999989999999997mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="5.5001159999999985mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="5.999988000000002mm" pcbY="7.549896000000004mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="7.54989599999999mm" pcbY="5.999988000000016mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="7.54989599999999mm" pcbY="5.500116000000006mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="7.54989599999999mm" pcbY="4.999989999999997mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="7.54989599999999mm" pcbY="4.5001180000000005mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="7.54989599999999mm" pcbY="3.999992000000006mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="7.54989599999999mm" pcbY="3.5001199999999955mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="7.54989599999999mm" pcbY="2.999994000000001mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="7.54989599999999mm" pcbY="2.500122000000019mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="7.54989599999999mm" pcbY="1.99999600000001mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="7.54989599999999mm" pcbY="1.5001239999999996mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="7.54989599999999mm" pcbY="0.999998000000005mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="7.54989599999999mm" pcbY="0.5001260000000087mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="7.54989599999999mm" pcbY="0mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="7.54989599999999mm" pcbY="-0.4998719999999963mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="7.54989599999999mm" pcbY="-0.9999979999999908mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="7.54989599999999mm" pcbY="-1.5001239999999996mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="7.54989599999999mm" pcbY="-1.9999959999999959mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="7.54989599999999mm" pcbY="-2.5001220000000046mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="7.54989599999999mm" pcbY="-2.9999939999999867mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="7.54989599999999mm" pcbY="-3.5001199999999955mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="7.54989599999999mm" pcbY="-3.9999919999999918mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="7.54989599999999mm" pcbY="-4.5001180000000005mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="7.54989599999999mm" pcbY="-4.999989999999997mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="7.54989599999999mm" pcbY="-5.500115999999991mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="7.54989599999999mm" pcbY="-5.999988000000002mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="5.999988000000002mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="5.5001159999999985mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="4.999989999999997mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="4.5001180000000005mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="3.999991999999999mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="3.5001199999999955mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="2.999994000000001mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.5001219999999975mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="1.9999959999999959mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.5001239999999996mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.999998000000005mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.5001260000000016mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.4998719999999963mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.999998000000005mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.5001239999999996mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.999996000000003mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.5001219999999975mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.999994000000001mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-3.5001200000000026mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-3.999991999999999mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-4.5001180000000005mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-4.999989999999997mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-5.5001159999999985mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-5.999988000000009mm" pcbY="-7.54989599999999mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<silkscreenpath route={[{"x":-6.250000200000002,"y":6.250000200000002},{"x":-6.250000200000002,"y":-6.250000199999988},{"x":6.250000200000002,"y":-6.250000199999988},{"x":6.250000200000002,"y":6.250000200000002},{"x":-6.250000200000002,"y":6.250000200000002}]} />
<silkscreenpath route={[{"x":-5.25018,"y":-4.9504599999999925},{"x":-5.461114378607903,"y":-4.86125164057006},{"x":-5.547636711767737,"y":-4.6492013415005715},{"x":-5.459322117039065,"y":-4.437891200170839},{"x":-5.247640000000004,"y":-4.350471952880881},{"x":-5.035957882960936,"y":-4.437891200170839},{"x":-4.947643288232264,"y":-4.6492013415005715},{"x":-5.0341656213921055,"y":-4.86125164057006},{"x":-5.245100000000001,"y":-4.9504599999999925}]} />
<silkscreenpath route={[{"x":-6.883400000000002,"y":-7.69619999999999},{"x":-7.032141055997663,"y":-7.545557970296059},{"x":-6.882130000000004,"y":-7.396180575985255},{"x":-6.7321189440023375,"y":-7.545557970296059},{"x":-6.880859999999998,"y":-7.69619999999999}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=dcc1c7ac602c4975b215b1407bde4684&pn=C8315",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -7.549894400000004 },
      }}
      {...props}
    />
  )
}