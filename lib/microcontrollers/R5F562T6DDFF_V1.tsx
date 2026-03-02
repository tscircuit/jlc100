import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EMLE"],
  pin2: ["VSS1"],
  pin3: ["MDE"],
  pin4: ["VCL"],
  pin5: ["MD1"],
  pin6: ["MD0"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["RES"],
  pin10: ["XTAL"],
  pin11: ["VSS2"],
  pin12: ["EXTAL"],
  pin13: ["VCC1"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["PLLVCC"],
  pin25: ["pin25"],
  pin26: ["PLLVSS"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["VCC2"],
  pin34: ["pin34"],
  pin35: ["VSS3"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["pin41"],
  pin42: ["pin42"],
  pin43: ["pin43"],
  pin44: ["pin44"],
  pin45: ["pin45"],
  pin46: ["pin46"],
  pin47: ["pin47"],
  pin48: ["pin48"],
  pin49: ["pin49"],
  pin50: ["VCC3"],
  pin51: ["pin51"],
  pin52: ["VSS4"],
  pin53: ["pin53"],
  pin54: ["pin54"],
  pin55: ["pin55"],
  pin56: ["pin56"],
  pin57: ["pin57"],
  pin58: ["pin58"],
  pin59: ["AVCC"],
  pin60: ["AVSS"],
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
  pin72: ["pin72"],
  pin73: ["AVCC0"],
  pin74: ["VREFH0"],
  pin75: ["VREFL0"],
  pin76: ["AVSS0"],
  pin77: ["pin77"],
  pin78: ["pin78"],
  pin79: ["pin79"],
  pin80: ["pin80"]
} as const

export const R5F562T6DDFF_V1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C1343942"
  ]
}}
      manufacturerPartNumber="R5F562T6DDFF_V1"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-6.174994000000083mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-5.525007999999957mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-4.875022000000058mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-4.225035999999932mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-3.575050000000033mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.925064000000134mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.2750780000000077mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.6250920000001088mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.9751059999999825mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-0.32486600000004273mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.32512000000008356mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.9751059999999825mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.625091999999995mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="2.2750780000000077mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.9250640000000203mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="3.5750499999999192mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="4.225035999999818mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="4.8750219999999445mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="5.525007999999843mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="6.17499399999997mm" pcbY="-7.721091999999999mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="7.721091999999999mm" pcbY="-6.17499399999997mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="7.721091999999999mm" pcbY="-5.525007999999957mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="7.721091999999999mm" pcbY="-4.8750219999999445mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="7.721091999999999mm" pcbY="-4.225035999999932mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="7.721091999999999mm" pcbY="-3.5750499999999192mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="7.721091999999999mm" pcbY="-2.9250640000000203mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="7.721091999999999mm" pcbY="-2.2750780000000077mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="7.721091999999999mm" pcbY="-1.625091999999995mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="7.721091999999999mm" pcbY="-0.9751059999999825mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="7.721091999999999mm" pcbY="-0.32512000000008356mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="7.721091999999999mm" pcbY="0.32486600000004273mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="7.721091999999999mm" pcbY="0.9751059999999825mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="7.721091999999999mm" pcbY="1.6250920000001088mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="7.721091999999999mm" pcbY="2.2750780000000077mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="7.721091999999999mm" pcbY="2.9250640000000203mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="7.721091999999999mm" pcbY="3.575050000000033mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="7.721091999999999mm" pcbY="4.2250360000000455mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="7.721091999999999mm" pcbY="4.875022000000058mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="7.721091999999999mm" pcbY="5.525008000000071mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="7.721091999999999mm" pcbY="6.174994000000083mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="6.17499399999997mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="5.525007999999843mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="4.8750219999999445mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="4.225035999999818mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="3.5750499999999192mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="2.9250640000000203mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="2.2750780000000077mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="1.625091999999995mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="0.9751059999999825mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="0.32512000000008356mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="-0.32486600000004273mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="-0.9751059999999825mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin53"]} pcbX="-1.6250920000001088mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin54"]} pcbX="-2.2750780000000077mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin55"]} pcbX="-2.925064000000134mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin56"]} pcbX="-3.575050000000033mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin57"]} pcbX="-4.225035999999932mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin58"]} pcbX="-4.875022000000058mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin59"]} pcbX="-5.525007999999957mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin60"]} pcbX="-6.174994000000083mm" pcbY="7.721092000000112mm" width="0.3640074mm" height="1.6420084mm" shape="rect" />
<smtpad portHints={["pin61"]} pcbX="-7.721092000000112mm" pcbY="6.174994000000083mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin62"]} pcbX="-7.721092000000112mm" pcbY="5.525008000000071mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin63"]} pcbX="-7.721092000000112mm" pcbY="4.875022000000058mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin64"]} pcbX="-7.721092000000112mm" pcbY="4.2250360000000455mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin65"]} pcbX="-7.721092000000112mm" pcbY="3.575050000000033mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin66"]} pcbX="-7.721092000000112mm" pcbY="2.9250640000000203mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin67"]} pcbX="-7.721092000000112mm" pcbY="2.2750780000000077mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin68"]} pcbX="-7.721092000000112mm" pcbY="1.6250920000001088mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin69"]} pcbX="-7.721092000000112mm" pcbY="0.9751059999999825mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin70"]} pcbX="-7.721092000000112mm" pcbY="0.32486600000004273mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin71"]} pcbX="-7.721092000000112mm" pcbY="-0.32512000000008356mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin72"]} pcbX="-7.721092000000112mm" pcbY="-0.9751059999999825mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin73"]} pcbX="-7.721092000000112mm" pcbY="-1.625091999999995mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin74"]} pcbX="-7.721092000000112mm" pcbY="-2.2750780000000077mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin75"]} pcbX="-7.721092000000112mm" pcbY="-2.9250640000000203mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin76"]} pcbX="-7.721092000000112mm" pcbY="-3.5750499999999192mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin77"]} pcbX="-7.721092000000112mm" pcbY="-4.225035999999932mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin78"]} pcbX="-7.721092000000112mm" pcbY="-4.8750219999999445mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin79"]} pcbX="-7.721092000000112mm" pcbY="-5.525007999999957mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<smtpad portHints={["pin80"]} pcbX="-7.721092000000112mm" pcbY="-6.17499399999997mm" width="1.6420084mm" height="0.3640074mm" shape="rect" />
<silkscreenpath route={[{"x":-7.076211400000034,"y":6.547510400000078},{"x":-7.076211400000034,"y":7.0762114000001475},{"x":-6.547510399999965,"y":7.0762114000001475}]} />
<silkscreenpath route={[{"x":7.07621139999992,"y":6.547510400000078},{"x":7.07621139999992,"y":7.0762114000001475},{"x":6.547510399999851,"y":7.0762114000001475}]} />
<silkscreenpath route={[{"x":-7.076211400000034,"y":-6.547510399999965},{"x":-7.076211400000034,"y":-7.076211400000034},{"x":-6.547510399999965,"y":-7.076211400000034}]} />
<silkscreenpath route={[{"x":7.07621139999992,"y":-6.547510399999965},{"x":7.07621139999992,"y":-7.076211400000034},{"x":6.547510399999851,"y":-7.076211400000034}]} />
<silkscreenpath route={[{"x":-6.671411600000056,"y":-6.671411600000056},{"x":-6.671411600000056,"y":6.671411600000056},{"x":6.671411600000056,"y":6.671411600000056},{"x":6.671411600000056,"y":-6.671411600000056},{"x":-6.671411600000056,"y":-6.671411600000056}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=904f9fbb18d54370a2549693fa55e4e0&pn=C1343942",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.02006600000004255, y: -0.17500599999993938, z: -7.742096200000003 },
      }}
      {...props}
    />
  )
}