import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD2"],
  pin2: ["PC14-OSC32_IN"],
  pin3: ["PC15-OSC32_OUT"],
  pin4: ["NRST"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["PA1"],
  pin8: ["PA2"],
  pin9: ["PA3"],
  pin10: ["PA4"],
  pin11: ["PA5"],
  pin12: ["PA6"],
  pin13: ["PA7"],
  pin14: ["PB0"],
  pin15: ["PB1"],
  pin16: ["VSS2"],
  pin17: ["VDD1"],
  pin18: ["PA8"],
  pin19: ["PA9"],
  pin20: ["PA10"],
  pin21: ["PA11"],
  pin22: ["PA12"],
  pin23: ["PA13"],
  pin24: ["PA14"],
  pin25: ["PA15"],
  pin26: ["PB3"],
  pin27: ["PB4"],
  pin28: ["PB5"],
  pin29: ["PB6"],
  pin30: ["PB7"],
  pin31: ["pin31"],
  pin32: ["VSS1"],
  pin33: ["EP"]
} as const

export const STM32L432KBU6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C94784"
  ]
}}
      manufacturerPartNumber="STM32L432KBU6"
      footprint={<footprint>
        <smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" width="3.450082mm" height="3.450082mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-1.7500600000000759mm" pcbY="2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-1.2499339999999393mm" pcbY="2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-0.7500619999999572mm" pcbY="2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-0.2499359999999342mm" pcbY="2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="0.2499359999999342mm" pcbY="2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="0.7500619999999572mm" pcbY="2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="1.2499339999999393mm" pcbY="2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="1.7500600000000759mm" pcbY="2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="2.4899619999999913mm" pcbY="1.7500599999999622mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="2.4899619999999913mm" pcbY="1.2499339999999393mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="2.4899619999999913mm" pcbY="0.7500619999999572mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="2.4899619999999913mm" pcbY="0.2499360000000479mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="2.4899619999999913mm" pcbY="-0.2499360000000479mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="2.4899619999999913mm" pcbY="-0.7500619999999572mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.4899619999999913mm" pcbY="-1.2499339999999393mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.4899619999999913mm" pcbY="-1.7500599999999622mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.749806000000035mm" pcbY="-2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.2499339999999393mm" pcbY="-2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.7498080000001437mm" pcbY="-2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.2499359999999342mm" pcbY="-2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.25018999999997504mm" pcbY="-2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.7500619999999572mm" pcbY="-2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.25018799999998mm" pcbY="-2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.7500600000000759mm" pcbY="-2.4899619999999913mm" width="0.2800096mm" height="0.7500112mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.4899619999999913mm" pcbY="-1.7498059999999214mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.4899619999999913mm" pcbY="-1.2499339999999393mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.4899619999999913mm" pcbY="-0.7498080000001437mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-2.4899619999999913mm" pcbY="-0.2499360000000479mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.4899619999999913mm" pcbY="0.25019000000008873mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.4899619999999913mm" pcbY="0.7500619999999572mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.4899619999999913mm" pcbY="1.2501880000000938mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.4899619999999913mm" pcbY="1.7500599999999622mm" width="0.7500112mm" height="0.2800096mm" shape="rect" />
<silkscreenpath route={[{"x":2.5399999999999636,"y":2.5400000000000773},{"x":2.5399999999999636,"y":2.1592540000000326}]} />
<silkscreenpath route={[{"x":2.5399999999999636,"y":-2.1592540000000326},{"x":2.5399999999999636,"y":-2.5400000000000773},{"x":2.1592540000001463,"y":-2.5400000000000773}]} />
<silkscreenpath route={[{"x":-2.158999999999992,"y":-2.5400000000000773},{"x":-2.5399999999999636,"y":-2.5400000000000773},{"x":-2.5399999999999636,"y":-2.1592540000000326}]} />
<silkscreenpath route={[{"x":-2.5399999999999636,"y":2.158999999999992},{"x":-2.5399999999999636,"y":2.5400000000000773}]} />
<silkscreenpath route={[{"x":-2.5399999999999636,"y":2.5400000000000773},{"x":-2.1592540000001463,"y":2.5400000000000773}]} />
<silkscreenpath route={[{"x":2.1592540000001463,"y":2.5400000000000773},{"x":2.5399999999999636,"y":2.5400000000000773}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=3d5b26a697094f4e9d801397c2dfddb7&pn=C94784",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -0.0009906000000228232, z: -2.0649676 },
      }}
      {...props}
    />
  )
}