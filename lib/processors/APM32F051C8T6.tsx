import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["PC13"],
  pin3: ["PC14-OSC32_IN"],
  pin4: ["PC15-OSC32_OUT"],
  pin5: ["PF0-OSC_IN"],
  pin6: ["PF1-OSC_OUT"],
  pin7: ["NRST"],
  pin8: ["VSSA"],
  pin9: ["VDDA"],
  pin10: ["A0"],
  pin11: ["PA1"],
  pin12: ["PA2"],
  pin13: ["PA3"],
  pin14: ["PA4"],
  pin15: ["PA5"],
  pin16: ["PA6"],
  pin17: ["PA7"],
  pin18: ["PB0"],
  pin19: ["PB1"],
  pin20: ["PB2"],
  pin21: ["PB10"],
  pin22: ["PB11"],
  pin23: ["VSS1"],
  pin24: ["VDD1"],
  pin25: ["PB12"],
  pin26: ["PB13"],
  pin27: ["PB14"],
  pin28: ["PB15"],
  pin29: ["PA8"],
  pin30: ["PA9"],
  pin31: ["PA10"],
  pin32: ["PA11"],
  pin33: ["PA12"],
  pin34: ["PA13"],
  pin35: ["PF6"],
  pin36: ["PF7"],
  pin37: ["PA14"],
  pin38: ["PA15"],
  pin39: ["PB3"],
  pin40: ["PB4"],
  pin41: ["PB5"],
  pin42: ["PB6"],
  pin43: ["PB7"],
  pin44: ["BOOT0"],
  pin45: ["PB8"],
  pin46: ["PB9"],
  pin47: ["VSS2"],
  pin48: ["VDD2"]
} as const

export const APM32F051C8T6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2761416"
  ]
}}
      manufacturerPartNumber="APM32F051C8T6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.050030000000021mm" pcbY="2.750058000000003mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-4.050030000000021mm" pcbY="2.249932000000001mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-4.050030000000021mm" pcbY="1.7500599999999906mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-4.050030000000021mm" pcbY="1.2499340000000032mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-4.050030000000021mm" pcbY="0.7500620000000069mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-4.050030000000021mm" pcbY="0.24993600000000527mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-4.050030000000021mm" pcbY="-0.24993600000000527mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-4.050030000000021mm" pcbY="-0.7500620000000069mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-4.050030000000021mm" pcbY="-1.2499340000000032mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-4.050030000000021mm" pcbY="-1.7500599999999906mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-4.050030000000021mm" pcbY="-2.249931999999994mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-4.050030000000021mm" pcbY="-2.7500579999999957mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-2.7500579999999957mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-2.249932000000001mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.7500599999999906mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.2499340000000245mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.7500619999999856mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-0.24993599999999105mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="0.24993600000001948mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.750062000000014mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="1.2499340000000245mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="1.7500599999999906mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="2.249932000000001mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="2.750058000000024mm" pcbY="-4.0500299999999925mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="4.050030000000021mm" pcbY="-2.7500579999999957mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="4.050030000000021mm" pcbY="-2.249931999999994mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="4.050030000000021mm" pcbY="-1.7500599999999906mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="4.050030000000021mm" pcbY="-1.2499340000000032mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="4.050030000000021mm" pcbY="-0.7500620000000069mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="4.050030000000021mm" pcbY="-0.24993600000000527mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="4.050030000000021mm" pcbY="0.24993600000000527mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="4.050030000000021mm" pcbY="0.7500620000000069mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="4.050030000000021mm" pcbY="1.2499340000000032mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="4.050030000000021mm" pcbY="1.7500599999999906mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="4.050030000000021mm" pcbY="2.249932000000001mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="4.050030000000021mm" pcbY="2.750058000000003mm" width="1.7999964mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="2.750058000000024mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="2.249932000000001mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="1.7500599999999906mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="1.2499340000000245mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="0.750062000000014mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="0.24993600000001948mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="-0.24993599999999105mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="-0.7500619999999856mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="-1.2499340000000245mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="-1.7500599999999906mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-2.249932000000001mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-2.7500579999999957mm" pcbY="4.05003mm" width="0.2800096mm" height="1.7999964mm" shape="rect" />
<silkscreenpath route={[{"x":2.7500072000000273,"y":2.750007199999999},{"x":2.7500072000000273,"y":-2.750007199999999},{"x":-2.750007199999999,"y":-2.750007199999999},{"x":-2.750007199999999,"y":2.750007199999999},{"x":2.7500072000000273,"y":2.750007199999999}]} />
<silkscreenpath route={[{"x":-4.124959999999987,"y":3.4493200000000073},{"x":-3.974330670750277,"y":3.5980483558838614},{"x":-3.82496597644041,"y":3.448049999999995},{"x":-3.974330670750277,"y":3.2980516441161285},{"x":-4.124959999999987,"y":3.446779999999997}]} />
<silkscreenpath route={[{"x":-1.826260000000019,"y":2.024380000000008},{"x":-1.6873425508058801,"y":2.2135550142161406},{"x":-1.4643121891015767,"y":2.1404612288967186},{"x":-1.4643121891015767,"y":1.9057587711032795},{"x":-1.6873425508058801,"y":1.8326649857838646},{"x":-1.826260000000019,"y":2.0218400000000045}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a4b96ad857dc48c08dab3d0efdf20aec&pn=C2761416",
        rotationOffset: { x: 90, y: 90, z: 270 },
        positionOffset: { x: 0, y: 0, z: 5.750028199999995 },
      }}
      {...props}
    />
  )
}