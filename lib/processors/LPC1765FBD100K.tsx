import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["TDI"],
  pin3: ["pin3"],
  pin4: ["TRST"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["VDDA"],
  pin11: ["VSSA"],
  pin12: ["VREFP"],
  pin13: ["pin13"],
  pin14: ["RSTOUT"],
  pin15: ["VREFN"],
  pin16: ["RTCX1"],
  pin17: ["RESET"],
  pin18: ["RTCX2"],
  pin19: ["VBAT"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["XTAL1"],
  pin23: ["XTAL2"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["VSS6"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["pin34"],
  pin35: ["pin35"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["VSS5"],
  pin42: ["pin42"],
  pin43: ["pin43"],
  pin44: ["pin44"],
  pin45: ["pin45"],
  pin46: ["pin46"],
  pin47: ["pin47"],
  pin48: ["pin48"],
  pin49: ["pin49"],
  pin50: ["pin50"],
  pin51: ["pin51"],
  pin52: ["pin52"],
  pin53: ["pin53"],
  pin54: ["pin54"],
  pin55: ["VSS4"],
  pin56: ["pin56"],
  pin57: ["pin57"],
  pin58: ["pin58"],
  pin59: ["pin59"],
  pin60: ["pin60"],
  pin61: ["pin61"],
  pin62: ["pin62"],
  pin63: ["pin63"],
  pin64: ["pin64"],
  pin65: ["pin65"],
  pin66: ["pin66"],
  pin67: ["pin67"],
  pin68: ["pin68"],
  pin69: ["pin69"],
  pin70: ["pin70"],
  pin71: ["pin71"],
  pin72: ["VSS3"],
  pin73: ["pin73"],
  pin74: ["pin74"],
  pin75: ["pin75"],
  pin76: ["pin76"],
  pin77: ["pin77"],
  pin78: ["pin78"],
  pin79: ["pin79"],
  pin80: ["pin80"],
  pin81: ["pin81"],
  pin82: ["pin82"],
  pin83: ["VSS2"],
  pin84: ["pin84"],
  pin85: ["pin85"],
  pin86: ["pin86"],
  pin87: ["pin87"],
  pin88: ["pin88"],
  pin89: ["pin89"],
  pin90: ["pin90"],
  pin91: ["pin91"],
  pin92: ["pin92"],
  pin93: ["pin93"],
  pin94: ["pin94"],
  pin95: ["pin95"],
  pin96: ["pin96"],
  pin97: ["VSS1"],
  pin98: ["pin98"],
  pin99: ["pin99"],
  pin100: ["RTCK"]
} as const

export const LPC1765FBD100K = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C917206"
  ]
}}
      manufacturerPartNumber="LPC1765FBD100K"
      footprint={<footprint>
        <smtpad portHints={["pin100"]} pcbX="-5.999988000000009mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin99"]} pcbX="-5.5001159999999985mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin98"]} pcbX="-4.999989999999997mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin97"]} pcbX="-4.5001180000000005mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin96"]} pcbX="-3.999991999999999mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin95"]} pcbX="-3.5001200000000026mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin94"]} pcbX="-2.999994000000001mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin93"]} pcbX="-2.5001219999999975mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin92"]} pcbX="-1.999996000000003mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin91"]} pcbX="-1.5001239999999996mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin90"]} pcbX="-0.999998000000005mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin89"]} pcbX="-0.4998719999999963mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin88"]} pcbX="0mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin87"]} pcbX="0.5001260000000016mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin86"]} pcbX="0.999998000000005mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin85"]} pcbX="1.5001239999999996mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin84"]} pcbX="1.9999959999999959mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin83"]} pcbX="2.5001219999999975mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin82"]} pcbX="2.999994000000001mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin81"]} pcbX="3.5001199999999955mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin80"]} pcbX="3.999991999999999mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin79"]} pcbX="4.5001180000000005mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin78"]} pcbX="4.999989999999997mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin77"]} pcbX="5.5001159999999985mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin76"]} pcbX="5.999988000000002mm" pcbY="7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin75"]} pcbX="7.749794000000001mm" pcbY="5.999988000000002mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin74"]} pcbX="7.749794000000001mm" pcbY="5.500115999999991mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin73"]} pcbX="7.749794000000001mm" pcbY="4.999989999999983mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin72"]} pcbX="7.749794000000001mm" pcbY="4.500117999999986mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin71"]} pcbX="7.749794000000001mm" pcbY="3.9999919999999918mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin70"]} pcbX="7.749794000000001mm" pcbY="3.5001199999999812mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin69"]} pcbX="7.749794000000001mm" pcbY="2.9999939999999867mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin68"]} pcbX="7.749794000000001mm" pcbY="2.5001220000000046mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin67"]} pcbX="7.749794000000001mm" pcbY="1.9999959999999959mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin66"]} pcbX="7.749794000000001mm" pcbY="1.5001239999999854mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin65"]} pcbX="7.749794000000001mm" pcbY="0.9999979999999908mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin64"]} pcbX="7.749794000000001mm" pcbY="0.4998719999999963mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin63"]} pcbX="7.749794000000001mm" pcbY="-1.4210854715202004e-14mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin62"]} pcbX="7.749794000000001mm" pcbY="-0.5001260000000087mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin61"]} pcbX="7.749794000000001mm" pcbY="-0.999998000000005mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin60"]} pcbX="7.749794000000001mm" pcbY="-1.5001240000000138mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin59"]} pcbX="7.749794000000001mm" pcbY="-1.99999600000001mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin58"]} pcbX="7.749794000000001mm" pcbY="-2.500122000000019mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin57"]} pcbX="7.749794000000001mm" pcbY="-2.999994000000001mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin56"]} pcbX="7.749794000000001mm" pcbY="-3.5001200000000097mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin55"]} pcbX="7.749794000000001mm" pcbY="-3.999992000000006mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin54"]} pcbX="7.749794000000001mm" pcbY="-4.500118000000015mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin53"]} pcbX="7.749794000000001mm" pcbY="-4.999990000000011mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="7.749794000000001mm" pcbY="-5.500116000000006mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="7.749794000000001mm" pcbY="-5.999988000000016mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="5.999988000000002mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="5.5001159999999985mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="4.999989999999997mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="4.5001180000000005mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="3.999991999999999mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="3.5001199999999955mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="2.999994000000001mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="2.5001219999999975mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="1.9999959999999959mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="1.5001239999999996mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="0.999998000000005mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="0.5001260000000016mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="0mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-0.4998719999999963mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="-0.999998000000005mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="-1.5001239999999996mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-1.999996000000003mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-2.5001219999999975mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-2.999994000000001mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-3.5001200000000026mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-3.999991999999999mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-4.5001180000000005mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-4.999989999999997mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-5.5001159999999985mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-5.999988000000009mm" pcbY="-7.7497940000000085mm" width="0.29999939999999997mm" height="1.5999967999999998mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-7.749794000000001mm" pcbY="-5.999988000000016mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-7.749794000000001mm" pcbY="-5.500116000000006mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-7.749794000000001mm" pcbY="-4.999990000000011mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-7.749794000000001mm" pcbY="-4.500118000000015mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-7.749794000000001mm" pcbY="-3.999992000000006mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-7.749794000000001mm" pcbY="-3.5001200000000097mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-7.749794000000001mm" pcbY="-2.999994000000001mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-7.749794000000001mm" pcbY="-2.500122000000019mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-7.749794000000001mm" pcbY="-1.99999600000001mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-7.749794000000001mm" pcbY="-1.5001240000000138mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-7.749794000000001mm" pcbY="-0.999998000000005mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-7.749794000000001mm" pcbY="-0.5001260000000087mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-7.749794000000001mm" pcbY="-1.4210854715202004e-14mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-7.749794000000001mm" pcbY="0.4998719999999963mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-7.749794000000001mm" pcbY="0.9999979999999908mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-7.749794000000001mm" pcbY="1.5001239999999854mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-7.749794000000001mm" pcbY="1.9999959999999959mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-7.749794000000001mm" pcbY="2.5001220000000046mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-7.749794000000001mm" pcbY="2.9999939999999867mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-7.749794000000001mm" pcbY="3.5001199999999812mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-7.749794000000001mm" pcbY="3.9999919999999918mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-7.749794000000001mm" pcbY="4.500117999999986mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-7.749794000000001mm" pcbY="4.999989999999983mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-7.749794000000001mm" pcbY="5.500115999999991mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-7.749794000000001mm" pcbY="5.999988000000002mm" width="1.5999967999999998mm" height="0.29999939999999997mm" shape="rect" />
<silkscreenpath route={[{"x":6.250000200000002,"y":6.250000199999988},{"x":-6.250000200000002,"y":6.250000199999988},{"x":-6.250000200000002,"y":-6.250000200000002},{"x":6.250000200000002,"y":-6.250000200000002},{"x":6.250000200000002,"y":6.250000199999988}]} />
<silkscreenpath route={[{"x":-4.95046,"y":5.250179999999986},{"x":-4.861251640570053,"y":5.461114378607888},{"x":-4.649201341500564,"y":5.547636711767709},{"x":-4.437891200170839,"y":5.459322117039022},{"x":-4.350471952880888,"y":5.24763999999999},{"x":-4.437891200170846,"y":5.035957882960915},{"x":-4.6492013415005715,"y":4.947643288232257},{"x":-4.861251640570053,"y":5.034165621392091},{"x":-4.95046,"y":5.245099999999994}]} />
<silkscreenpath route={[{"x":-7.799552599999998,"y":6.6492881999999724},{"x":-7.64931463811422,"y":6.734912327682238},{"x":-7.64931463811422,"y":6.561987672317699},{"x":-7.799552599999998,"y":6.647611799999979}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=b5ab355f3fc14a5dabbe2fb50a362a90&pn=C917206",
        rotationOffset: { x: 90, y: 90, z: 270 },
        positionOffset: { x: 0, y: -1.4210854715202004e-14, z: 9.349792400000016 },
      }}
      {...props}
    />
  )
}