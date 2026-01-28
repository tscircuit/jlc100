import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["BOOT0"],
  pin2: ["pin2"],
  pin3: ["pin3"],
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
  pin14: ["PB1"],
  pin15: ["VSS"],
  pin16: ["VDD"],
  pin17: ["PA9"],
  pin18: ["PA10"],
  pin19: ["pin19"],
  pin20: ["pin20"]
} as const

export const STM32F030F4P6TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C89040"
  ]
}}
      manufacturerPartNumber="STM32F030F4P6TR"
      footprint={<footprint>
        <smtpad portHints={["pin5"]} pcbX="-0.3251199999999699mm" pcbY="-3.0008830000000444mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.32359600000006594mm" pcbY="-3.0008830000000444mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.9748520000000553mm" pcbY="-3.0008830000000444mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.6248380000001816mm" pcbY="-3.0008830000000444mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-2.274823999999967mm" pcbY="2.9960570000000644mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.274823999999967mm" pcbY="-3.0008830000000444mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.6250919999998814mm" pcbY="-3.0008830000000444mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.9748519999999417mm" pcbY="-3.0008830000000444mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.2750780000001214mm" pcbY="3.001137000000085mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.625091999999995mm" pcbY="3.001137000000085mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.9751060000000962mm" pcbY="3.001137000000085mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.32512000000008356mm" pcbY="3.001137000000085mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-0.32486599999992904mm" pcbY="3.001137000000085mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.9748519999999417mm" pcbY="3.001137000000085mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.2748240000000806mm" pcbY="-3.0008830000000444mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.6250919999998814mm" pcbY="2.9960570000000644mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.9250639999999066mm" pcbY="-3.001137000000085mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="2.9248099999999795mm" pcbY="-3.0008830000000444mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.9250640000000203mm" pcbY="3.001137000000085mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-2.9250639999999066mm" pcbY="3.001137000000085mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<silkscreenpath route={[{"x":3.3106360000001587,"y":-1.9721829999999727},{"x":-3.2908239999999296,"y":-1.9721829999999727}]} />
<silkscreenpath route={[{"x":3.3106360000001587,"y":1.9140169999999443},{"x":-3.3187639999999874,"y":1.9140169999999443}]} />
<silkscreenpath route={[{"x":3.3106360000001587,"y":-1.9721829999999727},{"x":3.3106360000001587,"y":1.9140169999999443}]} />
<silkscreenpath route={[{"x":-3.3187639999999874,"y":-1.9721829999999727},{"x":-3.3187639999999874,"y":-0.6005830000000287}]} />
<silkscreenpath route={[{"x":-3.3187639999999874,"y":0.5170170000000098},{"x":-3.3187639999999874,"y":1.9140169999999443}]} />
<silkscreenpath route={[{"x":-3.3187639999999874,"y":0.5170170000000098},{"x":-3.3187639999999874,"y":-0.575208400000065}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=249766f0d87f42aa9cac81470f61c365&pn=C89040",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 1.1368683772161603e-13, y: 0, z: -2.94789700000008 },
      }}
      {...props}
    />
  )
}