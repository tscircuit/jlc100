import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["pin2"],
  pin3: ["PA3"],
  pin4: ["pin4"],
  pin5: ["PA13-SWD"],
  pin6: ["pin6"],
  pin7: ["PA1"],
  pin8: ["GND"]
} as const

export const PY32F002AL15S6TU = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5292060"
  ]
}}
      manufacturerPartNumber="PY32F002AL15S6TU"
      footprint={<footprint>
        <smtpad portHints={["pin5"]} pcbX="1.9050000000000864mm" pcbY="2.682493999999906mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.6350000000001046mm" pcbY="2.682493999999906mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.6349999999998772mm" pcbY="2.682493999999906mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.9049999999999727mm" pcbY="2.682493999999906mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.9050000000000864mm" pcbY="-2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.6350000000001046mm" pcbY="-2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6349999999998772mm" pcbY="-2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.9049999999999727mm" pcbY="-2.6824940000000197mm" width="0.6299962mm" height="1.864995mm" shape="rect" />
<silkscreenpath route={[{"x":-2.576245800000038,"y":-1.5213076},{"x":-2.576245800000038,"y":1.5215107999998736},{"x":2.5761442000000443,"y":1.5215107999998736},{"x":2.5761442000000443,"y":-1.5213076},{"x":-2.576245800000038,"y":-1.5213076}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a8bf75347d3a44d9bc6814f39c22bf07&pn=C5292060",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00005080000016732811, y: 0.00010159999987990886, z: -2.814991499999917 },
      }}
      {...props}
    />
  )
}