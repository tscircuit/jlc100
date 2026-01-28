import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PC13"],
  pin2: ["PC14-OSC32_IN"],
  pin3: ["PC15-OSC32_OUT"],
  pin4: ["VBAT"],
  pin5: ["VREF_POS"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["PF0-OSC_IN"],
  pin9: ["PF1-OSC_OUT"],
  pin10: ["NRST"],
  pin11: ["PA0"],
  pin12: ["PA1"],
  pin13: ["PA2"],
  pin14: ["PA3"],
  pin15: ["PA4"],
  pin16: ["PA5"],
  pin17: ["PA6"],
  pin18: ["PA7"],
  pin19: ["PB0"],
  pin20: ["PB1"],
  pin21: ["PB2"],
  pin22: ["PB10"],
  pin23: ["PB11"],
  pin24: ["PB12"],
  pin25: ["PB13"],
  pin26: ["PB14"],
  pin27: ["PB15"],
  pin28: ["PA8"],
  pin29: ["PA9"],
  pin30: ["PC6"],
  pin31: ["PC7"],
  pin32: ["PA10"],
  pin33: ["pin33"],
  pin34: ["pin34"],
  pin35: ["PA13"],
  pin36: ["PA14-BOOT0"],
  pin37: ["PA15"],
  pin38: ["PD0"],
  pin39: ["PD1"],
  pin40: ["PD2"],
  pin41: ["PD3"],
  pin42: ["PB3"],
  pin43: ["PB4"],
  pin44: ["PB5"],
  pin45: ["PB6"],
  pin46: ["PB7"],
  pin47: ["PB8"],
  pin48: ["PB9"]
} as const

export const STM32G030C8T6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C529329"
  ]
}}
      manufacturerPartNumber="STM32G030C8T6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.7500579999999957mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.249932000000001mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.7500599999999906mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.249933999999996mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.7500619999999856mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.24993599999999105mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.24993599999999105mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.7500619999999998mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.249933999999996mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.7500599999999906mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.249932000000001mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.75005800000001mm" pcbY="-4.109974000000008mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="4.109973999999994mm" pcbY="-2.75005800000001mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="4.109973999999994mm" pcbY="-2.249932000000001mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="4.109973999999994mm" pcbY="-1.7500600000000048mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="4.109973999999994mm" pcbY="-1.2499340000000103mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="4.109973999999994mm" pcbY="-0.7500619999999998mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="4.109973999999994mm" pcbY="-0.24993600000000527mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="4.109973999999994mm" pcbY="0.24993599999997684mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="4.109973999999994mm" pcbY="0.7500619999999856mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="4.109973999999994mm" pcbY="1.249933999999996mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="4.109973999999994mm" pcbY="1.7500599999999764mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="4.109973999999994mm" pcbY="2.249931999999987mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="4.109973999999994mm" pcbY="2.7500579999999957mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="2.75005800000001mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="2.249932000000001mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="1.7500599999999906mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="1.249933999999996mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="0.7500619999999998mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="0.24993599999999105mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-0.24993599999999105mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-0.7500619999999856mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-1.249933999999996mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-1.7500599999999906mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="-2.249932000000001mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="-2.7500579999999957mm" pcbY="4.109973999999994mm" width="0.2800096mm" height="1.6199866mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="-4.109973999999994mm" pcbY="2.7500579999999957mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="-4.109973999999994mm" pcbY="2.249931999999987mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="-4.109973999999994mm" pcbY="1.7500599999999764mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="-4.109973999999994mm" pcbY="1.249933999999996mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="-4.109973999999994mm" pcbY="0.7500619999999856mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="-4.109973999999994mm" pcbY="0.24993599999997684mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-4.109973999999994mm" pcbY="-0.24993600000000527mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-4.109973999999994mm" pcbY="-0.7500619999999998mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-4.109973999999994mm" pcbY="-1.2499340000000103mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="-4.109973999999994mm" pcbY="-1.7500600000000048mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-4.109973999999994mm" pcbY="-2.249932000000001mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-4.109973999999994mm" pcbY="-2.75005800000001mm" width="1.6199866mm" height="0.2800096mm" shape="rect" />
<silkscreenpath route={[{"x":-3.042386599999986,"y":-3.5761930000000035},{"x":-3.5761929999999893,"y":-3.5761930000000035},{"x":-3.5761929999999893,"y":-3.0423866000000004}]} />
<silkscreenpath route={[{"x":-3.042386599999986,"y":3.5761929999999893},{"x":-3.5761929999999893,"y":3.5761929999999893},{"x":-3.5761929999999893,"y":3.042386599999986}]} />
<silkscreenpath route={[{"x":3.0423866000000004,"y":3.5761929999999893},{"x":3.5761930000000035,"y":3.5761929999999893},{"x":3.5761930000000035,"y":3.042386599999986}]} />
<silkscreenpath route={[{"x":3.0423866000000004,"y":-3.5761930000000035},{"x":3.5761930000000035,"y":-3.5761930000000035},{"x":3.5761930000000035,"y":-3.0423866000000004}]} />
<silkscreenpath route={[{"x":-2.995193399999991,"y":-2.995193400000005},{"x":-2.995193399999991,"y":2.995193399999991},{"x":2.995193400000005,"y":2.995193399999991},{"x":2.995193400000005,"y":-2.995193400000005},{"x":-2.995193399999991,"y":-2.995193400000005}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=6c74d516f6f64dbba6d7afeba13c6fce&pn=C529329",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.4210854715202004e-14, z: -4.119967300000003 },
      }}
      {...props}
    />
  )
}