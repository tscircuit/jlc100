import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD1"],
  pin2: ["PF0-OSC_IN"],
  pin3: ["PF1-OSC_OUT"],
  pin4: ["NRST"],
  pin5: ["VDDA"],
  pin6: ["PA0"],
  pin7: ["PA1"],
  pin8: ["PA2"],
  pin9: ["PA3"],
  pin10: ["PA4"],
  pin11: ["PA5"],
  pin12: ["PA6"],
  pin13: ["PA7"],
  pin14: ["PB0"],
  pin15: ["PB1"],
  pin16: ["PB2"],
  pin17: ["VDD2"],
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
  pin31: ["BOOT0"],
  pin32: ["PB8"],
  pin33: ["EP"]
} as const

export const APM32F051K8U6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3446133"
  ]
}}
      manufacturerPartNumber="APM32F051K8U6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.4999950000000126mm" pcbY="1.7501870000000963mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.4999950000000126mm" pcbY="1.2500610000000734mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.4999950000000126mm" pcbY="0.7501889999999776mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.4999950000000126mm" pcbY="0.2500629999999546mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-2.4999950000000126mm" pcbY="-0.2498089999999138mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.4999950000000126mm" pcbY="-0.7499350000000504mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.4999950000000126mm" pcbY="-1.2498070000000325mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.4999950000000126mm" pcbY="-1.7499329999999418mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.7499330000000555mm" pcbY="-2.499994999999899mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.2498069999999188mm" pcbY="-2.499994999999899mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.7499349999999367mm" pcbY="-2.499994999999899mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.24980900000002748mm" pcbY="-2.499994999999899mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.2500629999999546mm" pcbY="-2.499994999999899mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.7501889999999776mm" pcbY="-2.499994999999899mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.250060999999846mm" pcbY="-2.499994999999899mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.750186999999869mm" pcbY="-2.499994999999899mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.4999950000000126mm" pcbY="-1.7499329999999418mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.4999950000000126mm" pcbY="-1.2498070000000325mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="2.4999950000000126mm" pcbY="-0.7499350000000504mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="2.4999950000000126mm" pcbY="-0.2498089999999138mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="2.4999950000000126mm" pcbY="0.2500629999999546mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="2.4999950000000126mm" pcbY="0.7501889999999776mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="2.4999950000000126mm" pcbY="1.2500610000000734mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="2.4999950000000126mm" pcbY="1.7501870000000963mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="1.750186999999869mm" pcbY="2.4999950000000126mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="1.250060999999846mm" pcbY="2.4999950000000126mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="0.7501889999999776mm" pcbY="2.4999950000000126mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="0.2500629999999546mm" pcbY="2.4999950000000126mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-0.24980900000002748mm" pcbY="2.4999950000000126mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-0.7499349999999367mm" pcbY="2.4999950000000126mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-1.2498069999999188mm" pcbY="2.4999950000000126mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-1.7499330000000555mm" pcbY="2.4999950000000126mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="0.00012700000002041634mm" pcbY="0.00012700000002041634mm" width="3.4999930000000004mm" height="3.4999930000000004mm" shape="rect" />
<silkscreenpath route={[{"x":2.0805139999999938,"y":2.5763474000000315},{"x":2.5762203999998974,"y":2.5763474000000315},{"x":2.5762203999998974,"y":2.0805648000000474}]} />
<silkscreenpath route={[{"x":2.0805139999999938,"y":-2.5761442000000443},{"x":2.5762203999998974,"y":-2.5761442000000443},{"x":2.5762203999998974,"y":-2.08036160000006}]} />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":2.5763474000000315},{"x":-2.5761949999999842,"y":2.5763474000000315},{"x":-2.5761949999999842,"y":2.0805648000000474}]} />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":-2.5761442000000443},{"x":-2.5761949999999842,"y":-2.5761442000000443},{"x":-2.5761949999999842,"y":-2.08036160000006}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a6db3f61f9dc48d5a1ef1bc825e1f434&pn=C3446133",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.000025400000026820635, y: 0.00010160000010728254, z: -2.0999941999999807 },
      }}
      {...props}
    />
  )
}