import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PTE0"],
  pin2: ["PTE1"],
  pin3: ["PTE16"],
  pin4: ["PTE17"],
  pin5: ["PTE18"],
  pin6: ["PTE19"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["PTA0"],
  pin11: ["PTA1"],
  pin12: ["PTA2"],
  pin13: ["PTA3"],
  pin14: ["PTA4"],
  pin15: ["VDD"],
  pin16: ["VSS"],
  pin17: ["PTA18"],
  pin18: ["PTA19"],
  pin19: ["PTA20"],
  pin20: ["pin20"],
  pin21: ["PTB1"],
  pin22: ["pin22"],
  pin23: ["PTC2"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["PTC7"],
  pin29: ["pin29"],
  pin30: ["PTD5"],
  pin31: ["pin31"],
  pin32: ["PTD7"],
  pin33: ["EP"]
} as const

export const MKL17Z64VFM4 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C513828"
  ]
}}
      manufacturerPartNumber="MKL17Z64VFM4"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.477516000000037mm" pcbY="1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.477516000000037mm" pcbY="1.249934000000053mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.477516000000037mm" pcbY="0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.477516000000037mm" pcbY="0.2499360000000479mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-2.477516000000037mm" pcbY="-0.2499359999999342mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.477516000000037mm" pcbY="-0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.477516000000037mm" pcbY="-1.2499339999999393mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.477516000000037mm" pcbY="-1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.7500600000000759mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.249934000000053mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.7500619999999572mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.2499359999999342mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.24993599999982052mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.7500619999999572mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.2499339999999393mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.7500599999999622mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.477516000000037mm" pcbY="-1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.477516000000037mm" pcbY="-1.2499339999999393mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="2.477516000000037mm" pcbY="-0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="2.477516000000037mm" pcbY="-0.2499359999999342mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="2.477516000000037mm" pcbY="0.2499360000000479mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="2.477516000000037mm" pcbY="0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="2.477516000000037mm" pcbY="1.249934000000053mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="2.477516000000037mm" pcbY="1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="1.7500599999999622mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="1.2499339999999393mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="0.7500619999999572mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="0.24993599999982052mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-0.2499359999999342mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-0.7500619999999572mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-1.249934000000053mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-1.7500600000000759mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" width="3.7999924mm" height="3.7999924mm" shape="rect" />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":2.5761949999999842},{"x":-2.5761949999999842,"y":2.0804886000000806}]} />
<silkscreenpath route={[{"x":2.080488599999967,"y":2.5761949999999842},{"x":2.5761949999999842,"y":2.5761949999999842},{"x":2.5761949999999842,"y":2.0804886000000806}]} />
<silkscreenpath route={[{"x":2.080488599999967,"y":-2.5761949999998706},{"x":2.5761949999999842,"y":-2.5761949999998706},{"x":2.5761949999999842,"y":-2.080488599999967}]} />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":2.5761949999999842},{"x":-2.5761949999999842,"y":2.5761949999999842},{"x":-2.5761949999999842,"y":2.0804886000000806}]} />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":-2.5761949999998706},{"x":-2.5761949999999842,"y":-2.5761949999998706},{"x":-2.5761949999999842,"y":-2.080488599999967}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=8f04bea36b684c6088784cbd78ede88c&pn=C513828",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -2.002521700000057 },
      }}
      {...props}
    />
  )
}