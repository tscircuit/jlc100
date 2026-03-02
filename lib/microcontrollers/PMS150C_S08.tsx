import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["PA7"],
  pin3: ["PA6"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["PA0"],
  pin8: ["GND"]
} as const

export const PMS150C_S08 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C129127"
  ]
}}
      manufacturerPartNumber="PMS150C_S08"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.9050000000000864mm" pcbY="-2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6349999999999909mm" pcbY="-2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.6349999999999909mm" pcbY="-2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.9049999999999727mm" pcbY="-2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.9050000000000864mm" pcbY="2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.6349999999999909mm" pcbY="2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.6349999999999909mm" pcbY="2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.9049999999999727mm" pcbY="2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<silkscreenpath route={[{"x":2.499994999999899,"y":-1.4976348000000144},{"x":2.499994999999899,"y":1.4819884000000911}]} />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":-0.6349999999999909},{"x":-2.4999950000001263,"y":-1.4976348000000144}]} />
<silkscreenpath route={[{"x":-2.499360000000138,"y":0.6349999999999909},{"x":-2.499360000000138,"y":1.4819884000000911}]} />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":-1.4976348000000144},{"x":2.499994999999899,"y":-1.4976348000000144}]} />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":1.4819884000000911},{"x":2.499994999999899,"y":1.4819884000000911}]} />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":-0.6349999999999909},{"x":-2.499360000000138,"y":0.6349999999999909}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a8bf75347d3a44d9bc6814f39c22bf07&pn=C129127",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -2.814991499999974 },
      }}
      {...props}
    />
  )
}